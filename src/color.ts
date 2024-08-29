import { ClassType } from "./type";

const color: ClassType = {
    name: 'color',
    desc: '静态类，颜色。',
    staticFuns: [
        {
            name: 'lift(color, level)',
            desc: '提亮颜色。',
            args: [
                ['color', 'string', '', '原始颜色。'],
                ['level', 'number', '', '提亮指数，应介于 0 与 1 之间，如果小于 0 ，颜色也会被提亮。']
            ],
            return: ['提亮后的颜色，形如 rgba() 或 rgb()', 'string']
        },
        {
            name: 'lerp(normalizedValue, colors, fullOutput)',
            desc: '快速得到渐变色 colors 在 normalizedValue 位置的颜色，返回混合后的颜色。',
            args: [
                ['normalizedValue', 'number', '', '位置，范围 0 到 1 。'],
                ['colors', 'string[]', '', '渐变色的数组。'],
                ['fullOutput', 'boolean', 'false', '如果为 true ，则返回包含 color, leftIndex, rightIndex, value 的 Object，否则返回颜色。']
            ],
            return: ['如果 fullOutput 为 true ，则返回包含 color, leftIndex, rightIndex, value 的 Object', 'Object|string']
        },
        {
            name: 'modifyAlpha(color, alpha)',
            desc: '修改颜色的透明度维度。',
            args: [
                ['color', 'string', '', '颜色字符串。'],
                ['alpha', 'number', '', '新的透明度。']
            ],
            return: ['RGBA 形式的颜色字符串。', 'string']
        },
        {
            name: 'modifyHSL(color, h, s, l)',
            desc: '修改颜色的 HSL 维度。',
            args: [
                ['color', 'string', '', '颜色字符串，可以不是 hsl() 形式的。'],
                ['h', 'null|number', '', '如果为 null ，则不改变。'],
                ['s', 'null|number', '', '如果为 null ，则不改变。'],
                ['l', 'null|number', '', '如果为 null ，则不改变。'],
            ],
            return: ['RGBA 形式的颜色字符串。', 'string']
        },
        {
            name: 'parse(colorStr, rgbaArr)',
            desc: '将各种形式的颜色字符串，转成 RGBA 形式的数组输出。',
            args: [
                ['colorStr', 'string', '', `可以是：'rgb(100, 0, 0)'、 'rgba(0, 100, 0, 0.4)'、'red'、 '#F00'、 '#F60000'、 'hsla(270, 60%, 70%, 0.2)'、 'hsl(270, 60%, 70%)' 之类的形式。`],
                ['rgbaArr', 'number[]', '', '长度为 4 的数组，分别表示红色、绿色、蓝色、不透明度，前三者的取值范围是 0 到 255，不透明度的取值范围是 0 到 1。']
            ],
            return: ['如果 colorStr 不合法，则返回 undefined ，否则返回 rgbaArr。所以如果希望在任何情况下都得到颜色，则应该使用参数 rgbaArr ，它至少会是一个 [0, 0, 0, 1] 的黑色数组。', 'undefined|number[]']
        },
        {
            name: 'toHex(color)',
            desc: '将颜色转为十六进制的长度为 6 的字符串，开头没有 #',
            args: [
                ['color', 'string', '', '颜色字符串。']
            ],
            return: ['十六进制的颜色。', 'string']
        },
        {
            name: 'stringify(arrColor, type)',
            desc: '将数组形式的颜色转为字符串。',
            args: [
                ['arrColor', 'number[]', '', '可以是长度为 3 或 4 的数组。'],
                ['type', 'string', '', `返回的形式，可以为 'rgb', 'rgba', 'hsv', 'hsva', 'hsl', 'hsla'`]
            ],
            return: ['颜色字符串。', 'string']
        }
    ]
}

export default color;