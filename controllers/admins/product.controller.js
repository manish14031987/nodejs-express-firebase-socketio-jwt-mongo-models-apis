const { responseData } = require("../../helpers/responseData");
const product_service = require("../../services/admins/product.services");
module.exports = {
  add_product: async (req, res) => {
    try {
      await product_service.add_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  delete_product: async (req, res) => {
    try {
      await product_service.delete_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  delete_product_image: async (req, res) => {
    try {
      await product_service.delete_product_image(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  getAttributes: async (req, res) => {
    try {
      await product_service.getAttributes(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  list_product: async (req, res) => {
    try {
      await product_service.list_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  get_store_products: async (req, res) => {
    try {
      await product_service.get_store_products(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  list_inventory: async (req, res) => {
    try {
      await product_service.list_inventory(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  product_stock_list: async (req, res) => {
    try {
      await product_service.product_stock_list(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  product_stock_export_data: async (req, res) => {
    try {
      await product_service.product_stock_export_data(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  list_product_store: async (req, res) => {
    try {
      await product_service.list_product_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  product_drop_down: async (req, res) => {
    try {
      await product_service.product_drop_down(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  edit_product: async (req, res) => {
    try {
      await product_service.edit_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  assign_product: async (req, res) => {
    try {
      await product_service.assign_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  remove_product: async (req, res) => {
    try {
      await product_service.remove_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  add_inventory: async (req, res) => {
    try {
      await product_service.add_inventory(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  adjust_inventory: async (req, res) => {
    try {
      await product_service.adjust_inventory(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  transfer_inventory: async (req, res) => {
    try {
      await product_service.transfer_inventory(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  edit_inventory: async (req, res) => {
    try {
      await product_service.edit_inventory(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  edit_product_price: async (req, res) => {
    try {
      await product_service.edit_product_price(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  change_status_product: async (req, res) => {
    try {
      await product_service.change_status_product(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  change_store_product_status: async (req, res) => {
    try {
      await product_service.change_store_product_status(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  list_product_ws_category_price: async (req, res) => {
    try {
      await product_service.list_product_ws_category_price(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  inventory_product_detail: async (req, res) => {
    try {
      await product_service.inventory_product_detail(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
};
