The Top 5 Soccer Teams England
Website link: https://supersaiyan245.github.io/Soccerleague.github.io/

Project Description:
This website shows the top 5 teams in England's Premier League at any point in the season

MVP
  <ul>
    <li>Used HTML, CSS, and JavaScript.</li>
    <li>Style page using Flexbox</li>
    <li>Implement Responsive design for other devices</li>
    <li> Import team ranking data for API to page</li>
    <li> Rank the Top 5 teams</li>
    <li> Show images of the Top 5 teams in the League</li>
  </ul>

API and Data Sample: 

 "standings": [
        {
            "stage": "REGULAR_SEASON",
            "type": "TOTAL",
            "group": null,
            "table": [
                {
                    "position": 1,
                    "team": {
                        "id": 61,
                        "name": "Chelsea FC",
                        "crestUrl": "https://crests.football-data.org/61.svg"
                    },
                    "playedGames": 7,
                    "form": null,
                    "won": 5,
                    "draw": 1,
                    "lost": 1,
                    "points": 16,
                    "goalsFor": 15,
                    "goalsAgainst": 3,
                    "goalDifference": 12
                },
                {
                    "position": 2,
                    "team": {
                        "id": 64,
                        "name": "Liverpool FC",
                        "crestUrl": "https://crests.football-data.org/64.svg"
                    },
                    "playedGames": 7,
                    "form": null,
                    "won": 4,
                    "draw": 3,
                    "lost": 0,
                    "points": 15,
                    "goalsFor": 17,
                    "goalsAgainst": 6,
                    "goalDifference": 11
                },

Wireframes
https://www.figma.com/file/jFdd1ghwnxtT2k32hLq7Uv/Untitled?node-id=0%3A1

Code Snippet:

let determineFirstPlace = (league) => {
  let position = league.standings[0].table;
  let rank1 = position[0].team.name;

