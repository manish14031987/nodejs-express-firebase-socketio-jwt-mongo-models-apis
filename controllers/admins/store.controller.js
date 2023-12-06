const { responseData } = require("../../helpers/responseData");
const store_service = require("../../services/admins/store.services");
module.exports = {
  add_store: async (req, res) => {
    try {
      await store_service.add_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  delete_store: async (req, res) => {
    try {
      await store_service.delete_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  list_store: async (req, res) => {
    try {
      await store_service.list_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  get_stores: async (req, res) => {
    try {
      await store_service.get_stores(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  edit_store: async (req, res) => {
    try {
      await store_service.edit_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
  change_status_store: async (req, res) => {
    try {
      await store_service.change_status_store(req, res);
    } catch (err) {
      var msg = err.message || "SOMETHING_WENT_WRONG";
      return res.status(422).json(responseData(msg, {}, req));
    }
  },
};
