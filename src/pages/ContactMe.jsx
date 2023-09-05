// import ability to use state for the form
import { useState } from "react";

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

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                >
                </input>
                <input
                    type="text"
                    placeholder="Enter Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <textarea cols="30" rows="10"
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

export default function ContactMe() {
    // return form for Contact Me page
    return (
        <div>

        </div>
    );
}