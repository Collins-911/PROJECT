import { FaChevronLeft, FaChevronRight, FaPlay, FaForward } from 'react-icons/fa';
import { useRef, useState, useEffect } from 'react';
import humble from '../assets/audio/humble.mp3';
import notLikeus from '../assets/audio/notLikeus.mp3';
import '../css/latest.css';

export default function Latest() {
  const pictures = [
    {
      src: 'https://i.pinimg.com/736x/44/6d/1f/446d1f0eefa68c21a588666981b1e12b.jpg',
      title: 'Spider Man',
      info: 'Spider-Man is an action game where you play as the superhero, swinging through New York City, fighting villains, and saving people. It combines fast combat, cool moves, and a strong story.',
    },
    {
      src: 'https://i.pinimg.com/736x/4d/f9/81/4df9811dba01f06dced76976fa34c51a.jpg',
      title: 'Minecraft',
      info: 'Minecraft is an open-world sandbox game where you can build, explore, fight, and create anything you imagine. Its fun, creative, and endlessly replayable. Thats why so many love it — including you!',
    },
    {
      src: 'https://i.pinimg.com/736x/a3/e3/41/a3e341ae8698c9df128a9c999606e806.jpg',
      title: 'Fortnite',
      info: 'Fortnite is a fast-paced battle royale game where players fight, build, and survive in a vibrant, ever-changing world. It’s competitive, creative, and packed with action.',
    },
    {
      src: 'https://i.pinimg.com/736x/b9/55/aa/b955aac6d4b437425729ab1251dee149.jpg',
      title: 'GTA V',
      info: 'GTA is an open-world action game where you explore cities, complete missions, and live a criminal life. It’s thrilling, cinematic, and full of freedom.',
    },
    {
      src: 'https://i.pinimg.com/736x/8f/69/92/8f69920f16450308e0d62a7e9af04c01.jpg',
      title: 'COD MW',
      info: 'Call of Duty is a high-intensity shooter game known for its fast combat, powerful weapons, and cinematic war missions. It’s action-packed and competitive.',
    },
  ];

  const [gameIndex, setGameIndex] = useState(0);
  const currentPicture = pictures[gameIndex];

  const handleNextGame = () => {
    setGameIndex((prev) => (prev + 1) % pictures.length);
  };

  const handlePrevGame = () => {
    setGameIndex((prev) => (prev - 1 + pictures.length) % pictures.length);
  };

  const audioRef = useRef(null);
  const [currentSong, setCurrentSong] = useState(humble);
  const [songInfo, setSongInfo] = useState({ title: 'Humble', artist: 'Kendrick Lamar' });

  const handlePlay = () => {
    if (audioRef.current) audioRef.current.play();
  };

  const handleNextSong = () => {
    if (currentSong === humble) {
      setCurrentSong(notLikeus);
      setSongInfo({ title: 'Not Like Us', artist: 'Kendrick Lamar' });
    } else {
      setCurrentSong(humble);
      setSongInfo({ title: 'Humble', artist: 'Kendrick Lamar' });
    }
    if (audioRef.current) {
      audioRef.current.load();
      audioRef.current.play();
    }
  };

  const newsItems = [
    {
      headline: 'PlayStation 6 Rumors',
      desc: 'Leaked designs suggest a slimmer, cooler console is coming.',
    },
    {
      headline: 'GTA VI Trailer Released',
      desc: 'Rockstar shocks fans with a new Vice City trailer!',
    },
  ];

  const [carouselIndex, setCarouselIndex] = useState(0);
  const totalItems = newsItems.length;
  const intervalRef = useRef(null);

  const handleNextCarousel = () => {
    setCarouselIndex((prev) => (prev + 1) % totalItems);
  };

  const handlePrevCarousel = () => {
    setCarouselIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const startAutoScroll = () => {
    intervalRef.current = setInterval(() => {
      handleNextCarousel();
    }, 3000);
  };

  const stopAutoScroll = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoScroll();
    return stopAutoScroll;
  }, []);

  return (
    <>
      <div className="section">
        <div className="latest">
          <img src={currentPicture.src} alt="" />
          <div className="latestInner">
            <h2>{currentPicture.title}</h2>
            <p>{currentPicture.info}</p>
            <button className="book-now">Book Now</button>
          </div>
          <div className="nav-buttons">
            <button className="left-btn" onClick={handlePrevGame}><FaChevronLeft /></button>
            <button className="right-btn" onClick={handleNextGame}><FaChevronRight /></button>
          </div>
        </div>

        <div className="music-card">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLAXZN0U9RSOM47sFBa1a0gowH4vkIUpYIng&s"
            alt="Author"
            className="avatar"
          />
          <h3>{songInfo.title}</h3>
          <p>{songInfo.artist}</p>
          <div className="controls">
            <button className="btn" onClick={handlePlay}><FaPlay /></button>
            <button className="btn" onClick={handleNextSong}><FaForward /></button>
          </div>
          <audio ref={audioRef}>
            <source src={currentSong} type="audio/mp3" />
          </audio>
        </div>
      </div>

    
      <div
        className="caresoul"
        onMouseEnter={stopAutoScroll}
        onMouseLeave={startAutoScroll}
      >
        <button onClick={handlePrevCarousel} className="arrow left"><FaChevronLeft /></button>

        <div className="carousel-wrapper">
          <div
            className="carousel-inner"
            style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          >
            {newsItems.map((item, index) => (
              <div className="carousel-item" key={index}>
                <h3>{item.headline}</h3>
                <p>{item.desc}</p>
                
              </div>
            ))}
          </div>
        </div>

        <button onClick={handleNextCarousel} className="arrow right"><FaChevronRight /></button>

        <div className="carousel-indicators">
          {newsItems.map((_, idx) => (
            <span
              key={idx}
              className={`dot ${carouselIndex === idx ? 'active' : ''}`}
              onClick={() => setCarouselIndex(idx)}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
