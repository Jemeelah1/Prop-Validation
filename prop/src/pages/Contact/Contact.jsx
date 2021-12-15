import './Contact.css';
import  { useEffect, useState } from "react";

function Contact () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    return (
        <div>
            <div>
               <h2 className="title">Contact Us</h2>
                <p>Let us know what you think! <br />
                please do not hesitate to give us your feedback... Thank you!</p>
            </div>
                <div className="form">
                    <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /> <br />
                    <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /> <br />
                    <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea> <br />
                    <div className="send">
                    <button>Send Message</button>
                    </div> 
                    <br />
                    <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
                </div>        
        </div>
    )
}

export default Contact
