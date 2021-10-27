import React, { useState } from 'react';
import "./Members.css";
import MemberCard from "./MemberCard.js"
import MemberDetails from "./MemberDetails.js"

function Members({ members, updateMemberList }) {
  const [searchInput, setSearchInput] = useState('')
  const [memberExpanded, setMemberExpanded] = useState(null)

  function handleChange(e) {
    setSearchInput(e.target.value)
    updateMemberList(e.target.value)
  }

  function handleExpandView(member) {
    setMemberExpanded(member)
  }

  function closeExpand() {
    setMemberExpanded(null)
  }

  return (
    <div className="Members-wrapper">
      <div className="search-section">
        <h1>Find a member</h1>
        <p>You can view an established member's wishlist or add to it. </p>
        <label>Search by name or member id:  </label>
        <input className="add-Member-input" onChange={handleChange} type="text" name="search" placeholder="Search" value={searchInput} />

        <h3>Members:</h3>
        <p>Click on a member to expand details: </p>
      </div>

      <div className="members-small-container">
        {
          memberExpanded ? <MemberDetails member={memberExpanded} closeExpand={closeExpand} /> : null
        }
        <div className="members-list">
          {members.map(member => <MemberCard key={member.id} member={member} handleExpandView={handleExpandView} />)}
        </div>
      </div>
    </div>
  )
}

export default Members;