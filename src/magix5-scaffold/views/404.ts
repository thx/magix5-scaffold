import Magix from 'magix5';

let { View } = Magix;
export default View.extend({
    tmpl: '@:./404.html',
    async render() {
        this.digest();
    }
});