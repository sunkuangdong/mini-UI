const classes = function (...names: (string | undefined)[]) {
    // names.filter(Boolean).join(' ')
    return names.join(' ').trim()
}
export default classes