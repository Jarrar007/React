import '../styles/passwordGenerator.css'
import { useState, useEffect } from 'react';
const PasswordGenerator = () => {


    const [length, setLength] = useState (6)
    const [password, setPassword] = useState ("")
    const [number, setNumber] = useState (false)
    const [character, setCharacter] = useState (false)
    const [str, setStr] = useState("")

useEffect (()=>{
    var alphabets = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var numbers = 1234567890;
    var characters = "!@#$%&*,.,?"

 if (number && character) {
setStr (alphabets.concat(numbers, characters))
}   

else if (number) {
setStr (alphabets.concat(numbers))
}

else if (character) {
setStr (alphabets.concat(characters))
}



else {
setStr (alphabets)
}}, [str,character,number])



    
    

    function changeLength (event) {

        setLength (event.target.value)
    }

    function toggleCharacter (){
        setCharacter(!character)
    }

    function toggleNumber () {
        setNumber (!number)
    }

    function generatePassword () {
        var tempPassword = ""
        for (let i = 0; i<length; i++) {
             tempPassword += str[Math.floor(Math.random()*str.length)]

        }
        setPassword (tempPassword)

    }

    function copyPassword () {
        if (password) {
        window.navigator.clipboard.writeText(password)
        alert("Password Coppied to Clipboard")
        }
    }

  

    
  return (
  
    <div className='content'>

        <div className="top">
        <input type="text" placeholder="Password" value={password} readOnly  />
        <button id='generate' onClick={generatePassword}>Generate</button>
        <button id='copy' onClick={copyPassword}>Copy</button> 
        </div>

        <div className='bottom'>

        <div>
        <label htmlFor="length">Length: {length}</label>   
        <input type="range" name='length'  min={6} max={20} defaultValue={6} onChange={changeLength}/>
        </div>
     
        <div>
        <label htmlFor="numbers">Numbers: </label>
        <input type="checkbox"  name='numbers' onClick={toggleNumber}/>
        </div>
       
        <div>
        <label htmlFor="characters">Characters</label>
        <input type="checkbox" name='characters' onClick={toggleCharacter}/>
        </div>
       
        </div>
        

    </div>
  )

}

export default PasswordGenerator;