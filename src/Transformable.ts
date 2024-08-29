import { ClassType } from "./type";

const Transformable: ClassType = {
    name: 'Transformable',
    desc: '可进行变换的对象，变换包括：位移，旋转，缩放。',
    instance: {
        name: 'zrender.Transformable(opts)',
        args: [
            ['opts', 'Object', '', '配置项。'],
            ['opts.position', 'number[]', '[0, 0]', '位移。'],
            ['opts.rotation', 'number', 0, '旋转的弧度。'],
            ['opts.scale', 'number[]', '[1, 1]', '缩放。'],
            ['opts.origin', 'number[]', 'null', '旋转和缩放的原点。']
        ]
    },
    funs: [
        {
            name: 'decomposeTransform()',
            desc: '分解 transform 矩阵到 position, rotation, scale。通常用于修改 transform 后同步 position, rotation, scale 属性。',
        },
        {
            name: 'getGlobalScale()',
            desc: '获取全局的缩放。也就是说连祖先元素的缩放也会计算在内。',
            return: ['缩放', 'number[]']
        },
        {
            name: 'origin',
            return: ['旋转和缩放的原点。', 'number[]']
        },
        {
            name: 'position',
            return: ['位移', 'number[]']
        },
        {
            name: 'rotation',
            return: ['旋转的弧度', 'number']
        },
        {
            name: 'scale',
            return: ['缩放', 'number[]']
        },
        {
            name: 'transform',
            return: ['矩阵形式表示位移，旋转，缩放。', 'matrix']
        },
        {
            name: 'transformCoordToGlobal(x, y)',
            desc: '变换局部坐标位置到全局坐标空间。',
            args: [
                ['x', 'number', '', '横坐标。'],
                ['y', 'number', '', '纵坐标。']
            ]
        },
        {
            name: 'transformCoordToLocal(x, y)',
            desc: '变换坐标位置到元素的局部坐标空间。',
            args: [
                ['x', 'number', '', '横坐标。'],
                ['y', 'number', '', '纵坐标。']
            ]
        }
    ]
};

export default Transformable;