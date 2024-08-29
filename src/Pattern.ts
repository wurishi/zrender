import { ClassType } from "./type";

const Pattern: ClassType = {
    name: 'Pattern',
    desc: '图案。',
    instance: {
        name: 'zrender.Pattern(image, repeat)',
        args: [
            ['image', 'HTMLImageElement', '', '图片对象。'],
            ['repeat', 'string', 'repeat', `重复模式，可取值有：'repeat', 'repeat-x', 'repeat-y', 'no-repeat'`]
        ]
    }
};

export default Pattern;