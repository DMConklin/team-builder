import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MemberCard from './components/member-card';

function App() {
  const [teamList, setTeamList] = useState([
  {
    fname: 'Darrell',
    lname: 'Conklin',
    cohort: 'WEBPT14',
    memId: 1
  },
  {
    fname: 'Kim',
    lname: 'Buck',
    cohort: 'WEBPT14',
    memId: 2
  },
  {
    fname: 'Amber',
    lname: 'Chunn',
    cohort: 'WEBPT14',
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
