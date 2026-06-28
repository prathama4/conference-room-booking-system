const express=require("express");

const router=express.Router();

const chatbotController=require("../controllers/chatbotController");

router.post(

    "/chatbot",

    chatbotController.askChatbot

);

router.get(

    "/chatbot/:userId",

    chatbotController.getMyChats

);

router.get(

    "/admin/chats",

    chatbotController.getAllChats

);

module.exports=router;