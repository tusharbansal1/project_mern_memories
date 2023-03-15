const jwt = require('jsonwebtoken');
const dotenv = require('dotenv')
dotenv.config();
const jwtSecret = process.env.SECRETKEY ;

exports.jwtSign = (user) => {
    return jwt.sign({ user, exp: Math.floor(Date.now() / 1000) + (60 * 60) * 24 * 30 }, jwtSecret);
}
exports.jwtVerify = (token) => {
    try {

        let decode = jwt.verify(token, jwtSecret)
        return decode && decode.user
    } catch (err) {
        return false
    }
}