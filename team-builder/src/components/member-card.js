import React from 'react';

const MemberCard = (props) => {
    return(
        <div>
            <h2>Name: {props.member.name}</h2>
            <h3>Email: {props.member.email}</h3>
            <h3>Role: {props.member.role}</h3>
        </div>
    )
}

export default MemberCard;