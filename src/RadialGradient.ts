import { ClassType } from "./type";

const RadialGradient: ClassType = {
    name: 'RadialGradient',
    extends: ['Gradient'],
    desc: '径向渐变。',
    instance: {
        name: 'zrender.RadialGradient(x, y, r, colorStops, globalCoord)',
        args: [
            ['x', 'number', 0.5, '渐变中心位置横坐标。'],
            ['y', 'number', 0.5, '渐变中心位置纵坐标。'],
            ['r', 'number', 0.5, '渐变半径。'],
            ['colorStops', 'Object[]', '', '组成渐变色的颜色。每个颜色包括 offset 与 color 属性，前者表示渐变位置（类型：number），后者表示具体的颜色（类型：string）'],
            ['globalCoord', 'boolean', 'false', '如果为 false，则 colorStops 取值范围是 0 到 1 。如果为 true，则 x, y, r, colorStops 的坐标和元素是一致的（也就是说，原先用 1 表示物体最右侧，这时需要用元素实际宽度表示最右侧。）']
        ]
    }
};

export default RadialGradient;