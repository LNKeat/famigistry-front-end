function ItemCard({ item }){
  return (
    <div className="item-card">
      <h4>{item.item}</h4>
      <p>Price: {item.price}</p>
      <a href={item.url} target="blank">{item.url}</a>
      <ul>
        <li>Description:  {item.desc}</li>
        <li>Specifications: {item.specs}</li>
      </ul>
    </div>
  )
}
export default ItemCard;