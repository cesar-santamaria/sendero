// const User = require('../models/User');
const router = require('express').Router();
// const bcrypt = require('bcrypt');

// GET users
router.get('/', (req, res) => {
  res.status(200).json({message: "Get users"})
})

module.exports = router