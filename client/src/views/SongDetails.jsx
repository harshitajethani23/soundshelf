import {useEffect,useState} from "react"
import { useParams } from "react-router"
import { API_BASE_URL } from "../constants";
import axios from "axios";

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
   <div className="min-h-screen px-4 py-8 bg-gray-50">
  <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <img
        src={SongDetail.image}
        alt={SongDetail.title}
        className="w-64 h-80 object-cover rounded-md shadow-sm"
      />
      <div className="text-center md:text-left space-y-3">
        <h1 className="text-2xl font-bold text-gray-800">{SongDetail.title}</h1>
        <h2 className="text-lg text-gray-600">{SongDetail.year}</h2>
        <p className="text-gray-700 leading-relaxed">{SongDetail.description}</p>
      </div>
    </div>
  </div>
</div>
        </div>
       );
    
}

export default SongDetails;