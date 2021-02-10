let obj={};
async function getAllCountry(){
    try{
        var c=await fetch("https://restcountries.eu/rest/v2/all");
        var d=await c.json();
        //hii1.getElementsByClassName("card-img-top1").InnerText = d[0].capital;
    }
    catch(error){
        console.log(error);
    }
}

/*async function getWeatherData(){
    try{
        var c=await fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");
        
        console.log(c);
    }
    catch(error){
        console.log(error);
    }
}*/
getAllCountry(); 

function myFunction1() {
    alert("The weather is sunny");
  }

  function myFunction2() {
    alert("The weather is rainy");
  }



  function myFunction3() {
    alert("The weather is cold");
  }


  function myFunction4() {
    alert("The weather is snowy");
  }


  function myFunction5() {
    alert("The weather is fogy");
  }


  function myFunction6() {
    alert("The weather is clear");
  }
//getWeatherData();