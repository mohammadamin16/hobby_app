import * as axios from 'axios';
import {ToastAndroid} from 'react-native';

const url = 'http://192.168.1.249:8000';
// const url = 'https://vast-brushlands-59580.herokuapp.com';



export async function login(username, password, on_success){
    await axios.post(url + '/api/login',{
        username:username,
        password:password,
    }).then( response => {
        let r = response.data;
        if (r['msg'] === 'success'){
            on_success(r['user'])
        }else{
            ToastAndroid.show(r['msg'], ToastAndroid.LONG);
        }
    }).catch((response) => {
        console.error(response);
    });
}

export async function signup(username, password, name, on_success){
    await axios.post(url + '/api/signup',{
        username:username,
        password:password,
        name:name,
    }).then( response => {
        let r = response.data;
        if (r['msg'] === 'success'){
            on_success()
        }else{
            ToastAndroid.show(r['msg'].toString(), ToastAndroid.LONG);
        }
    }).catch((response) => {
        console.error(response);
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

export async function get_requests(username, success_function) {
    await axios.post(url + '/api/get_requests', {
        username: username,
    }).then(response => {
        success_function(response.data.requests);
    }).catch((response) => {
        console.error(response);
    });
}

export async function get_people(success_function) {
    await axios.post(url + '/api/get_people', {}).then(response => {
        success_function(response.data.users);
    }).catch((response) => {
        console.error(response);
    });
}
