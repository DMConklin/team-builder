import React from 'react';

const Form = (props) => {
    return(
        <form onSubmit={props.addTeamMember}>
            <label htmlFor="name">Name</label>
            <input name="name" id ="name" placeholder="First Last" value={props.formState.name} onChange={props.formStateSetter} /><br />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" value={props.formState.email} onChange={props.formStateSetter} /><br />
            <input type="radio" name="role" id="back-engine" value="Backend Engineer" onChange={props.formStateSetter} checked />
            <label htmlFor="back-engine">Backend Engineer</label><br /> 
            <input type="radio" name="role" id="front-engine" value="Frontend Engineer" onChange={props.formStateSetter} />
            <label htmlFor="back-engine">Frontend Engineer</label><br />
            <input type="radio" name="role" id="designer" value="Designer" onChange={props.formStateSetter} />
            <label htmlFor="designer">Designer</label>
            <br /><br />
            <button>Add Member</button>
        </form>
    )
}

export default Form;