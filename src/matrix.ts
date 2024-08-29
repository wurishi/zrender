import { ClassType } from "./type";

const matrix: ClassType = {
    name: 'matrix',
    desc: '静态类，3x2 的矩阵，用以表示二维物体的位移，旋转，缩放。用长度为 6 的数组表示矩阵。如果浏览器不支持 Float32Array 则类型为 number[]，否则为 Float32Array。',
    staticFuns: [
        {
            name: 'copy(out, m)',
            desc: '将矩阵 m 复制给矩阵 out。不会创建新矩阵，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '待修改的矩阵，由 zrender.matrix.create 创建。'],
                ['m', 'Float32Array|number[]', '', '参考矩阵。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'create()',
            desc: '创建一个单位矩阵。',
            return: ['新创建的单位矩阵，元素个数为 6', 'Float32Array|number[]']
        },
        {
            name: 'identity(out)',
            desc: '将 out 设为单位矩阵，也就是 [1, 0, 0, 1, 0, 0]。不会创建新矩阵，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '待修改的矩阵，由 zrender.matrix.create 创建。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'invert(out, m)',
            desc: '求到矩阵 m 的逆矩阵，得到的结果赋值给 out。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出矩阵，由 zrender.matrix.create 创建。'],
                ['m', 'Float32Array|number[]', '', '待求逆的矩阵，不会在方法中被改变。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'mul(out, m1, m2)',
            desc: '将矩阵 m1 与 m2 相乘，得到的结果赋值给 out',
            args: [
                ['out', 'Float32Array|number[]', '', '输出矩阵，由 zrender.matrix.create 创建。'],
                ['m1', 'Float32Array|number[]', '', '待相乘的矩阵。'],
                ['m2', 'Float32Array|number[]', '', '待相乘的矩阵。'],
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'rotate(out, m, rad)',
            desc: '将矩阵 m 旋转 rad 弧度，得到的结果赋值给 out',
            args: [
                ['out', 'Float32Array|number[]', '', '输出矩阵，由 zrender.matrix.create 创建。'],
                ['m', 'Float32Array|number[]', '', '待修改的矩阵，不会在方法中被改变。'],
                ['rad', 'number', '', '旋转弧度。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'scale(out, m, v)',
            desc: '将矩阵 m 沿向量 v 缩放，得到的结果赋值给 out',
            args: [
                ['out', 'Float32Array|number[]', '', '输出矩阵，由 zrender.matrix.create 创建。'],
                ['m', 'Float32Array|number[]', '', '待修改的矩阵，不会在方法中被改变。'],
                ['v', 'Float32Array|number[]', '', '长度为 2 的缩放向量，表示横向和纵向的缩放量。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        },
        {
            name: 'translate(out, m, v)',
            desc: '将矩阵 m 沿向量 v 平移，得到的结果赋值给 out',
            args: [
                ['out', 'Float32Array|number[]', '', '输出矩阵，由 zrender.matrix.create 创建。'],
                ['m', 'Float32Array|number[]', '', '待修改的矩阵，不会在方法中被改变。'],
                ['v', 'Float32Array|number[]', '', '长度为 2 的平移向量，表示横向和纵向的偏移量。']
            ],
            return: ['修改后的 out', 'Float32Array|number[]']
        }
    ]
}

export default matrix;