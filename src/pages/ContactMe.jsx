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

        // check if email is valid
        // make sure all forms have been filed out

        // empty current forms
        setName('');
        setEmail('');
        setText('');
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

        if (name === 'name') {
            setName(value);
        }
        else if (name === 'email') {
            // add extra check for valid email
            setEmail(value);
        }
        else {
            setText(value);
        }
        return;
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label id="nameWarn"></label>
                <input id="name"
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={handleInputChange}
                >
                </input>
                <label id="emailWarn"></label>
                <input id="email"
                    type="text"
                    name="email"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={handleInputChange}
                >
                </input>
                <label id="textWarn"></label>
                <textarea id="text"
                    type="text"
                    name="text"
                    placeholder="Enter Your Comment"
                    value={text}
                    onChange={handleInputChange}
                >
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
