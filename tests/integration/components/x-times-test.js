import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('x-times', 'Integration | Component | x times', {
  integration: true
});

test('it renders the block x times', function(assert) {
  this.set('x', 5);

  this.render(hbs`
    <ul>
      {{#x-times x as |index|}}
        <li>{{index}}</li>
      {{/x-times}}
    </ul>
  `);

  assert.equal(this.$('li').length, this.get('x'));

  for (let i = 0; i < this.get('x'); i++) {
    assert.equal(this.$(`li:eq(${i})`).text().trim(), i);
  }
});
