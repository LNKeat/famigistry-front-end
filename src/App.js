import './App.css';
import React, { useState, useEffect } from 'react'
import { Route, Switch, useHistory } from "react-router-dom";
import NavBar from './components/NavBar';
import Home from './components/Home';
import Members from './components/Members';
import NewMemberForm from './components/NewMemberForm';

const membersAPI = 'http://localhost:3000/members'

function App() {
  const history = useHistory()
  const [memberList, setMemberList] = useState([]);
  const [fullMemberList, setFullMemberList] = useState([]);

  useEffect(() => {
   fetch(membersAPI)
   .then(res => res.json())
   .then(membersData => {
     setMemberList(membersData)
     setFullMemberList(membersData)
   })
  }, [])


  function updateMemberList (search){
    const filteredList = fullMemberList.filter(member => {
      return member.nameFirst.toLowerCase().includes(search.toLowerCase()) || member.nameLast.toLowerCase().includes(search.toLowerCase()) || member.id.toString().includes(search)
    })
    setMemberList(filteredList)
  }

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
      setMemberList(updatedList)
      setFullMemberList(updatedList)
      history.push("/members")
    })
  }

  function handleAddItem(member){

  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/members">
          <Members members={memberList} updateMemberList={updateMemberList} />
        </Route>
        <Route exact path="/add">
          <NewMemberForm handleSubmit={handleNewMemberSubmit} />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
