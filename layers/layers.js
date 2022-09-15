var wms_layers = [];

var format_FortsData_0 = new ol.format.GeoJSON();
var features_FortsData_0 = format_FortsData_0.readFeatures(json_FortsData_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FortsData_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FortsData_0.addFeatures(features_FortsData_0);
var lyr_FortsData_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_FortsData_0, 
                style: style_FortsData_0,
                interactive: true,
                title: 'FortsData'
            });

lyr_FortsData_0.setVisible(true);
var layersList = [lyr_FortsData_0];
lyr_FortsData_0.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_FortsData_0.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_FortsData_0.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_FortsData_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});