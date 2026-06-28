const stationeryModel=require("../models/stationery");

// Create
const createRequest=async(req,res)=>{

    try{

        const request=await stationeryModel.createRequest(

            req.body.booking_id,
            req.body.user_id,
            req.body.whiteboard_marker,
            req.body.notepad,
            req.body.pen,
            req.body.projector_remote,
            req.body.extension_board,
            req.body.hdmi_cable,
            req.body.laser_pointer,
            req.body.remarks

        );

        res.status(201).json({

            success:true,
            data:request

        });

    }

    catch(err){

        res.status(500).json({

            success:false,
            message:err.message

        });

    }

};

const getUserRequests=async(req,res)=>{

    const data=await stationeryModel.getUserRequests(req.params.userId);

    res.json({

        success:true,
        data

    });

};

const getAllRequests=async(req,res)=>{

    const data=await stationeryModel.getAllRequests();

    res.json({

        success:true,
        data

    });

};

const updateStatus=async(req,res)=>{

    const data=await stationeryModel.updateStatus(

        req.params.stationeryId,
        req.body.request_status

    );

    res.json({

        success:true,
        data

    });

};

module.exports={

    createRequest,
    getUserRequests,
    getAllRequests,
    updateStatus

};