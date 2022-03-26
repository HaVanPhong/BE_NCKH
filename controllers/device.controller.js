const res = require('express/lib/response');
const Device= require('../models/device');
const errorResponse= require('../response/error.response');
const cloudinary= require('cloudinary').v2;


module.exports.getAllDevice= async (req, res, next)=>{
  try {
    let devices= await Device.find();
    if (devices.length==0){
      throw Error("NOT FOUND ANY DEVICE");
    }
    return res.status(200).json(devices);
  } catch (error) {
    return res.status(404).json(new errorResponse(404, error.message));
  }
}

module.exports.createADevice= async (req, res, next)=>{
  try {
    const {...body}= req.body;
    const {...file}= req.file;
    console.log(file);
    
    await cloudinary.uploader.upload(file.path|| req.file.path, function(err, result){
      if (err){
        return res.status(500).json(new errorResponse(500, err.message));
      }
      body.img= result.secure_url;
    });
    let d= await Device.create(body);
    res.status(201).json(d);
  } catch (error) {
    
  }
}

module.exports.deleteAnDevice= async(req, res, next)=>{
  try {
    let d= await Device.deleteOne({_id: req.params.id});
    if (d.deletedCount==0){
      return res.status(404).json(new errorResponse(404, "NOT FOUND DEVICE WITH ID: "+ req.params.id));
    }
    return res.status(200).json(new errorResponse(200, "DELETE SUCCESS"))
  } catch (error) {
    return res.status(500).json(new errorResponse(500, error.message))
  }
}

module.exports.updateAnDevice= async(req, res, next)=>{
  try {
    let d= await Device.updateOne({_id: req.params.id}, req.body);
    if (d.matchedCount==0){
      return res.status(404).json(new errorResponse(404, "NOT FOUND DEVICE WITH ID: "+ req.params.id));
    }
    return res.status(201).json(await Device.findById(req.params.id))
  } catch (error) {
    return res.status(500).json(new errorResponse(500, error.message))
  }

}