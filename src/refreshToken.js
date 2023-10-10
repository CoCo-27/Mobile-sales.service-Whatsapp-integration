import axios from "./axios";

function getCookie(cname) {
    let name = cname + '=';
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return '';
}
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

export const getUserCookie = getCookie

export async function refreshToken (){
    // console.log(28,getCookie('user'));
    try {
        let res = await axios.post('/user/refreshToken', {}, {
            headers: {
                Authorization: getCookie('user'),
            },
        }) 
        // console.log(35, res.data);
        setCookie('user', res.data.token, 7)
    } catch (error) {
        console.log(37, error);
    }
}