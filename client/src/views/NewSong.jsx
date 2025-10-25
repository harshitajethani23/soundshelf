
import {useState} from "react";
import { SquarePlus,Trash } from "lucide-react";
import axios from "axios";
import { API_BASE_URL } from "../constants";
import toast,{Toaster} from "react-hot-toast"

function NewSong() {

    const [SongDetail,setSongDetail] = useState({
        title:"",
        description:"",
        image:[],
        singer:"",
        composer:"",
        language:"",
        year:null,
        raag:"",
       
    });

    const [newSongPoster , setNewSongPoster] = useState("");

    const addSong = async () => {
        const response = axios.post(`${API_BASE_URL}/song`,SongDetail);
        toast.success("song added succesfully");

        setTimeout(()=> {
            window.location.href = "/";
        }, 1500);
    };
    return (
        <div>
            <h1>NewSong</h1>
            <div>
            <input type="text" className="border"placeholder="Title" 
            value={SongDetail.title}
            onChange={(e)=> setSongDetail({...SongDetail,title:e.target.value})}/>

            <textarea className="block border" placeholder="Description"
              value={SongDetail.description}
            onChange={(e)=> setSongDetail({...SongDetail,description:e.target.value})}></textarea>


            <div>
                <div className="block mb-2">
                    {SongDetail.image.map((imgUrl,index)=>{
                        return (
                            <div className="inline-block relative" key={index}>
                                <img 
                                key={index}
                                src={imgUrl}
                                className="w-30 h-40 object-cover inline-block mr-2 mb-2" />
                                <Trash className="absolute right-4 bottom-4 rounded-md cursor-pointer bg-black text-white"
                                onClick={()=>{
                                    const newImages = SongDetail.image.filter(
                                        (img) => img != imgUrl 
                                    );

                                    setSongDetail({...SongDetail,image:newImages})
                                }}/>
                            </div>
                        )
                    })}
                </div>
            <input type="text"  className="border" placeholder="Image URLs" value={newSongPoster}
            onChange={(e)=> setNewSongPoster(e.target.value)}/>
            <SquarePlus className="inline-block"
            onClick={()=>{
                if (!newSongPoster) {
                    return;
                }

                setSongDetail({
                    ...SongDetail,
                    image:[...SongDetail.image, newSongPoster],
                });
                setNewSongPoster("");
            }}/>
            </div>
            
             <input type="text"  className="block border" placeholder="Singer" 
               value={SongDetail.singer}
            onChange={(e)=> setSongDetail({...SongDetail,singer:e.target.value})}/>


              <input type="text"  className="block border" placeholder="Composer" 
                value={SongDetail.composer}
            onChange={(e)=> setSongDetail({...SongDetail,composer:e.target.value})}/>

               <input type="text"  className="block border" placeholder="Language" 
                 value={SongDetail.language}
            onChange={(e)=> setSongDetail({...SongDetail,language:e.target.value})}/>

                <input type="text"  className="block border" placeholder="Year" 
                  value={SongDetail.year}
            onChange={(e)=> setSongDetail({...SongDetail,year:e.target.value})}/>

                 <input type="text"  className="block border" placeholder="Raag" 
                   value={SongDetail.raag}
            onChange={(e)=> setSongDetail({...SongDetail,raag:e.target.value})}/>
            <button className="" onClick={addSong}>Add Song</button>
            </div>
            <Toaster />
            </div>
    );
}

export default NewSong