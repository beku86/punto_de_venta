"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const provider_controller_1 = require("../controllers/provider.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
router.route('/')
    .get(auth_middleware_1.verifyToken, provider_controller_1.getProviders)
    .post(auth_middleware_1.verifyToken, provider_controller_1.newProvider)
    .put(auth_middleware_1.verifyToken, provider_controller_1.updateProvider);
router.route('/:providerId')
    .get(auth_middleware_1.verifyToken, provider_controller_1.getProvider)
    .delete(auth_middleware_1.verifyToken, provider_controller_1.deleteProvider);
exports.default = router;