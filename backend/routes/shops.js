const express = require("express");
const {
  shopRegister,
  shopLogin,
  getAllShops,
  getShopByCategoryId,
  getShopById,
  updateShopById,
  deleteShopById,
} = require("../controllers/shops");

const shopsRouter = express.Router();

shopsRouter.post("/register", shopRegister);
shopsRouter.post("/login", shopLogin);
shopsRouter.get("/", getAllShops);
shopsRouter.get("/:id", getShopById);
shopsRouter.get("/category/:id", getShopByCategoryId);
shopsRouter.put("/:id", updateShopById);
shopsRouter.delete("/:id", deleteShopById);

module.exports = shopsRouter;
