import React, { useState } from 'react';
import './Addvolunteer.css'

const AddVolunteer = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        department: '',
    });

    const [message, setMessage] = useState(false);

    const handleChange = async(e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async(e) => {
        e.preventDefault();
        const res = await fetch('http://localhost:8000/v1/addvolunteer',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },body: JSON.stringify({formData})
        })

        const data = await res.json();

        if (data.status === 500 || !data) {
            console.log("error");
        } else {
            setMessage(true);

            setTimeout(() => {
                setMessage(false);
            }, 3000);
        }

        setFormData({
            name: '',
            email: '',
            department: '',
        });
    };

    return (
        <div className="form-container">
             {
                    message ? (
                        <div className="sendmail">Volunteer Added Successfully!</div>
                    ) : ""
                }
            <h2>Add Volunteer</h2>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="department">Department:</label>
                    <select
                        id="department"
                        name="department"
                        value={formData.department}
                        onChange={handleChange}
                        required
                    >
                        <option value="">Select Department</option>
                        <option value="TECH CSE">TECH CSE</option>
                        <option value="TECH ECE">TECH ECE</option>
                    </select>
                </div>

                <div className="form-group">
                    <button type="submit">Add Volunteer</button>
                </div>
            </form>
        </div>
    );
};

export default AddVolunteer;
