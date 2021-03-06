"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const person_controller_1 = require("../controllers/person.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const isAdmin_middleware_1 = require("../middlewares/isAdmin.middleware");
const isModerator_middleware_1 = require("../middlewares/isModerator.middleware");
const router = express_1.Router();
router.route('/')
    .get([auth_middleware_1.verifyToken, isModerator_middleware_1.isModerator], person_controller_1.getPeople)
    .post([auth_middleware_1.verifyToken, isAdmin_middleware_1.isAdmin], person_controller_1.newPerson);
router.route('/:personId')
    .get(auth_middleware_1.verifyToken, person_controller_1.getPerson)
    .put([auth_middleware_1.verifyToken, isModerator_middleware_1.isModerator], person_controller_1.updatePerson)
    .delete([auth_middleware_1.verifyToken, isAdmin_middleware_1.isAdmin], person_controller_1.deletePerson);
exports.default = router;
