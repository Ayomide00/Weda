document.querySelector("#search").addEventListener("click", function (e) {
  document.querySelector("#meaning").innerHTML = "";
  let city = document.querySelector("#input").value;

  document.querySelector("#top").innerHTML = city;
  const API_KEY = "a7ad092658f748d3b0f135041192408";
  let wedaUrl = `https://api.apixu.com/v1/current.json?key=a7ad092658f748d3b0f135041192408&q=${city}`;

  fetch(wedaUrl)
    .then(function (res) {
      return res.json();
    })
    
    .then(function (data) {
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">WEATHER CONDITION : ${data.current.condition.text}</p>`
      
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">NAME : ${data.location.name}</p>`
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">REGION : ${data.location.region}</p>`
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">COUNTRY : ${data.location.country}</p>`
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">TIME : ${data.location.localtime}</p>`


      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">TEMPERATURE : ${data.current.temp_c}&deg;C or ${data.current.temp_f}F</p>`
      
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">WIND DIRECTION : ${data.current.wind_dir} or ${data.current.wind_degree}&degC</p>`
      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">WIND SPEED : ${data.current.wind_kph}Km/h</p>`

      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">PRECIPITATION : ${data.current.precip_mm}mm</p>`

      document.querySelector('#meaning').innerHTML += `<p class="media-body pb-3 mb-0 small lh-125" id="meaning">PRESSURE : ${data.current.pressure_in}inches</p>`


     })

    .catch(function (err) {
      console.log(err)
    });

  e.preventDefault();
});