const classes = function (...names: (string | undefined)[]) {
    return names.filter(Boolean).join(' ')
}

const scopedClassMaker = function (prefix: string) {
    return function (name?: string) {
        return [prefix, name].filter(Boolean).join("-")
    }
}
export { classes, scopedClassMaker }