import {model,Schema} from "mongoose";

const songSchema = new Schema (
    {
        title:{type:String,required:true,unique:true},
        image:{type:String,required:true},
        description:{type:String},
       singer:{type:String,required:true},
        composer:{type:String,required:true},
        language:{type:String,required:true},
        year:{type:Number,required:true},
        raag:{type:String,required:true},
    },
    {timestamps:true}
);
 const Song = model("Song",songSchema);
 export default Song;