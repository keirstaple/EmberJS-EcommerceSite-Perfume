import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('perfume', params.perfume_id);
  },

  actions: {
    addComment(params) {
      var newComment = this.store.createRecord('comment', params);
      var perfume = params.perfume;
      perfume.get('comments').addObject(newComment);
      newComment.save().then(function(){
        return perfume.save();
      });
      this.transitionTo('perfume', params.perfume);
    }
  }

});
