import axios from "axios";
import {Trash } from "lucide-react";
import toast from "react-hot-toast";
import {Link} from "react-router";
import { API_BASE_URL } from "../constants";

function SongCard({_id, title,image,singer,loadSongs}) {

    const deleteSong = () => {
        const response = axios.delete(`${API_BASE_URL}/song/${_id}`);
        toast.success("Song deleted successfully");
        loadSongs();
    };

    return (
    <Link to={`/song/${_id}`} 
    className="m-8 shadow-lg w-[350px] rounded-md relative">
        <h2 className="absolute top-3 text-white text-4xl ml-2 ">{title}
            <Trash className="text-blue inline-block absolute top-3 right-3" onClick={(e)=>{deleteSong();
                e.preventDefault();
                e.stopPropagation();
            }}/>
        </h2>
        <img src={image} className=" w-full h-[400px] object-cover rounded-md"/>
       
        <p className="text-center text-white text-2xl mb-2">singer: {singer}</p>
        </Link>)
}
export default SongCard;