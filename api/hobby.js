import * as axios from 'axios';


const url = 'http://192.168.1.249:8000';
// const url = 'https://vast-brushlands-59580.herokuapp.com';



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

export async function dislike_film(username, film_id) {
    await axios.post(url + '/api/disfav', {
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


export async function unwatch_film(username, film_id) {
    await axios.post(url + '/api/unwatch', {
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

export async function get_favs(username, success_function) {
    await axios.post(url + '/api/get_favs', {
        username: username,
    }).then(response => {
        success_function(response.data.favs);
    }).catch((response) => {
        console.error(response);
    });
}
