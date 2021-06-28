interface Options {
    extra: string | undefined
}
const classes = function (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

const scopedClassMaker = function (prefix: string) {
    return function (name?: string, options?: Options) {
        const result = [prefix, name].filter(Boolean).join("-")
        if (options && options.extra) {
            return [result, options.extra].filter(Boolean).join(" ")
        } else {
            return result
        }
    }
}
export { classes, scopedClassMaker }