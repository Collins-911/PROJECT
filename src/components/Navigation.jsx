import { useNavigate } from "react-router-dom"


export default function Navigation(){

    const navigate = useNavigate();

    const gameList = () =>{
        console.log('Gamelist')
        navigate('/gameList')
    };

      const home = () =>{
        console.log('Home')
        navigate('/')
    };

    const purchased = () =>{
        console.log('Purchased')
        navigate('/purchased')
    }
    
    const friends = () =>{
        console.log('Friends')
        navigate('/friends')
    }

    const typing_game = () =>{
        console.log('Typing Game')
        navigate('/typing_game')
    }

    const tic = () =>{
        console.log('Tic-Tac-Toe')
            navigate('/tic-tac-toe')

        
    }
    const snake_game = () =>{
        console.log('Snake Game')
        navigate('/snake')
    }

    return{
        gameList,
        home,
        purchased,
        friends,
        typing_game,
        tic,
        snake_game
    };
}   