import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Top from '../components/Top.jsx';
import Game from '../components/Games.jsx';


export default function GameList() {
  return (
    <>
       
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
