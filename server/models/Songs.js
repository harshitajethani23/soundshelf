import {model,Schema} from "mongoose";

const songSchema = new Schema (
    {
        title:{type:String},
        description:{type:String},
       singer:{type:String},
        composer:{type:String},
        language:{type:String},
        year:{type:Number},
        raag:{type:String},
    }
);
 const Song = model("Song",songSchema);
 export default Song;