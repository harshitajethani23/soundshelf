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
        className="m-4 shadow-lg w-[300px] rounded-md relative"
        key={_id}>
            <img src={image} className="w-full h-[400px] object-cover rounded-md" />
            <h2 className="absolute top-0 text-white text-4xl ml-2 w-full p-2">{title}
                <Trash className="inline-block text-white absolute top-3 right-3"
                onClick={(e)=>{
                    deleteSong();
                    e.preventDefault();
                    e.stopPropagation();
                }}
                />
                  </h2>

                <span className="text-center text-white text-2xl mb-2">Singer: {singer}</span>
          
        </Link>
 )
}

export default SongCard;