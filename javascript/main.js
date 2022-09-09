

let input = document.querySelector(".input") ;
let mysubmit = document.querySelector('.submit')



mysubmit.addEventListener('click',()=>{

    
    city = input.value
    

    
    let API = `https://weatherdbi.herokuapp.com/data/weather/${city}`
    
    
    fetch(API)
    .then(data=>data.json())
    .then(data=>{

     let  nameCuntry = data.region.split(',')
     let  day = data.currentConditions.dayhour ;
     let  StatusWeather = data.currentConditions.comment
     let  Humidity = data.currentConditions.humidity
     let  temp = data.currentConditions.temp.c
    //  expect days 
                // Saturday
     let sExpectWeather = data.next_days[1].comment
     let sMax_temp = data.next_days[1].max_temp.c
     let sMin_temp = data.next_days[1].min_temp.c
                // Sunday
     let nExpectWeather = data.next_days[2].comment
     let nMax_temp = data.next_days[2].max_temp.c
     let nMin_temp = data.next_days[2].min_temp.c
        
                // Sunday
     let MExpectWeather = data.next_days[3].comment
     let MMax_temp = data.next_days[3].max_temp.c
     let MMin_temp = data.next_days[3].min_temp.c
        
        
        let header = document.querySelector('.header')
        console.log(data)
        content = `   
   
    <div class="discreption d-flex justify-content-around">
        
        <h2> Country  : ${nameCuntry[1]}</h2>
        <h2> Capital  : ${nameCuntry[0]}</h2>
        <h2> Time : ${day} </h2>
        <h2> Status weather:${StatusWeather} </h2>
        <h2> Humidity : ${Humidity}  </h2>
        <h2> temp : ${temp} <i class="fa-sharp fa-solid fa-c"></i></h2>

    </div>
    <section class="forecast  ">
        <h1 class="expect">Expect 3 days to come<h1>
        <div class="d-flex justify-content-around cards  ">
            <div class="card-forecast">
                <h3>Saturday</h3>
                <p>${sExpectWeather} </p>
                <p>${sMax_temp} <i class="fa-sharp fa-solid fa-c"></i> </p>
                <p>${sMin_temp} <i class="fa-sharp fa-solid fa-c"></i> </p>
            </div>
            
            <div class="card-forecast">
                <h3>Sunday</h3>
                <p>${nExpectWeather} </p>
                <p>${nMax_temp} <i class="fa-sharp fa-solid fa-c"></i> </p>
                <p>${nMin_temp} <i class="fa-sharp fa-solid fa-c"></i> </p> 
            </div>
            
            <div class="card-forecast last">
            <h3>Monday</h3>
            <p>${MExpectWeather} </p>
            <p>${MMax_temp} <i class="fa-sharp fa-solid fa-c"></i> </p>
            <p>${MMin_temp} <i class="fa-sharp fa-solid fa-c"></i> </p> 
            </div>
            

        </div>
    </section>`


    header.innerHTML += content
        
        

    })
})




