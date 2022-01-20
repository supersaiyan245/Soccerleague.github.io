/*
Goal: Have the images and information correspond to the correct team
Write functions for a first place to a 5th place team
*/

const newLocal = 'https://api.football-data.org/v2/competitions/2021/standings';
const highlightVideo = 'https://www.scorebat.com/video-api/v3/';
  fetch(newLocal, {
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
      determineFourthPlace(resJSON);
      determineFifthPlace(resJSON);
    })
  fetch(highlightVideo)
    .then((res) => {
        return res.json()
    })
    .then((resJSON) => {
      console.log(resJSON)
      showFirstPlaceTeamHighlight(resJSON)
    })
const images = {
  'Chelsea FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmC4qhtmPhNFg41YUD9PAYCWloP51x1r2XVw&usqp=CAU',
  'Liverpool FC': 'https://d3j2s6hdd6a7rg.cloudfront.net/v2/uploads/media/default/0002/18/thumb_117150_default_news_size_5.jpeg',
  'Manchester City FC': 'https://c.ndtvimg.com/2021-01/74bujqo_manchester-city-celebrate-afp_625x300_29_January_21.jpg',
  'Manchester United FC': 'https://manchesterunitedlatestnews.com/wp-content/uploads/2020/07/Manchester-United-predicted-line-up-vs-West-Ham-Starting-XI-for-today.jpg',
  'Everton FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1J7LJD-8G7N-nQQa14SqpBTV9wfWF8CQZ1g&usqp=CAU',
  'Brighton & Hove Albion FC': 'https://www.theargus.co.uk/resources/images/13072419/?type=responsive-gallery',
  'Brentford FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdzzCWdRP6cO9Q3J-s3cUP2d2NfXEYMxAwJg&usqp=CAU',
  'Tottenham FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD5vakbalW15znhIFZQHd2_jyuBj_ccYUt_g&usqp=CAU',
  'West Ham United FC': 'https://www.whufc.com/sites/default/files/inline-images/fixtures726_0.jpg',
  'Aston Villa FC': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgTC9pmLeAWVV5NpRNgk6yiGgrPSt0NaYuKQ&usqp=CAU',
  'Arsenal FC': 'https://s.hs-data.com/bilder/teamfotos/640x360/555.jpg',
}
  
const team1 = document.querySelector('.firstteam');
const image1 = document.createElement('img');
const teamName1 = document.querySelector('.tteam1');
const team2 = document.querySelector('.secondteam');
const image2 = document.createElement('img');
const teamName2 = document.querySelector('.tteam2');
const team3 = document.querySelector('.thirdteam');
const image3 = document.createElement('img');
const teamName3 = document.querySelector('.tteam3');
const team4 = document.querySelector('.fourthteam');
const image4 = document.createElement('img');
const teamName4 = document.querySelector('.tteam4')
const team5 = document.querySelector('.fifthteam');
const image5 = document.createElement('img');
const teamName5 = document.querySelector('.tteam5');


const determineFirstPlace = (league) => {
  let position = league.standings[0].table;
  let rank1 = position[0].team.name;
  teamName1.innerText = position[0].team.name;
  if (rank1 === "Chelsea FC") {
    image1.src = images['Chelsea FC']
    team1.append(image1)
  } else if (rank1 === "Liverpool FC") {
    image1.src = images['Liverpool FC']
    team1.append(image1);
  } else if (rank1 === "Manchester City FC") {
    image1.src = images['Manchester City FC']
    team1.append(image1)
  } else if (rank1 === "Manchester United FC") {
    image1.src = images['Manchester United FC']
    team1.append(image1)
  } else if (rank1 === "Everton FC") {
    image1.src = images['Everton FC']
    team1.append(image1)
  } else if (rank1 === "Brighton & Hove Albion FC") {
    image1.src = images['Brighton & Hove Albion FC']
    team1.append(image1)
  } else if (rank1 === "Brentford FC") {
    image1.src = images['Brentford FC']
    team1.append(image1)
  } else if (rank1 === "Tottenham Hotspur FC") {
    image1.src = images['Tottenham FC']
    team1.append(image1)
  } else if (rank1 === "West Ham United FC") {
    image1.src = images['West Ham United FC']
    team1.append(image1)
  } else if (rank1 === 'Aston Villa FC') {
    image1.src = images['Aston Villa FC']
    team1.append(image1)
  } else if (rank1 === 'West Ham United FC') {
    image1.src = images['West Ham United FC']
    team1.append(image1)
  }
};

let showFirstPlaceTeamHighlight = (teams) => {
  let dataArr = teams.response
  console.log(dataArr)
  let PremierLeagueTeams = dataArr.filter(data => data.competition === "ENGLAND: Premier League")
  console.log(PremierLeagueTeams)
  // for (let i = data.length - 1; i > Math.floor(data.length / 2); i--){

  // }
}

const determineSecondPlace = (league) => {
  let position = league.standings[0].table;
  let rank2 = position[1].team.name;
  teamName2.innerText = position[1].team.name;
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
  teamName3.innerText = position[2].team.name;
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

const determineFourthPlace = (league) => {
  let position = league.standings[0].table;
  let rank4 = position[3].team.name;
  teamName4.innerText = position[3].team.name;
  if (rank4 === "Chelsea FC") {
    image4.src = images['Chelsea FC']
    team4.append(image4)
  } else if (rank4 === "Liverpool FC") {
    image4.src = images['Liverpool FC']
    team4.append(image4);
  } else if (rank4 === 'Manchester City FC') {
    image4.src = images['Manchester City FC']
    team4.prepend(image4)
  } else if (rank4 === 'Manchester United FC') {
    image4.src = images['Manchester United FC']
    team4.prepend(image4)
  } else if (rank4 === 'Everton FC') {
    image4.src = images['Everton FC']
    team4.prepend(image4)
  } else if (rank4 === 'Brighton & Hove Albion FC') {
    image4.src = images['Brighton & Hove Albion FC']
    team4.prepend(image4)
  } else if (rank4 === 'Brentford FC') {
    image4.src = images['Brentford FC']
    team4.prepend(image4)
  } else if (rank4 === 'Tottenham Hotspur FC') {
    image4.src = images['Tottenham FC']
    team4.prepend(image4)
  } else if (rank4 === 'West Ham United FC') {
    image4.src = images['West Ham United FC']
    team4.prepend(image4)
  } else if (rank4 === 'Aston Villa FC') {
    image4.src = images['Aston Villa FC']
    team4.prepend(image4)
  } else if (rank4 === 'Arsenal FC') {
    image4.src = images['Arsenal FC']
    team4.prepend(image4)
  }
};

const determineFifthPlace = (league) => {
  let position = league.standings[0].table;
  let rank5 = position[4].team.name;
  teamName5.innerText = position[4].team.name;
  if (rank5 === "Chelsea FC") {
    image5.src = images['Chelsea FC']
    team5.append(image5)
  } else if (rank5 === "Liverpool FC") {
    image5.src = images['Liverpool FC']
    team5.append(image5);
  } else if (rank5 === 'Manchester City FC') {
    image5.src = images['Manchester City FC']
    team5.prepend(image5)
  } else if (rank5 === 'Manchester United FC') {
    image5.src = images['Manchester United FC']
    team5.prepend(image5)
  } else if (rank5 === 'Everton FC') {
    image5.src = images['Everton FC']
    team5.prepend(image5)
  } else if (rank5 === 'Brighton & Hove Albion FC') {
    image5.src = images['Brighton & Hove Albion FC']
    team5.prepend(image5)
  } else if (rank5 === 'Brentford FC') {
    image5.src = images['Brentford FC']
    team5.prepend(image5)
  } else if (rank5 === 'Tottenham Hotspur FC') {
    image5.src = images['Tottenham FC']
    team5.prepend(image5)
  } else if (rank5 === 'West Ham United FC') {
    image5.src = images['West Ham United FC']
    team5.prepend(image5)
  } else if (rank5 === 'Aston Villa FC') {
    image5.src = images['Aston Villa FC']
    team5.prepend(image5)
  } else if (rank5 === 'Arsenal FC') {
    image5.src = images['Arsenal FC']
    team5.prepend(image5)
  }
};
