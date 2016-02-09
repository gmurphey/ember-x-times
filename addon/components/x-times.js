import Ember from 'ember';
import layout from '../templates/components/x-times';

const {
  Component,
  computed,
  get
} = Ember;

let component = Component.extend({
  layout,

  times: 0,

  timesArray: computed('times', function() {
    const times = get(this, 'times');
    let timesArray = Ember.A();

    for (let i = 0; i < times; i++) {
      timesArray.push(i);
    }

    return timesArray;
  })
});

component.reopenClass({
  positionalParams: ['times']
});

export default component;
