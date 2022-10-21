const carService = require("../../../services/carService")

module.exports = {
    carList(req, res) {
        carService
            .list()
            .then(({ data, count }) => {
                res.status(200).json({
                    status: 'OK',
                    data: { cars: data },
                    meta: { total: count },
                })
            })
            .catch((err) => {
                res.status(400).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    create(req, res) {
        carService
            .create(req.body)
            .then((car) => {
                res.status(201).json({
                    status: 'OK',
                    data: car,
                });
            })
            .catch((err) => {
                res.status(422).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    update(req, res) {
        carService
            .update(req.params.id, req.body)
            .then(() => {
                res.status(200).json({
                    status: 'OK',
                    message: 'Car Successfully Updated'
                })
            })
            .catch((err) => {
                res.status(422).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    show(req, res) {
        carService
            .get(req.params.id)
            .then((car) => {
                res.status(200).json({
                    status: 'OK',
                    data: car,
                })
            })
            .catch((err) => {
                res.status(422).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    },

    destroy(req, res) {
        carService
            .delete(req.params.id)
            .then(() => {
                return res.status(200).json({
                    status: 'OK',
                    message: 'Car Successfully Deleted'
                });
            })
            .catch((err) => {
                return res.status(422).json({
                    status: 'FAIL',
                    message: err.message,
                })
            })
    }
}