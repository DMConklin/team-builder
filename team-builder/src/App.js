import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MemberCard from './components/member-card';

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

  return (
    <div className="App">
      {teamList.map(member => (
        <MemberCard key={member.memId} member={member} />
      ))}
    </div>
  );
}

export default App;
