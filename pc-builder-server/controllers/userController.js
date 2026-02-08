import db from "../config/db.js";

// Get All Usrers
export const getAllUsers = async (req, res) => {
  try {
    const users = await db.query('SELECT * FROM users');
    if (users.length === 0) {
      return res.status(404).send({
        success: false,
        message: 'No users found'
      });
    }
    res.status(200).send({
      success: true,
      message: 'Users fetched successfully',
      data: users[0]
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: 'Failed to fetch users',
      details: error.message
    });
  }
}

// Get User by ID
export const getUserById = async (req, res) => {
    try {
      const userId = req.params.id;
      if (!userId) {
        return res.status(404).send({
          success: false,
          error: 'User ID is required'
        });
      }
      const data = await db.query('SELECT * FROM users WHERE id=?', [userId]);
      if (data[0].length === 0) {
        return res.status(404).send({
          success: false,
          error: 'User not found'
        });
      }else {
        res.status(200).send({
          success: true,
          message: 'User fetched successfully',
          data: data[0]
        });
      }
    } catch (error) {
      res.status(500).send({
        success: false,
        error: 'Failed to fetch user',
        error
      });
    }
}