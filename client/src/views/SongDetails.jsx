import {useEffect,useState} from "react"
import { useParams } from "react-router"
import { API_BASE_URL } from "../constants";
import axios from "axios";

function SongDetails() {

    const { id } = useParams();
    const [songDetail,setSongDetail] = useState({
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
    return <div>SongDetails : {id}</div>;
    
}

export default SongDetails;