import bcrypt from 'bcryptjs';
import db from '../config/db.js';
import jwt from 'jsonwebtoken';

// Register New User
export const registerUser = async (req, res) => {
  try {
    const {username, email, password, name, profilePic, address, phoneNum, role} = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    if (!username || !email || !name || !hashedPassword) {
      return res.status(400).send({
        success: false,
        error: 'Missing required fields: username, email, name, or password'
      });
    }

    const data = await db.query(`INSERT INTO users (username, email, password, name, profilePic, address, phoneNum, role) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [username, email, hashedPassword, name, profilePic || null, address || null, phoneNum || null, role || 'user']
    );
    if (!data){
      return res.status(500).send({
        success: false,
        error: 'User creation failed'
      });
    } else {
      res.status(201).send({
        success: true,
        message: 'User created successfully'
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      error: 'Failed to create user',
      details: error.message
    });
  }
}

// Login User
export const loginUser = async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).send({
          success: false,
          error: 'Email and password are required'
        });
      }

      const data = await db.query('SELECT * FROM users WHERE email=?', [email]);
        if (data[0].length === 0) {
            return res.status(400).send({
                success: false,
                error: 'Invalid credentials'
            });
        }
        const user = data[0][0]; // Get the first user from the result array
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) return res.status(400).send({
            success: false,
            error: 'Invalid credentials'
        });

        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: '1h' }
        )
        res.json({
            message: "Login successful",
            token,
        });

    } catch (error) {
      res.status(500).send({
        success: false,
        error: 'Failed to login user',
        details: error.message
      });
    }

}