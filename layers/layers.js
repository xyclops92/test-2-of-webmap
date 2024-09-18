var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_madamtheresaC43252_1 = new ol.format.GeoJSON();
var features_madamtheresaC43252_1 = format_madamtheresaC43252_1.readFeatures(json_madamtheresaC43252_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_madamtheresaC43252_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_madamtheresaC43252_1.addFeatures(features_madamtheresaC43252_1);
var lyr_madamtheresaC43252_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_madamtheresaC43252_1, 
                style: style_madamtheresaC43252_1,
                popuplayertitle: "madam theresa C43252",
                interactive: true,
                title: '<img src="styles/legend/madamtheresaC43252_1.png" /> madam theresa C43252'
            });
var format_Paths_2 = new ol.format.GeoJSON();
var features_Paths_2 = format_Paths_2.readFeatures(json_Paths_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Paths_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Paths_2.addFeatures(features_Paths_2);
var lyr_Paths_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Paths_2, 
                style: style_Paths_2,
                popuplayertitle: "Paths",
                interactive: true,
                title: '<img src="styles/legend/Paths_2.png" /> Paths'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_madamtheresaC43252_1.setVisible(true);lyr_Paths_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_madamtheresaC43252_1,lyr_Paths_2];
lyr_madamtheresaC43252_1.set('fieldAliases', {'id': 'id', 'FROM': 'FROM', 'X': 'X', 'Y': 'Y', 'TO': 'TO', 'BEARING': 'BEARING', 'DISTANCE': 'DISTANCE', });
lyr_Paths_2.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_madamtheresaC43252_1.set('fieldImages', {'id': '', 'FROM': '', 'X': '', 'Y': '', 'TO': '', 'BEARING': '', 'DISTANCE': '', });
lyr_Paths_2.set('fieldImages', {'begin': '', 'end': '', });
lyr_madamtheresaC43252_1.set('fieldLabels', {'id': 'no label', 'FROM': 'no label', 'X': 'no label', 'Y': 'no label', 'TO': 'no label', 'BEARING': 'no label', 'DISTANCE': 'no label', });
lyr_Paths_2.set('fieldLabels', {'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', });
lyr_Paths_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});