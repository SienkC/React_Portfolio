// import ability to use state for the form
import { useState, useEffect } from "react";

function ContactForm(props) {
    // set up input values as state elements
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [text, setText] = useState('');

    // // to prevent validation on first load
    // useEffect(() => {
    //     document.getElementById('name').style.borderColor = '';
    // }, []);

    // // validate inputs
    // useEffect(() => {
    //     console.log(name);

    //     if(name == '') {
    //         const error = document.createElement('div');
    //         // give id of error
    //         error.setAttribute('id', 'error');

    //         // warning for user
    //         error.innerHTML = 'Fill in the highlighted fields';
    //         error.style.color = 'red';
    //         document.getElementById('name').prepend(error);
    //         document.getElementById('name').style.borderColor = 'red';
    //     }
    //     else {
    //         const error = document.getElementById('error');
    //         if (error) {
    //             error.remove();
    //         }
    //         document.getElementById('name').style.borderColor = '';
    //     }
    // });

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
            const error = document.createElement('div');
            // give id of error
            error.setAttribute('id', 'error');

            // warning for user
            error.innerHTML = 'Fill in the highlighted fields';
            error.style.color = 'red';
            // e.target.prepend(error);
            e.target.previousElementSibling.innerHTML = 'Enter your name!';
            e.target.style.borderColor = 'red';
            // e.target.placeholder = 'Fill in the field before submitting!'
        }
        else {
            
        }

        if (name === 'name') {
            setName(value);
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
                    onChange={(e) => setEmail(e.target.value)}
                >
                </input>
                <label id="textWarn"></label>
                <textarea id="text"
                    type="text"
                    name="text"
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
