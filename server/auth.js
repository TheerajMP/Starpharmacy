const jwt = require('jsonwebtoken')

 const auth = (req, res, next) => {
    try{
        const token = req.header('x-auth-token');
        // console.log(token);
        if(!token)
            return res.status(401).json({msg: 'No authentication token, authorization denied.'});
        const JWT_SECRET = 'sharmitha';
        const verifiedToken = jwt.verify(token, JWT_SECRET);
        if(!verifiedToken)
            return res.status(401).json({msg: 'Token verification failed, authorization denied.'});
        req.user = verifiedToken.id;
        next();


    }catch (error) {
        res.status(409).json({ message: error});
    }


}

module.exports = auth