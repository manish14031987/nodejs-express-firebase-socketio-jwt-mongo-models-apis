const { responseData } = require("../../helpers/responseData");
const setting_service = require('../../services/admins/setting.services')
module.exports = {
    
    add_setting: async (req, res) => {
        try {
            await setting_service.add_setting(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    delete_setting: async (req, res) => {
        try {
            await setting_service.delete_setting(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    list_setting: async (req, res) => {
        try {
            await setting_service.list_setting(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    edit_setting: async (req, res) => {
        try {
            await setting_service.edit_setting(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    change_status_setting: async (req, res) => {
        try {
            await setting_service.change_status_setting(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    }
}