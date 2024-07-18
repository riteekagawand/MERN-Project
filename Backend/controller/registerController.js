import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/Register.js';

const registerUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ msg: 'Email and password are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ msg: 'Invalid email format' });
  }

  try {
    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Create a new user instance with hashed password
    user = new User({ email, password: hashedPassword });

    // Save the user to the database
    await user.save();

    // Generate JWT token
    const payload = {
      user: {
        id: user._id,
        email: user.email // Assuming your user model has _id field
      },
    };

    // Sign the token using JWT_SECRET from environment variables
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: '5m' }, 
      (err, token) => {
        if (err) throw err;
        res.status(201).json({ user, token }); // Send the JWT as a response
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

export default registerUser;
