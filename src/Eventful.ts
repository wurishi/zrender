import { ClassType } from "./type";

const Eventful: ClassType = {
    name: 'Eventful',
    desc: '支持事件的元素。',
    instance: {
        name: 'zrender.Eventful()'
    },
    funs: [
        {
            name: 'isSilent(event)',
            desc: '是否绑定了事件。',
            args: [
                ['event', 'string', '', '事件名。']
            ],
            return: ['是否绑定了事件', 'boolean']
        },
        {
            name: 'off(event, handler)',
            desc: '解绑事件。',
            args: [
                ['event', 'string', '', '事件名。'],
                ['handler', 'Function', '', '响应函数。']
            ],
            return: ['', 'this'],
            about: ['on']
        },
        {
            name: 'on(event, handler, context)',
            desc: '绑定事件。',
            args: [
                ['event', 'string', '', '事件名。'],
                ['handler', 'Function', '', '响应函数。'],
                ['context', 'Object', '', '执行上下文。']
            ],
            return: ['', 'this'],
            about: ['off']
        },
        {
            name: 'one(event, handler, context)',
            desc: '单次触发绑定，触发后销毁。',
            args: [
                ['event', 'string', '', '事件名。'],
                ['handler', 'Function', '', '响应函数。'],
                ['context', 'Object', '', '执行上下文。']
            ],
            return: ['', 'this']
        },
        {
            name: 'trigger(event)',
            desc: '触发事件。',
            args: [
                ['event', 'string', '', '事件名。']
            ],
            return: ['', 'this']
        }
    ]
}

export default Eventful;