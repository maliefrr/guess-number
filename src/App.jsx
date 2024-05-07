import {useState, useEffect} from "react"
function App() {
  const [userNumber,setUserNumber] = useState(0)
  const [randomNumber,setRandomNumber] = useState(0)
  const [userAttempt,setUserAttempt] = useState(0)
  const [message,setMessage] = useState("")

  const reset = () => {
    setUserNumber(0)
    generateRandomNumber()
    setUserAttempt(0)
    setMessage("")
  }

  const generateRandomNumber = () => {
    setRandomNumber(Math.floor(Math.random() * 101))
  }

  const handleInput = () => {
    setUserAttempt(userAttempt + 1)
    return parseInt(userNumber) === parseInt(randomNumber) ? setMessage(`Congratulations You've Guessed the number ${randomNumber} in ${userAttempt} attempts`) : parseInt(userNumber) <= parseInt(randomNumber) ? setMessage("Too low! Try Again.") : parseInt(userNumber) >= parseInt(randomNumber) ? setMessage("Too High! Try Again") : ""
  }

  useEffect(() => {
    generateRandomNumber()
  },[])


  console.log(randomNumber)
  return (
      <div className="flex flex-col justify-center align-center h-screen ">
          <div className="flex justify-center mb-3">
            <div role="alert" className={`alert ${message !== "" ? "" : "hidden"} max-w-[30%]`}>
                <span>{message !== "" ? message : ""}</span>
              </div>
          </div>
          <h1 className="text-center mb-5 text-2xl">Guess The Number</h1>
          <div className="flex justify-center mb-3">
            <input type="number" placeholder="Guess The Number" className="input input-bordered w-full max-w-xs" value={userNumber} onChange={(e) => setUserNumber(e.target.value)}/>
          </div>
          <div className="flex justify-center gap-3">
            <button className="btn" onClick={() => handleInput()}>Submit</button>
            <button className="btn" onClick={() => reset()}>Reset Game</button>
          </div>
      </div>
  )
}

export default App
