import '../css/game.css';

export default function Games() {
  const gameList = [
    {
      name: 'Call of Duty: Warzone',
      image: 'https://cdn.cloudflare.steamstatic.com/steam/apps/1962663/header.jpg',
    },
    {
      name: 'Minecraft',
      image: 'https://i.pinimg.com/736x/5f/f0/e9/5ff0e997a4a8ba449056ed679660f4cc.jpg',
    },
    {
      name: 'Valorant',
      image: 'https://i.pinimg.com/736x/cf/ae/88/cfae886e263126f685510e2f45b82970.jpg',
    },
    {
      name: 'The Legend of Zelda: Breath of the Wild',
      image: 'https://i.ytimg.com/vi/zw47_q9wbBE/maxresdefault.jpg',
    },
    {
      name: 'GTA V',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/271590/header.jpg',
    },
    {
      name: 'Forza Horizon 5',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1551360/header.jpg',
    },
    {
      name: 'Counter-Strike 2',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/730/header.jpg',
    },
    {
      name: 'Among Us',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/945360/header.jpg',
    },
    {
      name: 'Apex Legends',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/1172470/header.jpg',
    },
    {
      name: 'Celeste',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/504230/header.jpg',
    },
    {
      name: 'Hollow Knight',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/367520/header.jpg',
    },
    {
      name: 'PUBG: Battlegrounds',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/578080/header.jpg',
    },
    {
      name: 'Stardew Valley',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/413150/header.jpg',
    },
    {
      name: 'Rocket League',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/252950/header.jpg',
    },
    {
      name: 'Terraria',
      image: 'https://cdn.akamai.steamstatic.com/steam/apps/105600/header.jpg',
    },
     {
      name: 'eFootball',
      image: 'https://i.pinimg.com/736x/39/ed/77/39ed77da071cb04d8287e3e0146157f3.jpg',
    },
  ];

  return (
    <div className="gameContainer">
      <div className="gameContainerFlex">
        {gameList.map((game, index) => (
          <div key={index} className="gameItem">
            <img src={game.image} alt={game.name} className="gameImage" />
            <h4>{game.name}</h4>
            <button className="buyBtn">Buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}
