let map;
let marker;

let center = {lat: -6.888463202449027, lng: -38.558930105104125};

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
  });

  marker = new google.maps.Marker({
      map: map,
      position: center,
      draggable: true
  });

  map.addListener("click", (evt) => {
    addMarker(evt);
  });

  marker.addListener('position_changed', ()=>{
      map.setCenter(marker.position);
  });

}

function addMarker(evt){
    marker.setPosition(evt.latLng);
}

function adicionar(){
  
  event.preventDefault()

    // let lat = marker.getPosition().lat()
    // let lng = marker.getPosition().lng()

    let lat = document.getElementById("lat")
    let lng = document.getElementById("lng")

    const obj = {
        nome: document.getElementById('hemoName').value,
        point: { type: 'Point', coordinates: [lng, lat ] },
    };

    fetch("http://localhost:3000/hemonucleo",{
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj)
    }).then(response =>{alert('Hemonúcleo cadastrado')})
    .catch(error => alert('Algo de errado aconteceu.'));    

}