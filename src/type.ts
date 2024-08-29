export type ClassType = {
    name: string;
    desc?: string;
    extends?: string[];
    instance?: FunctionType;
    staticFuns?: FunctionType[];
    funs?: FunctionType[];
}

export type FunctionType = {
    desc?: string;
    name: string;
    /**
     * [名称，类型，默认值，描述][]
     */
    args?: [string, string, string | number, string][];
    /**
     * [描述，类型]
     */
    return?: [string, string];
    about?: string[];
}