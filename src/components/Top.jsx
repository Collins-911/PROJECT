import '../css/top.css';
import { FaSearch, FaBell, FaCog } from 'react-icons/fa';
import bg from '../assets/pictures/bg.png';

export default function Top() {
  return (
    <div className="top">
      <div className="search-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
        />
      </div>

      <div className="right">
        <div className="notification">
          <FaBell className="icon" />
        </div>

        <div className="profile">
          <div className="avatar-wrapper">
            <img src={bg} alt="Profile" />
            <span className="status-dot"></span>
          </div>

          <div className="info-select">
            <div className="name">
              <strong>Alex Ryan</strong>
              <span>@alexgg</span>
            </div>
           
          </div>
        </div>

        <div className="settings">
          <FaCog className="icon" />
        </div>
      </div>
    </div>
  );
}
