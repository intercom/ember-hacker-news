import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { find, render } from '@ember/test-helpers';
import { run } from '@ember/runloop';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | item-component', function(hooks) {
  setupRenderingTest(hooks);

  const TEMPLATE = hbs`{{item-component
    item=item
    markAsRead=(action markAsRead item)
  }}`;

  let createItem = function(owner, data) {
    let store = owner.lookup('service:store');
    return run(function() {
      return store.createRecord('item', data);
    });
  };

  let setUpAndRender = function(testContext, properties) {
    testContext.set('item', properties.item);
    testContext.set('markAsRead', properties.markAsRead || function() {});

    return render(TEMPLATE);
  };

  test('it renders the content of the item', async function(assert) {
    const item = createItem(this.owner, {
      title: 'Hello world'
    });

    await setUpAndRender(this, { item });

    assert.equal(find('[data-test-item-title]').innerText, item.get('title'));
  });

});
