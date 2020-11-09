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

const addClasses = (el, clist) => {
    if(clist == undefined || clist === ''){
        clist = 'none'
    }
    if(Array.isArray(clist)){
        for(c of clist){
            el.classList.add(c)
        }
    } else {
        el.classList.add(clist)
    }
}

const div = (htmlContent, classes) => {
    const el = cl('div')
    addClasses(el, classes)
    return check(htmlContent, el)
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

const form = (htmlContent, action, method, classes) => {
    const el = cl('form')
    el.action = action
    el.method = method
    addClasses(el, classes)
    return check(htmlContent, el)
}

const button = (htmlContent, classes) => {
    const el = cl('button')
    addClasses(el, classes)
    return check(htmlContent, el)
}

const input = (text, type, classes) => {
    const el = cl('input')
    addClasses(el, classes)
    el.placeholder = text
    el.type = type
    return el
}

const img = (classes, link, {width, height}) => {
    const el = cl('img')
    el.src = link
    el.width = width
    el.height = height
    addClasses(el, classes)
    return check(null, el)
}

const a = (htmlContent, classes, link) => {
    const el = cl('a')
    el.src = link
    addClasses(el, classes)
    return check(htmlContent, el)
}

const icon = (classes) => {
    const el = cl('span')
    addClasses(el, classes)
    return el
}

const ul = (items, classes) => {
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
    addClasses(el, classes)
    return el
}

const ol = (items, classes) => {
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
    addClasses(el, classes)
    return el
}

// custom tags
const nav = ({
    logo,
    name,
    links,
}, classes) => {
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
    addClasses(el, classes)
    return el
}

const card = ({
    imgSrc,
    title,
    subtitle,
    text,
    buttonSrc,
    buttonText
}, classes) => {
    const el = cl('div')

    el.innerHTML = `
            ${imgSrc != undefined ? '<img src ='+ imgSrc +' class= "card=img" />' : ''}
            ${title != undefined ? '<h2>'+ title +'</h2>' : '' }
            ${subtitle != undefined ? '<span class="text-muted">'+ subtitle +'</span>' : '' }
            ${text != undefined ? '<p>'+ text +'</p>' : '' }
            ${buttonText != undefined ? '<a href='+ buttonSrc +'><button>'+ buttonText +'</button></a>' : '' }
    `
    addClasses(el, classes)
    return el
}

const loader = (classes) => {
    const el = cl('div')
    el.classList.add('loader')
    addClasses(el, classes)
    return el
}

const showAlert = ({
    text,
    logo
}, classes) => {
    const el = cl('div')
    el.classList.add('alert')
    el.innerHTML = `
    <span class="closebtn" onclick="this.parentElement.style.display='none';" style="position:absolute; top:10px; right:20px;">X</span>
            ${logo != undefined ? '<span class='+ logo +'></span>' : '' }
            ${text != undefined ? '<p>' + text + '</p>' : '' }
    `

    addClasses(el, classes)
    return el
}