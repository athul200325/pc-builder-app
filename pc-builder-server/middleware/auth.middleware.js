import jwt from 'jsonwebtoken';

export const varifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).send({
            success: false,
            error: 'Authorization header missing'
        });
    }

    const token = authHeader.split(" ")[1];

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err)
        return res.status(401).json({ message: "Invalid or expired token" });
    
        req.user = decoded; // attach user info
        next();
    });
}