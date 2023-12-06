const { responseData } = require("../../helpers/responseData");
const serviceprovider_service = require('../../services/admins/serviceprovider.services')
module.exports = {
    serviceProviderList: async (req, res) => {
        try {
            await serviceprovider_service.serviceProviderList(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    serviceprovider_add: async (req, res) => {
        try {
            await serviceprovider_service.serviceprovider_add(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    serviceprovider_edit: async (req, res) => {
        try {
            await serviceprovider_service.serviceprovider_edit(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    serviceprovider_delete: async (req, res) => {
        try {
            await serviceprovider_service.serviceprovider_delete(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    serviceproviderChangeStatus: async (req, res) => {
        try {
            await serviceprovider_service.serviceproviderChangeStatus(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    track_list: async (req, res) => {
        try {
            await serviceprovider_service.serviceprovider_track_list(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    get_map_data: async (req, res) => {
        try {
            await serviceprovider_service.get_map_data(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
}