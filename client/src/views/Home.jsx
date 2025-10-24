import axios from "axios";
import {useEffect,useState} from "react";
import SongCard from "../components/SongCard"
import {Search} from "lucide-react";
import toast, {Toaster} from "react-hot-toast"
function Home() {

    const [song,setSong] = useState([]);
    const [search,setSearch] = useState("");
    const [error,setError] = useState("");

    const loadSongs = async () => {
        const response = await axios.get("http://localhost:8080/song");
        setSong(response.data.data);
    };

    useEffect(()=> {
        loadSongs();
    }, []);

    const searchSongs = async () => {
        toast.loading("Searching...",{id: "Searching" });

        try{
        const response = await axios.get(`http://localhost:8080/song/search?q=${search}`);
        toast.dismiss();
        setSong(response.data.data);
        setError("");
        } catch(error) {
            console.log(error);
            toast.dismiss();
            toast.error(error.response.data.message, {id:"error"});
            setSong([]);
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
        <div className="flex flex-wrap justify-around">
            {song.map((songObj)=>{
            const {_id, title,image,raag} = songObj;
            return <SongCard key={_id}
            title={title}
            image={image}
         
           
            raag={raag}
            />
        
       } )}
       </div>
          <Toaster position="top-right"/>
       </div>
    
     )
    
};
export default Home