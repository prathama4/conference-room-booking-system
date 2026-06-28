const express=require("express");

const router=express.Router();

const recommendationController=require("../controllers/recommendationController");

router.post(

    "/recommend-room",

    recommendationController.recommendRoom

);

module.exports=router;