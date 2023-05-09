import { defineStore } from "pinia";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            name: '小明'
        }
    },
    getters: {
        
    },
    actions: {
        changeName(name) {
            this.name = name
        }
    }
})