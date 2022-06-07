import {IRoute} from "../interface";
import {HomePage, LoginPage} from "../pages";

export const routes: IRoute[] = [
  
    {
        path: '/home',
        title:'Home',
        component: HomePage,
        enable: true
    }
]