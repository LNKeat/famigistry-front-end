import React, { useState } from 'react';

function NewMemberForm({ handleSubmit }) {

  const [newMemData, setNewMemData] = useState({
    nameFirst:'',
    nameLast: '',
    pic: '',
    wishlist: []
  })

  function handleChange(e){
    const updated= {...newMemData, [e.target.name]: e.target.value}
    setNewMemData(updated)
  }


  return (
    <div className="NewMember-wrapper">
      <h1>New Member Form Page</h1>
      <form className="add-member-form" onSubmit={(e) => handleSubmit(e, newMemData)}>
        <div className="form-section1">
        <label>First Name
          <input type="text" name="nameFirst" placeholder="Name" value={newMemData.nameFirst} onChange={handleChange} />
        </label>
        <label>Last Name
          <input type="text" name="nameLast" placeholder="Name" value={newMemData.nameLast}  onChange={handleChange} />
        </label>
        <label>Profile Pic (enter url)
          <input type="text" name="pic" placeholder="Image url" value={newMemData.pic}  onChange={handleChange} />
        </label>
        </div>
        <div className="form-section2">
        <button id="submit-new-member">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default NewMemberForm;