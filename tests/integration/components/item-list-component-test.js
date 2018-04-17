import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item-list-component', function(hooks) {
  setupRenderingTest(hooks);

  const TEMPLATE = hbs`{{item-list-component
    items=items 
    markAsRead=(action markAsRead)
  }}`;

  test('it renders correctly if i pass an empty items array', async function(assert) {
    this.set('items', []);
    this.set('markAsRead', function() {});

    await render(TEMPLATE);

    assert.equal(findAll('[data-test-item-component="true"]').length, 0);
  });
});
