
var zoomLevel = 6
var latitude = 39.712
var longitude = 34.392

var map = L.map('map',{zoomControl:false}).setView([latitude, longitude], zoomLevel);

var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '<a>Emir Ekrem Barutçu | </a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var zoomControler = L.control.zoom({
    zoomInText :"+",
    zoomInTitle:"Zoom In",
    zoomOutText:"-",
    zoomOutTitle:"Zoom Out",
    position:"topright"
})
zoomControler.addTo(map)

var zoomLocation = zoomControler.getPosition();

zoomControler.enable();
//zoomControler.remove();

var mapAttribution = L.control.attribution({
    prefix:'<a href="https://web.itu.edu.tr/barutcue17/me.html" target = "_blank">Emir Ekrem Barutçu</a>',
    position:'topleft'});
mapAttribution.addTo(map);
mapAttribution.setPosition("bottomleft");
mapAttribution.remove();
zoomControler.setPosition("topleft");

var uyduharitasi = L.tileLayer('http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var googleharitasi = L.tileLayer('http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}',{subdomains:['mt0','mt1','mt2','mt3']});
var srtm_tur = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_srtm_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "Turkey SRTM Data"
});
var cog_ad = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cya_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "İl Sınırları"
});
var grids_25 = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cografigrid_wms", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "25K Grids"
});

var grids_100 = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/trk_cografigrid_wms", {
    layers: '1',
    format: 'image/png',
    transparent: true,
    attribution: "100K Grids"
});

var cdp_abi = L.tileLayer.wms("https://tucbs-public-api.csb.gov.tr/csb_cdp_abi_wmts", {
    layers: '0',
    format: 'image/png',
    transparent: true,
    attribution: "Plan"
});


var baseLayers;
baseLayers = {
    "Uydu Haritasi": uyduharitasi,
    "Google Haritasi": googleharitasi,
    "Open Street Map": OSM,
    "İl Sınırları": cog_ad,
};

var overlays = {
    "Grid 25K": grids_25,
    "Grid 100K": grids_100,
    "Türkiye SRTM": srtm_tur,
    "Antalya-Burdur-Isparta Çevre Düzeni Planı": cdp_abi,
}
var AllLayers = L.control.layers(baseLayers, overlays).addTo(map);
L.control.betterscale().addTo(map);

