import Ember from 'ember';

export default Ember.Component.extend({
  addNewQuestion: false,
  actions: {
    questionFormShow(){
      this.set('addNewQuestion', true);
    },
    save1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        note: this.get('note')
      };
      this.set('addNewQuestion', false);
      this.sendAction('save2', params);
    }
  }
});

// parent= index
