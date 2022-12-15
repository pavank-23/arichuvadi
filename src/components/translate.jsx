import Axios from 'axios'

export const Translate = s => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", s);
    encodedParams.append("target", "ta");
    encodedParams.append("source", "en");

    const options = {
    method: 'POST',
    url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
    headers: {
        'content-type': 'application/x-www-form-urlencoded',
        'Accept-Encoding': 'application/gzip',
        'X-RapidAPI-Key': 'eb127613aemshaef08bf07e65bf2p15b99ajsnefc7f253c3ef',
        'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com'
    },
    data: encodedParams
    };
    Axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });
}