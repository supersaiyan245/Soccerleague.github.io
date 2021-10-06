/*
Goal: Have the images and information correspond to the correct team
Write functions for a first place to a 5th place team
*/
const images = {
  'Chelsea': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(214).png',
  'Liverpool': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(221).png',
  'Man City': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(222).png',
  'Man United': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(223).png',
  'Everton FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(224).png',
  'Brighton and Hove Albion': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(224).png',
  'Tottenham FC': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(224).png',
  'West Ham United': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(228).png',
  'Aston Villa': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(233).png',
  'Arsenal': 'C:\Users\Jsomu\OneDrive\Pictures\Screenshots\Screenshot(234).png',
}
// const firstPlace = () => {
fetch('http://api.football-data.org/v2/competitions/2021/standings', {
  headers: {
    'X-Auth-Token': '49f98870ef244fa5b61b175735463b0c'
  }
})
    .then((res) => {
  return res.json()
  })
    .then((resJSON) => {
      console.log(resJSON.standings)
    })
// };
// firstPlace();
//   fetch('http://api.football-data.org/v2/competitions/2021/standings')
//     .then((res) => {
//       return res.json()
//     })
//     .then((resJSON) => {

//     }
    
// const inputTeams = (team)
