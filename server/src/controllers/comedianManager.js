import { Comedian } from '../models/comedian.js';

const addComedian = async (comedianData) => {
    try {
        const exists = await Comedian.findOne({ name: comedianData.name });
        if (exists) {
            // Update existing comedian data
            await Comedian.updateOne({ name: comedianData.name }, comedianData);
            // console.log('Comedian updated:', comedianData.name);
        } else {
            // Add new comedian
            const comedian = new Comedian(comedianData);
            await comedian.save();
            console.log('Comedian added:', comedian);
        }
    } catch (error) {
        console.error('Error in adding/updating comedian:', error);
    }
};


 // TODO add female clean comic 


// DARK COMEDY // 

const shaneGillisData = {
    name: "Shane Gillis",
    gender: "Male",
    comedy_styles: ["sketch", "dark", "self-deprecating"],
    characteristics: ["edgy", "controversial", "political", "slapstick", "crowd work", "LGBTQ+","TV","impressions"],
    specials: ["Beautiful Dogs", "Shane Gillis Live in Austin"],
    podcasts: ["Matt and Shane's Secret Podcast", "Kill Tony", "The Joe Rogan Experience", "Flagrant"],
    notable_works: ["Comedy Central Presents: Shane Gillis","Gilly and Keeves", "The Anthony Cumia Show","The Bonfire with Big Jay Oakerson and Dan Soder"],
    bio: "Shane Gillis is a stand-up comic, actor, and writer from Mechanicsburg, Pennsylvania. Shane has also made a name for himself in the comedy world, sharing the stage with renowned comedians such as Joe Rogan, Luis CK, Dave Chappelle, Bill Burr and many others. After winning Philly's Funniest at Helium Comedy Club in 2016 Shane was named an “Up-Next” Comic at Comedy Central’s 2019 Clusterfest in San Francisco and a “New Face” at the prestigious Just For Laughs Comedy Festival in Montreal. ",
    additional_info: {
        website: "https://www.shanemgillis.com/",
        social_media: {
            youtube: "https://www.youtube.com/@GillyandKeeves",
            twitter: "https://twitter.com/shanemgillis",
            instagram: "https://www.instagram.com/shanemgillis/"
        }
    }
};


const andrewSchulzData = {
    name: "Andrew Schulz",
    gender: "Male",
    comedy_styles: ["dark", "observational"],
    characteristics: ["edgy", "controversial", "political", "self-deprecating", "crowd work", "LGBTQ+", "TV"],
    specials: ["Infamous", "Schulz Saves America", "The Crowd Work Special","Views from the Cis", "4:4:1"],
    podcasts: ["The Brilliant Idiots", "Flagrant 2", "The Joe Rogan Experience", "Kill Tony", "The Breakfast Club", "Bad Friends", "This Past Weekend"],
    notable_works: ["You People", "Guy Code", "White Men Can't Jump","The Brilliant Idiots", "The Breakfast Club"],
    bio: "Andrew Schulz is a stand-up comedian, actor, and podcaster from the United States.  Born on October 30, 1983, started his career as the hilarious host of a series of original programming on M.T.V. before he made it big as an international stand-up comedian. He started doing stand-up comedy in college in California and continued when he moved back to New York in the mid-2000s. He became a regular in the Comedy Village before making his debut at the Edinburgh Comedy Festival in 2008 in Edinburgh, Scotland. Even though he began on a major television network, Schulz has achieved considerable success by self-releasing his work",
    additional_info: {
        website: "https://theandrewschulz.com/",
        social_media: {
            youtube: "https://www.youtube.com/@TheAndrewSchulz",
            twitter: "https://twitter.com/andrewschulz",
            instagram: "https://www.instagram.com/andrewschulz/"
        }
    }
};


const daveChappelleData = {
    name: "Dave Chappelle",
    Gender: "Male",
    comedy_styles: ["sketch", "dark"],
    characteristics: ["edgy", "controversial", "political", "crowd work", "LGBTQ+", "TV"],
    specials: ["The Bird Revelation", "Sticks & Stones", "The Closer", "Killin' Them Softly", "Deep In the Heart of Texas", "Equanimity"],
    podcasts: ["The Joe Rogan Experience", "The Tim Dillon Show", "The Brilliant Idiots", "The Breakfast Club"],
    notable_works: ["The Oscars", "Chappelle's Show", "Half Baked", "The Nutty Professor", "Saturday Night Live"],
    bio: "Dave Chappelle is an American comedian, actor, producer and writer. Dave Signed $20 Million deal with Netflix. He also won Emmy award in 2017 for his guest appearance on Saturday Night live. Dave won a grammy award in 2018 for his Netflix Series The Age of Spin & Deep in the Heart of Texas. Chappelle is better known for his iconic and acclaimed satirical comedy sketch series Chappelle's Show (2003). Chappelle was called the 'comic genius of America' by Esquire in 2006 and 'the best' by a Billboard writer in 2013.",
    additional_info: {
        social_media: {
            twitter: "https://twitter.com/davechappelle",
            instagram: "https://www.instagram.com/davechappelle/"
        }
    }
};


// FEMALE COMICS //

const msPatData = {
    name: "Ms. Pat",
    gender: "Female",
    comedy_styles: ["sketch", "dark"],
    characteristics: ["edgy", "controversial", "TV"],
    specials: ["Y'All Wanna Hear Something Crazy"],
    podcasts: ["The PatDown with Ms.Pat", "The Joe Rogan Experience", "This Past Weekend", "The Church Of What's Happening Now", "The Breakfast Club"],
    notable_works: ["Rabbit","The Ms. Pat Show", "Ms. Pat Settles it "],
    bio: "Declared by The Washington Post as “unforgiving and darkly hilarious,” and The New York Times as “brutally honest and outrageous,” Patricia Williams (aka Ms. Pat) is a comedian, author, radio host, podcaster, and actress who brings a raw, in your face, and hilarious perspective to her work. With an Emmy-nominated multi-cam series based on her own life, an overall deal with BET/Paramount Global, her popular first Netflix hour streaming, and sold-out standup shows nationwide, Ms. Pat is headed for comedy superstardom.",
    additional_info: {
        website: "https://www.mspatcomedy.com/",
        social_media: {
            youtube: "https://www.youtube.com/@MsPat",
            twitter: "https://twitter.com/comediennemspat",
            instagram: "https://www.instagram.com/comediennemspat/"
        }
    }
};


const whitneyCummingsData = {
    name: "Whitney Cummings",
    gender: "Female",
    comedy_styles: ["sketch", "dark"],
    characteristics: ["edgy", "controversial", "crowd work", "LGBTQ+", "political", "TV"],
    specials: ["Mouthy", "Roast of Whitney Cummings", "Jokes", "Can I Touch It?", "I'm Your Girlfriend"],
    podcasts: ["Good For You Podcast with Whitney Cummings", "The Joe Rogan Experience", "This Past Weekend", "The Tim Dillon Show", "The Brilliant Idiots", "The Breakfast Club",  "Kill Tony","Flagrant 2", "This Bitch Podcast"],
    notable_works: ["I'M FINE... AND OTHER LIES", "Whitney","The Wendy Williams Show", "Funny You Should Ask", "2 Broke Girls", "Jimmy Kimmel Live"],
    bio: "Best known for creating and starring in the NBC series “Whitney,” Whitney is also the co-creator and co-writer of the syndicated Emmy-nominated CBS comedy series “2 Broke Girls.” She has appeared in numerous television shows, films, and stand-up specials, including her new special 'Mouthy'. She mostly makes jokes on topics that are generally considered taboo.",
    additional_info: {
        website: "https://whitneycumming.wpenginepowered.com/",
        social_media: {
            youtube: "https://www.youtube.com/@whitneycummings",
            twitter: "https://twitter.com/WhitneyCummings",
            instagram: "https://www.instagram.com/whitneycummings/"
        }
    }
};


const jessicaKirsonData = {
    name: "Jessica Kirson",
    gender: "Female",
    comedy_styles: ["self-deprecating", "dark", "slap stick"],
    characteristics: ["LGBTQ-friendly", "crowd work", "LGBTQ+", "impressions", "edgy", "musical"],
    specials: ["No Material", "Talking to Myself"],
    podcasts: ["Kill Tony", "Whiskey Ginger w/ Andrew Santino", "The Joe Rogan Experience", "Your Mom's House", "The Tim Dillon Show" ],
    notable_works: ["The Comedian's Comedian", "The Howard Stern Show", "The Jim Gaffigan Show"],
    bio:"Jessica Kirson is a powerhouse on stage. She's a hilariously relatable performer of sheer silliness, vulnerability, and ridiculous characters. Her countless comedic character videos have racked up over 200 million views on social media. Her audience is multigenerational, creating an excuse for large groups of friends and families to spend a night out together. In an era where only 10% of all touring comedians are female, Jessica stands out as one of the strongest comedians regardless of gender. As her friend Dave Attell says, 'I'd hate to follow her.'",
    additional_info: {
        website: "https://www.jessicakirson.com/",
        social_media: {
            youtube: "https://www.youtube.com/@JessicaKirsonComedy",
            twitter: "https://twitter.com/JessicaKirson",
            instagram: "https://www.instagram.com/jessykirson/"
        }
    }
};


const matteoLaneData = {
    name: "Matteo Lane",
    gender: "Male",
    comedy_styles: ["observational"],
    characteristics: ["LGBTQ-friendly", "crowd work", "LGBTQ+", "musical", "impressions"],
    specials: ["Matteo Lane: The Advice Special", "Matteo Lane: Hair Plugs & Heartache", "Matteo Lane: The Advice Special Part Two"],
    podcasts: ["Flagrant",  "We Might Be Drunk Podcast", "Your Mom's House"],
    notable_works: ["The Comedy Lineup", "The Late Show with Stephen Colbert"],
    bio: "Named one of Variety's Top Ten Comics to Watch, stand up comedian Matteo Lane performs to sold out crowds all over the world. He has shared the stage with the likes of Chelsea Handler, Aziz Ansari, Hasan Minhaj, and Bob the Drag Queen. Matteo can be seen in Netflix's queer stand up special STAND OUT as well as THE COMEDY LINEUP. A skilled artist and pasta aficionado, Matteo has also painted a mural for the Obamas' headquarters in Chicago and trained as an opera singer in Rome.",
    additional_info: {
        website: "https://www.matteolanecomedy.com/",
        social_media: {
            youtube: "https://www.youtube.com/@matteolanecomedy",
            instagram: "https://www.instagram.com/matteolane/"
        }
    }
};


// CLEAN COMEDY //

const gabrielIglesiasData = {
    name: "Gabriel Iglesias",
    gender: "Male",
    comedy_styles: ["story telling", "clean"],
    characteristics: ["TV", "impressions"],
    specials: ["Stadium Fluffy", "I'm Not Fat... I'm Fluffy", "Hot & Fluffy", "Aloha Fluffy", "I'm Sorry For What I Said When I Was Hungry", "One Show Fits All"],
    podcasts: ["The Joe Rogan Experience", "SnoopDoggTV", "TigerBelly", "Impulsive", "Whiskey Ginger w/ Andrew Santino"],
    notable_works: ["Mr. Iglesias", "Magic Mike XXL", "The Nut Job", "The Fluffy Movie","Space Jam: A New Legacy"],
    bio: "Iglesias is one of America's most successful stand-up comedians performing to sold-out concerts around the world. He is also one of the most watched comedians on YouTube with almost a billion views and has over 25 million fans across social media. In 2018, Gabe was included in The Hollywood Reporter's “Top 40 Comedy Players” issue alongside comedy giants Jerry Seinfeld, Chris Rock and Lorne Michaels. The comedian has also had the distinct honor of being one of the few to headline and sell-out Madison Square Garden in New York, Staples Center in Los Angeles and Sydney Opera House in Australia. Iglesias is the star and executive producer of Mr. Iglesias, the multi-cam, Netflix original comedy series.",
    additional_info: {
        website: "https://fluffyguy.com/",
        social_media: {
            youtube: "https://www.youtube.com/@fluffyguy",
            twitter: "https://twitter.com/fluffyguy",
            instagram: "https://www.instagram.com/fluffyguy/"
        }
    }
};


const joKoyData = {
    name: "Jo Koy",
    gender: "Male",
    comedy_styles: ["clean", "story telling"],
    characteristics: ["TV"],
    specials: ["Live from the LA Forum", "In His Elements", "Comin' in Hot", "Live from Seattle", "Lights Out", "Don't Make Him Angry"],
    podcasts: ["Flagrant", "Your Mom's House", "This Past Weekend"],
    notable_works: ["Easter Sunday", "The Monkey King"],
    bio: "As one of today's premiere stand-up comics Jo Koy has come a long way from his modest beginnings performing at a Las Vegas coffee house. The comedian, who pulls inspiration from his family, specifically his son, sells-out arenas and theaters across the world. In 2017, Koy broke a record for the most tickets sold by a single artist at 23,000 tickets and 11 sold-out shows at The Neal S. Blaisdell Concert Hall in Honolulu. In response, the mayor's office in Honolulu proclaimed November 24th as “Jo Koy Day.” The comedian continued his record breaking streak by being the only comedian to sell out 6 shows at The Warfield in San Francisco.",
    additional_info: {
        website: "https://jokoy.com/",
        social_media: {
            youtube: "https://www.youtube.com/@jokoy",
            twitter: "https://twitter.com/jokoy",
            instagram: "https://www.instagram.com/jokoy/"
        }
    }
};


// STORY TELLING //

const aliSiddiqData = {
    name: "Ali Siddiq",
    gender: "Male",
    comedy_styles: ["story telling", "observational", "dark", "slap stick"],
    characteristics: ["edgy", "controversial"],
    specials: ["The Domino Effect", "The Domino Effect 2", "It's Bigger Than These Bars"],
    podcasts: ["The Joe Rogan Experience", "Kill Tony", "Are You Garbage?"],
    notable_works: ["This Is Not Happening", "Laff Mobb's Laff Tracks", "HBO's Def Comedy Jam"],
    bio: "Ali Siddiq is a stand-up comedian and public speaker out of Houston, TX.  Ali's unique style of stand-up began behind the walls of incarceration, an incubator for interesting experiences and good stories.  In 2022, Ali released two new hour specials… THE DOMINO EFFECT on YouTube and UNPROTECTED SETS on EPIX. To date, THE DOMINO EFFECT has over 9 million views, ranking it in the top 5 most watched comedy specials of the last year. People received their first taste of Ali Siddiq when he appeared on HBO's DEF COMEDY JAM and LIVE FROM GOTHAM, and in 2013 he was named Comedy Central's '#1 Comic to Watch'.",
    additional_info: {
        website: "https://www.alisiddiq.com/",
        social_media: {
            youtube: "https://www.youtube.com/@AliSiddiqComedy",
            twitter: "https://twitter.com/Ali_Speaks",
            instagram: "https://www.instagram.com/alisiddiq/"
        }
    }
};

const bertKreischerData = {
    name: "Bert Kreischer",
    gender: "Male",
    comedy_styles: ["story telling", "observational", "dark"],
    characteristics: ["edgy", "controversial", "self-deprecating", "TV"],
    specials: ["Razzle Dazzle", "Hey Big Boy", "Secret Time", "The Machine", "Comfortably Dumb"],
    podcasts: ["2 Bears 1 Cave", "The Joe Rogan Experience", "Kill Tony", "Bertcast"],
    notable_works: ["The Machine", "The Cabin with Bert Kreischer", "Bert the Conqueror", "This Is Not Happening"],
    bio: "Bert Kreischer's career has evolved from being Rolling Stone's 1997 'Number One Partier in the Nation,' to one of the top grossing stand-up comics in the business, and now movie star. In 2022, Pollstar listed Bert as #4 in the 'Top 10 Highest Grossing Tours,' performing to sold-out arenas around the globe. According to Forbes, Kreischer has been hailed as, “one of the best storytellers of his generation, seamlessly and sincerely sharing anecdotes about his family and fatherhood while proving that there's a way to take his [party-boy] antics into middle-age.",
    additional_info: {
        website: "https://bertbertbert.com/",
        social_media: {
            youtube: "https://www.youtube.com/@BertKreischer",
            twitter: "https://twitter.com/bertkreischer",
            instagram: "https://www.instagram.com/bertkreischer/"
        }
    }
};

const tomSeguraData = {
    name: "Tom Segura",
    gender: "Male",
    comedy_styles: ["story telling", "observational", "dark"],
    characteristics: ["edgy", "controversial", "self-deprecating", "TV", "impressions"],
    specials: ["Sledgehammer","Ball Hog", "Disgraceful", "Mostly Stories", "Completely Normal"],
    podcasts: ["2 Bears 1 Cave", "The Joe Rogan Experience", "Kill Tony", "Your Mom's House"],
    notable_works: ["Comedy Central Presents","I'd Like to Play Alone, Please", "Finalist on Last Comic Standing", "This Is Not Happening"],
    bio: "Tom Segura is a comedian originally from Cincinnati, Ohio. Well known for his Netflix specials Ball Hog, Disgraceful, Completely Normal, and Mostly Stories, Segura has also made feature film appearances that include Instant Family, Countdown, Flinch, and The Opening Act, among others. Tom is one of the top-selling touring acts in the world, having sold hundreds of thousands of tickets on multiple international tours. Additionally, he co-hosts two of the most popular comedy podcasts, “Your Mom's House,” with his wife, comedian Christina P. and “Two Bears, One Cave” with fellow comedian Bert Kreischer. Segura also produces multiple podcasts under his YMH Studios brand.",
    additional_info: {
        website: "https://tomsegura.com/",
        social_media: {
            youtube: "https://www.youtube.com/@TomSegura",
            twitter: "https://twitter.com/tomsegura",
            instagram: "https://www.instagram.com/seguratom/"
        }
    }
};


// HIGH COMEDY //

const kevinHartData = {
    name: "Kevin Hart",
    gender: "Male",
    comedy_styles: ["clean", "high comedy", "story telling",  "observational", "slap stick"],
    characteristics: ["edgy", "self-deprecating", "TV"],
    specials: ["Reality Check", "Zero F**ks Given", "Irresponsible", "What Now?", "Let Me Explain", "Laugh at My Pain", "Seriously Funny"],
    podcasts: ["The Joe Rogan Experience", "The Breakfast Club"],
    notable_works: ["Oscars Host","The Upside", "Jumanji: The Next Level", "Central Intelligence", "Ride Along"],
    bio: "Kevin Darnell Hart is an American comedian and actor who has appeared in numerous films like 'Paper Soldiers' and 'Scary Movie 3.' Hart was born in Philadelphia, in the US, and had a difficult childhood as his father was a drug addict and a petty criminal. He pursued humor as a way of coping with his troubled family life. He began his comedic career shortly after his high school graduation. He started small and eventually began performing in bigger clubs in New York and Los Angeles. He proved to be quite successful as a comedian and went on a series of comedy tours which helped him establish himself in the entertainment field.",
    additional_info: {
        website: "https://www.kevinhartnation.com/",
        social_media: {
            twitter: "https://twitter.com/KevinHart4real",
            instagram: "https://www.instagram.com/kevinhart4real/"
        }
    }
};


// VENTRILOQUISM //

const jeffDunhamData = {
    name: "Jeff Dunham",
    gender: "Male",
    comedy_styles: ["ventriloquism", "dark", "observational", "slap stick"],
    characteristics: ["edgy", "controversial", "impressions", "TV"],
    specials: ["Jeff Dunham's Very Special Christmas Special", "Spark of Insanity", "Controlled Chaos", "Arguing with Myself", "Minding the Monsters", "Relative Disaster"],
    podcasts: ["The Jeff Dunham Podcast", "Bertcast"],
    notable_works: ["The Jeff Dunham Show", "The Nut Job","The Masked Singer", "Comedy Central Presents", "Late Show with David Letterman"],
    bio: "Jeff Dunham is a ventriloquist, producer, and stand-up comedian who hails from America. He gained a lot of popularity and fame for appearing in numerous shows such as Late Show with David Letterman, Comedy Central Presents, The Tonight Show, and Sonny With a Chance. Moreover, his popular DVD named Spark of Insanity made him one of the world's top-grossing comedians.",
    additional_info: {
        website: "https://www.jeffdunham.com/",
        social_media: {
            youtube: "https://www.youtube.com/@JeffDunham",
            twitter: "https://twitter.com/jeffdunham",
            instagram: "https://www.instagram.com/jeffdunham/"
        }
    }
};



const populateComedians = async () => {

    const comedianDataList = [
        shaneGillisData,
        andrewSchulzData,
        daveChappelleData,
        msPatData,
        whitneyCummingsData,
        jessicaKirsonData,
        matteoLaneData,
        gabrielIglesiasData,
        joKoyData,
        aliSiddiqData,
        bertKreischerData,
        tomSeguraData,
        kevinHartData,
        jeffDunhamData
    ];
    try {
        for (const comedianData of comedianDataList) {
            await addComedian(comedianData);
        }
    } catch (error) {
        console.error('Error populating comedians:', error);
    }
};

export default populateComedians;