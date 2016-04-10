import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answer: DS.hasMany('answer', {ansync: true })
});
