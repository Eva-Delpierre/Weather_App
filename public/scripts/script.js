var mymap = L.map('worldmap',
     {
      center: [48.866667, 2.333333],
      zoom: 4
     }
     );

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '(c) <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

var citySelect = document.getElementsByClassName('dataCity');

var customIcon = L.icon({
    iconUrl: 'images/leaf-green.png',
    shadowUrl: 'images/leaf-shadow.png',
   
    iconSize:   [38, 95],
    shadowSize:  [50, 64],
   
    iconAnchor:  [22, 94],
    shadowAnchor: [4, 62],  
   
    popupAnchor: [-3, -76]
   });


for(var i=0; i<citySelect.length; i++) {

    var longitude = citySelect[i].dataset.longitude;
    var latitude = citySelect[i].dataset.latitude;
    var cityName = citySelect[i].dataset.name;

    // console.log(longitude);
    // console.log(latitude);
    // L.marker([latitude, longitude], {icon: customIcon}).addTo(mymap).bindPopup(cityName); 

    
    var circle = L.circle(
        [latitude, longitude],
        {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.2,
        radius: 500
        }
    ).addTo(mymap).bindPopup(cityName);

}


