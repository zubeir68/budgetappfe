import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    max: DS.attr(),
    amount: DS.attr()
});