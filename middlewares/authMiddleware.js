const jwt = require('jsonwebtoken');

// middleware is begin used here to secure the routes by adding authorization to the webpage
module.exports = async (req, res, next) => {
    try {
        // all the data related to token is present in header section and other data is in body section
        const token = req.headers['authorization'].split(' ')[1];
        jwt.verify(token, process.env.JWT_SECRET, (err, decode) => {
            if (err) {
                return res.status(200).send({
                    message: 'Auth Failed',
                    success: false
                });
            } else {
                req.body.userId = decode.id;
                next();
            }
        });
    } catch (err) {
        console.log(err);
        res.status(401).send({
            message: 'Auth failed',
            success: false
        });
    }
}