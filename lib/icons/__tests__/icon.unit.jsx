import * as renderer from 'react-test-renderer'
import React from 'react'
import Icon from '../icon'
import { mount } from 'enzyme'

describe('icon', () => {
    it('icon gitHubSvg', () => {
        const json = renderer.create(<Icon icon='gitHubSvg' />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('icon reactSvg', () => {
        const json = renderer.create(<Icon icon='reactSvg' />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('icon webpackSvg', () => {
        const json = renderer.create(<Icon icon='webpackSvg' />).toJSON()
        expect(json).toMatchSnapshot()
    })
    it('icons onClick', () => {
        // jest给我一个fn
        const fn = jest.fn()
        // const fn2 = jest.fn()
        // mount 相当于把Icon放到一个假想的页面
        const component = mount(<Icon icon='reactSvg' onClick={fn} />)
        // 如何点击？
        // 先找到svg元素 点击这个元素
        component.find('svg').simulate('click')
        // toBeCalled就是看fn是否被调用
        expect(fn).toBeCalled()
        // expect(fn2).toBeCalled() // 测试能否失败
    })
})