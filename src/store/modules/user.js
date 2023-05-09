import { defineStore } from "pinia";

export const useUserStore = defineStore({
    id: 'user',
    state: () => {
        return {
            name: '小明'
        }
    },
    getters: {
        name: state => state.name
    },
    actions: {
        changeName(name) {
            this.name = name
        }
    }
})