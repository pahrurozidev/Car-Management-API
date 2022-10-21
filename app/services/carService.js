const carRepository = require("../repositories/carRepository");

module.exports = {
    async list() {
        try {
            const cars = await carRepository.findAll();
            const carCount = await carRepository.getTotalCar();

            return {
                data: cars,
                count: carCount,
            }
        } catch (error) {
            throw error;
        }
    },

    get(id) {
        return carRepository.find(id);
    },

    create(requestBody) {
        return carRepository.create(requestBody);
    },

    update(id, requestBody) {
        return carRepository.update(id, requestBody);
    },

    delete(id) {
        return carRepository.delete(id);
    },
};