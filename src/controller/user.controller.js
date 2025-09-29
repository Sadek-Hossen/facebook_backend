import User from "../model/user.model.js";

export const  createUser = async (req,res)=>{

 try {
    const {name,email,password} = req.body;
    if(!name || !email || !password){
       return res.status(401).json({ message:"all data requered "})
    }

    const user = await User.create({
        name,
        email,
        password
    })
    await user.save();
    res.status(201).json({
        message:"user create successfully",
        user


    })
 } catch (error) {
    res.status(500).json({
        message:"internal server error from user controller",
        error:error.message});
        console.log(error)
 }

}