import React from 'react';

const Form = () => {
    return(
        <form>
            <label for="name">Name</label>
            <input type="text" name="name" id ="name" placeholder="First Last" />
            <label for="email">Email</label>
            <input type="email" name="email" id="email" placeholder="Email" />
            <input type="radio" name="role" id="back-engine" value="Backend Engineer" />
            <label for="back-engine">Backend Engineer</label> 
            <input type="radio" name="role" id="front-engine" value="Frontend Engineer" />
            <label for="back-engine">Backend Engineer</label>
            <input type="radio" name="role" id="designer" value="Designer" />
            <label for="designer">Designer</label>
        </form>
    )
}

export default Form;