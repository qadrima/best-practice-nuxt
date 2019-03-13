export default function ({ $axios, redirect }) {

    $axios.setToken(localStorage.getItem('token'), 'Bearer');

    $axios.onResponse(response => {
        if(response.data.error && response.data.error.token){
            console.warn(response.data.error.token);
            localStorage.removeItem('token');
            redirect('/login');
        }
    });

    $axios.onError(error => {
        console.log(error);
    });
}
