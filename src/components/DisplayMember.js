import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import AddItemForm from "./AddItemForm"
import MemberDetails from "./MemberDetails"


function DisplayMember({ handleAddItem, handlePurchased, membersAPI }) {
  const [isFormView, setIsFormView] = useState(false)
  const [displayedMember, setDisplayedMember] = useState([])

  const params = useParams()

  useEffect(() => {
    debugger
    fetch(`http://localhost:3000/members/${params.id}`)
      .then(res => res.json())
      .then(member => setDisplayedMember(member))
  }, [])


  return (
    <div>
      {isFormView && <AddItemForm member={displayedMember} handleAddItem={handleAddItem} hideForm={() => setIsFormView(false)} />}
      {displayedMember && <MemberDetails member={displayedMember} handleClick={() => setIsFormView(true)} membersAPI={membersAPI} setDisplayedMember={setDisplayedMember} /> }
    </div>
  )
}

export default DisplayMember