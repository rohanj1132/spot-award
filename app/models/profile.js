import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    pg: DS.attr(),
    pr: DS.attr(),
    "appreciation-received": DS.attr(),
    "appreciation-sent": DS.attr(),
});
