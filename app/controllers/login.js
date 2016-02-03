import Ember from 'ember';

export default Ember.Controller.extend({
    actions: {
        login() {
            console.log(this.get("username"));
            this.transitionToRoute('profile', this.get("username"));
        }
    }
});
