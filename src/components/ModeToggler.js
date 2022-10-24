export default function ModeToggler(){
    const darkModeon = true;
    var darkMode=<h1>Dark mode is on</h1>
    const lightMode = <h1>Light Mode is On</h1>
    const handleClick=()=>{
        var randomNumber= Math.floor(Math.random()*3)+1;
        console.log(randomNumber)
        let userInput = prompt("Type a number");
        alert(`Computer number: ${randomNumber} , Your guess ${userInput}`)

    }
    
    return(
        <div>
            {darkModeon ? darkMode :lightMode}
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}