// http://api.weatherapi.com/v1/current.json?key=47844e755d6541ebb12151757252408&q=Greater Noida&aqi=no

let target = 'Greater Noida'
const fetchResult = async (targetLocation)=>{
    let url = `http://api.weatherapi.com/v1/current.json?key=47844e755d6541ebb12151757252408&q=${targetLocation}&aqi=no`
    const res =await fetch(url);
    const data = await res.json();
    console.log(data);
}
fetchResult(target);