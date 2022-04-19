const { Schema, model } = require("mongoose");

const patientSchema = new Schema({
    name : {
        type : Schema.Types.String,
        required : true,
        unique : true
    },
    DateOfBirth : {
        type : Schema.Types.Date,
        required : true
    },
    Gender : {
        type : Schema.Types.String,
        required : true
    },
    PlaceOfBirth : {
        type : Schema.Types.String,
        required : true
    },
    BloodGroup : {
        type : Schema.Types.String,
        required : true
    },
    Height : {
        type : Schema.Types.Number
    },
    Weight : {
        type : Schema.Types.Number
    }
},{
    versionKey : false
})

const PatientModel = model("Patient", patientSchema)

module.exports = PatientModel;