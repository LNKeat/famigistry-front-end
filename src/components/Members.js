import React, { useState } from 'react';
import "./Members.css";
import MemberCard from "./MemberCard.js"

function Members({ fullMembers }) {
  const [searchInput, setSearchInput] = useState('')
  const [filteredMembers, setFilteredMembers] = useState(fullMembers)


  function handleChange(e) {
    setSearchInput(e.target.value)
    handleMemberListChange(e.target.value)
  }

  function handleMemberListChange (search){
    const filteredList = fullMembers.filter(member => {
      return member.nameFirst.toLowerCase().includes(search.toLowerCase()) || member.nameLast.toLowerCase().includes(search.toLowerCase()) || member.id.toString().includes(search)
    })
    setFilteredMembers(filteredList)
  }

  return (
    <div className="Members-wrapper">
      <div>
        <div className="search-section">
          <h1 style={{textAlign: "center"}}>Find an existing member</h1>
          <p>You can view an established member's wishlist or add to it. </p>
          <label>Search by name or member id:  </label>
          <input className="add-Member-input" onChange={handleChange} type="text" name="search" placeholder="Search" value={searchInput} />

          <h3>Members:</h3>
          <p>Click on a member to expand details: </p>
        </div>

        <div className="members-small-container">
          <div className="members-list">
            {filteredMembers.map(member => <MemberCard key={member.id} member={member} />)}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Members;