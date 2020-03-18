import React from 'react';
import './App.css';
import { useState } from 'react';
import { MemberCard, Form } from './components';
 
function App() {
  const [teamList, setTeamList] = useState([
    {
      name: 'Darrell Conklin',
      email: 'dmconklin84@gmail.com',
      role: 'Backend Engineer',
      id: 1
    },
    {
      name: 'Kim Buck',
      email: 'kimbuck@email.com',
      role: 'Designer',
      id: 2
    },
    {
      name: 'Amber Chunn',
      email: 'amberchunn@email.com',
      role: 'Frontend Engineer',
      id: 3
    }
  ]);

  const initFormState = {
    name: "",
    email: "",
    role: "Backend Designer",
    id: null
  };

  const [formState, setFormState] = useState(initFormState);

  const formStateSetter = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  const resetForm = () => {
    setFormState(initFormState);
  }

  const addTeamMember = event => {
    event.preventDefault();
    setTeamList([...teamList, {...formState, id: Date.now()}]);
    resetForm();
  }

  return (
    <div className="App">
      <Form formStateSetter={formStateSetter} addTeamMember={addTeamMember} formState={formState} /><br />
      {teamList.map(member => (
        <MemberCard key={member.id} member={member} />
      ))}
    </div>
  );
}

export default App;
