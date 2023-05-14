
function initMap() {
    // localizacion queda establecida en la constante coord
    const coord = { lat:-31.388865741923652,lng: -64.13525198964184  };
    // el mapa centrado
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: coord,
    });
   
    const marker = new google.maps.Marker({
      position: coord,
      map: map,
    });
  }
  
  window.initMap = initMap;