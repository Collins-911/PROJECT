
import '../css/home.css';
import Sidebar from '../components/Sidebar.jsx';
import Top from './Top';
import Latest from './Latest';
import Cursor from './Cursor.jsx'

export default function Home() {


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
          <Latest />
        </div>
      </div>
    </>
  );
}
