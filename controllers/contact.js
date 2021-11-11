import  * as contactService  from "../services/contact.js";

// const errorhandler
const setSuccessResponse = (data, response)=>{
    
        response.status(200);
        response.json(data);
    
}
export const index = async (request,response)=>{

try{
    const contacts = await contactService.search();
    setSuccessResoponse(contacts,response)
    response.json(contacts);
}
catch(e){
    errorhandler(e.message, response);
}
};


export const save = async(request, response)=>{
    try{
        const contact= {...request.body};
        const newContact =await contactService.create(contact);
        setSuccessResponse(newContact, response);
    }
    catch(e){
        errorhandler(e.message,response);
    }
}
export const get =async (request, response)=>{
    try{
        const id = request.params.id;
        const contact =await contactService.get(id);
        setSuccessResponse(contact,response);


    }catch(e){
        errorhandler(e.message,response);
    }
}