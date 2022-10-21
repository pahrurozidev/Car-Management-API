const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require("../repositories/userRepository")

module.exports = {
    async list() {
        try {
            const users = await userRepository.findAll();
            const userCount = await userRepository.getTotalUser();

            return {
                data: users,
                count: userCount
            }
        } catch (error) {
            throw (error);
        }
    },

    async register(requestBody, user) {
        const { username, email, password, confPassword, role = !user ? 'Member' : 'Admin' } = requestBody;

        if (password !== confPassword) {
            throw { message: 'Confirm Password Does Not Match!' }
        }

        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        return userRepository.create({
            username: username,
            email: email,
            password: hashPassword,
            role: role,
        });
    },

    async login(req, res) {
        try {
            const user = await userRepository.findCarByEmail(req.body.email)

            const { id, username, email, password } = user;

            const match = await bcrypt.compare(req.body.password, password);
            if (!match) {
                throw { message: 'Wrong Password!' }
            }

            const accessToken = jwt.sign(
                { id, username, email },
                "jsfgfjguwrg8783wgbjs849h2fu3cnsvh8wyr8fhwfvi2g225",
                { expiresIn: '5m' });

            const refreshToken = jwt.sign(
                { id, username, email },
                "825y8i3hnfjmsbv7gwajbl7fobqrjfvbs7gbfj2q3bgh8f42",
                { expiresIn: '1d' })

            await userRepository.UpdateToken(refreshToken, id);

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                maxAge: 24 * 60 * 60 * 1000
            })

            return accessToken;

        } catch (error) {
            throw { message: 'Email Not Found!' }
        }
    },
}