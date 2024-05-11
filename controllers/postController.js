import Post from '../models/PostModel.js';
import Category from '../models/CategoryModel.js';

export const createPost = async (req, res) => {
  try {
    const { title, content, status } = req.body;

    // category not match in db
    const category = await Category.findOne({ _id: req.body.category }).select(
      '_id'
    );
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const newPost = new Post({ title, content, status, category });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find({
      status:
        req.user.role === 'admin'
          ? { $in: ['draft', 'published'] }
          : 'published',
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve posts' });
  }
};

export const getPost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve post' });
  }
};

export const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content } = req.body;

    const category = await Category.findOne({ _id: req.body.category }).select(
      '_id'
    );
    if (!category) {
      return res.status(400).json({ error: 'Category not found' });
    }

    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content, category },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};

export const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const deletedPost = await Post.findByIdAndDelete(postId);
    if (!deletedPost) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete post' });
  }
};
