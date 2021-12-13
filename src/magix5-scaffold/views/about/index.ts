import Magix from 'magix5';
import Dayjs from 'dayjs';

let { View } = Magix;
export default View.extend({
    tmpl: '@:./index.html',
    assign(data) {
        this.set(data);
    },
    async render() {
        console.log(Dayjs(new Date()).format('YYYY-MM-DD'));
        this.digest();
    }
});