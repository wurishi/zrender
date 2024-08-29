import { ClassType } from "./type";

const util: ClassType = {
    name: 'util',
    desc: '静态类，常用辅助函数。',
    staticFuns: [
        {
            name: 'bind(func, context)',
            desc: '修改执行上下文。',
            args: [
                ['func', 'Function', '', '待执行的函数。'],
                ['context', '*', '', '执行上下文。']
            ]
        },
        {
            name: 'clone(source)',
            desc: '深度拷贝一个对象。',
            args: [
                ['source', 'Object|Array|TypedArray|number|string|null|undefined', '', '参考对象。如果是 Object 类型，则克隆的结果是不包含原型属性的纯对象。'],
            ],
            return: ['克隆结果。', 'Object|Array|TypedArray|number|string|null|undefined']
        },
        {
            name: 'createCanvas()',
            desc: `获得一个 Canvas，不设置宽高。相当于 document.createElement('canvas')`,
            return: ['Canvas', 'HTMLCanvasElement'],
            about: ['getContext']
        },
        {
            name: 'curry(func)',
            desc: '函数柯里化。',
            args: [
                ['func', 'Function', '', '回调函数。']
            ]
        },
        {
            name: 'defaults(target, source, overlay)',
            desc: '将一个对象中的元素赋给另一个元素。',
            args: [
                ['target', '*', '', '需要修改的对象。'],
                ['source', '*', '', '参考对象。'],
                ['overlay', 'boolean', '', '如果 overlay 为 true，则将 source 中非空的属性赋值给 target；如果 overlay 为 false，则将 source 中 target 不包含的属性赋值给 target。']
            ],
            return: ['拷贝结果。', 'target']
        },
        {
            name: 'each(array, cb, context)',
            desc: '遍历数组，相当于 Array.prototype.forEach',
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '遍历回调函数。'],
                ['context', '*', '', '执行上下文。']
            ]
        },
        {
            name: 'extend(target, source)',
            desc: '将 source 中非继承来的属性赋给 target',
            args: [
                ['target', '*', '', '需要修改的对象。'],
                ['source', '*', '', '参考对象。']
            ],
            return: ['拷贝结果。', 'target']
        },
        {
            name: 'filter(array, cb, context)',
            desc: '过滤元素，相当于 Array.prototype.filter',
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '回调函数。'],
                ['context', '*', '', '执行上下文。']
            ]
        },
        {
            name: 'find(array, cb, context)',
            desc: '相当于 Array.prototype.find',
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '用以检查元素是否存在的函数，返回元素是否存在的 boolean 结果。'],
                ['context', '*', '', '执行上下文。']
            ],
            return: ['返回数组 array 中第一个找到的元素。', '*']
        },
        {
            name: 'getContext()',
            desc: `获得一个 Canvas 的绘制上下文。相当于 document.createElement('canvas').getContext('2d')`,
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '用以检查元素是否存在的函数，返回元素是否存在的 boolean 结果。'],
                ['context', '*', '', '执行上下文。']
            ],
            return: ['Canvas 的绘制上下文。', 'CanvasRenderingContext2D'],
            about: ['createCanvas']
        },
        {
            name: 'indexOf(array, value)',
            desc: '查询数组中元素，返回下标。',
            args: [
                ['array', '[]', '', '数组。'],
                ['value', '*', '', '寻找的对象。']
            ],
            return: ['下标。', 'number']
        },
        {
            name: 'inherits(clazz, baseClazz)',
            desc: '继承一个类，baseClazz 会继承 clazz 的方法，属性，clazz 会有 superClass 属性指向 baseClazz',
            args: [
                ['clazz', 'Function', '', '基类。'],
                ['baseClazz', 'Function', '', '子类。']
            ]
        },
        {
            name: 'isArray(data)',
            desc: '是否是数组。',
            args: [
                ['data', '*', '', '判断对象。']
            ],
            return: ['是否是数组。', 'boolean'],
            about: ['isArrayLike']
        },
        {
            name: 'isFunction(data)',
            desc: '是不是函数。',
            args: [
                ['data', '*', '', '判断对象。']
            ],
            return: ['是否是函数。', 'boolean']
        },
        {
            name: 'isObject(data)',
            desc: '是否是对象。',
            args: [
                ['data', '*', '', '判断对象。']
            ],
            return: ['是否是对象。', 'boolean']
        },
        {
            name: 'isString(data)',
            desc: '是否是字符串。',
            args: [
                ['data', '*', '', '判断对象。']
            ],
            return: ['是否是字符串。', 'boolean']
        },
        {
            name: 'map(array, cb, context)',
            desc: '映射数组。相当于 Array.prototype.map',
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '映射函数。'],
                ['context', '*', '', '执行上下文。']
            ]
        },
        {
            name: 'merge(target, source, overwrite)',
            desc: '拷贝一个对象。',
            args: [
                ['target', '*', '', '需要修改的对象。'],
                ['source', '*', '', '参考对象。'],
                ['overwrite', 'boolean', 'false', '是否深度拷贝。']
            ],
            return: ['拷贝结果。', 'target']
        },
        {
            name: 'reduce(array, cb, context)',
            desc: '相当于 Array.prototype.reduce',
            args: [
                ['array', '[]', '', '数组。'],
                ['cb', 'Function', '', '回调函数。'],
                ['context', '*', '', '执行上下文。']
            ]
        },
        {
            name: 'slice(array, start, end)',
            desc: '相当于 Array.prototype.slice',
            args: [
                ['array', '[]', '', '数组。'],
                ['start', 'number', '', '起始下标。'],
                ['end', 'number', '', '终止下标。']
            ],
            return: ['数组 array 在 start(包含)位置到 end(不包含)位置的浅拷贝数组。', '[]']
        }
    ]
};

export default util;