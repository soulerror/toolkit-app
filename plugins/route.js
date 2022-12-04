import { storeLocal, getLocal } from './localstorage'
import { routeMap, hisPathKey } from '@/configs/route.config'

export default ({ app, store }) => {
    app.router.afterEach((to, from) => {
        let hisStr = getLocal(hisPathKey);
        let path = to.path
        let hisArr = hisStr ? JSON.parse(hisStr) : [];
        if (hisArr && routeMap.has(path)) {
            let index = hisArr.findIndex((item) => item.path == path);
            index != -1 && hisArr.splice(index, 1);
        }
        if (routeMap.has(path)) {
            hisArr.unshift(routeMap.get(path));
        }
        storeLocal(hisPathKey, JSON.stringify(hisArr))
    })
}
