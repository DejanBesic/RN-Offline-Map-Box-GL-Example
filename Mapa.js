// @flow

import React, { PureComponent } from "react";
import MapBox from  "@mapbox/react-native-mapbox-gl";
import { StyleSheet, Text, View } from "react-native";

class Mapa extends PureComponent {
  render() {
    return (
      <View style={styles.container}>
        { this.props.progress === 100 ? 
          <MapBox.MapView
            pitch={15}
            zoomLevel={18}
            ref={c => (this._map = c)}
            compassEnabled={true}
            zoomEnabled={true}
            showUserLocation={true}
            centerCoordinate={[19.7093, 45.1571]}
            style={styles.container}
            />
          : <Text>{this.props.progress}</Text>
        }
     </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default Mapa;
