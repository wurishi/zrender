import { ClassType } from "./type";

const zrender: ClassType = {
    name: 'zrender',
    staticFuns: [
        {
            name: 'init(dom, opts)',
            desc: '得到一个 ZRender 的实例',
            args: [
                ['dom', 'HTMLElement', '', 'ZRender 容器，在调用该方法时，应该已有宽度和高度。'],
                ['opts', 'Object', '', '配置项'],
                ['opts.renderer', 'string', 'canvas', `渲染方式，支持 'canvas', 'svg', 'vml'`],
                ['opts.devicePixelRatio', 'number', 2, `画布大小与容器大小之比，仅当 renderer 为 'canvas' 时有效。`],
                ['opts.width', 'number|string', 'auto', `画布宽度，设为 'auto' 则根据 devicePixelRatio 与容器宽度自动计算。`],
                ['opts.height', 'number|string', 'auto', `画布高度，设为 'auto' 则根据 devicePixelRatio 与容器高度自动计算。`],
                ['opts.useCoarsePointer', `'auto'|boolean`, 'auto', `5.4.0 版本起支持）是否扩大可点击元素的响应范围。'auto' 表示对移动设备开启；true 表示总是开启；false 表示总是不开启。`],
                ['opts.pointerSize', 'number', 44, '扩大元素响应范围的像素大小，配合 opts.useCoarsePointer 使用。']
            ],
            return: ['', 'zrender'],
            about: ['zrender.dispose']
        },
        {
            name: 'dispose(zr)',
            desc: '销毁 ZRender 实例。',
            args: [
                ['zr', 'zrender|undefined', '', 'ZRender 实例，由 zrender.init 创建。不传则销毁全部。']
            ],
            return: ['', 'zrender'],
            about: ['zrender.init'],
        },
        {
            name: 'version',
            desc: '版本号',
            return: ['ZRender 版本号', 'string'],
        }
    ],
    funs: [
        {
            name: 'add(el)',
            desc: '向画布内添加元素。',
            args: [
                ['el', 'Element', '', '向画布内添加的元素。被添加的元素可以通过 remove(el) 移除。']
            ],
            about: ['remove']
        },
        {
            name: 'addHover(el, style)',
            desc: '将元素添加到高亮层。添加到高亮层后，可以通过 removeHover 移除。',
            args: [
                ['el', 'Element', '', '待添加的元素。'],
                ['style', 'Object', '', '元素样式。'],
            ],
            about: ['removeHover']
        },
        {
            name: 'animation',
            return: ['动画', 'Animation'],
        },
        {
            name: 'clear()',
            desc: '清除所有对象和画布。'
        },
        {
            name: 'clearAnimation()',
            desc: '停止所有动画。'
        },
        {
            name: 'clearHover()',
            desc: '清除高亮层中所有的元素。',
            about: ['removeHover', 'addHover']
        },
        {
            name: 'configLayer(zLevel, config)',
            desc: '改变某个层的配置。',
            args: [
                ['zlevel', 'string', '', '层级，zlevel 更大的层将覆盖更小的层。'],
                ['config', 'Object', '', '配置项。'],
                ['config.clearColor', 'string', '#000', '用于清除画布的颜色，默认为黑色。'],
                ['config.motionBlur', 'boolean', 'false', '是否对该层采用动态模糊。'],
                ['config.lastFrameAlpha', 'number', 0.7, '用于动态模糊的混合因子，表示上一帧画面保留的比例。应介于 0 与 1 之间，0 表示完全使用当前帧，1表示完全使用上一帧的画面。'],
            ],
        },
        {
            name: 'dispose()',
            desc: '移除自身。当不再需要使用该实例时，调用该方法以释放内存。'
        },
        {
            name: 'dom',
            return: ['绘图容器', 'HTMLDomElement']
        },
        {
            name: 'flush()',
            desc: '立即触发 refresh 和 refreshHover 所标记的重绘操作。'
        },
        {
            name: 'getHeight()',
            desc: '获取画布高度。',
            about: ['getWidth']
        },
        {
            name: 'getWidth()',
            desc: '获取画布宽度。',
            about: ['getHeight']
        },
        {
            name: 'id',
            return: ['实例的唯一标识符', 'string']
        },
        {
            name: 'off(eventName, eventHandler)',
            desc: '取消绑定事件处理。',
            args: [
                ['eventName', 'string', '', `事件名称，支持 'click', 'mousedown', 'mouseup', 'mousewheel', 'dbclick', 'contextmenu'`],
                ['eventHandler', 'Function', '', '事件处理的回调函数。']
            ],
            about: ['on']
        },
        {
            name: 'on(eventName, eventHandler, context)',
            desc: '绑定事件处理。',
            args: [
                ['eventName', 'string', '', `事件名称，支持 'click', 'mousedown', 'mouseup', 'mousewheel', 'dbclick', 'contextmenu'`],
                ['eventHandler', 'Function', '', '事件处理的回调函数。'],
                ['context', 'Object', '', '函数上下文。']
            ],
            about: ['off']
        },
        {
            name: 'refresh()',
            desc: '刷新画布，将在下一个渲染帧的时候被刷新。'
        },
        {
            name: 'refreshHover()',
            desc: '刷新高亮层，将在下一个渲染帧的时候被刷新。'
        },
        {
            name: 'refreshHoverImmediately()',
            desc: '强制立即刷新高亮层。'
        },
        {
            name: 'refreshImmediately()',
            desc: '强制立即刷新画布。'
        },
        {
            name: 'remove(el)',
            desc: '从画布内移除元素。',
            args: [
                ['el', 'Element', '', '通过 add(el) 添加到画布的元素。']
            ],
            about: ['add']
        },
        {
            name: 'removeHover(el)',
            desc: '将元素从高亮层移除。',
            args: [
                ['el', 'Element', '', '待删除的元素。']
            ],
            about: ['addHover']
        },
        {
            name: 'resize(opts)',
            desc: '更新画布大小。当容器改变大小时，应调用此方法。',
            args: [
                ['opts', 'Object', '', '宽高配置项'],
                ['opts.width', 'number|string', 'auto', `宽度，高为 'auto' 与设置为 null 或 undefined 的效果相同，相当于自动获取容器宽度以改变画布宽度。`],
                ['opts.height', 'number|string', 'auto', `高度，高为 'auto' 与设置为 null 或 undefined 的效果相同，相当于自动获取容器高度以改变画布高度。`],
            ]
        },
        {
            name: 'trigger(eventName, event)',
            desc: '手动触发事件。',
            args: [
                ['eventName', 'string', '', `事件名称，支持： 'click'、 'mousedown'、 'mouseup'、 'mousewheel'、 'dblclick'、 'contextmenu'。`],
                ['event', 'Object', '', '事件对象。']
            ],
            about: ['on', 'off']
        }

    ]
};

export default zrender;