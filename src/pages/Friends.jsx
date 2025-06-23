import Top from '../components/Top';
import Sidebar from '../components/Sidebar';
import Cursor from '../components/Cursor';
import '../css/friends.css';

export default function Friends() {

  const status = [
    { name: 'Online', color: '🟢' },
    { name: 'Offline', color: '🔴' },
    { name: 'Busy', color: '🟠' },
    { name: 'Away', color: '🟡' },
  ]
  const fakeFriends = [
    { name: 'Alex', color: status[0].color},
    { name: 'Jordan',  color: status[3].color},
    { name: 'Taylor', color: status[2].color},
    { name: 'Chris',  color: status[1].color},
    { name: 'Sam', color: status[0].color},
    { name: 'Jamie', color: status[3].color },
    { name: 'Morgan',color: status[0].color },
    { name: 'Casey', color: status[0].color},
    { name: 'Riley', color: status[3].color},
    { name: 'Avery', color: status[2].color},
  ];

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
          <div className="friendsContainer">
            <div className="friendsList">
              <h2>Friends</h2>
              <ul>
                {fakeFriends.map((friend, index) => (
                  <li key={index}>{friend.name} {friend.color}</li>
                ))}
              </ul>
            </div>

            <div className="chat">
              <h2>Chat with Alex</h2>
              <div className="chatMessages">
                <p><strong>Alex:</strong> Hey, what’s up?</p>
                <p><strong>You:</strong> Not much, just working on a project.</p>
              </div>
              <div className="chatInput">
                <input type="text" placeholder="Type a message..." />
                <button>Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
