import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { set }  from '@ember/object';

export default Controller.extend({
    notification: service('toast'),

    actions: {
        async new() {
            try {
                set(this, 'newCat', false);
                const saveCat = await this.store.createRecord('category', {
                    name: this.newName,
                    max: this.newMax
                });
                await saveCat.save();
                set(this, 'newName', "");
                set(this, 'newMax', 0);
            } catch (error) {
                this.notification.error(error);
                console.error(error);
            }
        },
    }
});
