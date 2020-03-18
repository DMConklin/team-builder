import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { MemberCard, Form } from './components';
 
function App() {
  const [teamList, setTeamList] = useState([
  {
    name: 'Darrell Conklin',
    email: 'dmconklin84@gmail.com',
    role: 'Backend Engineer',
    memId: 1
  },
  {
    name: 'Kim Buck',
    email: 'kimbuck@email.com',
    role: 'Designer',
    memId: 2
  },
  {
    name: 'Amber Chunn',
    email: 'amberchunn@email.com',
    role: 'Frontend Engineer',
    memId: 3
  }
  ]);

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    role: ""
  });

  const formStateSetter = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="App">
      <Form formStateSetter={formStateSetter} />
      <MemberCard member={formState} />
      {teamList.map(member => (
        <MemberCard key={member.memId} member={member} />
      ))}
    </div>
  );
}

export default App;
