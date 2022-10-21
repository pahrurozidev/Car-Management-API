const { Cars } = require('../models');

module.exports = {
    findAll() {
        return Cars.findAll();
    },

    find(id) {
        return Cars.findByPk(id);
    },

    create(createArgs) {
        return Cars.create(createArgs);
    },

    update(id, updateArgs) {
        return Cars.update(updateArgs, {
            where: {
                id,
            },
        });
    },

    delete(id) {
        return Cars.destroy({
            where: {
                id
            }
        });
    },

    getTotalCar() {
        return Cars.count();
    }
}