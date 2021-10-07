/*
Goal: Have the images and information correspond to the correct team
Write functions for a first place to a 5th place team
*/
const images = {
  'Chelsea FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(214).png',
  'Liverpool FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(221).png',
  'Manchester City FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(222).png',
  'Manchester United': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(223).png',
  'Everton FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(224).png',
  'Brighton & Hove Albion FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(225).png',
  'Brentford FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(238).png',
  'Tottenham FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(227).png',
  'West Ham United FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(228).png',
  'Aston Villa FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(233).png',
  'Arsenal FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(234).png',
}
  fetch('http://api.football-data.org/v2/competitions/2021/standings', {
    headers: {
      'X-Auth-Token': '49f98870ef244fa5b61b175735463b0c'
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((resJSON) => {
      firstPlace();
      secondPlace();
      thirdPlace;
      fourthPlace;
      fifthPlace();
    })
  
const team1 = document.getElementById('team1')
const team2 = document.getElementById('team2')
const team3 = document.getElementById('team3')
const team4 = document.getElementById('team4')
const team5 = document.getElementById('team5')
const firstPlace = () => {
  for (squad in resJSON.standings[0].table[0].team) {
    if (resJSON.standings[0].table[0].team.name = 'Chelsea FC') {
      team1.prepend(image['Chelsea FC'])
    } else if (resJSON.standings[0].table[0].team.name = 'Liverpool FC') {
      team1.prepend(image['Liverpool FC'])
    } else if (resJSON.standings[0].table[0].team.name = 'Manchester City FC') {
      team1.prepend(image['Mancester Ctiy FC'])
    } else if (resJSON.standings[0].table[0].team.name = ''
}

const secondPlace = () => {
  for (team in resJSON.standings[0].table) {
    if 
}

const thirdPlace = () => {
  for (team in resJSON.standings[0].table) {
    if 
}

const fourthPlace = () => {
  for (team in resJSON.standings[0].table) {
    if 
}

const fifthPlace = () => {
  for (team in resJSON.standings[0].table) {
    if 
}
// };
// firstPlace();
//   fetch('http://api.football-data.org/v2/competitions/2021/standings')
//     .then((res) => {
//       return res.json()
//     })
//     .then((resJSON) => {

//     }
    
// const inputTeams = (team)
