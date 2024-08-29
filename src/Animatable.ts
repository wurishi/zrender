import { ClassType } from "./type";

const Animatable: ClassType = {
    name: 'Animatable',
    desc: '支持动画的对象。',
    instance: {
        name: 'zrender.Animatable()'
    },
    funs: [
        {
            name: 'animate(path, loop)',
            desc: '创建一个动画对象。动画不会立即开始，如需立即开始，需调用 zrender.Animator.start',
            args: [
                ['path', 'string', '', `对该对象的哪个元素执行动画，如 xxx.animate('a.b', true) 表示对 xxx.a.b 执行动画。`],
                ['loop', 'boolean', 'false', '是否循环动画。']
            ],
            return: ['动画对象', 'Animator']
        },
        {
            name: 'animateTo(target, time, delay, easing, callback, forceAnimate)',
            desc: `为属性设置动画。部分参数可缺省。支持以下形式的调用：
            animateTo(target, time, delay, easing, callback, forceAnimate)
            animateTo(target, time, delay, easing, callback)
            animateTo(target, time, easing, callback)
            animateTo(target, time, delay, callback)
            animateTo(target, time, callback)
            animateTo(target, callback)
            animateTo(target)`,
            args: [
                ['target', 'Object', '', '设置动画的对象，应为 this 的属性。'],
                ['time', 'number', 500, '动画时长，单位毫秒。'],
                ['delay', 'number', 0, '动画延迟执行的时长，单位亮秒。'],
                ['easing', 'string', 'linear', '缓动函数名称。'],
                ['callback', 'Function', '', '动画执行完成后的回调函数。'],
                ['forceAnimate', 'boolean', 'false', '对于相同的属性，是否强制执行（也就是不直接结束动画）。']
            ]
        },
        {
            name: 'stopAnimation(forwardToLast)',
            desc: '停止动画。',
            args: [
                ['forwardToLast', 'boolean', 'false', '是否将动画跳到最后一帧。']
            ],
            return: ['', 'this']
        }
    ]
}

export default Animatable