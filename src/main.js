import { createApp } from 'vue';
import { createStore } from "vuex";
import App from './App.vue';
import axios from "axios";

const store = createStore({
    state() {
        return {
            counter: 0,
            history: [0],
            // randomNumber: null,
        }
    },
    mutations: {
        addToCounter(state, payLoad) {
            state.counter = state.counter + Number(payLoad);
            state.history.push(state.counter)
        },
        subtractFromCounter(state, payLoad) {
            state.counter = state.counter - Number(payLoad);
            state.history.push(state.counter)
        }
    },
    actions: {
        async addRandomNumber(context) {
            let data = await axios.get("https://www.random.org/integers/?num=1&min=-1000&max=1000&col=1&base=10&format=plain&rnd=new")
            console.log(data.data)
            context.commit("addToCounter", data.data)
            // context.state("randomNumberdata.data)
        }
    },
    getters: {
        activeIndexes: (state) => (payLoad) => {
            let indexes = [];
            // console.log(state.history)
            state.history.forEach((number, index) => {
                if (number === payLoad) {
                    indexes.push(index)
                }
            });
            return indexes;
        }
    }

})

createApp(App).use(store).mount('#app')
