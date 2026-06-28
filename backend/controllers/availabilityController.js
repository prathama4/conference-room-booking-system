const availabilityModel = require("../models/availability");

const getAvailability = async (req, res) => {

    try {

        const { date } = req.query;

        const rooms = await availabilityModel.getAvailability(date);

        res.status(200).json({

            success: true,

            data: rooms

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};

module.exports = {

    getAvailability

};