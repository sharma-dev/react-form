# React form

React form is a initiative to provide a better form validation and implimentation experience to React developers. See <a href="https://sharma-dev.github.io/react-form">Example</a>

## Features
* Automatic validation,
 
* Custom Input, Select, Checkbox, Radio inputs
 
* Easy to Implement
 
* Almost like HTML Forms and Inputs (No need to learn much of the APIs).
 
* Animated Label Inputs.

## Installation

**Step 1.** Clone or download the code base.

```
git clone https://github.com/sharma-dev/react-form.git
```

or

```
wget https://github.com/sharma-dev/react-form/archive/master.zip
```

**Step 2.** Extract the code
**Step 3.** Put the code in your codebase and use import

```
import { Form, Input } from "./react-form/src;
```

**Step 4.** Setup CSS. Either you can directly import CSS file to your code if you are using modern React and babel tools. (If you create your project via react-create-app you can use direct import) or you can merge the CSS with your default style sheet.

**Direct import**

```
import style from './react-form/style.css';
```

**Note:** __Styles are also provided at the end of this document.__

## Code Example

```
import React, { Component } from "react";
import { Form, Input } from './react-form/src';
import style from "./react-form/style.css";

class RegisterForm extends Component{
    render(){
        return (
            <Form id="my-form" action="some-page.asp" method="post" defaultPrevented={true}>
                <Input
                    name="name"
                    placeholder="Name"
                    validateOnBlur={true}
                    validation="required"/>
                <Input
                    type="password"
                    name="password"
                />
                <button>
                    Submit
                </button>
            </From>
        )
    }
}

```


## Props and API Details

### Form props

**1. id (type: string):** Form id *(Same as html form)*,

**2. className (type: string):** Form className *(Same as html form)*,

**3. method (type string):** Form method *(Same as html form)*,
    
**4. action (type: string):** Form action *(Same as html form)*,
    
**5. onSubmit (type: function):** onSubmit function to be executed when the form is submited.
    
**6. defaultPrevented (type: bool):** If true form submit will be defult prevented (default value false).
    
**7. shouldValidate:** If false validation of inputs on submit will not work (default value is true).
    
**8. children (type: React Child Node):** React Node Elements for the form can be and JSX and Input Elements supported by default.

### Input Props

**1. containerClassName (type string):** ClassName of outer container,

**2. type (type string):** type of input (same as default HTML input)

**3. placeholder (type placeholder):** Placeholder/(Floating label) for the input,

**4. className (type string):** input className,

**5. name (type string):** input name,

**6. defaultValue (type string):** input deafult value,

**7. value (type string):** input value,

**8. onChange (type function):** onChange Event,

**9. onBlur (type function):** onBlur Event,

**10. onFocus (type function):** onFocus Event,

**11. validation (type string/array):** Validation for input. For more details see <a href="#validations"> validation details </a>


### Validations

Currently, react-form supports only the following validations

**required:** a required field cannot be empty.

**email :** validation for email input.

**number :** validation for numeric value.

**min_val :** validation to check for minimum value for the input __syntax__ **min_val:__length__**

**max_val :** validation to check for maximum value for the input __syntax__ **max_val:__length__**

**regex :** react-form also accepts custom regex validation to validated custom regex value __syntax__ **regex:__regex_expression__**

**To use multiple validations on the single input you can use an array of validations.**

```
<Input type="text" placeholder="Validation Example" validation={['required', 'phone', 'min_val:10', "max_val:10"]}>
```
## Style.css

```
.rc-input{
    position: relative;
}

.rc-input label {
    position: relative;
    text-align: left;
    margin: 0;
    margin-top: 10px;
    height: auto;
    font-size: 18px;
}

.rc-input label span {
    font-size: 1em;
    font-weight: normal;
    color: #444;
    padding: 0;
}

.rc-input label.input-label-animate span {
    position: absolute;
    bottom: -5px;
    left: 15px;
    transition: all 0.3s ease-out;
}

.rc-input label.input-label-animate .label-seprate {
    bottom: 1.9em;
    left: 0;
    font-size: 0.8em;
}

.rc-input label input:not([type='radio']):not([type='checkbox']) {
    height: 1.1em;
    font-size: inherit;
    border: 0;
    box-shadow: none;
    outline: 0;
    border-bottom: 1px solid;
    border-radius: 0;
    font-weight: normal;
    margin-top: 1.5em;
    padding: 6px 15px;
}

.rc-input label input:not([type='radio']):not([type='checkbox']).error_input {
    border: solid 1.5px #ff5252;
    border-radius: 5px;
}

.rc-input label input[type='radio'],
.rc-input label input[type='checkbox'] {
    float: left;
    margin-right: 5px;
    margin-top: 1.5px;
    zoom: 1.3;
}

.rc-input label i {
    position: absolute;
    right: 0px;
    top: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.rc-input input[type=button],
.rc-input input[type=reset],
.rc-input input[type=submit],
.rc-input button.submit {
    display: inherit;
    margin: 16px auto 0;
    display: inherit;
    border-radius: 0;
    box-shadow: none;
    background: #067b98;
    border: #067b98;
    outline: #067b98;
    color: #fff;
    padding: 12px 15%;
}

.error-cross-icn span{
    position: absolute;
    background: #fff;
    z-index: 99;
    width: 200px;
    height: auto;
    display: none;
    padding: 10px;
    box-shadow: 0px 0px 6px 1px #bdbdbd;
    border: solid 1px #bdbdbd;
    border-radius: 5px;
    bottom: calc(100% + 10px);
}

.error-cross-icn span:before{
    z-index: 10;
    border-top-color:#bdbdbd;
}

.error-cross-icn span:after{
    z-index: 11;
    border-top-color:#fff;
}

.error-cross-icn:hover > span{
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-cross-icn {
    position: absolute;
    right: 12px;
    bottom: 7px;
    width: 22px;
    height: 22px;
    background: #ff5252;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error-cross-icn:before, .error-cross-icn:after {
    position: absolute;
    content: ' ';
    height: 50%;
    width: 3px;
    background-color: #fff;
}
.error-cross-icn:before {
    transform: rotate(45deg);
}
.error-cross-icn:after {
    transform: rotate(-45deg);
}
```

### Contribute

This is an initial project and has many vulnerabilities.
I like to get support and contribution from other developers in making this library a success whereas I'll be giving a good amount of time to the library as well. To contribute simply

**Post an Issue**


__or__


**Simply fork the project**

**Make changes**

**Give me a pull request**


# Thanks for your support