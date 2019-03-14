import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token   : localStorage.getItem('token'),
            auth    : null
        },
        actions: {
            fetchAuth(context, payload)
            {
                this.$axios.get('/user/profile').then((result) => {
                    if(result.data.status)
                    {
                        context.commit('setAuth', result.data.data.profile);
                    }
                }).catch((error) => {
                    console.log(error);
                });
            },
            login(context, payload)
            {
                return new Promise((resolve, reject) => {
                    this.$axios.post('/login', payload).then((result) => {
                        if(result.data.status)
                        {
                            context.commit('setToken', result.data.data.jwt.token);
                            context.commit('setAuth', result.data.data.user);

                            resolve(result.data);
                        }
                        else
                        {
                            reject(result.data);
                        }
                    }).catch((error) => {
                        reject(error);
                    });
                });
            },
            logout(context, payload)
            {
                return new Promise((resolve, reject) => {
                    context.commit('removeToken');
                    resolve(true);
                });
            },
            fetchUserBirthday(context, payload)
            {
                return new Promise((resolve, reject) => {
                    this.$axios.get('/user/birthday').then((result) => {
                        if(result.data.status)
                        {
                            resolve(result.data);
                        }
                        else
                        {
                            reject(result.data);
                        }
                    }).catch((error) => {
                        reject(result.data);
                    });
                });
            }
        },
        mutations: {
            setToken(state, payload)
            {
                localStorage.setItem('token', payload);
              	state.token = payload;
            },
            setAuth(state, payload){
                state.auth = payload;
            },
            removeToken(state, payload)
            {
                localStorage.removeItem('token');
              	state.token = null;
                state.auth  = null;
            }
        }
    })
}

export default createStore
