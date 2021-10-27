function ItemCard({ item }){
  return (
    <a className="item-card" href={item.url} target="blank">
      <h4>{item.item}</h4>
      <p>Price: {item.price}</p>
      <ul>
        <li>Description:  {item.desc}</li>
        <li>Specifications: {item.specs}</li>
      </ul>
    </a>
  )
}
export default ItemCard;