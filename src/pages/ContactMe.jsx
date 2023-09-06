// import ability to use state for the form
import { useState, useEffect } from "react";

function ContactForm(props) {
    // set up input values as state elements
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    

    // validate inputs
    useEffect(() => {
        console.log(name);

        if(name == '') {
            const error = document.createElement('div');
            // give id of error
            error.setAttribute('id', 'error');

            // warning for user
            error.innerHTML = 'Fill in the highlighted fields';
            error.style.color = 'red';
            document.getElementById('name').prepend(error);
            document.getElementById('name').style.borderColor = 'red';
        }
        else {
            const error = document.getElementById('error');
            if (error) {
                error.remove();
            }
            document.getElementById('name').style.borderColor = '';
        }
    });

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="name"
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input id="email"
                    type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <textarea id="text"
                    type="text"
                    placeholder="Enter Your Comment"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                >
                </textarea>
                <button type="submit">Send</button>
            </form>
        </div>
    );
}

export default ContactForm;
