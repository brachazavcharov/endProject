const upload=require("../middleware/upload");
const express = require("express");
const router=express.Router();
router.post('upload',upload.single("file"),(req,res)=>{
    if(req.file===undefined)
    return res.send("you must select a file!");
    const imageUrl=`http://loaclhost:8080/file/${req.file.filename}`;
    return res.send(imageUrl);
});
module.exports=router;