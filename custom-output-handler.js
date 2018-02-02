const GeoLocationOutputHandler = {
    shouldHandle: function(value) {
        return (typeof value === 'object') && 'lat' in value && 'lon' in value
    },

    render: function(value) {
        return '<img src="https://maps.googleapis.com/maps/api/staticmap?center=' + value.lat + ',' + value.lon + '&zoom=17&size=600x300&maptype=roadmap"/>'
    }
}

function iodideSetup(api) {
    api.addOutputHandler(GeoLocationOutputHandler);
}
