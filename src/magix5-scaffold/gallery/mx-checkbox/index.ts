/*md5:e68bae8041a0441ab964664586c769a4*/
import Magix5 from 'magix5';
import View from '../mx-base/view';
Magix5.applyStyle('@:index.less');

export default View.extend({
    tmpl: '@:index.html',
    assign(extra) {
        this.set({
            checked: (extra.checked + '') === 'true',
            disabled: (extra.disabled + '') === 'true',
            indeterminate: (extra.indeterminate + '') === 'true',
            name: extra.name || '',
            value: extra.value || '',
            text: extra.text || '',
            tip: extra.tip || '',
            tagContent: extra.tagContent || '',
            tagColor: extra.tagColor || 'var(--mx5-color-error)',
        })
    },
    render() {
        this.digest();
    },
    '@:{change}<change>'(e) {
        this.digest({
            checked: e.target.checked,
            indeterminate: false
        })
    }
});