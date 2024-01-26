import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    token:{
        type: mongoose.Schema.Types.String,
        required: [true, "doctor token is required"],
    },
    id_specialty:{
        type: mongoose.Schema.Types.String,
        required: [true, "doctor id_specialty is required"],
    },
    isAdmin:{
        type: mongoose.Schema.Types.Boolean,
        default:false
    }
});
const doctorModel = mongoose.model("doctor", doctorSchema);
export {doctorModel, doctorSchema};