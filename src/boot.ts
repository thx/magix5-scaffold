// magix-composer#loader=none;

'compiled@:./lib/sea.js';
'compiled@:./lib/magix.js';
(() => {
    const node = document.currentScript as HTMLScriptElement;
    const src = node.src.replace('/boot.js', '');
    const projectName = 'magix5-scaffold';
    let seajs = window.seajs;
    seajs.config({
        paths: {
            [projectName]: src + '/' + projectName,
        },
    });

    seajs.use(['magix5'], ({ applyStyle, boot,
        config }: Magix5.Magix) => {
        let setupEnv = (pkg, cdn, api) => {
            let seajs = window.seajs;
            if (!cdn.endsWith('/')) {
                cdn += '/';
            }
            if (cdn.endsWith(pkg + '/')) {
                cdn = cdn.substring(0, cdn.length - pkg.length - 1);
            }
            let paths = seajs.data && seajs.data.paths;
            if (!paths || !paths[pkg]) {
                seajs.config({
                    paths: {
                        [pkg]: cdn + pkg,
                    },
                });
            }
            let source = config(`${pkg}.resource`);
            if (!source) {
                config({
                    [`${pkg}.api.host`]: api,
                    [`${pkg}.resource`]: cdn,
                });
            }
        };
        if (window.crossConfigs) {
            for (let e of window.crossConfigs) {
                setupEnv(e.projectName, e.source, e.apiHost);
            }
        }
        // Magix.attach(
        //     window,
        //     'mxservicerror',
        //     (
        //         e: Event & {
        //             errorCode: string;
        //         }
        //     ) => {
        //         if (e.errorCode == 'LOGINOUT') {
        //             const loc = Magix.Router.parse();
        //             if (loc.hash.path != '/login/index') {
        //                 location.href =
        //                     'index.html?mxredirectUrl=' +
        //                     encodeURIComponent(location.href) +
        //                     '#!/login/index';
        //             }
        //         }
        //     }
        // );
        applyStyle('global@:./magix5-scaffold/gallery/mx-style/var.less');
        applyStyle('global@:./magix5-scaffold/gallery/mx-style/normalize.less');
        applyStyle('global@:./magix5-scaffold/gallery/mx-style/icon.less');
        //applyStyle('global@:./magix5-scaffold/gallery/mx-style/dialog.less');
        // Magix.applyStyle('@global.style')

        // medusa：国际版配置
        //      组件里面会优先读取magix.config配置的语言环境
        //      如果需要国际化，则在此处理好配置即可
        //      如不需要国际化，则固定传入zh-cn即可
        config({
            medusa: 'zh-cn',
            projectName,
            [`${projectName}.resource`]: src,
        });
        // seajs.use([projectName + '/dataplus/dataplus/analysis', projectName + '/dataplus/dataplus/index'], () => {
        // const deps = ['scroll'];
        // [
        //   '/menu',
        //   '/gallery/mx-form/index',
        //   '/gallery/mx-form/validator',
        //   '/gallery/mx-dialog/index',
        //   '/format'
        // ].forEach(p => {
        //   deps.push(projectName + p)
        // })

        // seajs.use(deps, (Scroll, Menu, Form, Validator, Dialog, FormatFn) => {
        //   Magix.View.merge(Form, Validator, Dialog, {
        //     ctor() {
        //       this.updater.set({
        //         viewId: this.id,
        //         pkgName: projectName,
        //         formatHelper: FormatFn.default
        //       })
        //     }
        //   })

        // const { defaultPath, defaultView, routes, menus } = Menu.default.menuConfig()
        // Magix.config({
        //   [`${projectName}.menus`]: menus
        // })
        // const tracker = new Tracker({
        //   pid: projectName,
        //   uidResolver: () => {
        //     const user = Magix.config(projectName + '.user')
        //     return user.userId
        //   }
        // })
        let loadCrossPrepare = (module, params) => {
            let index = module.indexOf('/');
            let pkg = index > -1 ? module.substring(0, index) : module;
            if (!loadCrossPrepare[pkg]) {
                loadCrossPrepare[pkg] = new Promise((resolve, reject) => {
                    seajs.use(`${pkg}/prepare`, (P) => {
                        try {
                            if (P.__esModule) {
                                P = P.default;
                            }
                            P(params).then(resolve, reject);
                        } catch (error) {
                            reject(error);
                        }
                    });
                });
            }
            return loadCrossPrepare[pkg];
        };
        let defaultView = projectName + '/views/default';
        boot({
            defaultPath: '/home',
            defaultView,
            projectName,
            unmatchView: projectName + '/views/404',
            routes: {
                '/home': defaultView,
                '/examples': defaultView,
            },
            rootId: 'app',
            async require(modules, params) {
                let promises = [];
                for (let m of modules) {
                    promises.push(loadCrossPrepare(m, params));
                }
                await Promise.all(promises);
            },
            error(e) {
                console.error(e);
                // tracker.logError(e, {
                //   code: 11 // 自定义的错误类型
                // })
            },
        });

        // 预加载静态资源
        // seajs.use([`${projectName}/preloadModule`], (preload) => {
        //   preload.default.start()
        // })

        // 对原生异步promise等进行捕获
        // tracker.install()
        // })
    });
    // })
})();
