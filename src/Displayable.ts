import { ClassType } from "./type";

export const Displayable: ClassType = {
    name: 'Displayable',
    extends: ['Element'],
    desc: '抽象类，可显示的元素。元素初始化后，需要通过 Element.attr() 修改属性。',
    instance: {
        name: 'zrender.Displayable(opts)',
        desc: '不要直接在代码中使用 new zrender.Displayable(opts)',
        args: [
            ['opts', 'Object', '', '配置项。'],
            ['opts.culling', 'boolean', 'false', '是否进行裁剪。'],
            ['opts.cursor', 'string', 'pointer', '鼠标移到元素上时的鼠标样式。'],
            ['opts.draggable', 'boolean', 'false', '图形是否可拖曳。'],
            ['opts.invisible', 'boolean', 'false', '图形是否不可见，为 true 时不绘制图形，但是仍能触发鼠标事件。'],
            ['opts.progressive', 'number', -1, '是否渐进式渲染。当图形元素过多时才使用，用大于 0 的数字表示渲染顺序。'],
            ['opts.incremental', 'boolean', 'false', '（5.4.0 版本起支持）是否增量式渲染。增量式渲染的意思是，在每帧渲染的时候，不擦除之前帧的该元素直接再次渲染。增量渲染的元素在单独的层中进行渲染。SVG 模式不支持。'],
            ['opts.ignoreCoarsePointer', 'boolean', 'false', '5.4.0 版本起支持）是否忽略增加响应范围。默认情况下，在移动设备上，为了提高用户体验，可点击元素的响应范围会被扩大处理。如果某些元素不希望扩大响应范围，则应设为 true。'],
            ['opts.rectHover', 'boolean', 'false', '是否使用包围盒检验鼠标是否移动到物体。false 则检测元素实际的内容。'],
            ['opts.silent', 'boolean', 'false', '是否响应鼠标事件。'],
            ['opts.style', 'Object', '', '样式。'],
            ['opts.style.fill', 'string', '#000', '填充样式。'],
            ['opts.style.stroke', 'string', 'null', '描边样式。'],
            ['opts.style.opacity', 'number', 1, '不透明度。'],
            ['opts.style.lineDash', 'number[]', 'null', '描边虚线样式。'],
            ['opts.style.lineDashOffset', 'number', 'null', '描边虚线偏移。'],
            ['opts.style.shadowBlur', 'number', 0, '阴影模糊大小。'],
            ['opts.style.shadowColor', 'string', 'transparent', '阴影颜色。'],
            ['opts.style.shadowOffsetX', 'number', 0, '阴影横向偏移。'],
            ['opts.style.shadowOffsetY', 'number', 0, '阴影纵向偏移。'],
            ['opts.style.lineWidth', 'number', 0, '线宽。'],
            ['opts.style.strokeNoScale', 'boolean', 'false', '描边粗细不随缩放而改变，false 则会根据缩放同比例缩放描边粗细。'],
            ['opts.style.text', 'string', 'null', '在图形中显示的文本。'],
            ['opts.style.font', 'string', 'null', '文字样式，由 fontSize, fontFamily, fontStyle, fontWeight 组成，建议分别设置而非直接设置 font。'],
            ['opts.style.fontStyle', 'string', 'null', '同 CSS font-style。'],
            ['opts.style.fontWeight', 'string', 'null', '同 CSS font-weight。'],
            ['opts.style.fontSize', 'string', 'null', '同 CSS font-size。'],
            ['opts.style.fontFamily', 'string', 'null', '同 CSS font-family。'],
            ['opts.style.textFill', 'string', 'null', '文字填充样式。'],
            ['opts.style.textStroke', 'string', 'null', '文字描边样式。'],
            ['opts.style.textWidth', 'number', 'null', '文字宽度。'],
            ['opts.style.textHeight', 'number', 'null', '文字高度，仅用于设置背景色时需要设置。'],
            ['opts.style.textLineWidth', 'number', 0, '文字描边宽度。'],
            ['opts.style.textLineHeight', 'number', 0, '文字行高。'],
            ['opts.style.textPosition', 'string|number[]', 'inside', `文字位置，可以为 'inside', 'left', 'right', 'top', 'bottom', 或一个二维数组 [x, y] 表示相对形状的位置。`],
            ['opts.style.textRect', 'Object', 'null', '文字包围盒，包括 x, y, width, height 属性，如果没有设置，将使用形状的包围盒。'],
            ['opts.style.textOffset', 'number[]', 'null', '文字位置偏移。[x, y]'],
            ['opts.style.textAlign', 'string', 'null', `文字水平对齐方式，可取值 'left', 'center', 'right', 默认根据 textPosition 计算。`],
            ['opts.style.textVerticalAlign', 'string', 'null', `文字垂直对齐方式，可取值 'top', 'middle', 'bottom', 默认根据 textPosition 计算。`],
            ['opts.style.textDistance', 'number', 5, '文字与其对齐的边缘的距离，如 textPosition 为 top 时，textDistance 表示与形状上方的距离。'],
            ['opts.style.textShadowColor', 'string', 'transparent', '文字阴影颜色。'],
            ['opts.style.textShadowBlur', 'number', 0, '文字阴影模糊大小。'],
            ['opts.style.textShadowOffsetX', 'number', 0, '文字阴影水平偏移。'],
            ['opts.style.textShadowOffsetY', 'number', 0, '文字阴影垂直偏移。'],
            ['opts.style.textBoxShadowColor', 'string', 'transparent', '文字包围盒阴影颜色。'],
            ['opts.style.textBoxShadowBlur', 'number', 0, '文字包围盒阴影模糊大小。'],
            ['opts.style.textBoxShadowOffsetX', 'number', 0, '文字包围盒阴影水平偏移。'],
            ['opts.style.textBoxShadowOffsetY', 'number', 0, '文字包围盒阴影垂直偏移。'],
            ['opts.style.transformText', 'boolean', 'false', '文字是否跟随变换效果，仅对 Path 或 Image 元素有效。'],
            ['opts.style.textRotation', 'number', 0, '文字旋转角度，仅对 Path 或 Image 元素有效，并且 transformText 应设置为 false。'],
            ['opts.style.textOrigin', 'string|number[]', 'null', `文字变换中心，可以是 'center' 或一个二维数组 [x, y] 表示相对形状的位置，默认值是 textPosition。`],
            ['opts.style.textBackgroundColor', 'string', 'null', '文字包围盒颜色。'],
            ['opts.style.textBorderColor', 'string', 'null', '文字包围盒描边颜色。'],
            ['opts.style.textBorderWidth', 'number', 0, '文字包围盒描边宽度。'],
            ['opts.style.textBorderRadius', 'number', 0, '文字圆角大小。'],
            ['opts.style.textPadding', 'number|number[]', 'null', '文字内边距，可以是 2 或 [2, 4] 或 [2, 3, 4, 5] 的形式，同 CSS Padding，单位是像素。'],
            ['opts.style.rich', 'Object', 'null', '富文本样式，参考 ECharts rich 配置项。'],
            ['opts.style.truncate', 'Object', 'null', '对文字过长显示不下时，显示省略号表示。'],
            ['opts.style.truncate.outerWidth', 'number', 'null', '包含了 textPadding 的宽度，超出这个范围就裁剪。'],
            ['opts.style.truncate.outerHeight', 'number', 'null', '包含了 textPadding 的高度，超出这个范围就裁剪。'],
            ['opts.style.truncate.ellipsis', 'string', '...', '默认用省略号表示超出部分，也可以对其进行自定义。'],
            ['opts.style.truncate.placeholder', 'string', 'null', '如果空间过小，导致省略号也显示不下，但是又不想空着，可能得有个什么标记表示这里是有字符的，就用个 “点”，就是在这个 placeholder 里设置。'],
            ['opts.style.blend', 'string', 'null', '混合模式，同 Canvas globalCompositeOperation。'],
            ['opts.zlevel', 'number', 0, '决定绘画在哪层 Canvas 中。Canvas 分层是一种常见的优化手段。我们可以把一些图形变化频繁（例如有动画）的组件设置成一个单独的 zlevel。需要注意的是过多的 Canvas 会引起内存开销的增大，在手机端上需要谨慎使用以防崩溃。zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面。'],
            ['opts.z', 'number', 0, '控制图形的前后顺序。z 值小的图形会被 z 值大的图形覆盖。z 相比 zlevel 优先级更低，而且不会创建新的 Canvas。'],
            ['opts.z2', 'number', 0, '与 z 类似，优先级比 z 更低。']
        ]
    },
    funs: [
        {
            name: 'contain(x, y)',
            desc: '判断坐标 (x, y) 是否在图形上。',
            args: [
                ['x', 'number', '', '横坐标。'],
                ['y', 'number', '', '纵坐标。'],
            ],
            return: ['是否在图形上', 'boolean'],
            about: ['rectContain']
        },
        {
            name: 'dirty()',
            desc: '设为需要更新。'
        },
        {
            name: 'getBoundingRect()',
            desc: '得到元素的包围盒。',
            return: ['元素的包围盒。', 'BoundingRect'],
        },
        {
            name: 'rectContain(x, y)',
            desc: '判断坐标 (x, y) 是否在图形包围盒内。',
            args: [
                ['x', 'number', '', '横坐标。'],
                ['y', 'number', '', '纵坐标。'],
            ],
            return: ['是否在图形包围盒上', 'boolean'],
            about: ['contain']
        },
    ]
}

export const Arc: ClassType = {
    name: 'Arc',
    extends: ['Displayable'],
    desc: '圆弧。',
    instance: {
        name: 'zrender.Arc(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number', 0, '半径。'],
            ['opts.shape.startAngle', 'number', 0, '起始弧度。'],
            ['opts.shape.endAngle', 'number', 'Math.PI * 2', '终止弧度。'],
            ['opts.shape.clockwise', 'boolean', 'true', '顺时针方向。']
        ]
    }
}

export const BezierCurve: ClassType = {
    name: 'BezierCurve',
    extends: ['Displayable'],
    desc: '贝塞尔曲线。',
    instance: {
        name: 'zrender.BezierCurve(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.x1', 'number', 0, '起始点横坐标。'],
            ['opts.shape.y1', 'number', 0, '起始点纵坐标。'],
            ['opts.shape.x2', 'number', 0, '终止点横坐标。'],
            ['opts.shape.y2', 'number', 0, '终止点纵坐标。'],
            ['opts.shape.cpx1', 'number', 0, '控制点横坐标。'],
            ['opts.shape.cpy1', 'number', 0, '控制点纵坐标。'],
            ['opts.shape.percent', 'number', 1, '已显示的百分比，用于绘制动画。'],
        ]
    }
}

export const Circle: ClassType = {
    name: 'Circle',
    extends: ['Displayable'],
    desc: '圆。',
    instance: {
        name: 'zrender.Circle(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number', 0, '半径。'],
        ]
    }
}

export const CompoundPath: ClassType = {
    name: 'CompoundPath',
    extends: ['Path'],
    desc: '复合路径。相当于多个路径的并集。',
    instance: {
        name: 'zrender.CompoundPath(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.paths', 'Path[]', 'null', '路径数组。']
        ]
    }
}

export const Droplet: ClassType = {
    name: 'Droplet',
    extends: ['Displayable'],
    desc: '水滴。',
    instance: {
        name: 'zrender.Droplet(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.width', 'number', 0, '宽度。'],
            ['opts.shape.height', 'number', 0, '高度。'],
        ]
    }
}

export const Ellipse: ClassType = {
    name: 'Ellipse',
    extends: ['Displayable'],
    desc: '椭圆。',
    instance: {
        name: 'zrender.Ellipse(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.rx', 'number', 0, '横向半径。'],
            ['opts.shape.ry', 'number', 0, '纵向半径。'],
        ]
    }
}

export const Heart: ClassType = {
    name: 'Heart',
    extends: ['Displayable'],
    desc: '心形。',
    instance: {
        name: 'zrender.Heart(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.width', 'number', 0, '宽度。'],
            ['opts.shape.height', 'number', 0, '高度。'],
        ]
    }
}

export const Image: ClassType = {
    name: 'Image',
    extends: ['Displayable'],
    desc: '图像。',
    instance: {
        name: 'zrender.Image(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.style', 'Object', '', '样式。'],
            ['opts.style.image', 'string|HTMLImageElement|HTMLCanvasElement', '', '图片的内容，可以是图片的 URL，也可以是 dataURI。'],
            ['opts.style.x', 'number', '', '图片左上角相对于父节点的横坐标。'],
            ['opts.style.y', 'number', '', '图片左上角相对于父节点的纵坐标。'],
            ['opts.style.width', 'number', '', '图片宽度。'],
            ['opts.style.height', 'number', '', '图片高度。'],
        ]
    }
}

export const Isogon: ClassType = {
    name: 'Isogon',
    extends: ['Displayable'],
    desc: '正多边形。',
    instance: {
        name: 'zrender.Isogon(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.x', 'number', 0, '圆心横坐标。'],
            ['opts.shape.y', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number', 0, '半径。'],
            ['opts.shape.n', 'number', 0, '边数。'],
        ]
    }
}

export const Line: ClassType = {
    name: 'Line',
    extends: ['Displayable'],
    desc: '线段。',
    instance: {
        name: 'zrender.Line(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.x1', 'number', 0, '起始点横坐标。'],
            ['opts.shape.y1', 'number', 0, '起始点纵坐标。'],
            ['opts.shape.x2', 'number', 0, '终止点横坐标。'],
            ['opts.shape.y2', 'number', 0, '终止点纵坐标。'],
            ['opts.shape.percent', 'number', 1, '已显示的百分比，用于绘制动画。'],
        ]
    }
}

export const Path: ClassType = {
    name: 'Path',
    extends: ['Displayable'],
    desc: '路径。',
    instance: {
        name: 'zrender.Path(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
        ]
    },
    funs: [
        {
            name: 'extend(props)',
            desc: '扩展一个 Path 元素，用以生成比如星形，圆等。',
            args: [
                ['opts', 'Object', '', '配置项，继承自 Displayable'],
                ['opts.type', 'string', '', '类型，自定义的名称。'],
                ['opts.init', 'Function', '', '初始化时调用的函数。'],
                ['opts.buildPath', 'Function', '', '如何构建 Path 的函数，在绘制时会调用。']
            ]
        }
    ]
}

export const Polygon: ClassType = {
    name: 'Polygon',
    extends: ['Displayable'],
    desc: '多边形。如果要创建仅含描边的多边形，请使用 Polyline。',
    instance: {
        name: 'zrender.Polygon(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.points', 'number[][]', '', '每个元素是一个横纵坐标的数组。'],
            ['opts.shape.smooth', 'number|string', 0, `圆滑程度，取值范围为 0 到 1 之间的数字。0 表示不圆滑；也可以是特殊字符串 'spline' 表示用 Catmull-Rom spline 插值算法，否则用贝塞尔曲线插值算法。`],
            ['opts.shape.smoothConstraint', 'number[][]', '', '将计算出来的控制点约束在一个包围盒内。比如 [[0, 0], [100, 100]]，这个包围盒会与整个折线的包围盒做一个并集用来约束控制点。'],
        ],
    },
}

export const Polyline: ClassType = {
    name: 'Polyline',
    extends: ['Displayable'],
    desc: '多边形折线段。默认是不闭合的，如果需要闭合，请将最后一个点设为和第一个点同样的位置。如果要创建填充的多边形，请使用 Polygon。',
    instance: {
        name: 'zrender.Polyline(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.points', 'number[][]', '', '每个元素是一个横纵坐标的数组。'],
            ['opts.shape.smooth', 'number|string', 0, `圆滑程度，取值范围为 0 到 1 之间的数字。0 表示不圆滑；也可以是特殊字符串 'spline' 表示用 Catmull-Rom spline 插值算法，否则用贝塞尔曲线插值算法。`],
            ['opts.shape.smoothConstraint', 'number[][]', '', '将计算出来的控制点约束在一个包围盒内。比如 [[0, 0], [100, 100]]，这个包围盒会与整个折线的包围盒做一个并集用来约束控制点。'],
        ]
    }
}

export const Rect: ClassType = {
    name: 'Rect',
    extends: ['Displayable'],
    desc: '矩形。',
    instance: {
        name: 'zrender.Rect(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.r', 'number|number[]', 0, '用于创建圆角矩形。左上、右上、右下、左下角的半径依次为 r1、 r2、 r3、 r4。r 缩写为 1 相当于 [1, 1, 1, 1]；r 缩写为 [1] 相当于 [1, 1, 1, 1]；r 缩写为 [1, 2] 相当于 [1, 2, 1, 2]；r 缩写为 [1, 2, 3] 相当于 [1, 2, 3, 2]。'],
            ['opts.shape.x', 'number', 0, '左上角的横坐标。'],
            ['opts.shape.y', 'number', 0, '左上角的纵坐标。'],
            ['opts.shape.width', 'number', 0, '宽度。'],
            ['opts.shape.height', 'number', 0, '高度。'],
        ]
    }
}

export const Rose: ClassType = {
    name: 'Rose',
    extends: ['Displayable'],
    desc: '玫瑰线。',
    instance: {
        name: 'zrender.Rose(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number[]', '[]', '半径。'],
            ['opts.shape.k', 'number', 0, '玫瑰线参数。'],
            ['opts.shape.n', 'number', 1, '花瓣数。'],
        ]
    }
}

export const Sector: ClassType = {
    name: 'Sector',
    extends: ['Displayable'],
    desc: '扇形。',
    instance: {
        name: 'zrender.Sector(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number', 0, '半径。'],
            ['opts.shape.r0', 'number', 0, '内半径。'],
            ['opts.shape.startAngle', 'number', 0, '起始弧度。'],
            ['opts.shape.endAngle', 'number', 'Math.PI * 2', '终止弧度。'],
            ['opts.shape.clockwise', 'boolean', 'true', '顺时针方向。'],
        ]
    }
}

export const Star: ClassType = {
    name: 'Star',
    extends: ['Displayable'],
    desc: '星形。',
    instance: {
        name: 'zrender.Star(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.n', 'number', 3, '瓣数，如 n 等于 5 时，是我们熟悉的五角星。'],
            ['opts.shape.r', 'number', 0, '半径。'],
            ['opts.shape.r0', 'number', 0, '内半径。'],
        ]
    }
}

export const Text: ClassType = {
    name: 'Text',
    extends: ['Displayable'],
    desc: '文字。',
    instance: {
        name: 'zrender.Text(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
        ]
    }
}

export const Trochoid: ClassType = {
    name: 'Trochoid',
    extends: ['Displayable'],
    desc: '内外旋轮曲线。',
    instance: {
        name: 'zrender.Trochoid(opts)',
        args: [
            ['opts', 'Object', '', '配置项，继承自 Displayable'],
            ['opts.shape', 'Object', '', '形状属性。'],
            ['opts.shape.cx', 'number', 0, '圆心横坐标。'],
            ['opts.shape.cy', 'number', 0, '圆心纵坐标。'],
            ['opts.shape.r', 'number', 0, '半径。'],
            ['opts.shape.r0', 'number', 0, '内半径。'],
            ['opts.shape.d', 'number', 0, '内外旋轮曲线参数。'],
            ['opts.shape.n', 'location', 'out', 'out 或 in，表示曲线在内部还是外部。'],
        ]
    }
}