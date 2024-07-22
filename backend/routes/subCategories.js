const express = require("express");

const {
  createNewSubCategory,
  getAllSubCategories,
  getSubCategoryById,
  updateSubCategoryById,
} = require("../controllers/subCategories");

const subCategoriesRouter = express.Router();

subCategoriesRouter.post("/", createNewSubCategory);
subCategoriesRouter.get("/", getAllSubCategories);
subCategoriesRouter.get("/:id", getSubCategoryById);
subCategoriesRouter.put("/:id", updateSubCategoryById);

module.exports = subCategoriesRouter;
