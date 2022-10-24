// export default function Btn(){
//     const clickHandler=()=>{
//         console.log("I was clicked")
//     }
//     return(
//         <div>
//             <button onClick={clickHandler}>Click me</button>
//         </div>
//     )
// }

export default function Btn(){
    const clickHandler=()=>{
        console.log("I was mouseOver")
    }
    return(
        <div>
            <button onMouseOver={clickHandler}>Click me</button>
        </div>
    )
}