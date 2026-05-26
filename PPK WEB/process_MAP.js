function Process_MAP(lat, lon) {
    let slope_lat  = (latMax-latMin)/100
    let result_lat = (lat-latMin)/slope_lat
    let slope_lon  = (lonMax-lonMin)/100
    let result_lon = (lon-lonMin)/slope_lon
    console.log(`top: ${result_lat} left: ${result_lon}`)

    return {
        top: result_lat,
        left: result_lon
    }
}
