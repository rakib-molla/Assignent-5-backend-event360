const mongoose = require('mongoose');

const EventItemsManagementSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

 const EventItemsManagementModel = mongoose.model(
  'ExpressEventItemsManagement',
  EventItemsManagementSchema
);

module.exports = EventItemsManagementModel;