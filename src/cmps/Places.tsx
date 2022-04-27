import React from 'react';
import usePlacesAutocomplete , {getGeocode, getLatLng} from "use-places-autocomplete"


type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void
}

const Places = ({setOffice} : PlacesProps) => {
    return (
        <div>Places</div>
    )
};

export default Places;