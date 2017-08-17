import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),

  init() {
    this._super(...arguments);
    this.pushPost();
    this.set('post', this.get('store').peekRecord('post', 1));
    this.set('allComments', this.get('store').peekAll('comment'));
  },

  pushPost() {
    this.get('store').push({
      data: [{
        type: 'post',
        id: '1',
        attributes: {
          title: 'Best blog post ever!'
        }
      }]
    });
  },

  pushComment() {
    this.get('store').push({
      data: [{
        type: 'comment',
        id: '10',
        attributes: {
          name: 'Comment comment!'
        },
        relationships: {
          post: {
            data: { type: 'post', id: 1 }
          }
        }
      }]
    });
  },

  actions: {
    unloadComment() {
      let comment = this.get('allComments').objectAt(0);
      if (comment) {
        comment.unloadRecord();
      }
    },

    loadComment() {
      this.pushComment();
    }
  }
});
