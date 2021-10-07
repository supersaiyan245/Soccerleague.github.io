/*
Goal: Have the images and information correspond to the correct team
Write functions for a first place to a 5th place team
*/
const images = {
  'Chelsea FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC4qhtmPhNFg41YUD9PAYCWloP51x1r2XVw&usqp=CAU',
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
  
const team1 = document.getElementById('team1')
const image1 = document.createElement('img')
const team2 = document.getElementById('team2')
const team3 = document.getElementById('team3')
const team4 = document.getElementById('team4')
const team5 = document.getElementById('team5')
const firstPlace = (resJSON) => {
  for (squad in resJSON.standings[0].table[0]) {
    if (resJSON.standings[0].table[0][squad].name = 'Chelsea FC') {
      image1.src = images['Chelsea FC']
      team1.prepend(image1)
    } else if (resJSON.standings[0].table[0][squad].name = 'Liverpool FC') {
      team1.prepend(images['Liverpool FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Manchester City FC') {
      team1.prepend(images['Mancester Ctiy FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Manchester United FC') {
      team1.prepend(images['Mancester United FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Everton FC') {
      team1.prepend(images['Everton FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Brighton & Hove Albion FC') {
      team1.prepend(images['Brighton & Hove Albion FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Brentford FC') {
      team1.prepend(images['Brentford FC'])
    } else if (resJSON.standings[0].table[0][squad].name = 'Tottenham FC') {
      team1.prepend(images['Tottenham FC'])
    }
  }
};
fetch('http://api.football-data.org/v2/competitions/2021/standings', {
  headers: {
    'X-Auth-Token': '49f98870ef244fa5b61b175735463b0c'
  }
})
  .then((res) => {
    return res.json()
  })
  .then((resJSON) => {
    firstPlace(resJSON);
  })

// const secondPlace = () => {
//   for (team in resJSON.standings[0].table) {
//     if 
// }

// const thirdPlace = () => {
//   for (team in resJSON.standings[0].table) {
//     if 
// }

// const fourthPlace = () => {
//   for (team in resJSON.standings[0].table) {
//     if 
// }

// const fifthPlace = () => {
//   for (team in resJSON.standings[0].table) {
//     if 
// }
// };
// firstPlace();
//   fetch('http://api.football-data.org/v2/competitions/2021/standings')
//     .then((res) => {
//       return res.json()
//     })
//     .then((resJSON) => {

//     }
    
// const inputTeams = (team)
