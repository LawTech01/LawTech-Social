import './leftbar.css'
import {RssFeed, Chat, VideoLibrary, Group, Bookmark, ContactSupport,Work, Event, School } from '@mui/icons-material'

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <div className="leftbarWrapper">
           <ul className="leftbarList">
             <li className="leftbarListItems">
                <RssFeed className='leftbarIcon'/>
                <span className="leftbarListItemText">Feed</span>
             </li>
             <li className="leftbarListItems">
                <Chat className='leftbarIcon'/>
                <span className="leftbarListItemText">Chat</span>
             </li>
             <li className="leftbarListItems">
                <VideoLibrary className='leftbarIcon'/>
                <span className="leftbarListItemText">Videos</span>
             </li>
             <li className="leftbarListItems">
                <Group className='leftbarIcon'/>
                <span className="leftbarListItemText">Groups</span>
             </li>
             <li className="leftbarListItems">
                <Bookmark className='leftbarIcon'/>
                <span className="leftbarListItemText">Bookmarks</span>
             </li>
             <li className="leftbarListItems">
                <ContactSupport className='leftbarIcon'/>
                <span className="leftbarListItemText">Questions</span>
             </li>
             <li className="leftbarListItems">
                <Work className='leftbarIcon'/>
                <span className="leftbarListItemText">Jobs</span>
             </li>
             <li className="leftbarListItems">
                <Event className='leftbarIcon'/>
                <span className="leftbarListItemText">Events</span>
             </li>
             <li className="leftbarListItems">
                <School className='leftbarIcon'/>
                <span className="leftbarListItemText">Courses</span>
             </li>
           </ul>
           <button className='leftbarButton'>Show More</button>
           <hr className='leftbarHr'/>
           <ul className="leftbarfriendList">
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Raphael Tosin</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Ogun Tosin</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Ibrahim Salam</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Shodek Autos</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Lawal Abidex</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Sir Lharw</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Lambe SJ</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">My bABY</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Bolaji Carew</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Idris KJ</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Okaka Akoka</span>
             </li>
             <li className="leftbarFriend">
               <img className='leftbarFriendImg' src='assets/person/2.jpeg' alt='' />
               <span className="leftbarFriendName">Abiola Lawrence</span>
             </li>
           </ul>
        </div>

    </div>
  )
}
