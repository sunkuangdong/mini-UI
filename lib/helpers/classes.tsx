interface Options {
    extra: string | undefined
}
interface ClassToggles {
    [key: string]: boolean
}

const classes = function (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

const scopedClassMaker = function (prefix: string) {
    return function (name?: string | ClassToggles, options?: Options) {
        // ClassToggles: {hasAside: true, active: false}
        // 需要得到 ['hasAside']，然后用'-'拼接我们的 prefix
        let name2
        let result
        if (typeof name === 'string' || !name) {
            name2 = name
            result = [prefix, name2].filter(Boolean).join("-")
        } else {
            name2 = Object.entries(name).filter(kv => kv[1]).map(kv => kv[0])
            result = name2.map(n => [prefix, n].filter(Boolean).join("-")).join(' ')
        }
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(" ")
        } else {
            return result
        }
    }
}
export { classes, scopedClassMaker }