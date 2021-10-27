import { Link } from 'react-router-dom'
import ItemCard from "./ItemCard";


function MemberDetails({ member, closeExpand, handleClick }) {
  const { id, nameFirst, nameLast, pic, wishlist } = member
  return (
    <div className="member-details">
      <div className="expanded-btns-container">
        <Link to={"/members/"} style={{ textDecoration: "none" }}>
          <button className="close-btn" onClick={closeExpand}>
            X
          </button>
        </Link>
        <div>
          <button onClick={handleClick}>Add items to wishlist</button>
        </div>
      </div>
      <div className="member-info">
        <h2>{nameFirst} {nameLast}'s Wishlist:</h2>
        <h3>{id}</h3>
        <img src={pic} alt="" />
      </div>
      <div className="item-cards">
        {
          wishlist && wishlist.map(item => <ItemCard key={item.id} item={item} />)
        }
      </div>

    </div>
  )
}

export default MemberDetails;