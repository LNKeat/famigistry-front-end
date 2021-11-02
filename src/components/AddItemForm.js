import React, { useState } from 'react'


function AddItemForm({ member, handleAddItem, hideForm }) {
  const [formData, setFormData] = useState({
    id: 0,
    item: "",
    price: "$",
    url: "",
    desc: "",
    specs: "", 
    store: "", 
    purchased: false
  })

  function handleChange(e){
    const newFormData = {
      ...formData, [e.target.name]: e.target.value
    }
    setFormData(newFormData)
  }

  function handleSubmit(e){
    // e.preventDefault()
    const itemID = member.wishlist.length + 1
    const newItem = {...formData, id:itemID}
    handleAddItem(member, newItem)
    setFormData({
      id: 0,
      item: "",
      price: "$",
      url: "",
      desc: "",
      specs: "",
      store: "",
      purchased: false
    })
  }

  return (
    <div className="new-item-wrapper">
      
      <h1>Add item to {member.nameFirst}'s wishlist</h1>
      <form onSubmit={handleSubmit}>
        <button className="close-btn" onClick={hideForm}>X</button><br />
        <label>Item </label>
        <input type="text" name="item" placeholder="Item name" onChange={handleChange} value={formData.item} />
        <label>Store </label>
        <input type="text" name="store" placeholder="Store" onChange={handleChange} value={formData.store} />
        <label>Item Link </label>
        <input type="text" name="url" placeholder="url" onChange={handleChange} value={formData.url} />
        <label>Price (usd) </label>
        <input type="text" name="price" placeholder="$" onChange={handleChange} value={formData.price} />
        <label>Item Description (color, material, etc.) </label>
        <input type="text" name="desc" placeholder="Description" onChange={handleChange} value={formData.desc} />
        <label>Item Specifications (size, model, etc.) </label>
        <input type="text" name="specs" placeholder="Specs" onChange={handleChange} value={formData.specs} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default AddItemForm;
