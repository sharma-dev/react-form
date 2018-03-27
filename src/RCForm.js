import React, { Component, createElement } from 'react';
import Input from './Input';
import { validate, addClass } from './functions';
class RCForm extends Component {
    
    componentWillMount() {
    }

    componentWillUnmount() {
    }

    getElement(){
        if(this.props.children){
            return this.props.children;
        }

        const {
            data,
            heading,
            inputClassName,
            submitClassName,
            submitValue,
            validateOnBlur
        } = this.props;
        
        return  <div className="form-container">
                    <h2>
                        {heading}
                    </h2>
                    <div className="row">
                        {
                            data.map((el, i) => {
                                return Array.isArray(el) ? 
                                            el.map((kel, ki) => <Input 
                                                                    className={inputClassName} 
                                                                    data={kel} 
                                                                    length={el.length} 
                                                                    key={i+ki}
                                                                    validateOnBlur={validateOnBlur}
                                                                    />) : 
                                                <Input 
                                                    className={inputClassName} 
                                                    data={el} 
                                                    key={i}
                                                    validateOnBlur={validateOnBlur}
                                                />
                            })
                        }
                    </div>
                    <input 
                        type="submit" 
                        value={submitValue || "Submit"} 
                        className={submitClassName || "submit-btn"}
                    />
                </div>
    }

    onSubmit(event){
        
        if(this.props.defaultPrevented){
            event.preventDefault();
        }

        if(!this.props.shouldValiate || this.props.shouldValiate != false){
            const elements = event.target.elements;
            for(let i = 0; i < elements.length; i++){
                let validation = elements[i].getAttribute('validation');
                if(!validate(elements[i].value, validation)){
                    addClass(elements[i], 'error_input');
                    event.preventDefault();
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
            onSubmit,
            method,
            action,
            form_event
        } = this.props;
        const form_props = Object.assign({}, {
                                                id: 'RCForm', 
                                                className, 
                                                onSubmit: this.onSubmit.bind(this),
                                                method, 
                                                action
                                            }, form_event);
        return createElement('form', form_props, this.getElement());
    }
}

export default RCForm;