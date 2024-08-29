import { ClassType } from "./type";

const BoundingRect: ClassType = {
    name: 'BoundingRect',
    desc: '包围盒',
    instance: {
        name: 'zrender.BoundingRect(x, y, width, height)',
        args: [
            ['x', 'number', '', '左上角横坐标。'],
            ['y', 'number', '', '左上角纵坐标。'],
            ['width', 'number', '', '包围盒宽度。'],
            ['height', 'number', '', '包围盒高度。'],
        ]
    },
    funs: [
        {
            name: 'clone()',
            desc: '得到包围盒的副本。',
            return: ['新的包围盒', 'BoundingRect']
        },
        {
            name: 'contain(x, y)',
            desc: '判断坐标 (x, y) 是否在图形上。',
            args: [
                ['x', 'number', '', '横坐标。'],
                ['y', 'number', '', '纵坐标。']
            ],
            return: ['是否在图形上', 'boolean']
        },
        {
            name: 'copy(other)',
            desc: '从另一个包围盒复制属性。',
            args: [
                ['other', 'BoundingRect', '', '另一个包围盒。']
            ]
        },
        {
            name: 'intersect(other)',
            desc: '判断两个包围盒是否相交。',
            args: [
                ['other', 'BoundingRect', '', '另一个包围盒。']
            ],
            return: ['是否相交', 'boolean']
        },
        {
            name: 'union(other)',
            desc: '与另一个包围盒求并集，将结果更新到原本的包围盒。',
            args: [
                ['other', 'BoundingRect', '', '另一个包围盒。']
            ]
        }
    ]
}

export default BoundingRect;