import React, { useState, useEffect } from 'react'
import { useParams, Redirect } from 'react-router-dom'
import AddItemForm from "./AddItemForm"
import MemberDetails from "./MemberDetails"


function DisplayMember({ onAddItem, handlePurchased, membersAPI }) {
  const [isFormView, setIsFormView] = useState(false)
  const [displayedMember, setDisplayedMember] = useState({})

  const params = useParams()

  useEffect(() => {
    fetch(`http://localhost:3000/members/${params.id}`)
      .then(res => res.json())
      .then(member => setDisplayedMember(member))
  }, [])

  const handleAddItem = (updatedMember) => {
    setIsFormView(false)
    setDisplayedMember(updatedMember)
    onAddItem && onAddItem(updatedMember)
  }
  
  return (
    <div>
      {isFormView && <AddItemForm member={displayedMember} onAddItem={handleAddItem}  hideForm={() => setIsFormView(false)} />}
      {displayedMember && <MemberDetails member={displayedMember} handleClick={() => setIsFormView(true)} membersAPI={membersAPI} setDisplayedMember={setDisplayedMember} /> }
    </div>
  )
}

export default DisplayMember