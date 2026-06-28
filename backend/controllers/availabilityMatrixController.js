const matrixModel=require("../models/availabilityMatrix");

const getMatrix=async(req,res)=>{

    try{

        const matrix=await matrixModel.getMatrix(

            req.query.date

        );

        res.json({

            success:true,

            data:matrix

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

    getMatrix

};