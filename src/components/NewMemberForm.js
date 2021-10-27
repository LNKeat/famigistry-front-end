import React, { useState } from 'react';

function NewMemberForm({ handleSubmit }) {

  const [newMemData, setNewMemData] = useState({
    nameFirst: '',
    nameLast: '',
    pic: '',
    wishlist: []
  })

  function handleChange(e) {
    const updated = { ...newMemData, [e.target.name]: e.target.value }
    setNewMemData(updated)
  }


  return (
    <div className="NewMember-wrapper">
      <h1>New Member Form Page</h1>
      <form className="add-member-form" onSubmit={(e) => handleSubmit(e, newMemData)}>
        <div className="form-section1">
          <div className="first-name">
            <label>First Name </label>
            <input type="text" name="nameFirst" placeholder="Name" value={newMemData.nameFirst} onChange={handleChange} />
          </div>
          <div className="last-name">
            <label>Last Name </label>
            <input type="text" name="nameLast" placeholder="Name" value={newMemData.nameLast} onChange={handleChange} />
          </div>
          <br />
          <div className="profile-pic">
            <label>Profile Pic (enter url) </label>
            <input type="text" name="pic" placeholder="Image url" value={newMemData.pic} onChange={handleChange} />
          </div>

        </div>
        <div className="form-section2">
          <button className="submit-new-member">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewMemberForm;