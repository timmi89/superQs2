import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },
  actions: {
    update(question, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('index');
    },

    destroyQuestion(question) {
      question.destroyRecord();
      //this needs to also update the city's table  and remove itself from the city
      this.transitionTo('index');
    }
  }
});
