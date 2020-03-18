import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 250px;
    margin: 0 auto;
`;

const Form = (props) => {
    return(
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id ="name" placeholder="First Last" onChange={props.formStateSetter} /><br />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" onChange={props.formStateSetter} /><br />
            <input type="radio" name="role" id="back-engine" value="Backend Engineer" onChange={props.formStateSetter} />
            <label for="back-engine">Backend Engineer</label><br /> 
            <input type="radio" name="role" id="front-engine" value="Frontend Engineer" onChange={props.formStateSetter} />
            <label for="back-engine">Backend Engineer</label><br />
            <input type="radio" name="role" id="designer" value="Designer" onChange={props.formStateSetter} />
            <label for="designer">Designer</label>
        </form>
    )
}

export default Form;