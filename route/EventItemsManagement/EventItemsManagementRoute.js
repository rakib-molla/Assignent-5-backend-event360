const express = require('express');
const {  insertData } = require('../../controllers/EventItemsManagement/EventItemsManagementController');
const EventItemsManagementRoute = express.Router();

EventItemsManagementRoute.post('/create', insertData);

module.exports = EventItemsManagementRoute;