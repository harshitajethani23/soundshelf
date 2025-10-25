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
    <div className="min-h-screen px-4 py-8">
      
           
            <div className="max-w-4xl mx-auto">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    <img src={SongDetail.image} />
                    <div>
                        <h1>{SongDetail.title}</h1>
                        <h1>{SongDetail.year}</h1>
                    </div>
            </div>
            </div>
        </div>
        </div>
       );
    
}

export default SongDetails;