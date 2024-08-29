import { ClassType } from "./type";

const vector: ClassType = {
    name: 'vector',
    desc: '静态类，长度为 2 的向量。如果浏览器不支持 Float32Array 则类型为 number[]，否则为 Float32Array',
    staticFuns: [
        {
            name: 'add(out, v1, v2)',
            desc: '将向量 v1 与 v2 相加，赋值给向量 out 。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
            about: ['scaleAndAdd']
        },
        {
            name: 'applyTransform(out, v, m)',
            desc: '矩阵 m 左乘向量 v，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v', 'Float32Array|number[]', '', '向量。'],
                ['m', 'Float32Array|number[]', '', '矩阵，参见 matrix']
            ],
            return: ['输出向量 out', 'Float32Array|number[]']
        },
        {
            name: 'copy(out, v)',
            desc: '将向量 v 复制给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v', 'Float32Array|number[]', '', '参考向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]']
        },
        {
            name: 'clone(v)',
            desc: '将向量 v 复制，产生一个新副本。',
            return: ['新创建的向量。', 'Float32Array|number[]']
        },
        {
            name: 'distance(v1, v2)',
            desc: '得到向量 v1 与 v2 间距离。',
            args: [
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['距离。', 'number']
        },
        {
            name: 'distanceSquare(v1, v2)',
            desc: '得到向量 v1 和 v2 间距离的平方。',
            args: [
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['距离的平方。', 'number']
        },
        {
            name: 'div(out, v1, v2)',
            desc: '将向量 v1 与 v2 的每个元素分别相除，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]']
        },
        {
            name: 'dot(v1, v2)',
            desc: '将向量 v1 与 v2 点乘，返回点积。',
            args: [
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['点积。', 'number']
        },
        {
            name: 'len(v)',
            desc: '求向量 v 的模长，也就是其两个元素的几何平均数。',
            args: [
                ['v', 'Float32Array|number[]', '', '待求模长的向量。'],
            ],
            return: ['模长。', 'number']
        },
        {
            name: 'lenSquare(v)',
            desc: '求向量 v 的模长的平方。',
            args: [
                ['v', 'Float32Array|number[]', '', '待求模长平方的向量。'],
            ],
            return: ['模长平方。', 'number']
        },
        {
            name: 'lerp(out, v1, v2, t)',
            desc: '将向量 v1 与 v2 在 t 位置进行插值，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
                ['t', 'number', '', '位置，0 到 1，1 表示 v2 处。']
            ],
            return: ['插值后的向量 out', 'Float32Array|number[]']
        },
        {
            name: 'max(out, v1, v2)',
            desc: '求两个向量每个元素的最大值，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
            about: ['min']
        },
        {
            name: 'min(out, v1, v2)',
            desc: '求两个向量每个元素的最小值，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
            about: ['max']
        },
        {
            name: 'mul(out, v1, v2)',
            desc: '将向量 v1 与 v2 相乘，赋值给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
        },
        {
            name: 'negate(out, v)',
            desc: '将向量 v 的负向量输出到 out，也就是每个元素都变成相反数。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v', 'Float32Array|number[]', '', '输入向量。'],
            ],
            return: ['负向量 out', 'Float32Array|number[]']
        },
        {
            name: 'normalize(out, v)',
            desc: '将向量 v 归一化输出到 out，也就是将其模长变为 1',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v', 'Float32Array|number[]', '', '输入向量。'],
            ],
            return: ['归一化后的 out', 'Float32Array|number[]']
        },
        {
            name: 'scale(out, v, s)',
            desc: '将向量 v 缩放 s 倍，得到的结果赋值给 out',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v', 'Float32Array|number[]', '', '待修改的向量，不会在方法中改变。'],
                ['s', 'number', '', '缩放量。']
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
            about: ['scaleAndAdd']
        },
        {
            name: 'scaleAndAdd(out, v1, v2, scale)',
            desc: '将向量 v2 缩放 scale 倍后，与 v1 相加，赋值给向量 out。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
                ['scale', 'number', '', '缩放比例，1 表示不缩放。']
            ],
            return: ['输出向量 out', 'Float32Array|number[]'],
            about: ['add', 'scale']
        },
        {
            name: 'set(out, a, b)',
            desc: '将值 (a, b) 赋给向量 out。不会创建新向量，而是将 out 的元素进行改变。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['a', 'number', '', '向量的第一个维度。'],
                ['b', 'number', '', '向量的第二个维度。']
            ],
            return: ['输出向量 out', 'Float32Array|number[]']
        },
        {
            name: 'sub(out, v1, v2)',
            desc: '将向量 v1 与 v2 相减，赋值给向量 out。',
            args: [
                ['out', 'Float32Array|number[]', '', '输出向量。'],
                ['v1', 'Float32Array|number[]', '', '第一个向量。'],
                ['v2', 'Float32Array|number[]', '', '第二个向量。'],
            ],
            return: ['输出向量 out', 'Float32Array|number[]']
        }
    ]
}

export default vector;