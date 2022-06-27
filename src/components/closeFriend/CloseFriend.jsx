import './closeFriend.css'

export default function closeFriend({user}) {
  return (
    
    <li className="leftbarFriend">
               <img className='leftbarFriendImg' src={user.profilePicture} alt='' />
               <span className="leftbarFriendName">{user.username}</span>
    </li>
   
  )
}
