import 'ol/ol.css';
import GeoJSON from 'ol/format/GeoJSON';
import Map from 'ol/Map';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import View from 'ol/View';

new Map({
  target: 'map-container',
  layers: [
    new VectorLayer({
      source: new VectorSource({
        format: new GeoJSON(),
        url: 'FINAL/map.geojson';
      })
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
var vectorLayerJSON_1 = new ol.source.Vector({
   projection : 'EPSG:3857',
   url: 'FINAL/map.geojson';
   format: new ol.format.GeoJSON()
});
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "Name": "The Love Kitchen"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91847252845764,
          40.86218669486491
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "North Presbyterian Church",
        "marker-color": ""
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.94440948963164,
          40.83236283345512
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Fraternite Notre Dame"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93436193466187,
          40.79701903558537
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Friendly Hands Ministry"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93765032291412,
          40.79883022592547
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Emmaus House"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.95000457763672,
          40.80530300003489
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "The Food Bank for NYC"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9549371600151,
          40.80401986537035
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Aldi"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93119156360626,
          40.79549613550981
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Aldi (Brooklyn)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.87085795402527,
          40.65378702056226
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Aldi (Bronx)"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.91308665275572,
          40.81959446832434
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Costco"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.93174946308136,
          40.79509814519895
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Trader Joe's"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.982293009758,
          40.778516479977526
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Lidl"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -74.1663086414337,
          40.58021798229387
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#0000ff",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Trader Joe's"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.98789077997208,
          40.73339299943897
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#ff0000",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Single Adult Men Shelter"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.97434026002884,
          40.74062001693818
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#ffbdde",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Brooklyn Women's Shelter"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9002737402916,
          40.673150208878425
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Franklin Women's Shelter",
        "marker-color": "#ffbdde",
        "marker-size": "medium"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.90571594238281,
          40.82813945783255
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#80ff80",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Kensington Family Shelter"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.97936940193176,
          40.6445378280285
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "marker-color": "#80ff80",
        "marker-size": "medium",
        "marker-symbol": "",
        "Name": "Stockholm Family Shelter"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -73.9248937368393,
          40.69755320280199
        ]
      }
    }
  ]
}

var vectorLayerJSON_2 = new ol.source.Vector({
        features: (new ol.format.GeoJSON()).readFeatures(geojsonObject)
      });
      var vectorLayerJSON_3 = new ol.layer.Vector({
          renderMode: 'image',
          source: new ol.source.Vector({
              loader: function() {
                  $.ajax({
                      type: 'GET',
                      url: 'myFolder/yourFile_2.geojson',
                      context: this
                  }).done(function(data) {
                      var format = new ol.format.GeoJSON();
                      this.addFeatures(format.readFeatures(data));
                  });
              }
          }),
          style: myDefinedStyle
      });


       var map = new ol.Map({
              layers: [
                new ol.layer.Tile({
                                  source: new ol.source.OSM()
                              }),
                              vectorLayerJSON_1,
                              vectorLayerJSON_2,
                              vectorLayerJSON_3
              ],
              target: 'map',
              view: new ol.View({
                center: [0, 0],
                zoom: 2
              })
            });
