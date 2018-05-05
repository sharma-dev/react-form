const defaultErrors = {
    "INPUT_REQ": "This field can not be empty"
};

function ErrorStore(errors){
    
    var errors = defaultErrors;

    this.setErrors = function(errors){
        if(errors && typeof errors == 'Object'){
            this.errors = errors;
        }
    }

    this.getError = function(error_code){
        if(errors.hasOwnProperty(error_code)){
            return errors[error_code];
        }

        return false;
    }
};

export default ErrorStore;