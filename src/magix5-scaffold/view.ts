/**
 * 每次项目各自的通用方法定义
 * 具体页面继承该View
 * 包括挂在在view上的接口管理的fetch，save
 */
import Magix from 'magix5';
import Refs from "./gallery/mx-form/refs";
import FormSync from './gallery/mx-form/sync';
import I18n from './i18n/index';
import ProjectService from "./services/service";

let { config } = Magix;
export default Magix.View.extend({
    ctor() {
        this.set({
            i18n: I18n,
            pkgName: config<string>('projectName'),
            galleryName: 'gallery'
        })
    }
}).merge(ProjectService, FormSync, Refs);
// import Chartx from './chartpark/index';
// import Service from './services/service';
// import * as Moment from 'moment'
// import * as Accounting from 'accounting'
// import requester from 'zs_scaffold/services/requester';

// $(document).on('navslidend', () => {
//   Chartx.resize();
// });

// $(window).on('resize', () => {
//   Chartx.resize();
// });

// type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// type Magix3Ext = Omit<Magix3.View, 'extend'> & {
//   extend<TProps = { [k: string]: any }, TStatics = object>(
//     props?: Magix3.TExtendPropertyDescriptor<
//       TProps &
//       Magix3.ViewPrototype & {
//         requester: typeof requester;
//       }
//     >,
//     statics?: TStatics
//   ): Magix3.View & TStatics;
// };

// //@ts-ignore
// export default Magix.View.extend({
//   getChartOptions(id) {
//     return $.extend(true, {}, Chartx.getOptions(id));
//   },
// }).merge(Service, {
//   ctor() {
//     // 此处请使用写死的项目名 zs_scaffold
//     // 如果是变量，跨项目mount的时候，会使用宿主项目的projectName，会有问题
//     // 继承该view的页面可直接调用user.all

//     this.updater.set({
//       user: Magix.config('zs_scaffold.user'),
//       all: Magix.config('zs_scaffold.all'),
//       Moment,
//       Accounting
//     });
//     // init request
//     const me = this;
//     //@ts-ignore
//     me.requester = {};
//     for (let key in requester) {
//       if (requester.hasOwnProperty(key)) {
//         //@ts-ignore
//         me.requester[key] = function (req: any, extra: any) {
//           return requester[key](req, { ...extra, $view: me });
//         };
//       }
//     }
//   }
// }) as Magix3Ext;
