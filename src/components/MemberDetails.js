
import ItemCard from "./ItemCard";


function MemberDetails({ member, closeExpand }) {
  const { id, nameFirst, nameLast, pic, wishlist } = member
  return (
    <div className="member-details">
      <button onClick={closeExpand}>X</button>
      <h2>{nameFirst} {nameLast}'s Wishlist:</h2>
      <h3>{id}</h3>
      {/* <Link to={`/members/${member.id}`}>Add item to wishlist</Link> */}
      <img src={pic} alt="" />
      <div className="item-cards">
        {
          wishlist.map(item => <ItemCard key={item.id} item={item} />)
        }
      </div>
    </div>
  )
}

export default MemberDetails;