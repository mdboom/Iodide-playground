const GeoLocationOutputHandler = {
    shouldHandle: value => {
        return 'lat' in value && 'lon' in value;
    },

    render: value => {
        return '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + value.lat + ',' + value.lon + '&zoom=17&size=600x300&maptype=roadmap"/>';
    }
}

window.nb_api.addOutputHandler(GeoLocationOutputHandler);
