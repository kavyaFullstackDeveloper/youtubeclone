
export const API_KEY = 'AIzaSyBlz3ubUnb6wt9QzNj12tzDyIO_uRPWxHQ';

export const value_converter = (value) => {
    if (value >= 1000000) {
        return Math.floor(value/1000000) + "M";
    }
    else if (value >= 1000) {
        return Math.floor(value/1000) + "K";
    } 
    else {
        return value;
    }
}