const multer = require('multer');

// configure Storage 
const storage = multer.diskStorage({
    destination: (req , file , cb)=>{
        cb(null , 'public/uploads');
    },
    filename: (req , file ,cb)=>{
        cb(null , Date.now() + "-" +file.originalname);
    },
});

// file filter 
const fileFilter = (req , file , cb)=>{
    const allowedTypes = /jpg|jpeg|png|pdf/
    const mimeType = allowedTypes.test(file.mimeType);
    if(mimeType){
        cb(null , true)
    }else{
       cb(new Error('Error: Access just images and pdf') , false);
    }
};

// created multer Instance
const upload = multer({
    storage:storage,
    fileFilter:fileFilter,
});

module.exports = upload;