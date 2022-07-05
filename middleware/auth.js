const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")){
    // Get token from header
    try{
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Get User from token
      req.user = await User.findById(decoded.id).select("-password");
      next();
    } catch(error){
      console.log(error)
      res.status(401)
      throw new Error("Not authorized")
    }
  }

  if (!token) {
    res.status(401)
    throw new Error("Not authorized, token not found")
  }
}

module.exports = { protect }