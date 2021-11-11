import router from './contact.js';


export default (app) =>{
    /* Contacts routes*/
    app.use('/', router);
    //app.use('/', personRouter);
};