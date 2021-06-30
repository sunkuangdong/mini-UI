
import { classes, scopedClassMaker } from '../classes'
describe('button', () => {
    it('接受一个 className', () => {
        const result = classes('a')
        expect(result).toEqual('a')
    })
    it('接受两个 className', () => {
        const result = classes("a", "b")
        expect(result).toEqual("a b")
    })
    it("不能传 undefined null false", () => {
        const result = classes("a", undefined, false, null, "b")
        expect(result).toEqual("a b")
    })
    it("什么都不传应该得到空字符串", () => {
        const result = classes()
        expect(result).toEqual("")
    })
})
describe("layout", () => {
    it("函数 scopedClassMaker 接收一个 className, 返回一个函数", () => {
        const result = scopedClassMaker("className")
        expect(result).toBeInstanceOf(Function)
    })
    it("函数 scopedClassMaker 的返回函数接受一个 className 为字符串或对象, 返回mini-layout-${className}", () => {
        const result = scopedClassMaker("mini-layout")
        expect(result('')).toEqual("mini-layout")
        expect(result("hasAside")).toEqual("mini-layout-hasAside")
        expect(result({aside: true, key: false, hasAside: true})).toEqual("mini-layout-aside mini-layout-hasAside")
        expect(result({aside: true, key: false, hasAside: true}, {extra: "red"})).
            toEqual("mini-layout-aside mini-layout-hasAside red")
    })
})