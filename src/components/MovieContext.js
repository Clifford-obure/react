import React,{useState,createContext} from "react"

export const MovieContext = createContext();

export const MovieProvider = (props)=>{
    const [movies,setMovies] = useState([
        {
            name:"Harry potter",
            price:`$10`,
            id:23456
        },
        {
            name:"Game of Thromes",
            price:`$10`,
            id:873673
        },
        {
            name:"Inception",
            price:`$10`,
            id:980756
        }
    ]) ;
    return(
        <MovieContext.Provider>
            {props.children}
        </MovieContext.Provider>
    )
}