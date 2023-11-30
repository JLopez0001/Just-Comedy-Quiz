import mongoose from "mongoose";

const ComedianSchema = new mongoose.Schema({

    name: String,
    gender: String,
    comedy_styles: [ String ],
    characteristics: [ String ],
    specials: [ String ],
    notable_works: [ String ],
    bio : String,
    additional_info : {
        website : String,
        social_media : {
            twitter : String,
            instagram : String
        }
    }
});

const Comedian = mongoose.model("Comedian", ComedianSchema);


