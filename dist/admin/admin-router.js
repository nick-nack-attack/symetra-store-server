"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Router - Admin
const express_1 = require("express");
const adminRouter = express_1.Router();
const jsonBodyParser = express_1.json();
const mock_data_1 = __importDefault(require("../mock-data/mock-data"));
// Services
const admin_service_1 = __importDefault(require("./admin-service"));
adminRouter
    // Set coupon code
    .route('/coupon')
    .post(jsonBodyParser, (req, res, next) => {
    const { couponCode } = req.body;
    if (!couponCode)
        return res.status(400).json({
            error: `Missing ${couponCode} from body`
        });
    admin_service_1.default.updateCouponCode(mock_data_1.default, couponCode)
        .then(response => res.json(response))
        .catch(next);
});
adminRouter
    // Set coupon interval
    .route('/interval')
    .post(jsonBodyParser, (req, res, next) => {
    const { couponInterval } = req.body;
    if (!couponInterval)
        return res.status(400).json({
            error: `Missing ${couponInterval} from body`
        });
    admin_service_1.default.updateCouponCode(mock_data_1.default, couponInterval)
        .then(response => res.json(response))
        .catch(next);
});
exports.default = adminRouter;
//# sourceMappingURL=admin-router.js.map