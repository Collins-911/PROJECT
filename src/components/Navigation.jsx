import { useNavigate } from "react-router-dom"


export default function Navigation(){

    const navigate = useNavigate();

    const gameList = () =>{
        console.log('')
        navigate('/gameList')
    };

      const home = () =>{
        console.log(' Redirecting to the home')
        navigate('/')
    };

    const purchased = () =>{
        console.log('Redirecting to purchased games')
        navigate('/purchased')
    }
    
    const friends = () =>{
        console.log('Redirecting to friends')
        navigate('/friends')
    }

    const typing_game = () =>{
        console.log('Redirecting to typing_game')
        navigate('/typing_game')
    }

    const tic = () =>{
        console.log(0)
            navigate('/tic-tac-toe')

        
    }
    const snake_game = () =>{
        console.log()
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