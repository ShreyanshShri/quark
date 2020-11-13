# quark
A JavaScript framework which helps you create awesome dynamic single page websites quickly...

<a href='https://shreyanshshri.github.io/quark/sample/sample.html'>Live Example</a>

## Getting started
First you need to get the cdn of css and js file<br>
CSS: https://shreyanshshri.github.io/quark/quark.css <br>
JS: https://shreyanshshri.github.io/quark/quark.js

Here is a starter template from where you can start
```
<DOCTYPE html>
<html>
<head>
<title>hello</title>
<link rel="stylesheet" ref="https://shreyanshshri.github.io/quark/quark.css" type="text/css" />
</head>
<body>

<script src="https://shreyanshshri.github.io/quark/quark.js"></script>
<script>

const root = div([
	// your code goes here
], {
    id: 'root'
})

document.body.append(root)
</script>

</body>
</html>
```

## Creating out first quark app
Remember that everything you type should be in the div#root
```
p('Hello World'),
```
Bingo we have created our very first quark app
### Note : 
We use ',' at the end instead of ';' as you can see it is a array of elements

## Available Elements
* div
* button
* span
* input
* h1 to h5
* img
* ul
* ol

## Adding attributes to elements
You can also pass an abject as a second parameter to add attributes to elements
```
p('Hello World' , {
  id: 'hello',
  classes: 'class1'
}),
```
### Available attributes
* classes
* id
* src
* href
* onclick
* onmouseover
* action
* method
But ofcourse you can add more and create a PR :)

### Adding multiple classes
You can add multiple classes by passing them as an array
```
p('Hello World, {
  id: 'para',
  classes: ['class1', 'class2']
}),
```

## Elements inside of an Element
In order to use nasted elements you need to pass the first parameter as an array...
It is important to use array even if you have only one element
```
div([
  h1('Hello World'),
  p('This is a tiny quark')
], {
  id: 'hello',
  classes: ['class1', 'class2']
}),
```
## Event Listeners

This is a example of how to add Event Listeners to elements..<br>
Currently we have only two... onclick and onmouseover
```
button('Click Me', {
  onclick: someFunc
})
function someFunc(){
alert('Hello')
}
```


## Special Elements
Some elements need different params as follows
```
input(<placeholder>, <type>, <params (object containing classes etc)> )

img({
  src: <src>
})

ol(<items(an array)>, params)
```

## Showing elements Dynamically
For this we are gonna using <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map'>map</a> function and <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax'>Spread Operator</a><br>
We will be using a sample data but you can fetch it using any api
```
const data = ['apple', 'mango', 'pineapple, 'guava', 'grapes']
const ele = data.map(fruit => {
		return (
			p(fruit)
		)
	    })
	    
	    
const root = div([
	...ele
], {
    id: 'root'
})

document.body.append(root)
```

## Custom Built elements
Quark also provides some csutom inbuit elements such as navs, alerts and cards.<br>
For now there are only 4 but we will be adding much more in future updates
### Navs
```
nav({
    name: <name of the company>',
    links: [
        {
            link: <route>,
            name: <name to be shown>
        }
    ]
}, {
    id: 'nav'
}),
```
Thats it and you have a responsive nav... Boom<br>
Also you can change the theme of the navbars by adding a few classes
By default is dark
* nav-primary (blue)
* nav-success (green)
* nav-danger (red)
### Card
```
card({
    imgSrc,
    title,
    subtitle,
    text,
    buttonText
}, {
    classes: 'card'
}),
```
### Loader
Its quiet simple
```
loader(),
```
### Alerts
```
showAlert({
    text: <text-content>
    logo 
    // logo is under development
})
```
This ends the custom tags section... If you see any bugs, plz create an issue<br>
Or make a PR... 

## CSS section
Quark also provides you some default css styling which you can easily implement in your code<br>
Remember how we added classes to element... <br>
We are gonna do exactly the same
```
p("Hello World", {
  classes: ["ml-2", "pl-2" ]
})
```
Here ml-2 defines margin left of 2rems and same with pl except for it is for padding

* margin-left: ml
* margin-right: mr
* margin-top: mt
* margin-bottom: mb
* margin-left & margin-right: mx
* margin-top & margin-bottom: my

Then you can give the number b/w 1 to 5 like "mb-2" for margin-bottom: 2rem<br>

Same thing for padding except its "p" inplace of "m"

Other stylings are
* container: for 20px padding
* d-inline: for display-inline
* d-block: for display block
* d-flex: for display: flex
* align-center: for align-items: center
* justify-center: for justify-content: center
* text-muted: for light text
* bg-dark: for a darker background

You can styles to buttons as well (defualt is blue)
* btn-success (green)
* btn-danger (red)
* btn-dark (w & B)
<br>
So thats it for basic styling... If you want to add more feel free to make a PR :)
