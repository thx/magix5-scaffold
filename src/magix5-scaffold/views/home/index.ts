import Magix from 'magix5';

let { View } = Magix;
export default View.extend({
    tmpl: '@:./index.html',
    async render() {
        this.digest();
    }
});