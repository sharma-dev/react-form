import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Form, Input } from '../src';
import style from './style.css';

const form_data = [
        {
            placeholder: "First Name",
            type: 'text',
            name: 'first_name',
            className: "form-control",
            validation: 'required'
        },
        {
            placeholder: "Last Name",
            type: 'text',
            name: 'last_name',
        },
        {
            placeholder : 'Mobile',
            type: 'text',
            name: 'mobile',
            validation: ['required','number']
        },
        {
            placeholder: "Email",
            type: 'email',
            required: true,
            name: 'email',
            validation: ['required','email']
        },
        {
            placeholder: "Password",
            type: 'password',
            required: true,
            name: "password",
            validation: 'required'
        },
        {
            placeholder: "Confirm Password",
            type: 'password',
            required: true,
            name: "confirm_password",
            validation: 'required'
        }
    ];

class App extends Component{
	
	componentWillMount(){
		style.ref();
	}
	
	componentWillUnmount(){
		style.unref();
	}

	render(){
		return (
			<div className="example-body">
                <a href="https://github.com/you">
                    <img 
                        style={{position: "absolute", top: 0, left: 0, border: 0}} 
                        src="https://s3.amazonaws.com/github/ribbons/forkme_left_red_aa0000.png" 
                        alt="Fork me on GitHub" />
                </a>
                <div className="text-center">
                    <h2>
                        Example Form
                    </h2>
                    <p>
                        This is example of the form that can be created. For api details and props reffer to github page.
                    </p>
                </div>
				<div className="rc-form-container">
					<Form
                        className="user-form"
                        method="post"
                        submitValue={'Submit'}
                        submitClassName="btn-md btn-blue"
                        defaultPrevented={true}
                    >
                        {form_data.map((el, i) => 
                            <Input {...el} key={i} validateOnBlur={true}/>
                        )}
                        <div className="btn-container">
                            <button
                                type="submit"
                                className="submit-btn"
                            >
                                Submit
                            </button>
                        </div>
                    </Form> 
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
