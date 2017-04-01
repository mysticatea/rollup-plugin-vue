import compileHTML from './html'

const compilers = {
    html: compileHTML
}

export default async function (template, extras, options) {
    return await compilers[extras.lang || 'html'].call(null, template, extras, options)
}
