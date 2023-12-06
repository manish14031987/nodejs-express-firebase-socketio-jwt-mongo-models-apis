const { responseData } = require("../../helpers/responseData");
const staticcontent_service = require('../../services/admins/staticcontent.services')
module.exports = {
    staticcontent_list: async (req, res) => {
        try {
            await staticcontent_service.staticcontent_list(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    static_content_edit: async (req, res) => {
        try {
            await staticcontent_service.static_content_edit(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    }
}