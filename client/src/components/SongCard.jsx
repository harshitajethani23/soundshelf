function SongCard({_id, title,image,singer}) {
    return <div className="m-4 shadow-lg w-[350px] rounded-md relative">
        <h2 className="absolute top-3 text-white text-4xl ml-2 ">{title}</h2>
        <img src={image} className=" w-full h-[400px] object-cover rounded-md"/>
       
        <p className="text-center text-2xl mb-2">singer: {singer}</p>
        </div>
}
export default SongCard;