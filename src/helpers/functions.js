import ErrorStore from "../store/error";

export const addClass = (elem, className) => {
    if(!hasClass(elem, className)){
        elem.classList.add(className);
    }
};

export const removeClass = (elem, className) => {
    elem.className = elem.className.replace(new RegExp('(?:^|\\s)'+ className + '(?:\\s|$)'), ' ');
};

export const hasClass = (elem, className)=> {
    return RegExp('(\\s|^)' + className + '(\\s|$)').test(elem.className);
};

export const validate = (value, validation) => {
    let error_code = "";
    const validators = {
        "email" : (email) => {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            error_code = "EMAIL";
            return re.test(String(email).toLowerCase());
        },
        "number" : (number) => {
            var re = /^\d+$/;
            error_code = "EMAIL";            
            return re.test(Number(number));
        },
        "min_val" : (val, min_char) => {
            error_code = "MIN_VAL";            
            return val.length >= min_char;
        },
        "max_val" : (val, max_char) => {
            error_code = "MAX_VAL";            
            return val.length <= max_char
        },
        "regex" : (val, regex) => {
            error_code = "REGEX";
            try{
                return regex.test(val);
            }catch(err){
                return true;
            }
        },
        "required" : (val) => {
            error_code = "INPUT_REQ";
            return String(val).trim() != "";
        },
    };

    if(!validation){
        return {
            status: true
        };
    }

    if(validation.includes("||")){
        validation = validation.split("||");
    }else{
        let v = [];
        v.push(validation);
        validation = v;
    }
    let flag = true;
    for(let i in validation){
        let validate_string = validation[i];
        if(validate_string.includes("min_val:")){
            const min_val = validate_string.replace("min_val:");
            if(!validators.min_val(value, min_val.trim())){
                flag = false;
                break;
            }
        }else if(validate_string.includes("max_val:")){
            const max_val = validate_string.replace('max_val:');
            if(!validators.max_val(value, max_val.trim())){
                flag = false;
                break;
            }
        }else if(validate_string.includes('regex:')){
            const regex = validate_string.replace('regex:');
            if(!validators.regex(value, regex)){
                flag = false;
                break;
            }
        }else{
            if(validators[validate_string] && !validators[validate_string](value)){
                flag = false;
                break;
            }
        }
    }

    return {
        status: flag,
        error_code: error_code
    };
};

export const getErrorMessage = (error_code) => {
    let error = new ErrorStore;
    return error.getError(error_code);
};