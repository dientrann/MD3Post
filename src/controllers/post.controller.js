import { postModel } from '../models/post.model.js';

export const postController = {
    create: async(req, res)=>{
        try{
            let newPost = req.body;

            let result = await postModel.create(newPost);

            res.status(500).send({
                message: "Post created successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    findById: async(req, res)=>{
        try{
            let id = Number(req.params.id);
            let result = await postModel.findById(id)

            res.status(500).send({
                message: "Find post successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    getAll: async(req, res)=>{
        try{
            let result = await postModel.getAll();
            res.status(500).send({
                message: "Get all posts successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    update: async(req, res)=>{
        try{
            let id = Number(req.params.id);
            let postUpdate = await postModel.findById(id)

            let data = {
                ...postUpdate,
                ...req.body
            }
            let result = await postModel.update(id, data);

            res.status(500).send({
                message: "Update post successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    },
    delete: async(req, res)=>{
        try{
            let id = Number(req.params.id);
            let result = await postModel.delete(id);
            res.status(500).send({
                message: "Delete post successfully",
                data: result
            })
        }catch(err){
            console.log(err);
        }
    }
}