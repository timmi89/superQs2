import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('question', params.question_id);
  },

   actions: {
    saveC(params) {
     var newAnswer= this.store.createRecord('answer', params);
     var question = params.question;
     question.get('answer').addObject(newAnswer);
     newAnswer.save().then(function() {
       return question.save();
     });
       this.transitionTo('question', params.question);
   },

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
