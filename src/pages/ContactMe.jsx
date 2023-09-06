// import ability to use state for the form
import { useState, useEffect } from "react";

function ContactForm(props) {
    // set up input values as state elements
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    // function for submit button
    const handleSubmit = (e) => {
        // keep page from refreshing early
        e.preventDefault();

        // check if email is valid and make sure all forms have been filed out
        if (!name || !email || !text || document.getElementById('emailWarn').innerHTML !== "") {
            alert('Please fill in all the form elements correctly before submitting!');
        }
        else {
            // empty current forms
            setName('');
            setEmail('');
            setText('');
        }
        
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (value === '') {
            e.target.previousElementSibling.innerHTML = 'Field required!';
            e.target.style.borderColor = 'red';
        }
        else {
            e.target.previousElementSibling.innerHTML = '';
            e.target.style.borderColor = '';
        }

        // set value of input item depending on the target typed into
        if (name === 'name') {
            setName(value);
        }
        else if (name === 'email') {
            setEmail(value);

            // add extra check for valid email using regex
            var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

            // show warning if email is not valid
            if(!emailRegex.test(email)) {
                e.target.previousElementSibling.innerHTML = 'Enter a valid email!';
                e.target.style.borderColor = 'red';
            }
        }
        else {
            setText(value);
        }
        return;
    }

    return (
        <div>
            <form className="box has-background-info-light" onSubmit={handleSubmit}>
                <label className="help is-danger" id="nameWarn"></label>
                <input className="input m-2" id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleInputChange}
                >
                </input>
                <label className="help is-danger" id="emailWarn"></label>
                <input className="input m-2" id="email"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={handleInputChange}
                >
                </input>
                <label className="help is-danger" id="textWarn"></label>
                <textarea className="input m-2" id="text"
                    type="text"
                    name="text"
                    placeholder="Enter Your Comment"
                    value={text}
                    onChange={handleInputChange}
                >
                </textarea>
                <button className="m-3 button is-info" type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
