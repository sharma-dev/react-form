import React, { Component } from 'react';
import { addClass, removeClass, validate, hasClass } from './functions';

class Input extends Component {
    onFocus(event){
        const input = event.target;
        const span = event.target.previousSibling;
        addClass(span, 'label-seprate');
        if(this.props.data.input.onFocus){
            this.props.data.input.onFocus(event);
        }
    };
    
    onBlur(event){        
        const input = event.target;
        const span = event.target.previousSibling;
        if(input.value.trim() == ''){
            removeClass(span, 'label-seprate');
        }
        
        if(this.props.validateOnBlur){
            if(!validate(event.target.value, event.target.getAttribute('validation'))){
                addClass(event.target, 'error_input');
                event.target.nextSibling.innerHTML = "";
            };
        }

        if(this.props.data.input.onBlur){
            this.props.data.input.onBlur(event);
        }
    };

    removeError(event){
        if(hasClass(event.target, "error_input")){
            removeClass(event.target, "error_input");
        }
    }

    render(){
        const data = this.props.data;
        const input = Object.assign({}, data.input);
        input.onFocus = this.onFocus.bind(this);
        input.onBlur = this.onBlur.bind(this);
        input.onChange = this.removeError.bind(this);
        input.className = (input.className ? input.className : (this.props.className || ""))
        return  <div className={`col-sm-${parseInt(12 / (this.props.length ? this.props.length : 1))} form-group`}>
                    <label className={`${data.className ? data.className : 'width-100'} ${input.type == 'radio' || input.type == 'checkbox' ? "no_animate" : "animate"}`}>
                        <span className="label">
                            {data.label}
                        </span>
                        <input {...input} validation={data.validation}/>
                        <span className="error" style={{display: "none"}}/>
                        {
                            data.icon ? <i className={`fa ${data.icon}`} /> : ""
                        }
                    </label>
                </div>
    }
}

export default Input;