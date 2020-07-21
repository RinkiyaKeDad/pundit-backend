const Pun = require('../models/punModel');

const getPuns = async (req, res) => {
  const puns = await Pun.find({});
  res.json(puns);
};

const createPun = async (req, res) => {
  try {
    let { content } = req.body;
    if (!content)
      return res.status(400).json({ msg: 'Not all fields have been entered.' });

    const newPun = new Pun({
      content,
      userId: req.user,
    });

    const savedPun = await newPun.save();
    res.json(savedPun);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createPun = createPun;
exports.getPuns = getPuns;
