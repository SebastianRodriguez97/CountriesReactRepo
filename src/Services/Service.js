import UseFetch from "./UseFetch";

export function GetCountries() {
    const countries = UseFetch(process.env.REACT_APP_URL_BASE + process.env.REACT_APP_ENDPOINT_ALL);
    return countries;
}

export function AddCurrentUser(userObj) {
    localStorage.setItem('userLoggedin', JSON.stringify(userObj));
}

export function RemoveCurrentUser() {
    localStorage.setItem('userLoggedin', null);
}

export function GetCurrentUser() {
    return JSON.parse(localStorage.getItem('userLoggedin'));
}