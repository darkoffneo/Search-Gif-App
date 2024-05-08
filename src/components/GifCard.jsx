
export const GifCard = ({ title, url }) => {
  return (
    <div className='card'>
      <img src={url} alt={title} />
      <p>{title.substring(0,10)}</p>
    </div>
  )
}
