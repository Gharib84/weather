"use strict";
//elements 
var region = document.getElementById("weather");
var h5 = document.querySelector("h5");
let btn = document.querySelector("button");
let show = document.getElementById("show");
let alert = document.querySelector(".alert");


btn.addEventListener("click", function (e) {
    e.preventDefault();
    let apiKey = "3602edc32c8d187c5c90777e4e02a7d8";
    let data = `https://api.openweathermap.org/data/2.5/weather?q=${region.value}&appid=${apiKey}&units=metric`;
    let promise = fetch(data);
    promise.then((myjson) => myjson.json())
        .then((ourData) => {
            if (region.value == "" || !ourData.name) {
                alert.textContent = "Please Enter Your Region Name"
                alert.style.display = "block";
            } else {
                const icon = `https://openweathermap.org/img/wn/${ourData.weather[0]["icon"]}@2x.png`;
                let layout = `
                
                <div class="card text-center col-12 "style="
                background: linear-gradient(0.06deg, #26282C 0.35%, #35373B 192.77%);">
                <div class="card-body">
                    <h5 class="card-title fw-bold">${ourData.name}
                    <sup>
                        <span class="badge rounded-pill text-dark fw-bold" style="background-color: gold;">${ourData.sys.country}</span>
                    </sup>
                    </h5>
                    <!--text-->
                    <h1 class="display-1 fw-bold text-white">
                    ${Math.floor(ourData.main.temp)}
                    <sup style="color: gold;">
                        °C
                    </sup>
                    </h1>
                    <img src="${icon}" class="img-fluid" alt="">
                    <h4 class="text-white fw-bold mt-2 text-center">
                    ${ourData.weather[0]["description"]}
                    </h4>
                </div>
                </div>`;


                show.innerHTML = layout;
                region.value = "";
                alert.style.display = "none";


            }
        }).catch(() => {
            alert.textContent = "Please Enter Your Region Name"
            alert.style.display = "block";
        });


});



