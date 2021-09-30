import express from 'express';

import {createUser, getUser, readUser, deleteUser, updateUser} from '../controllers/users.js';


const router = express.Router();


//all routes in here start with /users
router.get('/', getUser);

//create user
router.post('/', createUser);

//read user
router.get('/:id', readUser)

//delete user
router.delete('/:id', deleteUser);

//update users - partial modification
router.patch('/:id', updateUser);

export default router;