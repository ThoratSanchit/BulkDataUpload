const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/Excel');
const schema=mongoose.Schema({},{strict:false});
const model=mongoose.model('BulkData',schema);
module.exports=model;