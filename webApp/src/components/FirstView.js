import React,{Component} from 'react';
import L from 'leaflet';
import { Map, TileLayer, Marker, Popup }  from 'react-leaflet';
var myIcon=L.icon(
    {
      iconUrl:'icon={myIcon}',
      iconSize:[25,41],
      iconAnchor:[12.5,41],
      popupAnchor:[0,-41]
    }
  );
 class  FirstView extends Component{
    state = {
        lat: 7.8731,
        lng: 80.7718,
        zoom: 13,
       }
    

    render(){
        const position = [this.state.lat, this.state.lng];
        return(
        <div>
               <Map className="map" center={position} zoom={this.state.zoom}>
          <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={myIcon}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
          </Marker>
        </Map>

        </div>);
    }
}

export default FirstView;