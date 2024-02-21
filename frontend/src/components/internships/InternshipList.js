import React, { useState, useEffect } from 'react';
import InternshipCard from './InternshipCard';
import axios from 'axios';

const InternshipList = () => {
    const [internships, setInternships] = useState([]);

    useEffect(() => {
        // Fetch internships from API
        axios.get('API_ENDPOINT_URL')
            .then(response => {
                setInternships(response.data);
            })
            .catch(error => {
                console.error('Error fetching internships:', error);
            });
    }, []);

    return (
        <div>
            {internships.map(internship => (
                <InternshipCard key={internship.id} internship={internship} />
            ))}
        </div>
    );
};

export default InternshipList;
