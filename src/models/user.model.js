import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const userModel = {
    create: async(user)=>{
        try{
            let newUser = await prisma.user.create({
                data: user
            })
            return newUser
        }catch(err){
            console.log(err);
        }
    },
    findById: async(id)=>{
        try{
            let user = await prisma.user.findUnique({
                where:{
                    id: id
                }
            })
            return user;
        }catch(err){
            console.log(err);
        }
    },
    getAll: async() =>{
        try{
            let users = await prisma.user.findMany()
            console.log('users',users);
            return users
        }catch(err){
            console.log(err);
        }
    },
    updateUser: async(id, email)=>{
        try{
            let userUpdate = await prisma.user.update({
                where:{
                    id: id
                },
                data:{
                    email: email
                }
            })
            return userUpdate
        }catch(err){
            console.log(err);
        }
    },
    deleteUser: async(id)=>{
        try{
            let userDelete = await prisma.user.delete({
                where:{
                    id: id
                }
            })
            return userDelete
        }catch(err){
            console.log(err);
        }
    }
}