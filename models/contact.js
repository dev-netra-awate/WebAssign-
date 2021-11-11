import Mongoose from "mongoose";

const ContactSchema = new Mongoose.Schema({
    "firstName":{
        type: String,
        required: "First NAme is Required Field"

    },
    "lastName":{
        type: String,
        required: "last NAme is Required Field"

    },
    "phone":{
        type: Number
        

    },
    "createDate":{
        type:Date,
        default: Date.now
    },
    "lastModifiedDate":{
        type: Date,
        default: Date.now
    }

});

// ContactSchema.virtual('id')
const Contact = Mongoose.model('Contact', ContactSchema);

// export const p1= "";

export default Contact;
