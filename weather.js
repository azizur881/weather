
const Input=()=>{
    const searchInput = document.getElementById('search-input').value

    const key='d8079b120ab97274060f48992ad31e27'
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${key}&units=metric`)
    .then(res=>res.json())
    .then(data=>displayUpdate(data,searchInput))
}


const displayUpdate=(data,value)=>{
    console.log(data);
    let city =document.getElementById('city-name').innerText
  document.getElementById('city-name').innerText=data.name


  if(city.innerText=data.name){
    document.getElementById('city-name').innerText=data.name + ","+(data.sys.country)
    
  }
  else{
    document.getElementById('city-name').innerText=`'${value}' not a city`
  }
  document.getElementById('temp-output').innerText=data.main.temp

  let sky = data.weather[0].main
  if (data.weather[0].main =='Clear'){
    document.getElementById('sky').innerHTML='wow what a clear weather! '
  }
  else{
    document.getElementById('sky').innerHTML=data.weather[0].main
  }
  
  const imgIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
  document.getElementById('icon').setAttribute('src',imgIcon)
  
}