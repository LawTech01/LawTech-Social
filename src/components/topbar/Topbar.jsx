import './topbar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material'

export default function Topbar() {
  return (
    <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className="logo">LawTech Social</span>
        </div>

        <div className="topbarCenter">
          <div className="search">
            <Search className='searchIcon'/>
            <input placeholder='Search for friend, post or video' className="searchInput" />

          </div>
        </div>

        <div className="topbarRight">
          <div className="topbarLink">
            <span className="topbarLink">Homepage</span>
            <span className="toberlink">Timeline</span>

          </div>
          <div className="topbarIcon">
            <div className="topbarIconItems">
              <Person />
              <div className="topbarIconBadge">1</div>
            </div>
            <div className="topbarIconItems">
              <Chat />
              <div className="topbarIconBadge">4</div>
            </div>
            <div className="topbarIconItems">
              <Notifications />
              <div className="topbarIconBadge">1</div>
            </div>
          </div>
          <img src="/assets/person/1.jpeg" alt="" className="topbarImg" />

        </div>

        
    </div>
  )
}
