var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_aksesibilitas_univ1union_1 = new ol.format.GeoJSON();
var features_aksesibilitas_univ1union_1 = format_aksesibilitas_univ1union_1.readFeatures(json_aksesibilitas_univ1union_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aksesibilitas_univ1union_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aksesibilitas_univ1union_1.addFeatures(features_aksesibilitas_univ1union_1);
var lyr_aksesibilitas_univ1union_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aksesibilitas_univ1union_1, 
                style: style_aksesibilitas_univ1union_1,
                popuplayertitle: 'aksesibilitas_univ (1) — union',
                interactive: true,
    title: 'aksesibilitas_univ (1) — union<br />\
    <img src="styles/legend/aksesibilitas_univ1union_1_0.png" /> 1,2km (15 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ1union_1_1.png" /> 2,4km (30 menit)<br />\
    <img src="styles/legend/aksesibilitas_univ1union_1_2.png" /> <br />' });
var format_univ_surabaya2univ_surabaya_2 = new ol.format.GeoJSON();
var features_univ_surabaya2univ_surabaya_2 = format_univ_surabaya2univ_surabaya_2.readFeatures(json_univ_surabaya2univ_surabaya_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_univ_surabaya2univ_surabaya_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_univ_surabaya2univ_surabaya_2.addFeatures(features_univ_surabaya2univ_surabaya_2);
var lyr_univ_surabaya2univ_surabaya_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_univ_surabaya2univ_surabaya_2, 
                style: style_univ_surabaya2univ_surabaya_2,
                popuplayertitle: 'univ_surabaya (2) — univ_surabaya',
                interactive: true,
    title: 'univ_surabaya (2) — univ_surabaya<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_3.png" /> UNAIR A<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_4.png" /> UNAIR B<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_5.png" /> UNAIR C<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/univ_surabaya2univ_surabaya_2_9.png" /> <br />' });
var format_PTN_Surabaya_3 = new ol.format.GeoJSON();
var features_PTN_Surabaya_3 = format_PTN_Surabaya_3.readFeatures(json_PTN_Surabaya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PTN_Surabaya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PTN_Surabaya_3.addFeatures(features_PTN_Surabaya_3);
var lyr_PTN_Surabaya_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PTN_Surabaya_3, 
                style: style_PTN_Surabaya_3,
                popuplayertitle: 'PTN_Surabaya',
                interactive: true,
    title: 'PTN_Surabaya<br />\
    <img src="styles/legend/PTN_Surabaya_3_0.png" /> ITS Manyar<br />\
    <img src="styles/legend/PTN_Surabaya_3_1.png" /> ITS Sukolilo<br />\
    <img src="styles/legend/PTN_Surabaya_3_2.png" /> UIN Sunan Ampel<br />\
    <img src="styles/legend/PTN_Surabaya_3_3.png" /> UNAIR A<br />\
    <img src="styles/legend/PTN_Surabaya_3_4.png" /> UNAIR B<br />\
    <img src="styles/legend/PTN_Surabaya_3_5.png" /> UNAIR C<br />\
    <img src="styles/legend/PTN_Surabaya_3_6.png" /> UNESA Ketintang<br />\
    <img src="styles/legend/PTN_Surabaya_3_7.png" /> UNESA Lidah Wetan<br />\
    <img src="styles/legend/PTN_Surabaya_3_8.png" /> UPNV Jatim<br />\
    <img src="styles/legend/PTN_Surabaya_3_9.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_aksesibilitas_univ1union_1.setVisible(true);lyr_univ_surabaya2univ_surabaya_2.setVisible(true);lyr_PTN_Surabaya_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_aksesibilitas_univ1union_1,lyr_univ_surabaya2univ_surabaya_2,lyr_PTN_Surabaya_3];
lyr_aksesibilitas_univ1union_1.set('fieldAliases', {'fid': 'fid', 'Access': 'Access', });
lyr_univ_surabaya2univ_surabaya_2.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas', });
lyr_PTN_Surabaya_3.set('fieldAliases', {'fid': 'fid', 'Nama': 'Nama', 'Kampus': 'Kampus', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas', 'foto': 'foto', });
lyr_aksesibilitas_univ1union_1.set('fieldImages', {'fid': 'TextEdit', 'Access': 'TextEdit', });
lyr_univ_surabaya2univ_surabaya_2.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'TextEdit', });
lyr_PTN_Surabaya_3.set('fieldImages', {'fid': 'TextEdit', 'Nama': 'TextEdit', 'Kampus': 'TextEdit', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'TextEdit', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'Range', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'TextEdit', 'foto': 'ExternalResource', });
lyr_aksesibilitas_univ1union_1.set('fieldLabels', {'fid': 'hidden field', 'Access': 'inline label - always visible', });
lyr_univ_surabaya2univ_surabaya_2.set('fieldLabels', {'fid': 'hidden field', 'Nama': 'inline label - always visible', 'Kampus': 'inline label - always visible', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'no label', });
lyr_PTN_Surabaya_3.set('fieldLabels', {'fid': 'no label', 'Nama': 'no label', 'Kampus': 'no label', 'Deskripsi Univ (2) — Deskripsi Univ_QS WUR': 'no label', 'Deskripsi Univ (2) — Deskripsi Univ_Didirikan': 'no label', 'Deskripsi Univ (2) — Deskripsi Univ_Fakultas': 'no label', 'foto': 'no label', });
lyr_PTN_Surabaya_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});