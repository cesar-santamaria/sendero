const router = require('express').Router();
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

/* 
Desc: Register new user
Route: POST /api/users/
access: Public
 */
router.post('/register', async (req, res) => {
  const { firstName, lastName, email, password } = req.body

  if (!firstName || !lastName || !email || !password) {
    res.status(400)
    throw new Error('Please add required fields')
  }

  // check if user already exists
  const userExists = await User.findOne({ email })
  if (userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  // Create user
  const user = await User.create({
    firstName,
    lastName,
    email,
    password: hashedPassword,
  })

  if (user) {
    res.status(201).json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(200)
    throw new Error('Invalid user data')
  }
})

/* 
Desc: Authenticate user
Route: POST /api/users/login
access: Public
 */
router.post('/login', async (req, res) => {
  const {email, password} = req.body;

  // check for user email
  const user = await User.findOne({email});

  if (user && (await bcrypt.compare(password, user.password))){
    res.json({
      _id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid credentials')
  }
})

/* 
Desc: Get user page
Route: GET /api/users/me
access: Private
*/

const { protect } = require('../middleware/auth')
router.get('/me', protect, async (req, res) => {
  
  
  res.status(200).json(req.user)
})


// Generate JWT Token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  })
}

module.exports = router
