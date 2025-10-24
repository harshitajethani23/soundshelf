import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
dotenv.config();

import { getSongs,postSongs,getSongById,getSongsSearch,putSongById,putTitleById,deleteSongById } from "./controllers/songs.js"


const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async () => {
    try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);

    if(conn) {
        console.log("Mongodb connected");
    }
} catch(e) {
    console.error(`\n❌ mongodb connection error:${e.message}`);
}
};


  

app.get("/",(req,res)=> {
    res.json({status:"OK",message:"server is healthy"});
});



app.post("/song",postSongs);

 app.get("/song",getSongs);
 app.get("/song/search",getSongsSearch);
 app.get("/song/:id",getSongById);
 app.put("/song/:id",putSongById);
 app.patch("/song/:id/title",putTitleById);
 app.delete("/song/:id",deleteSongById);






const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=> {
    console.log(`server is running on port ${PORT}`);
    connectDB();

});