import { ClassType } from "../type";

export default function (map: Record<string, ClassType>) {
    const links: { source: string; target: string; type: string; }[] = [];
    Object.values(map).forEach(clsType => {
        if (clsType.extends) {
            clsType.extends.forEach(extendCls => {
                const extClazz = map[extendCls];
                if (extClazz) {
                    links.push({
                        source: clsType.name,
                        target: extClazz.name,
                        type: 'extend',
                    })
                } else {
                    console.log(`未找到：${clsType}`)
                }
            })
        }
    })
    return links;
}