const Pun = require('../models/punModel');
const User = require('../models/userModel');

const getPuns = async (req, res) => {
  const puns = await Pun.find({});
  res.json(puns);
};

const createPun = async (req, res) => {
  try {
    let { content } = req.body;
    if (!content)
      return res.status(400).json({ msg: 'Please fill all fields.' });
    const user = await User.findById(req.user);

    const newPun = new Pun({
      content,
      userId: req.user,
      userName: user.displayName,
    });

    const savedPun = await newPun.save();
    res.json(savedPun);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPun = createPun;
exports.getPuns = getPuns;
