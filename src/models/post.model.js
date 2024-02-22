import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const postModel = {
    create: async (data) => {
        try{
            let newPost = await prisma.post.create({
                data
            })
            return newPost
        }catch(err){
            console.log(err);
        }
    },
    findById: async(id)=>{
        try{
            let post = await prisma.post.findUnique({
                where:{
                    id: id
                }
            })
            return post
        }catch(err){
            console.log(err);
        }
    },
    getAll: async()=>{
        try{
            let posts = await prisma.post.findMany()
            return posts
        }catch(err){
            console.log(err);
        }
    },
    update: async(id, data)=>{
        try{
            let postUpdate = await prisma.post.update({
                where:{
                    id: id
                },
                data:{
                    ...data
                }
            })
            return postUpdate
        }catch(err){
            console.log(err);
        }
    },
    delete: async(id)=>{
        try{
            let postDelete = await prisma.post.delete({
                where:{
                    id: id
                }
            })
            return postDelete
        }catch(err){
            console.log(err);
        }
    },
    getPostByUserId: async(userId)=>{
        try{
            let posts = await prisma.post.findMany({
                where:{
                    userId: userId
                }
            })
            return posts
        }catch(err){
            console.log(err);
        }
    }
}