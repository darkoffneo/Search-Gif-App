
export const GifsLoading = () => {
    
    const items = [0,1,2,3,4]
    
    return (
        <div className="card-grid">
            {items.map(item=>{
                return (
                    <div className="cardl" key={item}>
                        <img />
                        <p>cargando...</p>
                    </div>
                )
            })}
        </div>
    )
}
