import React from 'react';
//imports the needed component from React-Bootstrap
import { Button } from 'react-bootstrap';

function MemberRow({ member, onEditMember, onDeleteMember }) {
  return (
    <tr>
      <td>
        <img
//below displays a default photo if the member's photo is not provided
          src={member.photo || 'default-photo.png'}
          alt={member.name}
          className="member-picture"
        />
      </td>
      <td>{member.name}</td>
      <td>{member.number}</td>
      <td>{member.height}</td>
      <td>{member.position}</td>
      <td>{member.goals}</td>
      <td>
        {/* the buttons to edit or delete the member, calling corresponding functions with the member data */}
        <Button variant="warning" onClick={() => onEditMember(member)}>Edit</Button>
        <Button variant="danger" onClick={() => onDeleteMember(member.id)}>Delete</Button>
      </td>
    </tr>
  );
}

//exports MemberRow as the default 
export default MemberRow;