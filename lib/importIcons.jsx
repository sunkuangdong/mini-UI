// 遍历导入所有的svg
// require.context
let importAll = (requireContext) => requireContext.keys().forEach(requireContext)

try {
    importAll(require.context('../public/icons', true, /\.svg$/))
} catch (error) {
    console.log(error)
}