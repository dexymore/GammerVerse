import axios from "axios";

////GETTING DATA BY PLATFORM

//// the fetch data for every components is mainly devided into two parts one for dealing with api and one with setting data to compnents
//// the first one specify what kind of data would be sent
//// and the second one send the data to the compnent it accept two params the first param will be assigned to the setting data function and the second param is the use state function
//// thAT will set the data after fetching them to the compnent 
/// i used environment variables to hide api key
let setdata =function (param)
{
    
    const options = {
   
        params: {platform: `${param}`},
        headers: {
          'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
          'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
      };
      return options;
}

export async function getGames(param,callback)
{
const {data}=await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',setdata(param))

callback(data)

}

////////GETTING DATA BY CATEGORY
let setDataCategory= function(param){
  const options = {
   
    params: {category: `${param}`},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };


  return options;

}
export async function getGamesByCategory(param,callback)
{
const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',setDataCategory(param))

callback(data)

}
///////////////////////////// sorting by///////////
let sortdata = function (param)
{
  const options = {
   
    params: {'sort-by': `${param}`},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
return options
}
export async function sorting(param , callback){
const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',sortdata(param))
callback(data)


}

//////////////////////////////////////////////////////////////////////get all games
let alldata = function ()
{
  const options = {
   
    
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
return options
}
export async function allgames( callback){
const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/games',alldata())
callback(data)


}
////////////////////////////////////////////////////////////////////////get game details by id
let gameSpecsData= function(param)
{
  const options = {
   
    params: {id: `${param}`},
    headers: {
      'X-RapidAPI-Key': `${process.env.REACT_APP__API_KEY}`,
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
    }
  };
  return options

}
export async function gameSpecs(param,callback){
  const {data}= await axios.get('https://free-to-play-games-database.p.rapidapi.com/api/game',gameSpecsData(param))
  callback(data)
console.log(data.screenshots)

}