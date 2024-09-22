import { useState } from "react"

const initialBoard = ()=>Array(9).fill(null)
const usetictaktoe = () => {
    const [board , setBoard] = useState(initialBoard())
    const [isXNext , setIsxNext] = useState(true)
    const WINNING_PATTERNS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];
    const calculateWinner = (currBoard)=>{
        
        for(let i = 0; i < WINNING_PATTERNS.length; i++){
            const [a , b, c] = WINNING_PATTERNS[i]
            if(currBoard[a] && currBoard[a] === currBoard[b] && currBoard[b] === currBoard[c]){
                return currBoard[a]
            }
        }
        return null
    }
    const handleClick = (index) => {
        const winner = calculateWinner(index)
        if(winner || board[index]) return

    const newBoard = [...board]
     newBoard[index] = isXNext ? "X" : "O";
     setBoard(newBoard)
     setIsxNext(!isXNext)
    }
    const getStatusMessage = () => {
        const winner = calculateWinner(board)
        if(winner) return `player ${winner} wins!!`
        if(!board.includes(null)) return `match draw`
        return `player ${isXNext ? "X" : "O"} turn`
    }

    const resetGame = ()=>{
        setBoard(initialBoard())
        setIsxNext(true)
    }
    return {board , handleClick  , getStatusMessage , resetGame}
}

export default usetictaktoe