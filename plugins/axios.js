export default function ({ $axios, redirect, store }) {

    $axios.onRequest(config => {

        config.baseURL = process.env.baseUrl;

        if (store.state.user.token)
        {
            config.headers.common['Authorization'] = `Bearer ${store.state.user.token}`;
        }
    });

    $axios.onResponse(response => {

        if(response.data.error && response.data.error.token)
        {
            console.warn(response.data.error.token);
            store.dispatch('logout');
            redirect('/login');
        }
    });

    $axios.onError(error => {
        console.log(error);
    });
}
