const { responseData } = require("../../helpers/responseData");
const report_service = require("../../services/admins/report.services");
module.exports = {
    sale_vat_report: async (req, res) => {
        try {
            await report_service.sale_vat_report(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    sale_inventory_report: async (req, res) => {
        try {
            await report_service.sale_inventory_report(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    store_inventory_report: async (req, res) => {
        try {
            await report_service.store_inventory_report(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    store_inventory_export_data: async (req, res) => {
        try {
            await report_service.store_inventory_export_data(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    sale_vat_export_data: async (req, res) => {
        try {
            await report_service.sale_vat_export_data(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },
    sale_inventory_export_data: async (req, res) => {
        try {
            await report_service.sale_inventory_export_data(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, req));
        }
    },

};
