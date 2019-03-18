import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps"

const pos = { lat: 51.63739, lng: 0.7958 }

const Map = withScriptjs(
  withGoogleMap(() => (
    <GoogleMap defaultZoom={10} defaultCenter={pos}>
      <Marker position={pos} />
    </GoogleMap>
  ))
)

export default () => (
  <Map
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyASNTPdVFcPE_nmI42jnoZ1tlHQhOH-eJE"
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `260px` }} />}
    mapElement={<div style={{ height: `100%` }} />}
  />
)
