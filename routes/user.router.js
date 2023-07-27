//loading modules
const express = require('express');
const controller = require("../controllers/user.controller");
const validation = require('../middlewares/validation');
const { userSchema } = require('../validations/user.validation');

//creating router
const router = express.Router();

//routes

//get user by id
router.get("/:id",controller.getUserById);

//create new user
router.post("/",validation(userSchema.createUser), controller.createUser);

//update a user
router.patch("/:id",controller.updateUser);

//delete a user
//soft delete
router.delete("/:id",controller.softDeleteUser);
//hard delete
router.delete("/hdelete/:id",controller.hardDeleteUser);

module.exports = router;