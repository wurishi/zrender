import { ClassType } from "./type";

const Animator: ClassType = {
    name: 'Animator',
    desc: '动画对象。',
    instance: {
        name: 'zrender.Animator()'
    },
    funs: [
        {
            name: 'delay(time)',
            desc: '设置动画延迟开始的时间。',
            args: [
                ['time', 'number', '', '延迟时长，单位毫秒。']
            ],
            return: ['', 'this']
        },
        {
            name: 'done(callback)',
            desc: '设置动画结束的回调函数。',
            args: [
                ['callback', 'Function', '', '动画结束时的回调函数。']
            ],
            return: ['', 'this']
        },
        {
            name: 'during(callback)',
            desc: '为关键帧添加回调函数，在关键帧运行后执行。',
            args: [
                ['callback', 'Function', '', '关键帧回调函数。'],
            ],
            return: ['', 'this']
        },
        {
            name: 'isPaused()',
            desc: '获取动画是否处于暂停状态。',
            return: ['是否暂停', 'boolean'],
            about: ['pause', 'resume']
        },
        {
            name: 'pause()',
            desc: '暂停动画。',
            about: ['resume', 'isPaused']
        },
        {
            name: 'resume()',
            desc: '恢复动画。',
            about: ['isPaused', 'pause']
        },
        {
            name: 'start(easing)',
            desc: '开始执行动画。',
            args: [
                ['easing', 'string', 'linear', '缓动函数名称。']
            ],
            return: ['', 'this'],
            about: ['pause', 'stop'],
        },
        {
            name: 'stop(forwardToLast)',
            desc: '停止动画。',
            args: [
                ['forwardToLast', 'boolean', 'false', '是否将动画跳到最后一帧。']
            ],
            about: ['start']
        },
        {
            name: 'when(time, props)',
            desc: '定义关键帧，即动画对象在某个时刻的属性。',
            args: [
                ['time', 'number', '', '关键帧时刻，单位毫秒。'],
                ['props', 'Object', '', '关键帧的属性，应为 Animatable 对象的属性。']
            ],
            return: ['', 'this']
        }
    ]
}

export default Animator;