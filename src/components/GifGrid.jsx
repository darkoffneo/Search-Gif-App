import { GifCard, GifsLoading } from "../components";
import { useFetchGifs } from "../hooks";

export const GifGrid = ({category}) => {
    
    const { images, isLoading } = useFetchGifs( category )
    
    return (
        <>
            <h1>{category}</h1>
            {
                isLoading && <GifsLoading/>
            }
            <div className="card-grid">
                {images.map((image)=>{
                    return <GifCard 
                            key={image.id}
                            {...image}
                        />
                })}
            </div>
        </>
    )
}
