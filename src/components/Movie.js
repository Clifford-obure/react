
import { MovieProvider } from "./MovieContext"
import Watch from "./Watch"
export default function Movie(){


    return(
        <MovieProvider>
        <div>
            {movies.map(movie =>(
                <Watch name={movie.name} price={movie.price} key={movie.id}/>
            ))}
        </div>
        </MovieProvider>
    )
}