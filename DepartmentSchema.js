const mongoose = require('mongoose');
const {Schema}  =  mongoose;


const DepartmentSchema = new Schema({
    department:String,
    description:String,
},{
    timestamps:true
})

const DepModel = mongoose.model('Department', DepartmentSchema)


module.exports = DepModel;