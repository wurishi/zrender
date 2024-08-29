import { ClassType } from "./type";

const path: ClassType = {
    name: 'path',
    desc: '静态类，路径相关的辅助函数。',
    staticFuns: [
        {
            name: 'createFromString(str, opts)',
            desc: '从字符串创建路径，字符串形如 SVG Path',
            args: [
                ['str', 'string', '', '构建路径的字符串。'],
                ['opts', 'Object', '', '配置项，参见 Displayable 的配置项。']
            ]
        },
        {
            name: 'extendFromString(str, opts)',
            desc: '从字符串扩展路径，字符串形如 SVG Path',
            args: [
                ['str', 'string', '', '扩展路径的字符串。'],
                ['opts', 'Object', '', '配置项，参见 Displayable 的配置项。']
            ],
            about: ['Path.extend']
        },
        {
            name: 'mergePath(pathEls, opts)',
            desc: '合并多条路径。',
            args: [
                ['pathEls', 'Path[]', '', '路径数组。'],
                ['opts', 'Object', '', '配置项，参见 Displayable 的配置项。']
            ]
        }
    ]
}

export default path;