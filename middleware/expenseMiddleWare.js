const jwt = require("jsonwebtoken");
const JWT_KEY = 'c5e2d8e5d76b3a0e8b6f4f62a1d8b2ff7d0f0b41c2b7f33b9c4598b9c288d6a2';
module.exports = (req, res, next) => {
    try{
        const token = req.headers.authentication.split(" ")[1];
        jwt.verify(token,JWT_KEY);
        // req.userData={id:localStorage.getItem('Id').split(' ')[1]};
        next();
    }catch(error){
        res.status(401).json({
            message:'Auth Failed',
        })
    }
};
