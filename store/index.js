import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            token : localStorage.getItem('token')
        },
        actions: {
            login(context, payload)
            {
                return new Promise((resolve, reject) => {
                    this.$axios.post('http://localhost:8000/login', payload).then((result) => {
                        if(result.data.status)
                        {
                            context.commit('set_token', {
                                token : result.data.data.jwt.token
                            });
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
                    context.commit('remove_token');
                    resolve(true);
                });
            }
        },
        mutations: {
            set_token(state, payload)
            {
                localStorage.setItem('token', payload.token);
              	state.token = payload.token;
            },
            remove_token(state, payload)
            {
                localStorage.removeItem('token');
              	state.token = null;
            }
        }
    })
}

export default createStore
