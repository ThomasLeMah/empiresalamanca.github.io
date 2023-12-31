const center_x = 117.3;
const center_y = 172.8;
const scale_x = 0.02072;
const scale_y = 0.0205;

CUSTOM_CRS = L.extend({}, L.CRS.Simple, {
    projection: L.Projection.LonLat,
    scale: function(zoom) {

        return Math.pow(2, zoom);
    },
    zoom: function(sc) {

        return Math.log(sc) / 0.6931471805599453;
    },
	distance: function(pos1, pos2) {
        var x_difference = pos2.lng - pos1.lng;
        var y_difference = pos2.lat - pos1.lat;
        return Math.sqrt(x_difference * x_difference + y_difference * y_difference);
    },
	transformation: new L.Transformation(scale_x, center_x, -scale_y, center_y),
    infinite: true
});

var SateliteStyle = L.tileLayer('mapStyles/styleSatelite/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 8,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'SateliteStyle map',}),
	AtlasStyle	= L.tileLayer('mapStyles/styleAtlas/{z}/{x}/{y}.jpg', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'styleAtlas map',}),
	GridStyle	= L.tileLayer('mapStyles/styleGrid/{z}/{x}/{y}.png', {minZoom: 0,maxZoom: 5,noWrap: true,continuousWorld: false,attribution: 'Online map GTA V',id: 'styleGrid map',});

var ExampleGroup = L.layerGroup();

var Icons = {
	"Example" :ExampleGroup,
};

var mymap = L.map('map', {
    crs: CUSTOM_CRS,
    minZoom: 1,
    maxZoom: 5,
    Zoom: 5,
    maxNativeZoom: 5,
    preferCanvas: true,
    layers: [SateliteStyle],
    center: [0, 0],
    zoom: 3,
});

var layersControl = L.control.layers({ "Satelite": SateliteStyle,"Atlas": AtlasStyle,"Grid":GridStyle}, Icons).addTo(mymap);


function customIcon(icon){
	return L.icon({
		iconUrl: `blips/${icon}.png`,
		iconSize:     [20, 20],
		iconAnchor:   [20, 20], 
		popupAnchor:  [-10, -27]
	});
}

var X  = 1210;
var Y = -3150;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Laboratoire");

var X  = 1370;
var Y = -2100;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Atelier d'armes");

var X  = 1650;
var Y = -2850;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave d'avion (Kérosene - T-Shirts Gucci)");

var X  = -1380;
var Y = -660;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Print");

var X  = -1525;
var Y = -440;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Vol de vêtements de luxe");

var X  = -2725;
var Y = -680;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave batiment (Nitrogène - Sulfure)");

var X  = 3250;
var Y = -500;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave bateau (Matériel MerryWeather - Balles 9mm, .45acp)");

var X  = 3550;
var Y = 3400;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave bateau (Récolte Weed)");

var X  = 3550;
var Y = 3700;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Braquage entrepôts (explosifs)");

var X  = 2190;
var Y = 3320;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Informations (argent sale)");

var X  = 2350;
var Y = 3040;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Achat de métaux");

var X  = -250;
var Y = 2940;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Récolte cocaïne");

var X  = -95;
var Y = 2810;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Petits boulots");

var X  = -3550;
var Y = 3500;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave d'avion (loot inconnu)");

var X  = -810;
var Y = 4300;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Coffre argent");

var X  = 3700;
var Y = 4900;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Cabane îlot (coffre argent + hélico)");

var X  = 2205;
var Y = 5610;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Récolte codéine");

var X  = 2755;
var Y = 6610;
L.marker([Y,X], {icon: customIcon(1)}).addTo(Icons["Example"]).bindPopup("Épave sous-marin (Explosifs - Masques à gaz)");