interface Options {
    extra: string | undefined
}
interface ClassToggles {
    [key: string]: boolean
}

const classes = function (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

const scopedClassMaker = (prefix: string) =>
    (name?: string | ClassToggles, options?: Options) =>
        // ClassToggles: {hasAside: true, active: false}
        // 需要得到 ['hasAside']，然后用'-'拼接我们的 prefix
        Object.entries(name instanceof Object ? name : { [(name as string)]: name })
            .filter(kv => kv[1] !== false)
            .map(kv => kv[0])
            .map(n => [prefix, n]
                .filter(Boolean)
                .join("-"))
            .concat(options && options.extra || [])
            .join(' ')

export { classes, scopedClassMaker }