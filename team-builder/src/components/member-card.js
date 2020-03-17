import React from 'react';

const MemberCard = (props) => {
    return(
        <div>
            <h2>{props.member.fname} {props.member.lname}</h2>
            <h3>Cohort: {props.member.cohort}</h3>
        </div>
    )
}

export default MemberCard;