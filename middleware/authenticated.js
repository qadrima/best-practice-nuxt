export default function ({ store, redirect }) {
    if(!store.state.token)
    {
        return redirect('/login');
    }
    else if(store.state.token && !store.state.auth)
    {
        store.dispatch('fetchAuth');
    }
}
