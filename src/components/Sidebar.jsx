import '../css/sidebar.css';
import { AiFillDashboard, AiOutlineUsergroupAdd, AiOutlineShoppingCart } from 'react-icons/ai';
import { FaGamepad, FaBell, FaMoneyCheckAlt } from 'react-icons/fa';
import Navigation from './navigation';

export default function Sidebar() {

  const {
    gameList,
    home,
    purchased,
    friends
  } = Navigation();
  
  
  return (
    <div className="sidebar">
      <ul className="menu">
        <li onClick={home} ><AiFillDashboard className="icon"/> My Dashboard</li>
        <li onClick={gameList}><FaGamepad className="icon" /> Game's List</li>
        <li onClick={purchased}><AiOutlineShoppingCart className="icon" /> Purchased</li>
        <li onClick={friends}><AiOutlineUsergroupAdd className="icon" /> Friends</li>
        <li><FaMoneyCheckAlt className="icon" /> Payments</li>
        <li><FaBell className="icon" /> Notification</li>
      </ul>

      <div className="online-friends">
        <h4>Online Friends</h4>
        <ul>
          <li>
            
            <div className="friend">
              <img src="https://i.pravatar.cc/40?u=emeka" alt="Emeka" />
              <span className="name">zhyliacx</span>
              <span className="status online"></span>
            </div>
          </li>
          <li>
            <div className="friend">
              <img src="https://i.pravatar.cc/40?u=faith" alt="Faith" />
              <span className="name">Rayan</span>
              <span className="status idle"></span>
            </div>
          </li>
          <li>
            <div className="friend">
              <img src="https://i.pravatar.cc/40?u=sammy" alt="Sammy" />
              <span className="name">Sniper</span>
              <span className="status dnd"></span>
            </div>
          </li>
          <li>
            <div className="friend">
              <img src="https://i.pravatar.cc/40?u=tega" alt="Tega" />
              <span className="name">Skyee</span>
              <span className="status offline"></span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
