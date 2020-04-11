import * as axios from 'axios';
import {ToastAndroid} from 'react-native';

const url = 'http://192.168.1.249:8000';
// const url = 'https://vast-brushlands-59580.herokuapp.com';

export async function login(username, password,success_function){
    await axios.post(url + '/api/login',{
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
    await axios.post(url + '/api/signup',{
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

export async function like_film(username, film_id) {
    await axios.post(url + '/api/fav', {
        username: username,
        film_id: film_id,
    }).then(response => {
        //WE CAN DO STH HERE...
    }).catch((response) => {
        console.error(response);
    });
}

export async function watch_film(username, film_id) {
    await axios.post(url + '/api/watch', {
        username: username,
        film_id: film_id,
    }).then(response => {
        //WE CAN DO STH HERE...
    }).catch((response) => {
        console.error(response);
    });
}

export async function get_notifications(username, on_success) {
    await axios.post(url + '/api/get_notifications', {
        username: username,
    }).then(response => {
        let msg = response.data.msg;
        if (msg === 'success'){
            let r = response.data.notifications;
            on_success(r)
        }else{
            alert('Something went wrong')
        }
    }).catch((response) => {
        console.error(response);
        alert(response)
    });
}

export async function search_people(query, username, success_function) {
    await axios.post(url + '/api/search_people', {
        query: query,
        username: username,
    }).then(response => {
        let r = response.data.users;
        success_function(r);
    }).catch((response) => {
        console.error(response);
    });
}

export async function send_request(username, friend_username) {
    await axios.post(url + '/api/friendship_request', {
        username: username,
        friend_username: friend_username,
    }).then(response => {

    ToastAndroid.show("Requested!", ToastAndroid.SHORT);
    }).catch((response) => {
        console.error(response);
    });
}

export async function accept_request(username, friend_username) {
    await axios.post(url + '/api/accept_request', {
        username: username,
        friend_username: friend_username,
    }).then(response => {
    ToastAndroid.show("Accepted!", ToastAndroid.SHORT);
    }).catch((response) => {
        console.error(response);
    });
}

export async function deny_request(username, friend_username) {
    await axios.post(url + '/api/deny_request', {
        username: username,
        friend_username: friend_username,
    }).then(response => {
    ToastAndroid.show("Rejected!", ToastAndroid.SHORT);
    }).catch((response) => {
        console.error(response);
    });
}

export async function get_friends(username, success_function) {
    await axios.post(url + '/api/get_friends', {
        username: username,
    }).then(response => {
        success_function(response.data['friends'])
    }).catch((response) => {
    });
}

export async function suggest(username, film_id, title, text, success_function) {
    await axios.post(url + '/api/suggest', {
        username: username,
        film_id: film_id,
        title: title,
        text: text,
    }).then(response => {
        ToastAndroid.show("Suggested!", ToastAndroid.SHORT);
        success_function()
    }).catch((response) => {
        console.error(response);
    });
}

export async function get_requests(username, success_function) {
    await axios.post(url + '/api/get_requests', {
        username: username,
    }).then(response => {
        success_function(response.data.requests);
    }).catch((response) => {
        console.error(response);
    });
}
