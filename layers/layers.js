var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_1 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'Open Street Map',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ZNT_3 = new ol.format.GeoJSON();
var features_ZNT_3 = format_ZNT_3.readFeatures(json_ZNT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNT_3.addFeatures(features_ZNT_3);
var lyr_ZNT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNT_3, 
                style: style_ZNT_3,
                popuplayertitle: 'ZNT',
                interactive: true,
    title: 'ZNT<br />\
    <img src="styles/legend/ZNT_3_0.png" /> >100.000<br />\
    <img src="styles/legend/ZNT_3_1.png" /> 100.000 - 200.000<br />\
    <img src="styles/legend/ZNT_3_2.png" /> 200.000 - 500.000<br />' });
var format_Sungai_4 = new ol.format.GeoJSON();
var features_Sungai_4 = format_Sungai_4.readFeatures(json_Sungai_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sungai_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sungai_4.addFeatures(features_Sungai_4);
var lyr_Sungai_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sungai_4, 
                style: style_Sungai_4,
                popuplayertitle: 'Sungai',
                interactive: true,
    title: 'Sungai<br />\
    <img src="styles/legend/Sungai_4_0.png" /> Sungai<br />' });
var format_Kepemilikan_5 = new ol.format.GeoJSON();
var features_Kepemilikan_5 = format_Kepemilikan_5.readFeatures(json_Kepemilikan_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kepemilikan_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kepemilikan_5.addFeatures(features_Kepemilikan_5);
var lyr_Kepemilikan_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kepemilikan_5, 
                style: style_Kepemilikan_5,
                popuplayertitle: 'Kepemilikan',
                interactive: true,
    title: 'Kepemilikan<br />\
    <img src="styles/legend/Kepemilikan_5_0.png" /> Hak Guna Bangunan<br />\
    <img src="styles/legend/Kepemilikan_5_1.png" /> Hak Milik<br />\
    <img src="styles/legend/Kepemilikan_5_2.png" /> Hak Pakai<br />\
    <img src="styles/legend/Kepemilikan_5_3.png" /> Hak Wakaf<br />\
    <img src="styles/legend/Kepemilikan_5_4.png" /> Kosong<br />' });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                popuplayertitle: 'Jalan',
                interactive: true,
    title: 'Jalan<br />\
    <img src="styles/legend/Jalan_6_0.png" /> Jalan<br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_GoogleMaps_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_ZNT_3.setVisible(true);lyr_Sungai_4.setVisible(true);lyr_Kepemilikan_5.setVisible(true);lyr_Jalan_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_GoogleMaps_1,lyr_OpenStreetMap_2,lyr_ZNT_3,lyr_Sungai_4,lyr_Kepemilikan_5,lyr_Jalan_6];
lyr_ZNT_3.set('fieldAliases', {'Nilai_Laha': 'Nilai_Laha', });
lyr_Sungai_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL': 'PL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Kepemilikan_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'TIPEHAK': 'TIPEHAK', 'WILAYAHID': 'WILAYAHID', 'luas_lhn': 'luas_lhn', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Jalan_6.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'PL': 'PL', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_ZNT_3.set('fieldImages', {'Nilai_Laha': 'TextEdit', });
lyr_Sungai_4.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Kepemilikan_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'TIPEHAK': 'TextEdit', 'WILAYAHID': 'TextEdit', 'luas_lhn': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Jalan_6.set('fieldImages', {'OBJECTID': 'TextEdit', 'PL': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_ZNT_3.set('fieldLabels', {'Nilai_Laha': 'no label', });
lyr_Sungai_4.set('fieldLabels', {'OBJECTID': 'no label', 'PL': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Kepemilikan_5.set('fieldLabels', {'OBJECTID': 'no label', 'TIPEHAK': 'no label', 'WILAYAHID': 'no label', 'luas_lhn': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'OBJECTID': 'no label', 'PL': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Jalan_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});