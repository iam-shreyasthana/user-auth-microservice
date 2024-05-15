const User = require('../models/User');

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const updates = req.body;
    const user = await User.findByIdAndUpdate(req.userId, updates, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.setProfilePrivacy = async (req, res) => {
  try {
    const { isPublic } = req.body;
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    user.isPublic = isPublic;
    await user.save();
    res.status(200).json({ message: 'Profile privacy updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.listPublicProfiles = async (req, res) => {
  try {
    const users = await User.find({ isPublic: true });
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.viewProfile = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.isPublic || req.userRole === 'admin' || req.userId === user._id.toString()) {
      res.status(200).json(user);
    } else {
      res.status(403).json({ message: 'Access forbidden' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
