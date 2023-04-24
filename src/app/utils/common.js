
export const fetchLocation = (dispatch, setLocation) => {
    navigator.geolocation.getCurrentPosition(function (position) {
        const payload = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
        }
        dispatch(setLocation(payload));
    });
};