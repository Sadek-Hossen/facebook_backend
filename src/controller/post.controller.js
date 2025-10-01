import Post from "../model/post.model.js";

// post create
export const postCreater = async (req, res) => {
  try {
    const { title, image } = req.body;
    console.log(title, image);

    const post = await Post.create({ title, image });


    return res.status(201).json({
      message: "post cuccessfully",
      post,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Post controller- internall serverr error",
      error: error.message,
    });
  }
};

// get all posts
export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find(); 
    return res.status(200).json({
      message: "all data getting successfully",
      posts,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "getAllProducts- internal surver error",
      error: error.message,
    });
  }
};
