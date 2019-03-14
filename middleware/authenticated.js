export default function ({ store, redirect }) {
    if(!store.state.user.token)
    {
        return redirect('/login');
    }
    else if(store.state.user.token && !store.state.user.auth)
    {
        store.dispatch('fetchAuth');
    }
}
