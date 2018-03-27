import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Form from '../RCForm';
import style from './style.styl';

const form_data = [
        [
            {
                label: "First Name",
                input: {
                    type: 'text',
                    name: 'first_name',
                    required: true,
                    className: "form-control"
                },
                validation: 'required'
            },
            {
                label: "Last Name",
                input: {
                    type: 'text',
                    required: true,
                    name: 'last_name',
                }
            }
        ],
        {
            label : 'Mobile',
            input: {
                type: 'text',
                required: true,
                name: 'mobile',
            },
            validation: 'required||number'
        },
        {
            label: "Email",
            input: {
                type: 'email',
                required: true,
                name: 'email',
            },
            validation: 'required||email'
        },
        {
            label: "Password",
            input : {
                type: 'password',
                required: true,
                name: "password",
            },
            validation: 'required'
        },
        {
            label: "Confirm Password",
            input : {
                type: 'password',
                required: true,
                name: "confirm_password",
            },
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
				<div className="rc-form-container">
					<Form
                        className="user-form" 
                        data={form_data} 
                        heading={'Register with us'}
                        method="post"
                        submitValue={'Register'}
                        submitClassName="btn-md btn-blue"
                        validateOnBlur={true}
                    /> 
				</div>
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
