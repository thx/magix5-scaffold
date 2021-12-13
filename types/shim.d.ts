interface Performance {
    memory: {
        usedJSHeapSize: number
    }
}
declare function define(id: string, f: Function);
declare var DEBUG;
declare var crossConfigs;
interface Seajs {
    data: {
        paths?: object
    }
    config(cfg: object): void
    use(deps: string | string[], factory: any): void
}

interface XConfig {
    projectName: string
    source: string
    apiHost: string
}

interface Window {
    seajs: Seajs,
    crossConfigs: XConfig[]
}