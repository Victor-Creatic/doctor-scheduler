import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
    token:{
        type: mongoose.Schema.Types.String,
        required: [true, "patient token is required"]
    },
    history:{
        type: mongoose.Schema.Types.String,
        default:""
    },
});
const patientModel = mongoose.model("patient", patientSchema);
export {patientModel, patientSchema};