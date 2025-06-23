import '../css/home.css';
import Sidebar from '../components/sidebar.jsx';
import Top from '../components/Top.jsx';
import Game from '../components/Games.jsx';
import Cursor from '../components/Cursor.jsx';

export default function GameList() {
  return (
    <>
        <div className="custom-cursor">
            <Cursor />
    
          </div>
 <div className="home-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="top-container">
          <Top />
            <Game/>

         
        </div>
      </div>
    </>
  );
}
