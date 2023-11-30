import Comedian from '../models/comedian';

const addComedian = async (comedianData) => {
    const comedian = new Comedian(comedianData);
    await comedian.save();
    console.log('Comedian added:', comedian);
    return comedian;
};

const shaneGillisData = {
    name: "Shane Gillis",
    gender: "Male",
    comedy_styles: ["Stand-Up", "Sketch", "Improv", "Dark Comedy", "Self-Deprecating"],
    characteristics: ["dark", "edgy", "Controversial", "political", "self-deprecating", "slapstick", "crowd work", "lgbtq", "stand-up"],
    specials: ["Beautiful Dogs", "Shane Gillis Live in Austin"],
    notable_works: ["Matt and Shane's Secret Podcast", "Gilly and Keeves", "Comedy Central Presents: Shane Gillis", "The Anthony Cumia Show", "The Bonfire with Big Jay Oakerson and Dan Soder", "The Joe Rogan Experience", "Flagrant"],
    bio: "Shane Gillis is a stand-up comic, actor, and writer from Mechanicsburg, Pennsylvania. Shane has also made a name for himself in the comedy world, sharing the stage with renowned comedians such as Joe Rogan, Luis CK, Dave Chappelle, Bill Burr and many others. After winning Philly's Funniest at Helium Comedy Club in 2016 Shane was named an “Up-Next” Comic at Comedy Central’s 2019 Clusterfest in San Francisco and a “New Face” at the prestigious Just For Laughs Comedy Festival in Montreal. ",
    additional_info: {
        website: "https://www.shanemgillis.com/",
        social_media: {
            twitter: "https://twitter.com/shanemgillis",
            instagram: "https://www.instagram.com/shanemgillis/"
        }
    }
};



addComedian(shaneGillisData);