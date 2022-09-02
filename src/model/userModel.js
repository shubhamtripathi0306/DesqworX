const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    personInfo: {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            required: true,
            trim: true
        },
        emailId: {
            type: String,
            trim: true,
            unique: true
        },
        phone: {
            type: Number,
            trim: true,
            unique: true
        },
        newPassword: {
            type: String,
            trim: true
        }
    },

    companyDetail: {
        companyName: {
            type: String
        },
        companyAddress: {
            type: String
        },
        companyGST: {
            type: String
        },
        companyPAN: {
            type: String
        }  
}
},
     { timestamps: true });
module.exports = mongoose.model('userRegister', userSchema)