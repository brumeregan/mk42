const API_URL = window.location.protocol;
const LOGIN_URL = `${API_URL}/get-api-token/`;
const SIGNUP_URL = `${API_URL}`;
const STORAGENAME = 'pythonMeetup';


export function login(context, credentials, redirect) {

    let userData = {
        token: ''
    }

    context.$http.post(LOGIN_URL, credentials).then((response) => {

        userData.token = response.data.token;

        localStorage.setItem(STORAGENAME, JSON.stringify(userData));
        context.$router.push(redirect);
    },
        (response) => {
            console.log(`Fail response: ${response}`);
        }
    ).catch((error) => {
        console.log(error);
    })
}

export function logout(context, redirect = '/') {
    //clear token data

    localStorage.removeItem(STORAGENAME);

    // redirect to homepage
    context.$router.push(redirect);
}

export function checkToken() {

    let storageData = localStorage.getItem(STORAGENAME);

    if (!!JSON.parse(storageData) && !!JSON.parse(storageData).token === true) return true;

    return false;
}