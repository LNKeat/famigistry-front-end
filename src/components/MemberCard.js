import { Link } from 'react-router-dom'



function MemberCard({ member, handleExpandView }){
  return (
    <Link to={`/members/${member.id}`} style={{textDecoration:"none"}}>
    <div className="member-small" onClick={() => handleExpandView(member)}>
      <h2>{member.nameFirst} {member.nameLast}</h2>
      <h3>Member ID: {member.id}</h3>
      <div className="image-container">
      <img src={member.pic} alt="member" />
      </div>
      <h3>Items in wishlist: {member.wishlist.length}</h3>
    </div>
    </Link>
  )
}

export default MemberCard;