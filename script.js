/*
Goal: Have the images and information correspond to the correct team
Write functions for a first place to a 5th place team
*/

  fetch('http://api.football-data.org/v2/competitions/2021/standings', {
    headers: {
      'X-Auth-Token': '49f98870ef244fa5b61b175735463b0c'
    }
  })
    .then((res) => {
      return res.json()
    })
    .then((resJSON) => {
      determineFirstPlace(resJSON)
      // determineSecondPlace(resJSON)
    })

const images = {
  'Chelsea FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC4qhtmPhNFg41YUD9PAYCWloP51x1r2XVw&usqp=CAU',
  'Liverpool FC': 'tinyurl.com/crk2e835',
  'Manchester City FC': 'tinyurl.com/but3r6rs',
  'Manchester United FC': 'https://manchesterunitedlatestnews.com/wp-content/uploads/2020/07/Manchester-United-predicted-line-up-vs-West-Ham-Starting-XI-for-today.jpg',
  'Everton FC': 'tinyurl.com/y3pecfmc',
  'Brighton & Hove Albion FC': 'tinyurl.com/sjrvbhry',
  'Brentford FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzzCWdRP6cO9Q3J-s3cUP2d2NfXEYMxAwJg&usqp=CAU',
  'Tottenham FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5vakbalW15znhIFZQHd2_jyuBj_ccYUt_g&usqp=CAU',
  'West Ham United FC': 'tinyurl.com/4uvp3jua',
  'Aston Villa FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTC9pmLeAWVV5NpRNgk6yiGgrPSt0NaYuKQ&usqp=CAU',
  'Arsenal FC': 'https://s.hs-data.com/bilder/teamfotos/640x360/555.jpg',
}
  
const team1 = document.getElementById('team1');
const image1 = document.createElement('img');
const secondTeam = document.getElementById('team2');
const image2 = document.createElement('img');
const team3 = document.getElementById('team3');
const image3 = document.createElement('img');
const team4 = document.getElementById('team4');
const image4 = document.createElement('img');
const team5 = document.getElementById('team5');
const image5 = document.createElement('img')


let determineFirstPlace = (league) => {
  let position = league.standings[0].table
  let rank1 = position[0].team.name
  if (rank1 = "Chelsea FC") {
    image1.src = images['Chelsea FC']
    team1.prepend(image1)
  } else if (rank1 = "Liverpool FC") {
    image1.src = images['Liverpool FC']
    team1.prepend(image1);
  } else if (rank1 = "Manchester City FC") {
    image1.src = images['Manchester City FC']
    team1.prepend(image1)
  } else if (rank1 = "Manchester United FC") {
    image1.src = images['Manchester United FC']
    team1.prepend(image1)
  } else if (rank1 = "Everton FC") {
    image1.src = images['Everton FC']
    team1.prepend(image1)
  } else if (rank1 = "Brighton & Hove Albion FC") {
    image1.src = images['Brighton & Hove Albion FC']
    team1.prepend(image1)
  } else if (rank1 = "Brentford FC") {
    image1.src = images['Brentford FC']
    team1.prepend(image1)
  } else if (rank1 = "Tottenham Hotspur FC") {
    image1.src = images['Tottenham FC']
    team1.prepend(image1)
  } else if (rank1 = "West Ham United FC") {
    image1.src = images['West Ham United FC']
    team1.prepend(image1)
  } else if (rank1 = 'Aston Villa FC') {
    image1.src = images['Aston Villa FC']
    team1.prepend(image1)
  } else if (rank1 = 'West Ham United FC') {
    image1.src = images['West Ham United FC']
    team1.prepend(image1)
  }
};

const secondPlace = (resJSON) => {
  if (rank2 = "Chelsea FC") {
    image2.src = images['Chelsea FC']
    secondTeam.append(image2)
  } else if (rank2 = "Liverpool FC") {
    image2.src = images['Liverpool FC']
    team2.append(image2);
  } else if (rank2 = 'Manchester City FC') {
    image2.src = images['Manchester City FC']
    team2.prepend(image2)
  } else if (rank2 = 'Manchester United FC') {
    image2.src = images['Manchester United FC']
    team2.prepend(image2)
  } else if (rank2 = 'Everton FC') {
    image2.src = images['Everton FC']
    team2.prepend(image2)
  } else if (rank2 = 'Brighton & Hove Albion FC') {
    image2.src = images['Brighton & Hove Albion FC']
    team2.prepend(image2)
  } else if (rank2 = 'Brentford FC') {
    image2.src = images['Brentford FC']
    team2.prepend(image2)
  } else if (rank2 = 'Tottenham Hotspur FC') {
    image2.src = images['Tottenham FC']
    team2.prepend(image2)
  } else if (rank2 = 'West Ham United FC') {
    image2.src = images['West Ham United FC']
    team2.prepend(image2)
  } else if (rank2 = 'Aston Villa FC') {
    image2.src = images['Aston Villa FC']
    team2.prepend(image2)
  } else if (rank2 = 'Arsenal FC') {
    image2.src = images['Arsenal FC']
    team2.prepend(image2)
  }
};
// fetch('http://api.football-data.org/v2/competitions/2021/standings', {
//   headers: {
//     'X-Auth-Token': '49f98870ef244fa5b61b175735463b0c'
//   }
// })
//   .then((res) => {
//     return res.json()
//   })
//   .then((resJSON) => {
//     determineFirstPlace(ra);
//     // secondPlace(resJSON);
//     console.log(resJSON.standings)
//   })

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
