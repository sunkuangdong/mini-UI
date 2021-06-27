
import { classes } from '../classes'
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