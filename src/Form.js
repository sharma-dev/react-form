import React, { Component, createElement } from 'react';
import Input from './components/Input';
import { validate, addClass } from './helpers/functions';
import ErrorStore from "./store/error";

class RCForm extends Component {

    constructor(props){
        super(props);
        this.state = {}
        this.onSubmit = this.onSubmit.bind(this);
        if(this.props.customErrors){
            let Error = new ErrorStore;
            Error.setErrors(this.props.customErrors);
        }
    }

    componentWillMount() {
    }

    componentWillUnmount() {
    }
    
    onSubmit(event){
        
        if(this.props.defaultPrevented){
            event.preventDefault();
        }

        if(!this.props.shouldValidate || this.props.shouldValidate != false){
            const elements = event.target.elements;
            for(let i = 0; i < elements.length; i++){
                let validation = elements[i].dataset.validation;
                let v = validate(elements[i].value, validation);                
                if(!v.status){
                    event.preventDefault();
                    elements[i].focus();
                    elements[i].blur();
                    return false;
                }
            }
        }

        if(this.props.onSubmit){
            this.props.onSubmit(event);        
        }
    }

    render() {
        const {
            id,
            className,
            method,
            action,
            children
        } = this.props;

        let cl = className + " rc-form";
        return createElement('form', {
            id: id || "RCForm",
            className: cl,
            method,
            action,
            onSubmit: this.onSubmit
        }, children);
    }
}

export default RCForm;