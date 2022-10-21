const userService = require("../../../services/userService")

module.exports = {
    userList(req, res) {
        userService
            .list()
            .then(({ data, count }) => {
                res.status(200).json({
                    status: 'OK',
                    data: { users: data },
                    meta: { total: count },
                })
            })
            .catch((err) => {
                res.status(400).json({
                    status: 'FAIL',
                    message: err.message
                })
            })
    },

    register(req, res) {
        userService
            .register(req.body, req.user)
            .then((user) => {
                res.status(201).json({
                    status: 'OK',
                    message: 'Register User Successfully',
                    data: user,
                })
            })
            .catch((err) => {
                res.status(422).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    login(req, res) {
        userService
            .login(req, res)
            .then((token) => {
                res.status(201).json({
                    token
                })
            })
            .catch((err) => {
                res.status(404).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    async whoAmI(req, res) {
        res.status(200).json(req.user);
    }

}