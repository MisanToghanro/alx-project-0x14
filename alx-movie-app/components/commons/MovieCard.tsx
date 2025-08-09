import { MovieProps } from "@/interfaces";
import Image from "next/image";

const MovieCard: React.FC<MovieProps> = ({id,posterImage,releaseYear,title}) =>{

    return(
        <div>
            <div>
                <img src={posterImage} alt={title} width={100} height={100}/>
            </div>

            <div>
                <p>{title}</p>
                <p>{releaseYear}</p>
            </div>

        </div>
    )
}
export default MovieCard;