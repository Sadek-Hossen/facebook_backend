import Post from "../model/post.model.js";

export const postCreater = async (req, res)=>{
    try {
        const {title,image} = req.body;
        console.log(title,image)
        const post = await Post.create({
            title,
            image
        })
        await post.save()
        return res.status(201).json({
            message:"post create successfully",
            post
        })

    } catch (error) {
        return res.status(500).json({message:"internal server error from post cotnroller",
            error:error.message
        })
    }
}