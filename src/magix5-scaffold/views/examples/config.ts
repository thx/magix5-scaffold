interface IExampleInstance {
    text: string;
    path: string;
    introduction?: string;
}

export const exampleInstances: IExampleInstance[] = [
    {
        text: 'Form',
        path: 'form',
        introduction: 'magix中表单的简单使用',
    },
    {
        text: 'communication of view',
        path: 'communication-of-view',
        introduction: 'view之间进行通信',
    },
];
