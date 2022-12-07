import { Page, routeArr } from "./route.config"


export const hotList: Array<Page> = hottestHis(routeArr);

/**
 * 最火热的4条记录
 * @param routeArr 记录
 * @returns 记录
 */
function hottestHis(routeArr: Array<Page>) {
    let hots = [...routeArr]
    if (hots.length > 4) {
        hots.splice(4)
    }
    return hots;
};