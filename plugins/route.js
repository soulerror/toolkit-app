import { storeLocal, getLocal } from './localstorage'
import routeMap from '@/configs/route.config'

const key = 'tool-history'

export default ({ app, store }) => {
    app.router.afterEach((to, from) => {
        let hisStr = getLocal(key);
        let path = to.path
        let hisArr = hisStr ? JSON.parse(hisStr) : [];
        if (hisArr && routeMap.has(path)) {
            let index = hisArr.findIndex((item) => item.key == path);
            index != -1 && hisArr.splice(index, 1);
        }
        if (routeMap.has(path)) {
            hisArr.unshift(routeMap.get(path));
        }
        storeLocal(key, JSON.stringify(hisArr))
    })
}
