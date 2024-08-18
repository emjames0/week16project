import React from 'react';
import { Table } from 'react-bootstrap';
import MemberRow from './MemberRow';

function MemberTable({ members, onEditMember, onDeleteMember }) {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {/* table headers for each column */}
          <th>Photo</th>
          <th>Name</th>
          <th>Number</th>
          <th>Height</th>
          <th>Position</th>
          <th>Goals</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* below maps through members array and renders a MemberRow for each member added */}
        {members.map(member => (
          <MemberRow
            key={member.id}
            member={member}
            onEditMember={onEditMember}
            onDeleteMember={onDeleteMember}
          />
        ))}
      </tbody>
    </Table>
  );
}

//exports MemberTable as the default 
export default MemberTable;