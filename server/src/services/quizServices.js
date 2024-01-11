import { Comedian } from "../models/comedian.js";

// Defines the points for each answer choice of each question.
const pointsConfig = {
    "1" : {"dark" : 4, "slap stick" : 15 , "clean" : 5, "story telling" : 5, "intellectual" : 5, "ventriloquism" : 10, "Sketch" : 10},
    "3" : {"political" : 4, "controversial" : 4, "LGBTQ+" : 10, "clean" : 5, "dark" : 4, "edgy": 4},
    "4" : {"crowd work" : 10},
    "5" : {"dark" : 8, "edgy": 4},
    "6" : {"edgy" : 3, "controversial" : 3, "political" : 3, "self-deprecating" : 6, "LGBTQ-friendly" : 10, "clean" : 10, "observational" : 5},
    "7" : { "TV" : 5},
    "8" : {"musical" : 10, "story telling": 10},
    "9" : {"impressions" : 5},
    "10" :{"clean" : 5},
    "11" : { "story telling" : 15}
}

//Maps user answers to corresponding comedian characteristics.
const mapAnswerToCharacteristic = (questionID, answers ) => {
    let characteristics = [];

    switch(questionID) {
        case "1":
            characteristics = answers.map(answer => answer.toLowerCase());
            break;
    
        case "3":
            characteristics = answers.map(answer => {
                switch (answer) {
                    case "Politics":
                        return "political"; 
                    case "Family":
                        return "clean";
                    case "LGBTQ+":
                        return "LGBTQ+";
                    default:
                        return answer.toLowerCase(); 
                }
            });
            break;

        case "4":
            if (answers.includes("Absolutely") || answers.includes("No Preference")) {
                characteristics.push("crowd work");
            }
            break;

        case "5":
            if (answers.includes("Love it!") || answers.includes("Its okay")) {
                characteristics.push("dark", "edgy");
            }
            break;

        case "6":
            characteristics = answers.map(answer => {
                if (answer === "LGBTQ-friendly") return "LGBTQ-friendly";
                return answer.toLowerCase();
            });
            break;

        case "7":
            if(answers.includes("For sure") || answers.includes("No Preference")) {
                characteristics.push("TV");
            };
            break;

        case "8":
            characteristics = answers.map(answer => {
                switch (answer) {
                    case "Song":
                        return "musical";
                    case "Through a story":
                        return "story telling";
                    default:
                        return null;
                }
            })
            break;
        
        case "9":
            if(answers.includes("You bet") || answers.includes("No Preference")) {
                characteristics.push("impressions");
            };
            break;

        case "10":
            if(answers.includes("Very important") || answers.includes("No Preference")) {
                characteristics.push("clean");
            };
            break;
            
        case "11":
            if (answers.includes("Absolutely") || answers.includes("No Preference")) {
                characteristics.push("story telling");
            }
            break;
    };
    return characteristics.map(char => [questionID, char]);
};


const scoreComedians = async (userAnswers) => {
    //Query for gender preference & get comedians
    const genderPreference = userAnswers["2"] && userAnswers["2"][0];
    let comedians; 

    if (genderPreference && genderPreference !== "No Preference") {
        comedians = await Comedian.find({ gender: genderPreference });
    } else {
        comedians = await Comedian.find();
    };


    //Score each comedian
    let comedianScore = new Map();  

    comedians.forEach(comedian => {
        let score = 0;

        for (const questionID in userAnswers) {
            const characteristics = mapAnswerToCharacteristic(questionID, userAnswers[questionID]);

            characteristics.forEach(([qID, char]) => {
                if (pointsConfig[qID] && pointsConfig[qID][char]) {
                    if (comedian.comedy_styles.includes(char) || comedian.characteristics.includes(char)) {
                        score += pointsConfig[qID][char];
                    }
                }
            });
        }
        comedianScore.set(comedian, score);
        console.log(comedian.name, score);
    });

    //Sort comedians by score and return top 3
    const topComedians = Array.from(comedianScore)
        .sort((a,b) => b[1] - a[1])
        // .slice(0, genderPreference === "Female" ? 2 : 3)
        .map(item => item[0]);


    return topComedians;
};



export default scoreComedians;