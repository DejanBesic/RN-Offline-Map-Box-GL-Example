import React, {Component} from 'react';
import MapBox from "@mapbox/react-native-mapbox-gl";
import  Mapa from './Mapa';

let neLat = 45.211,
  neLng = 19.935,
  swLat = 45.112557,
  swLng = 19.32377;

MapBox.setAccessToken(
  "pk.eyJ1IjoiYWxleGd2b3pkZW4iLCJhIjoiY2pjN2tvM2p1MGV0dzJ3bzcwNzRpNnZ1MyJ9.6vel6zy35B2t9dB3VywO9g"
);
  

export default class App extends Component {
  constructor() {
    super(); 
    this.state = {
      progress: 0,
    };
  }

  async componentDidMount() {
    const offlinePack  = await MapBox.offlineManager.getPack('FruskaGora');
    if (!offlinePack) {
      await MapBox.offlineManager.deletePack('FruskaGora')
      MapBox.offlineManager.createPack(
        {
          name: "FruskaGora",
          minZoom: 12,
          maxZoom: 20,
          bounds: [[neLng, neLat], [swLng, swLat]],
          styleURL: MapBox.StyleURL.Street,
        },
        (offlineRegion, status) => {
        this.setState({ progress: status.percentage });
        },
        (offlineRegion, err) => {
          console.log(err);
        }
      );
    } else {
      this.setState({ progress: 100 });
    }

  }

  render() {
    return (
      <Mapa progress={this.state.progress} />
    );
  }
}
