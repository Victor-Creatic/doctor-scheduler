import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    token_patient:{
        type: mongoose.Schema.Types.String,
        required: [true, "appointment token_patient is required"],
    },
    token_doctor:{
        type: mongoose.Schema.Types.String,
        required: [true, "appointment token_doctor is required"],
    },
    date:{
        type: mongoose.Schema.Types.String,
        required: [true, "appointment date is required"],
    },
    details:{
        type: mongoose.Schema.Types.String,
        default:"details here"
    },
    is_complete:{
        type: mongoose.Schema.Types.Boolean,
        default:false
    }
});
const appointmentModel = mongoose.model("appointment", appointmentSchema);
export {appointmentModel, appointmentSchema};schema