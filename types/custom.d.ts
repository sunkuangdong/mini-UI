// 为svg文件加上默认导出
// 避免 import svg from 'svg.svg' 无法使用
declare module '*.svg' {
    const content: any;
    export default content;
}