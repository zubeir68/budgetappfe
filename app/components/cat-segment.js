import Component from '@ember/component';
import { set }  from '@ember/object';

export default Component.extend({

    actions: {
        async plus(cat) {
            try {
                let newVal = parseInt(this.newAmount) + cat.amount;
                console.log(newVal);
                if(!isNaN(newVal)) {
                    set(cat, 'amount', newVal);
                    await cat.save();
                }
                set(this, 'newAmount', 0);
            } catch (error) {
                this.notification.error(error);
                console.error(error);
            }

        },

        async minus() {

        }
    }
});
