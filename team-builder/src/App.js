import React, { useEffect, useState } from 'react';
import './App.css';
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
    role: "",
    id: null
  };

  const [formState, setFormState] = useState(initFormState);
  const [memberToEdit, setMemberToEdit] = useState(initFormState);
  

  const [isEditing, setIsEditing] = useState(false);

  // const [errors, setErrors] = useState({
  //   name: false,
  //   email: false,
  //   rold: false
  // })

  useEffect(() => {
    setFormState({
      name: memberToEdit.name,
      email: memberToEdit.email,
      role: memberToEdit.role
    });
  },[memberToEdit])

  const formStateSetter = event => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value
    })
  }

  // const formValidation = (formData) => {
  //   if (formData.name === '' || formData.name.length < 7) {
  //     setErrors({...errors, name: true});
  //   } else if (errors.name === true) {
  //     setErrors({...errors, name: false});
  //   }

  //   if (formData.email === '') {
  //     setErrors({...errors, email: true})
  //   } else if (errors.email === 'true') {
  //     setErrors({...errors, email: false})
  //   }

  //   if (formData.role === '') {
  //     setErrors({...errors, role: true})
  //   } else if (errors.role === 'true') {
  //     setErrors({...errors, role: true})
  //   }   
  // }

  const resetForm = () => {
    setFormState(initFormState);
  }

  const addTeamMember = event => {
    event.preventDefault();
    setTeamList([...teamList, {...formState, id: Date.now()}]);
    resetForm();
  }

  const editTeamMember = event => {
    event.preventDefault();
    setTeamList( prevState => prevState.filter(member => member.id !== memberToEdit.id).concat({...formState, id: memberToEdit.id}) )
    setIsEditing(false);
    resetForm();
  } 

  const handleEditMember = (member) => {
    setMemberToEdit(member);
    setIsEditing(true);
  }

  const handleRemoveMember = (id) => {
    setTeamList( prevState => {
      return prevState.filter(member => member.id !== id);
    });
  }

  return (
    <div className="App">
      <Form formStateSetter={formStateSetter} addTeamMember={addTeamMember} editTeamMember={editTeamMember} formState={formState} isEditing={isEditing} /><br />
      {teamList.map(member => (
        <MemberCard key={member.id} member={member} editMember={handleEditMember} removeMember={handleRemoveMember} />
      ))}
    </div>
  );
}

export default App;
