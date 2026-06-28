const recommendationModel=require("../models/recommendation");

const recommendRoom=async(req,res)=>{

    try{

        const room=await recommendationModel.recommendRoom(

            req.body.attendees,

            req.body.projector,

            req.body.recording_supported,

            req.body.guest_network

        );

        if(!room){

            return res.status(404).json({

                success:false,

                message:"No suitable room found."

            });

        }

        res.json({

            success:true,

            data:room

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};

module.exports={

    recommendRoom

};