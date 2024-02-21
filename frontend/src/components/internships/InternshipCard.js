import React from 'react';

const InternshipCard = ({ internship }) => {
    return (
        <div className="internship-card">
            <h3>{internship.role}</h3>
            <p>{internship.companyName}</p>
            <p>CTC/Stipend: {internship.ctc}</p>
            <p>Experience Required: {internship.experienceRequired}</p>
            <button>Apply</button>
        </div>
    );
};

export default InternshipCard;
