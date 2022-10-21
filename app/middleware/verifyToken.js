const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = {
    async verifyToken(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];

            const tokenPayload = jwt.verify(
                token,
                process.env.JWT_SIGNATURE_KEY || "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225"
            );

            req.user = await Users.findByPk(tokenPayload.id);
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    }

}