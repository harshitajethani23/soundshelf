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
   <Link
  to={`/song/${_id}`}
  className="relative w-[150px] h-[180px] shadow-lg rounded-md overflow-hidden"
>
 
  <button
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      deleteSong();
    }}
    className="absolute top-2 right-2 bg-white text-white p-1.5 rounded-full"
  >
    <Trash className="w-4 h-4" />
  </button>

 
  <img
    src={image}
    alt={title}
    className="w-full h-full object-cover"
  />


  <p className="text-center text-white text-sm mt-2">{title}</p>
  <p className="text-center text-white text-xs mb-2">Singer: {singer}</p>
</Link>)
}

export default SongCard;