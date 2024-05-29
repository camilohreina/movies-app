import React from 'react';

const TeamMember = ({ name, role, image }) => {
    return (
        <div className="flex items-center">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p>{role}</p>
        </div>
    );
};

export default TeamMember;

