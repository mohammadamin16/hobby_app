import * as axios from 'axios';

export async function login(username, password,success_function){
    await axios.post('http://192.168.1.249:8000/api/login',{
        username:username,
        password:password,
    }).then( response => {
        let r = response.data;
        if (r['msg'] === 'success'){
            success_function(r['user'])
        }else{
            alert(r['msg'])
        }

    }).catch((response) => {
        console.error(response);
    });
}
export async function search_film(query, result_function){
    await axios.post('http://192.168.1.249:8000/api/search_film',{
        query:query,
    }).then( response => {
        let r = response.data.films;
        console.log(r);
        result_function(r);
    }).catch((response) => {
        console.error(response);
    });
}
