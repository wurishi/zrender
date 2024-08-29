import { ClassType } from "./type";

const Group: ClassType = {
    name: 'Group',
    extends: ['Element'],
    desc: '组。 Group 是一个容器，可以插入子节点，Group 的变换也会被应用到子节点上。',
    instance: {
        name: 'zrender.Group()',
    },
    funs: [
        {
            name: 'add(child)',
            desc: '添加子节点到最后。',
            args: [
                ['child', 'Element', '', '待添加的元素。']
            ],
            return: ['', 'this'],
            about: ['addBefore', 'remove']
        },
        {
            name: 'addBefore(child, nextSibling)',
            desc: '添加子节点到 nextSibling 之前。',
            args: [
                ['child', 'Element', '', '待添加的元素。'],
                ['nextSibling', 'Element', '', '已经在 Group 中的元素。']
            ],
            return: ['', 'this'],
            about: ['add', 'remove']
        },
        {
            name: 'childAt(idx)',
            desc: '返回特定序号的子元素。',
            return: ['', 'Element'],
            about: ['childOfName', 'children']
        },
        {
            name: 'childCount()',
            return: ['返回子元素个数。', 'number']
        },
        {
            name: 'childOfName(name)',
            return: ['返回特定名字的子元素。', 'Element'],
            about: ['childAt', 'children']
        },
        {
            name: 'children()',
            return: ['返回所有子元素。', 'Element[]'],
            about: ['childAt', 'childOfName']
        },
        {
            name: 'dirty()',
            desc: '将组设为需要更新。'
        },
        {
            name: 'eachChild(cb, context)',
            desc: '遍历所有子节点。',
            args: [
                ['cb', 'Function', '', '回调函数。'],
                ['context', 'Object', '', '执行回调函数的上下文。']
            ]
        },
        {
            name: 'getBoundingRect(includeChildren)',
            desc: '得到 includeChildren 或组内所有元素的包围盒。',
            args: [
                ['includeChildren', 'Element[]', '', '组内元素的子集。如果 includeChildren 未设置，则获取所有元素的包围盒，否则获得 includeChildren 的包围盒。']
            ],
            return: ['includeChildren 或组内所有元素的包围盒。', 'BoundingRect']
        },
        {
            name: 'remove(child)',
            desc: '移除子节点。',
            args: [
                ['child', 'Element', '', '待移除的元素。']
            ],
            about: ['add', 'removeAll']
        },
        {
            name: 'removeAll()',
            desc: '移除所有子节点。',
            about: ['add', 'remove']
        },
        {
            name: 'silent',
            desc: '类型：boolean，默认值 false。所有子孙元素是否响应鼠标事件。'
        }
    ]
}

export default Group;