import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('perfume', params.perfume_id);
  },

  actions: {
    addComment(params) {
      var newComment= this.store.createRecord('comment', params);
      var perfume = params.perfume;
      console.log(perfume);
      newComment.save().then(function(){
        perfume.get('comments').addObject(newComment);
        return perfume.save();
      });
      this.transitionTo('perfume', params.perfume);
    },

    sendRating(params) {
      var newRating = this.store.createRecord('rating', {value: params.rating});
      var perfume = params.perfume;
      newRating.save().then(function(){
        perfume.get('ratings').addObject(newRating);
        return perfume.save();
      });
      this.transitionTo('perfume', params.perfume);
    }
  }

});
