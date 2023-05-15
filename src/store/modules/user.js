import { defineStore } from "pinia";

const TOKEN = "TOKEN"

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            token: localStorage.getItem(TOKEN),
            name: '小明'
        }
    },
    getters: {

    },
    actions: {
        changeName(name) {
            this.name = name;
        },

        changeToken(token) {
            this.token = token;
            localStorage.setItem(TOKEN, token);
        }
    }
})