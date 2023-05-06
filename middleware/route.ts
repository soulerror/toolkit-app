import { storeLocal, getLocal } from "@/plugins/localstorage";
import { routeMap, Page, PathHisKey } from "@/configs";
import { Middleware } from "@nuxt/types";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  easing: "ease", // 动画方式
  speed: 500, // 递增进度条的速度
  showSpinner: false, // 是否显示加载ico
  trickleSpeed: 200, // 自动递增间隔
  minimum: 0.3, // 初始化时的最小百分比
});

export default <Middleware>function ({ app }) {
  app.router?.afterEach((to) => {
    NProgress.start();
    const hisStr = getLocal(PathHisKey);
    const path = to.path;
    const hisArr: Array<Page> = hisStr ? JSON.parse(hisStr) : [];
    //先移除
    if (hisArr && routeMap.has(path)) {
      const index = hisArr.findIndex((item) => item.path == path);
      index != -1 && hisArr.splice(index, 1);
    }
    //再将最新访问的地址插到最前面
    if (routeMap.has(path)) {
      const page = routeMap.get(path);
      page && hisArr.unshift(page);
    }
    storeLocal(PathHisKey, JSON.stringify(hisArr));
  });
  app.router?.afterEach(() => {
    NProgress.done();
  });
};
