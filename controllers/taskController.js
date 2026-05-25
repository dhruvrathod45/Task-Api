const Task = require('../models/Task');

// GET all tasks for logged-in user
const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json({ count: tasks.length, tasks });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// CREATE a new task
const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;

    if (!title) {
      return res.status(400).json({ msg: 'Title is required' });
    }

    const task = await Task.create({
      title,
      description: description || '',
      status: status || 'pending',
      userId: req.user.userId
    });

    res.status(201).json({ msg: 'Task created', task });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// UPDATE a task
const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!task) return res.status(404).json({ msg: 'Task not found' });

    res.json({ msg: 'Task updated', task });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

// DELETE a task
const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) return res.status(404).json({ msg: 'Task not found' });

    res.json({ msg: 'Task deleted successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = { getTasks, createTask, updateTask, deleteTask };
