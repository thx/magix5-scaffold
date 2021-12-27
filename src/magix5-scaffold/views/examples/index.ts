import Magix from 'magix5';
const { View, applyStyle, Router } = Magix;
applyStyle('@:./index.less');

import { exampleInstances as nav } from './config';

export default View.extend({
    tmpl: '@:./index.html',
    assign(props) {
        this.set({ props, nav, isChoosed: false });
    },
    async render() {
        this.digest();
    },
    'choose<click>'(e) {
        const { target } = e.params;
        Router.to({
            instance: target,
        });
        this.digest({
            isChoosed: true,
        });
    },
    'back<click>'() {
        Router.to('/home');
    },
});
