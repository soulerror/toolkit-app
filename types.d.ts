export { } /// 这句不能删
declare module 'vue/types/vue' {
  interface Vue {
    $storeLocal: any,
    $getLocal: any,
    $push: any
  }
}