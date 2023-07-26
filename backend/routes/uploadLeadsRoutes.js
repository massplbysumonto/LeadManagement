const express = require("express");
const router =express.Router();
const multer = require("multer");
const csv=require("csvtojson");

const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null, "./uploads");
    },
    filename:(req,file,cb)=>{
        cb(null, file.originalname.replace(" ","_"));
    },
})
const uploads = multer({
    storage,
});

router.route("/uploadAll").post(uploads.single("csvFile"),async (req,res)=>{
    const jsonArray = await csv().fromFile(req.file.path);
    res.json(jsonArray);

})


module.exports= router;


