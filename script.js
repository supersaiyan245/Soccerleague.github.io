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
      determineFirstPlace(resJSON);
      determineSecondPlace(resJSON);
      determineThirdPlace(resJSON);
      console.log(resJSON);
    })

const images = {
  'Chelsea FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC4qhtmPhNFg41YUD9PAYCWloP51x1r2XVw&usqp=CAU',
  'Liverpool FC': 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/18/thumb_117150_default_news_size_5.jpeg',
  'Manchester City FC': 'https://c.ndtvimg.com/2021-01/74bujqo_manchester-city-celebrate-afp_625x300_29_January_21.jpg',
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
const team2 = document.getElementById('team2');
const image2 = document.createElement('img');
const team3 = document.getElementById('team3');
const image3 = document.createElement('img');
const team4 = document.getElementById('team4');
const image4 = document.createElement('img');
const team5 = document.getElementById('team5');
const image5 = document.createElement('img')


let determineFirstPlace = (league) => {
  let position = league.standings[0].table;
  let rank1 = position[0].team.name;
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
let rank2;
const determineSecondPlace = (league) => {
  let position = league.standings[0].table;
  rank2 = position[1].team.name;
  if (rank2 === "Chelsea FC") {
    image2.src = images['Chelsea FC']
    team2.append(image2)
  } else if (rank2 === "Liverpool FC") {
    image2.src = images['Liverpool FC']
    team2.append(image2);
  } else if (rank2 === 'Manchester City FC') {
    image2.src = images['Manchester City FC']
    team2.prepend(image2)
  } else if (rank2 === 'Manchester United FC') {
    image2.src = images['Manchester United FC']
    team2.prepend(image2)
  } else if (rank2 === 'Everton FC') {
    image2.src = images['Everton FC']
    team2.prepend(image2)
  } else if (rank2 === 'Brighton & Hove Albion FC') {
    image2.src = images['Brighton & Hove Albion FC']
    team2.prepend(image2)
  } else if (rank2 === 'Brentford FC') {
    image2.src = images['Brentford FC']
    team2.prepend(image2)
  } else if (rank2 === 'Tottenham Hotspur FC') {
    image2.src = images['Tottenham FC']
    team2.prepend(image2)
  } else if (rank2 === 'West Ham United FC') {
    image2.src = images['West Ham United FC']
    team2.prepend(image2)
  } else if (rank2 === 'Aston Villa FC') {
    image2.src = images['Aston Villa FC']
    team2.prepend(image2)
  } else if (rank2 === 'Arsenal FC') {
    image2.src = images['Arsenal FC']
    team2.prepend(image2)
  }
};

const determineThirdPlace = (league) => {
  let position = league.standings[0].table;
  let rank3 = position[2].team.name;
  if (rank3 === "Chelsea FC") {
    image3.src = images['Chelsea FC']
    team3.append(image3)
  } else if (rank3 === "Liverpool FC") {
    image3.src = images['Liverpool FC']
    team3.append(image3);
  } else if (rank3 === 'Manchester City FC') {
    image3.src = images['Manchester City FC']
    team3.prepend(image3)
  } else if (rank3 === 'Manchester United FC') {
    image3.src = images['Manchester United FC']
    team3.prepend(image3)
  } else if (rank3 === 'Everton FC') {
    image3.src = images['Everton FC']
    team3.prepend(image3)
  } else if (rank3 === 'Brighton & Hove Albion FC') {
    image3.src = images['Brighton & Hove Albion FC']
    team3.prepend(image3)
  } else if (rank3 === 'Brentford FC') {
    image3.src = images['Brentford FC']
    team3.prepend(image3)
  } else if (rank3 === 'Tottenham Hotspur FC') {
    image3.src = images['Tottenham FC']
    team3.prepend(image3)
  } else if (rank3 === 'West Ham United FC') {
    image3.src = images['West Ham United FC']
    team3.prepend(image3)
  } else if (rank3 === 'Aston Villa FC') {
    image3.src = images['Aston Villa FC']
    team3.prepend(image3)
  } else if (rank3 === 'Arsenal FC') {
    image3.src = images['Arsenal FC']
    team3.prepend(image3)
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
