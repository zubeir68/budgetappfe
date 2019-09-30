import Component from '@ember/component';
import { set }  from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
    notification: service('toast'),

    actions: {
        async plus(cat) {
            try {
                if(this.newAmount) {
                    let newVal = parseInt(this.newAmount) + cat.amount;
                    if(!isNaN(newVal)) {
                        set(cat, 'amount', newVal);
                        await cat.save();
                    }
                    set(this, 'newAmount', null);
                } else {
                    this.notification.error("add value!");
                }
            } catch (error) {
                this.notification.error(error);
                console.error(error);
            }

        },

        async minus(cat) {
            try {
                if(this.newAmount) {
                    let newVal = cat.amount - parseInt(this.newAmount);
                    if(!isNaN(newVal)) {
                        set(cat, 'amount', newVal);
                        await cat.save();
                    }
                    set(this, 'newAmount', null);
                } else {
                    this.notification.error("add value!");
                }
            } catch (error) {
                this.notification.error(error);
                console.error(error);
            }
        },

        async delete(cat){
            try {
                await cat.destroyRecord();
                this.notification.info("Deleted");
            } catch (error) {
                this.notification.error(error);
                console.error(error);
            }
        }
    }
});
