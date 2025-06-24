import Sidebar from '../components/Sidebar';
import Top from '../components/Top';
import '../css/purchased.css';
import Navigation from '../components/Navigation'

export default function Purchased() {

  const {
    typing_game,
    snake_game,
    tic
  } = Navigation();

  const purchasedGames = [
    {
      name: 'Snake',
      image: 'https://i.pinimg.com/736x/5b/7a/29/5b7a29c5a2a52f9c85fecaffa4be80d0.jpg',
      action: snake_game,
    },
    {
      name: 'Typing',
      image: 'https://i.pinimg.com/736x/54/8c/e3/548ce3de32534e41b78bcb070437b9f1.jpg',
      action: typing_game,
    },
    {
      name: 'Tic-Tac-Toe',
      image: 'https://i.pinimg.com/736x/58/fc/45/58fc45bcb91fb329982b3d886fe1ffb6.jpg',
      action: tic,
    }
  ];

  return (
    <>
      
      <div className="home-container">
        <div className="sidebar-container">
          <Sidebar />
        </div>
        <div className="top-container">
          <Top />
          <div className="purchasedContainer">
            <div className="purchasedContainerflex">
              {purchasedGames.map((game, index) => (
                <div className="purchasedItem" key={index}>
                  <img className="purchasedImage" src={game.image} alt={game.name} />
                  <h3>{game.name}</h3>
                  <div className="button-container">
                    <button className="play" onClick={game.action}>Play</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
