import './leftbar.css'
import {RssFeed, Chat, VideoLibrary, Group, Bookmark, ContactSupport,Work, Event, School } from '@mui/icons-material'
import {Users} from '../../dummyData'
import CloseFriend from '../closeFriend/CloseFriend'

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
              {Users.map((u) => (<CloseFriend key={u.id} user={u}/>))}
           </ul>
        </div>

    </div>
  )
}
