import Magix from 'magix5';

const { View, applyStyle } = Magix;
applyStyle('@:./introduction.less');

interface ILinkItem {
    text: string;
    url: string;
}

const links: ILinkItem[] = [
    {
        text: 'Magix5 Docs',
        url: 'https://thx.github.io/magix/',
    },
    {
        text: 'Magix5 Gallery',
        url: 'https://mo.m.taobao.com/one-stop/page_20211213_030636_950',
    },
];

export default View.extend({
    tmpl: '@:./introduction.html',
    assign(extra) {
        this.set({
            links,
        });
    },
    async render() {
        this.digest();
    },
});
