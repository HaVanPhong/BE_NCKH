const deviceRouter= require('./device.router')

module.exports= (app)=>{
  app.use("/api/device", deviceRouter);
}