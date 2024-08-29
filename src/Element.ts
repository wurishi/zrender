import { ClassType } from "./type";

const Element: ClassType = {
    name: 'Element',
    extends: ['Animatable', 'Transformable', 'Eventful'],
    desc: '元素，抽象类。可以被添加到场景中。',
    instance: {
        name: 'zrender.Element(opts)',
        desc: '不要直接在代码中使用 new zrender.Element(opts)'
    },
    funs: [
        {
            name: 'afterUpdate',
            desc: 'Function，元素更新后的回调函数。',
            about: ['beforeUpdate']
        },
        {
            name: 'attr(key, value)',
            desc: '设置元素属性。需要注意的是，应该始终调用该方法来修改属性，而不是直接 element.xxx = yyy ，因为后者不会重绘物体。',
            args: [
                ['key', 'string|Object', '', '设置的属性。可以是 string 类型的属性名称。或者是包含属性名称和值的 Object。'],
                ['value', '*', '', '属性值。']
            ]
        },
        {
            name: 'beforeUpdate',
            desc: 'Function，元素更新前的回调函数。',
            about: ['afterUpdate']
        },
        {
            name: 'hide()',
            desc: '隐藏元素。可以使用 show() 恢复显示。',
            about: ['show'],
        },
        {
            name: 'removeClipPath()',
            desc: '取消设置裁剪元素。',
            about: ['setClipPath'],
        },
        {
            name: 'setClipPath(clipPath)',
            desc: '设置裁剪元素，超出 clipPath 区域的部分将被裁剪掉。一个元素只能被一个元素裁剪，如果要实现多个元素的裁剪，需要使用 CompoundPath。',
            args: [
                ['clipPath', 'Element', '', '设置当前元素的裁剪元素。']
            ],
            about: ['removeClipPath']
        },
        {
            name: 'show()',
            desc: '显示元素。元素在默认情况下是显示状态。使用 hide() 隐藏后，可以使用此方法显示。',
            about: ['hide']
        },
        {
            name: 'traverse(cb, context)',
            desc: '深度优先遍历所有子孙节点。',
            args: [
                ['cb', 'Function', '', '回调函数。接受参数：context, childe，其中 child 是每个元素的子元素。'],
                ['context', 'Object', '', '执行回调函数的上下文。']
            ]
        }
    ]
}

export default Element;