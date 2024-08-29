import { ClassType } from "./type";

const Gradient: ClassType = {
    name: 'Gradient',
    desc: '渐变。抽象类。',
    instance: {
        name: 'zrender.Gradient(colorStops)',
        desc: '不要直接在代码中使用 new zrender.Gradient(colorStops)',
        args: [
            ['colorStops', 'Object[]', '', '组成渐变色的颜色。每个颜色包括 offset 与 color 属性。前者表示渐变位置（类型：number），后者表示具体的颜色（类型：string）。']
        ]
    },
    funs: [
        {
            name: 'addColorStop(offset, color)',
            desc: '增加渐变色。如果想要清除渐变色，可以使用 .colorStops = []',
            args: [
                ['offset', 'number', '', '渐变位置。'],
                ['color', 'string', '', '颜色。']
            ]
        }
    ]
}

export default Gradient;