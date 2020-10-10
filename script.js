const cl = (el) => {
    return document.createElement(el)
}

const check = (htmlContent, el) => {
    if(Array.isArray(htmlContent)){
        el = el.appendChild(el)
        return el
    } else {
        el.innerHTML = htmlContent
        return el
    }
}

const addClasses = (el, clist) => {
    if(clist == undefined){
        clist = 'none'
    }
    el.classList.add(clist)
}

const div = (htmlContent, classes) => {
    const el = cl('div')
    addClasses(el, classes)
    for(e of htmlContent){
        if(Array.isArray(htmlContent)){
            el.appendChild(e)
        } else {
            el.innerHTML = htmlContent
        }
    }
        return el
}

const span = (htmlContent, classes) => {
    const el = cl('span')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const p = (htmlContent, classes) => {
    const el = cl('p')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const h1 = (htmlContent, classes) => {
    const el = cl('h1')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const h2 = (htmlContent, classes) => {
    const el = cl('h2')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const h3 = (htmlContent, classes) => {
    const el = cl('h3')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const h4 = (htmlContent, classes) => {
    const el = cl('h4')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const h5 = (htmlContent, classes) => {
    const el = cl('h5')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const button = (htmlContent, classes) => {
    const el = cl('button')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const input = (htmlContent, classes) => {
    const el = cl('input')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const icon = (classes) => {
    const el = cl('span')
    addClasses(el, classes)
    // el.classList.push(classes)
    return el
}