import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { findAll, render } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item-list-component', function(hooks) {
  setupRenderingTest(hooks);

  const TEMPLATE = hbs`{{item-list-component
    items=items 
    markAsRead=(action markAsRead)
  }}`;

  let setUpAndRender = function(testContext, properties) {
    testContext.set('items', properties.items);
    testContext.set('markAsRead', properties.markAsRead || function() {});

    return render(TEMPLATE);
  };

  let createItem = function(owner) {
    let store = owner.lookup('service:store');
    return run(function() {
      return store.createRecord('item');
    });
  };


  test('it renders correctly if i pass an empty items array', async function(assert) {

    await setUpAndRender(this, {
      items: [],
    });

    assert.equal(findAll('[data-test-item-component]').length, 0);
  });

  test('it renders correctly if i pass an items array with values', async function(assert) {
    assert.expect(1);
    let items = [createItem(this.owner), createItem(this.owner), createItem(this.owner)];

    await setUpAndRender(this, {
      items: items,
    });

    assert.equal(findAll('[data-test-item-component]').length, 3);
  });
});
