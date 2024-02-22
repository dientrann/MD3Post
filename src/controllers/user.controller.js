import { userModel } from '../models/user.model.js'
import { postModel } from '../models/post.model.js';

export const userController = {
    create: async (req, res) => {
        try {
            let newUser = req.body;
            let result = await userModel.create(newUser)
            res.status(500).send({
                message: "Create user successfully",
                data: result
            })
        } catch (err) {
            console.log(err);
        }
    },
    findByid: async (req, res) => {
        try {
            let id = Number(req.params.id)
            let user = await userModel.findById(id)

            res.status(500).send({
                message: "Find user successfully",
                data: user
            })
        } catch (err) {
            console.log(err);
        }
    },

    getAll: async (req, res) => {
        try {
            let users = await userModel.getAll()
            res.status(500).send({
                message: "Get all user successfully",
                data: users
            })
        } catch (err) {
            console.log(err);
        }
    },
    updateUser: async (req, res) => {
        try {
            let id = Number(req.params.id)
            let email = req.body.email

            let userUpdate = await userModel.updateUser(id, email)

            res.status(500).send({
                message: "Update user successfully",
                data: userUpdate
            })
        } catch (err) {
            console.log(err);
        }
    },
    deleteUser: async (req, res) => {
        try {
            let id = Number(req.params.id)

            let userDelete = await userModel.deleteUser(id)

            res.status(500).send({
                message: "Delete user successfully",
                data: userDelete
            })
        } catch (err) {
            console.log(err);
        }
    },

    getPost: async (req, res) => {
        try {
            let id = Number(req.params.id)

            let result = await postModel.getPostByUserId(id)
            console.log("result", result);

            res.status(500).send({
                message: "Get all post successfully",
                data: result
            })
        } catch (err) {
            console.log(err);
        }
    }

}