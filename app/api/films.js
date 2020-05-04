import * as axios from 'axios';

const url = 'http://192.168.1.249:8000';
// const url = 'https://vast-brushlands-59580.herokuapp.com';


export async function search_film(query,username , result_function) {
    await axios.post(url + '/api/search_film', {
        query: query,
        username: username,
    }).then(response => {
        let r = response.data.films;
        result_function(r);
    }).catch((response) => {
        console.error(response);
    });
}
