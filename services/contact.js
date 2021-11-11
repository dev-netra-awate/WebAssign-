import Contact from "../models/contact.js";

export const search =(params ={})=>{
    //const id = params.id
    const promise = COntact.find(params.exec());
    return promise;
};

export const create =(contact)=>{
    const promise = new Contact(contact);
    return newContact.save();
}
export const get =(id)=>{
    const promise =Contact.findById(id).exec();
}