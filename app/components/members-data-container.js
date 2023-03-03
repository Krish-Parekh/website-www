import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class MembersDataContainerComponent extends Component {
  @service store;

  @tracked members = [];

  @action async loadMembers() {
    const data = await this.store
      .query('user', {
        size: 5,
      })
      .catch((err) => console.error(err));
    console.log({ data });
    this.members = data;
  }
}
