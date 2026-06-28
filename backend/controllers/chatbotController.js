const chatModel=require("../models/chatHistory");

const llm=require("../services/llmService");

const askChatbot=async(req,res)=>{

    try{

        const{

            user_id,

            question

        }=req.body;

        const answer=

        await llm.getLLMResponse(question);

        await chatModel.saveChat(

    user_id,
    question,
    answer

);

        res.json({

            success:true,

            answer

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};

const getMyChats=async(req,res)=>{

    try{

        const chats=

        await chatModel.getUserChats(

            req.params.userId

        );

        res.json({

            success:true,

            data:chats

        });

    }

    catch(err){

        res.status(500).json({

            success:false,

            message:err.message

        });

    }

};

const getAllChats=async(req,res)=>{

    try{

        const chats=

        await chatModel.getAllChats();

        res.json({

            success:true,

            data:chats

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

    askChatbot,

    getMyChats,

    getAllChats

};