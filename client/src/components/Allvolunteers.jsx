import React, { useEffect, useState } from 'react'
import './Allvolunteer.css';

const Allvolunteers = () => {
    const [volunteers, setVolunteers] = useState([]);

    useEffect(() => {
        const fetchVlounteer = async () => {
            const data = await fetch('http://localhost:8000/v1/allvolunteers')
            try {
                const response = await data.json();
                console.log(response);
                setVolunteers(response);
            } catch (error) {
                console.log(`Error while fetching users ${error}`);
            }
        }
        fetchVlounteer();
    }, [])
    return (
        <div>
            <div className="heading">All Volunteers</div>
            {
                volunteers.map((item, index) => (
                    <div className='volunteerpage' key={index}>
                        <div className="volunteer">
                        <div className='email'>{index+1})  {item.email}</div>
                        <div>{item.name}</div>
                        <div>{item.department}</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Allvolunteers
