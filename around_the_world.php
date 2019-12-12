<!-- Copyright (C) 2017, manishvaidya.com -->

<!doctype html>


<?php require( 'config.php' ); ?>

<?php include (VIEW_HEADER); ?>

</head>
 
 <!-- Primary Page Layout -->

<body class="index-page">

<?php include (VIEW_NAVIGATION) ; ?>

<?php include 'php_includes/google_ad_top_horizonal.php'; ?>  


<div id="map"></div>
<!-- Replace the value of the key parameter with your own API key. -->
<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAgMbLlv1H3EvQvpYa9XSc3WgwRuMqd7Xo&callback=initMap">
</script>


  
<?php include 'php_includes/footer.php'; ?>


<?php include 'php_includes/end_js.php'; ?>

</body>
</html>