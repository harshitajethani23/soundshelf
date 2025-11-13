import axios from "axios";
import {Search} from "lucide-react";
import {useEffect,useState} from "react";
import toast, {Toaster} from "react-hot-toast";
import SongCard from "../components/SongCard";
import { API_BASE_URL } from "./../constants.js";




function Home() {

    const [songs,setSongs] = useState([]);
    const [search,setSearch] = useState("");
    const [error,setError] = useState("");

    const loadSongs = async () => {
        const response = await axios.get(`${API_BASE_URL}/song`);
        setSongs(response.data.data);
    };

    useEffect(()=> {
        loadSongs();
    }, []);

    const searchSongs = async () => {
        toast.loading("Searching...",{id: "Searching" });

        try{
        const response = await axios.get(`${API_BASE_URL}/song/search?q=${search}`);
        toast.dismiss();
        setSongs(response.data.data);
        setError("");
        } catch(error) {
            console.log(error);
            toast.dismiss();
            toast.error(error.response.data.message, {id:"error"});
            setSongs([]);
            setError(error.response.data.message);
        }
    };

    useEffect(()=>{searchSongs();
     },[search]);


    return (
        <div>
            <div className="border border-black rounded-full my-4 w-fit mx-auto px-4 py-2">
                <input 
                type="text"
                placeholder="search Song..."
                className="border-none w-[300px] focus:outline-none" 
                value={search} 
                onChange={(e)=> setSearch(e.target.value)}/>
                <Search className="inline-block" />
            </div>

            {error ? <div className="text-center text-3xl mt-4">{error}</div>:null}

        <div className="flex flex-wrap justify-around bg-black text-white m-5">
            {songs.map((songObj)=>{
            const {_id, title,image,singer,loadSongs} = songObj;

            return (
            <SongCard 
            _id={_id}
            key={_id}
            title={title}
            image={image}
            singer={singer}
            loadSongs={loadSongs}
            /> )
        
       } )}
       </div>
          <Toaster position="top-right"/>
       </div>
    
     )
    
};
export default Home