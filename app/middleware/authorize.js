const jwt = require('jsonwebtoken');
const { Users } = require('../models');

module.exports = {
    async authorize(req, res, next) {
        try {
            const bearerToken = req.headers.authorization;
            const token = bearerToken.split("Bearer ")[1];

            const tokenPayload = jwt.verify(
                token,
                process.env.JWT_SIGNATURE_KEY || "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225"
            );

            const user = await Users.findByPk(tokenPayload.id);

            if (user.role === 'Member') {
                return res.status(401).json({
                    message: "Unauthorized",
                })
            }

            req.user = user;
            next();
        } catch (err) {
            console.error(err);
            res.status(401).json({
                message: "Unauthorized",
            });
        }
    }

}