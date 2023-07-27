const req = require("express/lib/request");
const { sequelize } = require("../models");
const db = require("../models");
const User = db.users;

//create a user 
exports.createUser = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    // Create a user
    const user = {
      firstname: req.body.firstName,
      lastname: req.body.lastName,
      dob: req.body.dob,
      address: req.body.address
    };
    // Save user in the database
    User.create(user)
      .then(data => {
        res.send({
          message : 'success',
          data});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the user."
        });
      });
  };

//get user by Id
exports.getUserById = (req, res) => {
    User.findByPk(req.params.id)
    .then(data => {
      if (!data) {
        res.status(404).json({
          status :'fail',
          message : 'User not found'
        });
      } else {
        res.send({
          message : 'success',
          data});
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id
      });
    });
  };

  //update user by Id
// 
exports.updateUser = (req, res) => {
    const id = req.params.id;
    const { firstName, lastName, dob, address } = req.body;
  
    User.update(
      {
        firstname: firstName,
        lastname: lastName,
        dob: dob,
        address: address,
      },
      {
        where: { id:id },
      }
      
    )
    
      .then(num => {
        
        if (num[0] === 1) {
          res.send({
            message: "User was updated successfully.",
          });
        } else {
          res.status(404).send({
            message: `User with id:${id} not found.`,
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id,
        });
      });
  };

//delete user
//soft delete user
exports.softDeleteUser = async(req, res) => {
    const id = req.params.id;
    await User.destroy({
        where: { id: id }
      })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was soft deleted successfully!"
          });
        } else {
          res.status(404).send({
            message:`User with id:${id} not found.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };
  
//hard deletion
exports.hardDeleteUser = (req, res) => {
    const id = req.params.id;
    User.destroy({
        where: { id: id },
        force:true
      })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "User was hard deleted successfully!"
          });
        } else {
          res.status(404).send({
            message:`User with id:${id} not found.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete user with id=" + id
        });
      });
  };