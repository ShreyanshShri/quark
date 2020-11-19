const cl = (el) => {
    return document.createElement(el)
}

const check = (htmlContent, el) => {
    for(e of htmlContent){
        if(Array.isArray(htmlContent)){
            el.appendChild(e)
        } else {
            el.innerHTML = htmlContent
        }
    }
    return el
}

const setParams = (el, params) => {

var {classes, id, src, href, onclick, onmouseover, action, method} = params || {}

    if (src != undefined) {
        el.src = src
    }
    if (href != undefined) {
        el.href = href
    }
    if(onclick != undefined) {
        el.onclick = onclick
    }
    if (onmouseover != undefined) {
        el.onmouseover = onmouseover
    }
    if(id != undefined) {
        el.id = id
    }
    if (action != undefined) {
        el.action = action
    }
    if (method != undefined) {
        el.method = method
    }

    if (classes == undefined || classes === '') {
        classes = 'none'
    }
    if (Array.isArray(classes)) {
        for (c of classes) {
            el.classList.add(c)
        }
    } else {
        el.classList.add(classes)
    }
}

const div = (htmlContent, params) => {
    const el = cl('div')
    // setParams(el, params)
    setParams(el, params)
    return check(htmlContent, el)
}

const span = (htmlContent, params) => {
    const el = cl('span')
    setParams(el, params)
    return check(htmlContent, el)
}

const p = (htmlContent, params) => {
    const el = cl('p')
    setParams(el, params)
    return check(htmlContent, el)
}

const h1 = (htmlContent, params) => {
    const el = cl('h1')
    setParams(el, params)
    return check(htmlContent, el)
}

const h2 = (htmlContent, params) => {
    const el = cl('h2')
    setParams(el, params)
    return check(htmlContent, el)
}

const h3 = (htmlContent, params) => {
    const el = cl('h3')
    setParams(el, params)
    return check(htmlContent, el)
}

const h4 = (htmlContent, params) => {
    const el = cl('h4')
    setParams(el, params)
    return check(htmlContent, el)
}

const h5 = (htmlContent, params) => {
    const el = cl('h5')
    setParams(el, params)
    return check(htmlContent, el)
}

const form = (htmlContent, params) => {
    const el = cl('form')
    setParams(el, params)
    return check(htmlContent, el)
}

const button = (htmlContent, params) => {
    const el = cl('button')
    setParams(el, params)
    return check(htmlContent, el)
}

const input = (text, type, params) => {
    const el = cl('input')
    setParams(el, params)
    el.placeholder = text
    el.type = type
    return el
}

const img = (params) => {
    const el = cl('img')
    setParams(el, params)
    return el
}

const a = (htmlContent, params) => {
    const el = cl('a')
    setParams(el, params)
    return check(htmlContent, el)
}

const icon = (params) => {
    const el = cl('span')
    setParams(el, params)
    return el
}

const br = () => {
    const el = cl('br')
    return el
}

const ul = (items, params) => {
    const el = cl('ul')
    el.innerHTML = `
        ${items.map(item => {
            if(item.includes('--active')){
                item = item.replace('--active','')
                return '<li class="li-active">'+ item +'</li>'
                }
            return '<li>'+ item +'</li>'  
        }).join('')}
    `   
    setParams(el, params)
    return el
}

const ol = (items, params) => {
    const el = cl('ul')
    el.innerHTML = `
        ${items.map((item, index) => {
          if(item.includes('--active')){
            i = parseInt(index) + 1
            item = item.replace('--active','')
            return '<li class="li-active">'+ i +' <span></span> '+ item +'</li>'
          }
          i = parseInt(index) + 1
          return '<li>'+ i +' <span></span> '+ item +'</li>'  
        })}
    `   
    setParams(el, params)
    return el
}

// custom tags
const nav = ({
    logo,
    name,
    links,
}, params) => {
    /* fix icon */
    const el = cl('nav')
    el.classList.add('nav')
    el.innerHTML = `
        <input type="checkbox" id="nav-check">
        <div class="nav-header">
            <div class="nav-title">
            <i class='${logo}'></i>
            ${name}
            </div>
        </div>
        <div class="nav-btn">
            <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
            </label>
        </div>
        
        <div class="nav-links">
            ${links.map(link => {
                return "<a href="+ link.link +" target='_blank'>"+ link.name +"</a>"
            }).join('')}
        </div>
    `
    setParams(el, params)
    return el
}

const card = ({
    imgSrc,
    title,
    subtitle,
    text,
    buttonSrc,
    buttonText
}, params) => {
    const el = cl('div')

    el.innerHTML = `
            ${imgSrc != undefined ? '<img src ='+ imgSrc +' class= "card-img" />' : ''}
            <div class='card-body'>
            ${title != undefined ? '<h2>'+ title +'</h2>' : '' }
            ${subtitle != undefined ? '<span class="text-muted">'+ subtitle +'</span>' : '' }
            ${text != undefined ? '<p>'+ text +'</p>' : '' }
            ${buttonText != undefined ? '<a href='+ buttonSrc +'><button>'+ buttonText +'</button></a>' : '' }
            </div>
            `
    setParams(el, params)
    return el
}

const loader = (params) => {
    const el = cl('div')
    el.classList.add('loader')
    setParams(el, params)
    return el
}

const showAlert = ({
    text,
    logo
}, params) => {
    const el = cl('div')
    el.classList.add('alert')
    el.innerHTML = `
    <span class="closebtn" onclick="this.parentElement.style.display='none';" style="position:absolute; top:10px; right:20px;">X</span>
            ${logo != undefined ? '<span class='+ logo +'></span>' : '' }
            ${text != undefined ? '<p>' + text + '</p>' : '' }
    `

    setParams(el, params)
    return el
}
