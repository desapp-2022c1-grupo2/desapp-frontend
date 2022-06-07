export interface IRoute {
    path: string;
    title: string;
    enable: boolean;
    component: any;
    props?: any;
}