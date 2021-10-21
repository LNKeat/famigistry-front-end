function MemberCard({ member, handleExpandView }){
  return (
    <div className="member-small" onClick={() => handleExpandView(member)}>
      <h2>{member.nameFirst} {member.nameLast}</h2>
      <img src={member.pic} alt="member" />
      <h3>Items in wishlist: {member.wishlist.length}</h3>
    </div>
  )
}

export default MemberCard;