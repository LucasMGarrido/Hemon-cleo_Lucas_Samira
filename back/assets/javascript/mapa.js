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

function selecionaLocal(){

  event.preventDefault();

  let lat = marker.getPosition().lat();
  let lng = marker.getPosition().lng();
  console.log(lat + " " + lng);

  document.getElementById("lat").value = lat;
  document.getElementById("long").value = lng;
  let hemoName = document.getElementById('hemoName').value;

  const obj = {
      nome: hemoName,
      ponto: { type: 'Point', coordinates: [lng, lat ] },
  };
}

function adicionar(){
  
  event.preventDefault();

  selecionaLocal();

    console.log("Objeto: " + obj.nome + " " + obj.ponto.coordinates);

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

function listarMapas() {

  fetch("http://localhost:3000/hemonucleo/")
      .then((res) => res.json())
      .then((hemonucleos) => {
          marker = new google.maps.Marker({
              map: map,
          });

          hemonucleos.forEach((element) => {
              marker.setPosition(
                  new google.maps.LatLng(
                      element.ponto.coordinates[0],
                      element.ponto.coordinates[1]
                  )
              );
          });
      });
}