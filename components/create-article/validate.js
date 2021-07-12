const validate = params => {
    const error = {};
    if(params.title=="" || (params.title && !/^[A-Za-z0-9' ]*$/.test(params.title))){
        error.title='Require Title';
    }
    if(!params.data){
        error.data='write somedata';
    }
    return error;
}

export default validate;