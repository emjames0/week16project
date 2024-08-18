import React, { useState, useEffect } from 'react';
//below imports the components I planed to use from React Bootstrap
import { Container, Button } from 'react-bootstrap'; 
//below imports the MemberTable and MemerModel components for the TeamPage
import MemberTable from '../components/MemberTable';  
import MemberModal from '../components/MemberModal';  
//below imports the needed functions for the API calls
import { addMember, updateMember, deleteMember } from '../apiService';  
//below imports the custom styling
import '../styles/TeamPage.css';  

function TeamPage() {
// below are State hooks to manage the team members, modal visibility, and selected member for editing
  const [members, setMembers] = useState([]);
  const [showMemberModal, setShowMemberModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

// useEffect to fetch team members from the API when the component mounts
  useEffect(() => {
    const fetchMembers = async () => {
      const response = await fetch('https://66b694cb7f7b1c6d8f19b6db.mockapi.io/members');
      const data = await response.json(); 
      setMembers(data);  
    };
    fetchMembers();  
  }, []);  

// Handler to open the modal for adding a new member
  const handleAddMember = () => {
    setSelectedMember(null);  // Clear any selected member
    setShowMemberModal(true);  
  };

// Handler to save a new or edited member
  const handleSaveMember = async (member) => {
    if (member.id) {
// If the member already exists, update the existing member
      await updateMember(member.id, member);
      setMembers(members.map(m => (m.id === member.id ? member : m))); 
    } else {
// If the member is new, add it to the list
      const response = await addMember(member);
      setMembers([...members, response.data]); 
    }
    setShowMemberModal(false);
  //Clears the selected member
    setSelectedMember(null);
  };

// Handler to edit a selected member
  const handleEditMember = (member) => {
    setSelectedMember(member);  
    setShowMemberModal(true); 
  };

// Handler to delete a member
  const handleDeleteMember = async (id) => {
    await deleteMember(id);  
    setMembers(members.filter(member => member.id !== id)); 
  };

  return (
    <Container className="mt-5">
      {/* Button to open the modal for adding a new member */}
      <Button variant="primary" onClick={handleAddMember}>Add Member</Button>

      {/* Table to display the list of members with edit and delete options */}
      <MemberTable
        members={members}
        onEditMember={handleEditMember}
        onDeleteMember={handleDeleteMember}
      />

      {/* Modal for adding or editing a member */}
      <MemberModal
        show={showMemberModal}
        onHide={() => setShowMemberModal(false)}
        member={selectedMember}
        onSave={handleSaveMember}
      />
    </Container>
  );
}

// Exports the the TeamPage component as default
export default TeamPage; 