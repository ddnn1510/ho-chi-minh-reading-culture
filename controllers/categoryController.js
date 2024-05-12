import Category from '../models/CategoryModel.js';

export const createCategory = async (req, res) => {
  try {
    const { name, title, content, status, intro, intro_image } = req.body;
    const newCategory = new Category({
      name,
      title,
      content,
      status,
      intro_image,
      intro,
    });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to create categories' });
  }
};

//get catories info select only image_info and info sort by created date
export const getCategoriesInfo = async (req, res) => {
  try {
    const categories = await Category.find(
      { status: 'published' },
      { name: 1, intro: 1, intro_image: 1 }
    ).sort({ createdAt: 1 });

    console.log(categories);

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.find({
      status:
        req.user.role === 'admin'
          ? { $in: ['draft', 'published'] }
          : 'published',
    });

    res.json(categories);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Failed to retrieve categories' });
  }
};

export const getCategoryById = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve category' });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const { name, title, content } = req.body;
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      { name, title, content },
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json(updatedCategory);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update category' });
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const categoryId = req.params.id;
    const deletedCategory = await Category.findByIdAndDelete(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: 'Category not found' });
    }
    res.json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete category' });
  }
};
