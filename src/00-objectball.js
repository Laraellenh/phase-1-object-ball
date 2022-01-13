// make object (function) gameObject
// - The top level of the object has two keys: `"home"`, for the home team, and
// `"away"`, for the away team.
// - The values of the `"home"` and `"away"` keys are objects too. These objects
// have the following keys:
// - `"teamName"`
// - `"colors"`
// - `"players"`
// - The `teamName` key points to a string of the team name.
// - The `colors` key points to an array of strings that are that team's colors.
// - The `players` key points to an object of players whose names (as strings) are
// the keys to a object containing their stats. The values for each player's
// names and their stats can be found in the table below. The stats keys should
// be formatted like this:
// - `"number"`
// - `"shoe"`
// - `"points"`
// - `"rebounds"`
// - `"assists"`
// - `"steals"`
// - `"blocks"`
// - `"slamDunks"`

const gameObject = {
    home:  {
        teamName: "",
        colors: "",
        players: "",
    },
    away: {
        
            teamName: "",
            colors: "",
            players: "",
        }
        
    }