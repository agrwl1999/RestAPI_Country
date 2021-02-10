async function getAllCountry(){
    try{
        var c=await fetch("https://restcountries.eu/rest/v2/all");
        var d=await c.json();
        console.log(d);
        for(let i=0;i<d.length;i++){

          var card=document.createElement("div");
          card.setAttribute("class","card");
          card.style.width="18rem";


          var header1=document.createElement("h4");
          header1.setAttribute("class","card-title");
          header1.innerText=d[i].name;
          header1.style.backgroundColor="lightblue";
          card.appendChild(header1);


          var image=document.createElement("img");
          image.setAttribute("class","card-img-top");
          image.src=d[i].flag;
          card.appendChild(image);


          var cardbody=document.createElement("div");
          cardbody.setAttribute("class","card-body");


          var header2=document.createElement("p");
          header2.setAttribute("class","card-text1");
          header2.innerText="Capital: "+d[i].capital;
          cardbody.appendChild(header2);


          var header3=document.createElement("p");
          header3.setAttribute("class","card-text2");
          header3.innerText="Region: "+d[i].region;
          cardbody.appendChild(header3);


          var header4=document.createElement("p");
          header4.setAttribute("class","card-text3");
          header4.innerText="Country code: "+d[i].alpha3Code;
          cardbody.appendChild(header4);


          var header5=document.createElement("p");
          header5.setAttribute("class","card-text4");
          header5.innerText="LatIng: "+d[i].latlng;
          cardbody.appendChild(header5);


          var x=document.createElement("button");
          x.setAttribute("class","btn btn-primary");
          x.setAttribute("type","button");
          x.innerText="Click for Weather";
          cardbody.appendChild(x);

          
          card.append(cardbody);
          document.body.appendChild(card);
        }
    }
    catch(error){
        console.log(error);
    }
}
getAllCountry(); 
/*async function getWeatherData(){
    try{
        var c=await fetch("api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}");
        
        console.log(c);
    }
    catch(error){
        console.log(error);
    }
}*/


