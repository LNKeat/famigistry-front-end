import React, { useState } from 'react'


function ItemCard({ item, member, membersAPI, setDisplayedMember }){
  const [isPurchased, setIsPurchased] = useState(item.purchased)
  
  function handleChange(event){
    event.stopPropagation()
    const updatedItem = {...item, purchased:!isPurchased}
    const updatedWishlist = member.wishlist.map(item => {
      if(item.id === updatedItem.id){
        return updatedItem
      }else{
        return item
      }
    })
    const updatedMember = {...member, wishlist: updatedWishlist}

    fetch(`${membersAPI}/${member.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedMember)
    })
    .then(res => res.json())
    .then(newMemberData => {
      console.log(newMemberData.wishlist.find(newItem => newItem.id === item.id).purchased)
      setIsPurchased(newMemberData.wishlist.find(newItem => newItem.id === item.id).purchased)
    })
  }

  function handleClick(){
    const updatedWishlist = member.wishlist.filter(removeItem => item.id !== removeItem.id)
    const updatedMember = {...member, wishlist: updatedWishlist}

    fetch(`${membersAPI}/${member.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedMember)
    })
    .then(res => res.json())
    .then(updatedMemberData => setDisplayedMember(updatedMemberData))
    // .then(() => setIsPurchased(item.purchased))
  }

  return (
    <div className={isPurchased ? "item-card bought" : "item-card" }>
      <h4>{item.item}</h4>
      <h4>Store: <a  href={item.url} target="blank">{item.store}</a></h4>
      <p>Price: {item.price}</p>
      <ul>
        <li>Description:  {item.desc}</li>
        <li>Specifications: {item.specs}</li>
      </ul>
      <div className="purchased">
        <p>Purchased:</p>
        <input type="checkbox" name="purchased" checked={isPurchased} onChange={handleChange}  />
      </div>
      <button onClick={handleClick}>Remove item</button>
    </div>
  )
}
export default ItemCard;