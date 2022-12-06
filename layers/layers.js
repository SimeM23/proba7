var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1 = new ol.format.GeoJSON();
var features_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1 = format_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.readFeatures(json_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.addFeatures(features_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1);
var lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1, 
                style: style_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1,
                interactive: true,
                title: '<img src="styles/legend/Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.png" /> Na_velikim_i_malim_ekranima__Tocke_GEOJSON'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1];
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.set('fieldAliases', {'Regija': 'Regija', 'Lokacija': 'Lokacija', 'x': 'x', 'y': 'y', 'Napomena': 'Napomena', 'Opis': 'Opis', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.set('fieldImages', {'Regija': 'TextEdit', 'Lokacija': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Napomena': 'TextEdit', 'Opis': 'TextEdit', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.set('fieldLabels', {'Regija': 'no label', 'Lokacija': 'no label', 'x': 'no label', 'y': 'no label', 'Napomena': 'no label', 'Opis': 'no label', });
lyr_Na_velikim_i_malim_ekranima__Tocke_GEOJSON_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});