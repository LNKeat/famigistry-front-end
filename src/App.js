import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Members from './components/Members';
import NewMemberForm from './components/NewMemberForm';
import DisplayMember from './components/DisplayMember'

const membersAPI = 'http://localhost:3000/members' 

function App() {
  const history = useHistory()
  const [fullMemberList, setFullMemberList] = useState([]);

  useEffect(() => {
   fetch(membersAPI)
   .then(res => res.json())
   .then(membersData => {
     setFullMemberList(membersData)
   })
  }, [])



  function handleNewMemberSubmit(e, newMember){
    e.preventDefault()
    fetch(membersAPI, {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newMember)
    })
    .then(res => res.json())
    .then(newMemberData => {
      const updatedList= [newMemberData, ...fullMemberList] 
      setFullMemberList(updatedList)
      history.push(`/members/`)
    })
  }

  function handleAddItem(updatedMember){
   fetch(`${membersAPI}/${updatedMember.id}`, {
      method: 'PUT',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedMember)
    })
    // const newMemberData = await response.json() 
    //   const updatedList = [...fullMemberList, newMemberData]
    //   setMemberList(updatedList)
    //   setFullMemberList(updatedList)
  
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/members">
          <Members fullMembers={fullMemberList} membersAPI={membersAPI} />
        </Route>
        <Route exact path="/add-member">
          <NewMemberForm handleSubmit={handleNewMemberSubmit} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/members/:id" >
          <DisplayMember onAddItem={handleAddItem} membersAPI={membersAPI}  />
        </Route>
      </Switch>
    </>
  );
}

export default App;
