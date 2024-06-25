import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react'

const Sendemail = () => {

    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(false);

    const handleEamil = (e) => {
        setEmail(e.target.value);
    }

    const sendEmail = async (e) => {
        e.preventDefault();

        const res = await fetch('http://localhost:8000/v1/sendEmail', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            }, body: JSON.stringify({
                email
            })
        })

        const data = await res.json();

        if (data.status === 401 || !data) {
            console.log("error");
        } else {
            console.log("Email Sent");
            setEmail("");
            setMessage(true);

            setTimeout(() => {
                setMessage(false);
            }, 3000);
        }
    }

    return (
        <div>
            <div className="sendmail">
                {
                    message ? (
                        <div>Email send Successfully!</div>
                    ) : ""
                }
                <div>Send Emails</div>
                <div className="enteremail">
                    <input type="text" placeholder='Enter your email' onChange={handleEamil} value={email} />
                </div>
                <button onClick={sendEmail} >send</button>
            </div>

            <div className='button'>
            <Link to='/addvolunteer'>ADD VOLUNTEER IN DATABASE</Link>
            </div>

        </div>
    )
}

export default Sendemail
