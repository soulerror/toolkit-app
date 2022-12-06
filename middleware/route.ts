import { storeLocal, getLocal } from '../plugins/localstorage'
import { routeMap, hisPathKey, Page } from '@/configs/route.config'
import { Middleware } from '@nuxt/types'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'

NProgress.configure({     
    easing: 'ease',  // 动画方式    
    speed: 500,  // 递增进度条的速度    
    showSpinner: false, // 是否显示加载ico    
    trickleSpeed: 200, // 自动递增间隔    
    minimum: 0.3 // 初始化时的最小百分比
})

export default <Middleware>function ({ app }) {
    app.router?.afterEach((to, from) => {
        NProgress.start();
        let hisStr = getLocal(hisPathKey);
        let path = to.path
        let hisArr: Array<Page> = hisStr ? JSON.parse(hisStr) : [];
        if (hisArr && routeMap.has(path)) {
            let index = hisArr.findIndex((item) => item.path == path);
            index != -1 && hisArr.splice(index, 1);
        }
        if (routeMap.has(path)) {
            let page = routeMap.get(path);
            page && + hisArr.unshift(page);
        }
        storeLocal(hisPathKey, JSON.stringify(hisArr))
    })
    app.router?.afterEach(()=>{
        NProgress.done();
    })
}

