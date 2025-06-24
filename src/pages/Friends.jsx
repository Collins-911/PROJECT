import Top from '../components/Top';
import Sidebar from '../components/Sidebar';
import '../css/friends.css';

export default function Friends() {
  const status = [
    { name: 'Online', color: 'green' },
    { name: 'Offline', color: 'red' },
    { name: 'Busy', color: 'orange' },
    { name: 'Away', color: 'yellow' },
  ];

  const fakeFriends = [
    { name: 'Alex', status: status[0], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh7G69EzFaJ_bll_ef2zmB8vllLHqSrva6NRmsGyK8FKsZ3bIE9uBc-z22arpAAIkV1CMZF3P9jmMS5LAnKrAMog' },
    { name: 'Jordan', status: status[3], image: '/images/jordan.jpg' },
    { name: 'Taylor', status: status[2], image: '/images/taylor.jpg' },
    { name: 'Chris', status: status[1], image: '/images/chris.jpg' },
    { name: 'Sam', status: status[0], image: '/images/sam.jpg' },
    { name: 'Jamie', status: status[3], image: '/images/jamie.jpg' },
    { name: 'Morgan', status: status[0], image: '/images/morgan.jpg' },
    { name: 'Casey', status: status[0], image: '/images/casey.jpg' },
    { name: 'Riley', status: status[3], image: '/images/riley.jpg' },
    { name: 'Avery', status: status[2], image: '/images/avery.jpg' },
  ];

  return (
    <>
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
                  <li key={index}>
                    <div className="friend-avatar">
                      <img
                        src={friend.image}
                        alt={friend.name}
                        onError={(e) => {
                          e.target.src = 'https://www.wildlifetrusts.org/sites/default/files/styles/spotlight_default/public/2021-01/Red%20ant-%20Billy%20Clapham.jpg?h=dbcfb269&itok=aL8Y-rjO';
                        }}
                      />
                      <span
                        className="statusDot"
                        style={{ backgroundColor: friend.status.color }}
                      ></span>
                    </div>
                    <div className="info">
                      <span className="name">{friend.name}</span>
                      <span className="status">{friend.status.name}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="chat">
              <h2>Chat with Alex</h2>
              <div className="chatMessages">
                <div className="bubble left">
                  <strong>Alex:</strong> Hey, what’s up?
                </div>
                <div className="bubble right">
                  <strong>You:</strong> Not much, just working on a project.
                </div>
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
