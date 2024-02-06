const EventItemsManagementModel = require("../../model/EventItemsManagement/EventItemsManagementModel");


const insertData = async (req, res) => {
  try {
    const { title, description, date, location, image } = req.body;

    const newData = await new EventItemsManagementModel({
      title,
      description,
      date,
      location,
      image,
    });

    await newData.save();

    res
      .status(201)
      .json({ message: 'Data inserted successfully', data: newData });
  } catch (error) {
    console.error('Error inserting data:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  insertData,
};
