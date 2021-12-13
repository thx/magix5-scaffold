import ProjectView from '../view'
import Magix5 from 'magix5';

let { applyStyle, Router } = Magix5;
applyStyle('@:./default.less')

export default ProjectView.extend({
  tmpl: '@:./default.html',
  init() {
    //所有路由均映射到app/index上，这个里面，我们监听路由变化，这里仅监听path变化即可
    this.observeLocation({
      path: true
    });
  },
  async render() {
    //通过路由对象Router拿到其它信息
    let { path } = Router.parse();
    await this.digest({
      currentTime: new Date().toLocaleString(),
      path: path.substring(1)
    });
  }
});