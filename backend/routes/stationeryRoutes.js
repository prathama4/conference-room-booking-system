const express=require("express");

const router=express.Router();

const stationeryController=require("../controllers/stationeryController");

router.post(

    "/stationery",

    stationeryController.createRequest

);

router.get(

    "/stationery/:userId",

    stationeryController.getUserRequests

);

router.get(

    "/admin/stationery",

    stationeryController.getAllRequests

);

router.put(

    "/stationery/:stationeryId",

    stationeryController.updateStatus

);

module.exports=router;