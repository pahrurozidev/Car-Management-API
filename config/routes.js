const express = require('express');
const controllers = require('../app/controllers');
const { verifyToken } = require('../app/middleware/verifyToken');
const { authorize } = require('../app/middleware/authorize');
const router = express.Router();

const { carList, show, create, update, destroy } = controllers.api.v1.CarController;
const { userList, register, login, whoAmI } = controllers.api.v1.UserController;

// =============
// Users
// =============

// register [member]
router.post('/api/v1/register', register);
// login [member, admin, super admin]
router.post('/api/v1/login', login);
// get all users
router.get('/api/v1/users', userList)
// detect currently user [member, admin, super admin]
router.get('/api/v1/user', verifyToken, whoAmI);
// add admin [super admin]
router.post('/api/v1/admin', authorize, register);

// =============
// Cars
// =============

router.get('/api/v1/cars', carList);
router.get('/api/v1/cars/:id', show)
router.post('/api/v1/cars', create)
router.put('/api/v1/cars/:id', update)
router.delete('/api/v1/cars/:id', destroy)

module.exports = { router };