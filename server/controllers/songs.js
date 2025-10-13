import Song from "../models/Songs.js";

const getSongs = async(req,res)=>{
    const songs = await Song.find();

    res.status(201).json({success:true,
        data:songs,
        message:"All songs fetched"
    })
};

 const postSongs = async(req,res) => {
    console.log(req.body);
    const {
         title,
        description,
        singer,
        composer,
        language,
        year,
        raag
    } = req.body;

    const newSong = new Song({
         title,
        description,
        singer,
        composer,
        language,
        year,
        raag
    });

    const savedSong = await newSong.save();

    res.json({
        success:true,
        data:savedSong,
        message:"songs added successfully"
    })
    
}

const getSongById = async(req,res)=>{
    const {id} = req.params;
    try{
    const song = await Song.findById(id);

    if(song) {
        return res.json({
         success:true,
         data:song,
         message:"song fetched successfully"
        });
    }
    else {
        return res.status(404).json({
            success:false,
            data:null,
            message:"song not found"
        });
    }
} catch(error) {
    res.status(400).json({
        success:true,
        data:null,
        message:"invalid song id"
    })
}
};

const getSongsSearch = async (req,res)=>{
    const { q } =req.query;

    const songs = await Song.find({
        title: {$regex: q, $options: "i"},
    });

    if (songs.length === 0) {
        return res.status(404).json({
            success:false,
            data:[],
            message:"No songs found matching your search"
        });
    }
    else {
        return res.json({
            success:true,
            data:songs,
            message:"songs fetched successfully",
        })
    }
};
const putSongById = async(req,res)=>{
    const {id} = req.params;

      const {
          title,
        description,
        singer,
        composer,
        language,
        year,
        raag
    } = req.body;

     await Song.updateOne({_id:id},
        {
             title,
        description,
        singer,
        composer,
        language,
        year,
        raag
    }
);
const updatedSong = await Song.findById(id);

return res.json({
    success:true,
    data:updatedSong,
    message:"song updated successfully"
});
};
const putRaagById = async (req,res)=>{
    const {id} =req.params;

    const {raag} = req.body;
    await Song.updateOne({_id:id},{raag});

    const updatedSong= await Song.findById(id);
    return res.json({
        success:true,
        data:updatedSong,
        message:"song raag updated successfully",
    })
}

export { getSongs,postSongs,getSongById,getSongsSearch,putSongById,putRaagById }