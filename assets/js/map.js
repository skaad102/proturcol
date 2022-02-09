var map = L.map('map').setView([5.3335503,-72.4021137], 10);
$('#ventana').on('show.bs.modal', function(){
    setTimeout(function() {
      map.invalidateSize();
    }, 10);
   });

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
}).addTo(map);

L.marker([5.3336,-72.4014]).addTo(map);
L.marker([5.172638, -72.550558]).addTo(map);
L.marker([5.876852, -71.897561]).addTo(map);
document.getElementById('select-coor').addEventListener('change', function(e){
    let coord = e.target.value.split(',')
    map.flyTo(coord,16)
});