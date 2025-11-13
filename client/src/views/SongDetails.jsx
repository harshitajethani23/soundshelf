import axios from "axios";
import {useEffect,useState} from "react"
import { useParams } from "react-router"
import { API_BASE_URL } from "../constants";
import {Link} from "react-router";


function SongDetails() {

    const { id } = useParams();
    const [SongDetail,setSongDetail] = useState({
        _id: "",
        title:"",
        description:"",
        image:[],
        singer:"",
        composer:"",
        language:"",
        year:null,
        raag:""
    });

    const loadSongDetails = async () => {
        const response = await axios.get(`${API_BASE_URL}/song/${id}`);
        setSongDetail(response.data.data);


        console.log(response.data.data);
    };

    useEffect(()=>{
        loadSongDetails();
    }, [id])
    return (<div>SongDetails : {id}
   <div className="min-h-screen px-4 py-8">
  <div className="max-w-4xl mx-auto bg-black text-white shadow-md rounded-lg p-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <img
        src={SongDetail.image}
        alt={SongDetail.title}
        className="w-64 h-80 object-cover rounded-md shadow-sm"
      />
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-2xl font-bold text-white">{SongDetail.title}</h1>
        <h2 className="text-lg text-white">Year : {SongDetail.year}</h2>
          <h2 className="text-lg text-white">Composer : {SongDetail.composer}</h2>
            <h2 className="text-lg text-white">Raag : {SongDetail.raag}</h2>
        <p className="text-white ">Description: {SongDetail.description}</p>
        <Link to={`/song/edit/${SongDetail._id}`}  className="w-full bg-white text-black py-2 px-3 mt-2 rounded-md font-semibold">Edit</Link>
      </div>
    </div>
  </div>
</div>
        </div>
       );
    
}

export default SongDetails;