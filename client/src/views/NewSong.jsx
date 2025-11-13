import axios from "axios";
import { SquarePlus,Trash } from "lucide-react";
import {useState,useEffect} from "react";
import toast,{Toaster} from "react-hot-toast"

import { API_BASE_URL } from "../constants";


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
        const response = await axios.post(`${API_BASE_URL}/song`,SongDetail);
        toast.success(response.data.message);

        setTimeout(()=> {
            window.location.href = "/";
        }, 1500);
    };
    return (
     <div className="p-6 max-w-3xl mx-auto bg-white rounded-lg shadow-md space-y-6">
  <h1 className="text-2xl font-bold text-gray-800 mb-4">Add New Song</h1>

 
  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Title"
    value={SongDetail.title}
    onChange={(e) => setSongDetail({ ...SongDetail, title: e.target.value })}
  />

  {/* Description */}
  <textarea
    className="w-full border border-gray-300 rounded-md p-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Description"
    value={SongDetail.description}
    onChange={(e) =>
      setSongDetail({ ...SongDetail, description: e.target.value })
    }
  ></textarea>

  {/* Image Section */}
  <div>
    <div className="flex flex-wrap gap-3 mb-3">
      {SongDetail.image.map((imgUrl, index) => (
        <div className="relative" key={index}>
          <img
            src={imgUrl}
            className="w-28 h-36 object-cover rounded-md border border-gray-200"
          />
          <Trash
            className="absolute right-2 bottom-2 bg-black/70 text-white p-1 rounded-md cursor-pointer hover:bg-red-600 transition"
            onClick={() => {
              const newImages = SongDetail.image.filter((img) => img !== imgUrl);
              setSongDetail({ ...SongDetail, image: newImages });
            }}
          />
        </div>
      ))}
    </div>

    <div className="flex items-center gap-3">
      <input
        type="text"
        className="flex-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Image URL"
        value={newSongPoster}
        onChange={(e) => setNewSongPoster(e.target.value)}
      />
      <SquarePlus
        className="text-black cursor-pointer hover:text-blue-800 transition"
        onClick={() => {
          if (!newSongPoster) return;
          setSongDetail({
            ...SongDetail,
            image: [...SongDetail.image, newSongPoster],
          });
          setNewSongPoster("");
        }}
      />
    </div>
  </div>

  {/* Other Details */}
  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Singer"
    value={SongDetail.singer}
    onChange={(e) => setSongDetail({ ...SongDetail, singer: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Composer"
    value={SongDetail.composer}
    onChange={(e) => setSongDetail({ ...SongDetail, composer: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Language"
    value={SongDetail.language}
    onChange={(e) => setSongDetail({ ...SongDetail, language: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Year"
    value={SongDetail.year}
    onChange={(e) => setSongDetail({ ...SongDetail, year: e.target.value })}
  />

  <input
    type="text"
    className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
    placeholder="Raag"
    value={SongDetail.raag}
    onChange={(e) => setSongDetail({ ...SongDetail, raag: e.target.value })}
  />

  {/* Submit Button */}
  <button
    className="w-full bg-black text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
    onClick={addSong}
  >
    Add Song
  </button>

            <Toaster />
          </div>
    );
}

export default NewSong