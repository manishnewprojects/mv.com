
function initMap() {
  var deep_atlantic = {lat: 36.197226, lng: -41.531212}

  var markers = [];
  
  var locations = [
      ['Prague, Czechia', 50.0598054, 14.3251966],
      ['Yosemite National Park (Half Dome)', 37.7459, -119.5332],
      ['Paris, France', 48.856613, 2.352222],
      ['Cesky Krumlov, Czechia', 48.812737, 14.317466],
      ['Vienna, Austria', 48.210033, 16.363449],
      ['Santa Cruz, California', 36.974117, -122.030792],
      ['Banff, Canada', 51.4968, -115.9281]

  ];

  var yosemite = {lat: 37.7459, lng: -119.5332};
  var prague = {lat: 50.0598054, lng: 14.3251966};  
  var cesky_krumlov = {lat: 48.812737, lng: 14.317466};  
  var paris = {lat: 48.856613, lng: 2.352222};  
  var vienna = {lat: 48.210033, lng: 16.363449};  
  var santa_cruz = {lat: 36.974117, lng: -122.030792};  
  var banff = {lat: 51.4968, lng:-115.9281};  

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: deep_atlantic
  });



/* Prague BLOCK */
  var contentString_p = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Prague, Czechia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Prague</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/prague.php">'+
      'Manish Vaidya travel blog Article: Prague</a> '+
      '</div>'+
      '</div>';

  var infowindow_p = new google.maps.InfoWindow({
    content: contentString_p
  });

  var marker_p = new google.maps.Marker({
    position: prague,
    map: map,
    title: 'Prague, Czechia'
  });


  marker_p.addListener('click', function() {
    infowindow_p.open(map, marker_p);
  });

/* END OF PRAGUE BLOCK */

/* YOSEMITE BLOCK */
  var contentString_y = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Half dome, Yosemite</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Half dome</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/yosemite_half_dome.php">'+
      'Manish Vaidya travel blog Article: Yosemite</a> '+
      '</div>'+
      '</div>';

  var infowindow_y = new google.maps.InfoWindow({
    content: contentString_y
  });

  var marker_y = new google.maps.Marker({
    position: yosemite,
    map: map,
    title: 'Yosemite National Park (Half Dome)'
  });


  marker_y.addListener('click', function() {
    infowindow_y.open(map, marker_y);
  });

/* END OF YOSEMITE BLOCK */

/* Paris BLOCK */
  var contentString_pa = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Paris, France</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Paris</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/paris.php">'+
      'Manish Vaidya travel blog Article: Paris</a> '+
      '</div>'+
      '</div>';

  var infowindow_pa = new google.maps.InfoWindow({
    content: contentString_pa
  });

  var marker_pa = new google.maps.Marker({
    position: paris,
    map: map,
    title: 'Paris, France'
  });


  marker_pa.addListener('click', function() {
    infowindow_pa.open(map, marker_pa);
  });

/* END OF Paris BLOCK */

/* Cesky Krumlov BLOCK */
  var contentString_ck = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Cesky Krumlov, Czechia</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Cesky Krumlov</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/cesky_krumlov.php">'+
      'Manish Vaidya travel blog Article: Cesky Krumlov, Czechia</a> '+
      '</div>'+
      '</div>';

  var infowindow_ck = new google.maps.InfoWindow({
    content: contentString_ck
  });

  var marker_ck = new google.maps.Marker({
    position: cesky_krumlov,
    map: map,
    title: 'Cesky Krumlov, Czechia'
  });


  marker_ck.addListener('click', function() {
    infowindow_ck.open(map, marker_ck);
  });

/* END OF Cesky Krumlov BLOCK */

/* Vienna BLOCK */
  var contentString_v = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Vienna, Austria</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Vienna</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/vienna.php">'+
      'Manish Vaidya travel blog Article: Vienna, Austria</a> '+
      '</div>'+
      '</div>';

  var infowindow_v = new google.maps.InfoWindow({
    content: contentString_v
  });

  var marker_v = new google.maps.Marker({
    position: vienna,
    map: map,
    title: 'Vienna, Austria'
  });


  marker_v.addListener('click', function() {
    infowindow_v.open(map, marker_v);
  });

/* END OF Vienna BLOCK */

/* Santa Cruz BLOCK */
  var contentString_sc = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Santa Cruz, California</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Santa Cruz</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/pacific_coast_redwoods.php">'+
      'Manish Vaidya travel blog Article: Santa Cruz, California</a> '+
      '</div>'+
      '</div>';

  var infowindow_sc = new google.maps.InfoWindow({
    content: contentString_sc
  });

  var marker_sc = new google.maps.Marker({
    position: santa_cruz,
    map: map,
    title: 'Santa Cruz, California'
  });


  marker_sc.addListener('click', function() {
    infowindow_sc.open(map, marker_sc);
  });

/* END OF Santa Cruz BLOCK */

/* BEGIN Banff BLOCK */
  var contentString_bf = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Banff, Canada</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Banff</b>,</p>'+
      '<p> <a href="https://manishvaidya.com/banff.php">'+
      'Manish Vaidya travel blog Article: Banff, Canada</a> '+
      '</div>'+
      '</div>';

  var infowindow_sc = new google.maps.InfoWindow({
    content: contentString_sc
  });

  var marker_sc = new google.maps.Marker({
    position: banff,
    map: map,
    title: 'Banff, Canada'
  });


  marker_sc.addListener('click', function() {
    infowindow_sc.open(map, marker_sc);
  });

/* END OF Banff BLOCK */



}