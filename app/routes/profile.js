import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        var profile = this.store.findRecord('profile',params.id);
        return profile;
    }
});
