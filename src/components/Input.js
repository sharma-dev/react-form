import React, { Component } from 'react'
import Tooltip from "./Tooltip";
import { hasClass, addClass, removeClass, validate, getErrorMessage } from "../helpers/functions";

class Input extends Component {

    constructor(props){
        super(props);
        this.state = {
            error: null
        };
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onFocus(event){
        const input = this._input;
        const label = this._label;
        addClass(label, "label-seprate");
        if(this.props.onFocus)
            this.props.onFocus(event);
    }

    onBlur(event){
        const input = this._input;
        const label = this._label;

        if(input.value.trim() == ''){
            removeClass(label, 'label-seprate');
        }

        if(this.props.validateOnBlur){
            const value = input.value;
            const validation = input.dataset.validation;
            let v = validate(value, validation);
            if(!v.status){
                addClass(input, 'error_input');
                this.setState({
                    error: getErrorMessage(v.error_code)
                });
            }
        }
    }

    onChange(event){
        this.removeError();
        if(this.props.onChange){
            this.props.onChange(event);
        }
    }

    removeError(){
        const input = this._input;
        if(hasClass(input, "error_input")){
            removeClass(input, "error_input");
        }

        if(this.state.error){
            this.setState({
                error: null
            });
        }
    }

    render () {

        const {
            containerClassName,
            type,
            placeholder,
            onChange,
            className,
            name,
            defaultValue,
            value,
            validation
        } = this.props;

        let input = {};
        input.className = className || "";
        input.onFocus = this.onFocus;
        input.onBlur = this.onBlur;
        input.onChange = this.onChange;
        input.name = name;
        
        if(validation){
            input["data-validation"] = Array.isArray(validation) ? validation.join("||") : validation;
        }

        if(!value && defaultValue){
            input.defaultValue = defaultValue;
        }
        
        if(value){
            input.value = value;
        }

        input.type = type;

        return (
            <div 
                className={`input-container rc-input ${containerClassName || ""}`}
            >
                <label 
                    className={`input-label ${(type == "checkbox" || 
                                                type == "radio") ? 
                                                    "input-lable-simple" : 
                                                        "input-label-animate"}`
                            }
                >
                    <span className="label" ref={it => this._label = it}>
                        {placeholder}
                    </span>
                    <input {...input} ref={it => this._input = it} />
                </label>
                {this.state.error &&
                    <div className="error-cross-icn">
                        <Tooltip message={this.state.error} />
                    </div>
                }
            </div>
        )
    }
}

export default Input