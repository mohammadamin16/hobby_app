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


export async function signup(username, password, name, success_function){
    await axios.post('http://192.168.1.249:8000/api/signup',{
        username:username,
        password:password,
        name:name,
    }).then( response => {
        let r = response.data;
        if (r['msg'] === 'success'){
            success_function()
        }else{
            alert(r['msg'])
        }
    }).catch((response) => {
        console.error(response);
    });
}


export async function search_film(query,username , result_function) {
    await axios.post('http://192.168.1.249:8000/api/search_film', {
        query: query,
        username: username,
    }).then(response => {
        let r = response.data.films;
        console.log(r);
        result_function(r);
    }).catch((response) => {
        console.error(response);
    });
}

export async function like_film(username, film_id) {
    await axios.post('http://192.168.1.249:8000/api/fav', {
        username: username,
        film_id: film_id,
    }).then(response => {
        let r = response.data.films;
        console.log(r);
    }).catch((response) => {
        console.error(response);
    });
}

export async function get_notifications(username, on_success) {
    await axios.post('http://192.168.1.249:8000/api/get_notifications', {
        username: username,
    }).then(response => {
        let msg = response.data.msg;
        if (msg === 'success'){
            let r = response.data.notifications;
            // console.log('success to get notifications');
            // console.log(r);
            on_success(r)
        }else{
            alert('Something went wrong')
        }
    }).catch((response) => {
        console.error(response);
        alert(response)
    });
}

export async function search_people(query, success_function) {
    await axios.post('http://192.168.1.249:8000/api/search_people', {
        query: query,
    }).then(response => {
        let r = response.data.users;
        success_function(r);
        console.log(r);
    }).catch((response) => {
        console.error(response);
    });
}
