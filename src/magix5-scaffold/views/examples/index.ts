import Magix from 'magix5';
const { View, applyStyle, Router } = Magix;

applyStyle('@:./index.less');

export default View.extend({
    tmpl: '@:./index.html',
    async render() {
        this.digest();
    },
});
