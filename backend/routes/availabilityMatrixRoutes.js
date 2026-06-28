const express=require("express");

const router=express.Router();

const matrixController=require("../controllers/availabilityMatrixController");

router.get(

    "/vacancy-matrix",

    matrixController.getMatrix

);

module.exports=router;