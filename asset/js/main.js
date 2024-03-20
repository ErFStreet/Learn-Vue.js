const app = new Vue({
    
    // The Application
    el: `#app`,

    // The Data
    data: {
        firstMessage: ``,
        secondMessage: ``,
        profile: ``,
    },

    // The Methods Section
    methods: {
        getProfile: function () {
            this.profile = this.firstMessage + ` ` + this.secondMessage;
        }
    },
});

