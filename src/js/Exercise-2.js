
var zoomLevel = 6       //
var latitude = 39.254   // The opening coordinates and zoom level
var longitude = 35.829  //

var map = L.map('map',{zoomControl:false}).setView([latitude, longitude], zoomLevel); // Map variable which arrange the opening parameters

var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a title="Creator of this website" href="https://www.linkedin.com/in/emirekrembarutcu">Emir Ekrem Barutçu | </a> &copy; ' +
        '<a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); // Adding the OSM and attribution to map



L.control.betterscale().addTo(map); // Adding the Scale to the map

map.addControl(new L.Control.Fullscreen()); //Fullscreen controller

L.control.polylineMeasure(options = {showClearControl: true, showUnitControl: true,currentCircle: {
        color: '#000',              // Color of the border of the circle
        weight: 1,                  // Weight of the circle
        fillColor: '#00ffea',          // Fill color of the circle
        fillOpacity: 1,             // Fill opacity of the circle
        radius: 5                   // Radius of the circle
    },}
).addTo(map);   // Adding the polyline tool to the map

var zoomControler = L.control.zoom({
})  // Zoom controller variable
zoomControler.addTo(map) // Adding the zoom controller to map

var OSM_topo = L.tileLayer.wms("https://ows.terrestris.de/osm/service", {
    layers:"TOPO-WMS",
    format:"image/png",
    transparent: true,
    attributionİ:"World Topographic Map"
});
var SRTM_colored_hillshade = L.tileLayer.wms("https://ows.terrestris.de/osm/service", {
    layers:"SRTM30-Colored-Hillshade",
    format:"image/png",
    transparent: true,
    attributionİ:"SRTM30 Colored Hillshade Map"
});

var srtm_tur = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_srtm_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "Turkey SRTM Data"
}); //Adding the Turkey SRTM WMS as a layer to the map
var cog_ad = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cya_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "İl Sınırları"
}); // Adding the Turkey Province Boundaries WMS as a layer to the map
var grids_25 = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cografigrid_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "25K Grids"
}); //Adding the 25K grids of TURKEY WMS as a layer to the map

var grids_100 = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cografigrid_wms", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "100K Grids"
}); //Adding the 100K grids of TURKEY WMS as a layer to the map
var baseLayers;
baseLayers = {

    "Open Street Map": OSM,
    "Topographic Map": OSM_topo,
    "Boundaries of Provinces in Turkey": cog_ad,

}; // Creating the layer group

var overlays = {
    "Turkey Grid 25K": grids_25,
    "Turkey Grid 100K": grids_100,
    "Turkey SRTM Elevation Data": srtm_tur,
    "SRTM30 Colored Hillshade":SRTM_colored_hillshade,
} // Creating the overlayer group
var AllLayers = L.control.layers(baseLayers, overlays).addTo(map); // Adding the layer groups to the map
