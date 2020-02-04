console.log("main js linked")

const docBody = document.querySelector('body')
const container = document.createElement('div')
docBody.appendChild(container)
container.classList.add('container')

let heading = document.createElement('div')
container.appendChild(heading)
let headingContent = document.createElement('h1')
headingContent.innerHTML = 'Customer Database'
heading.appendChild(headingContent)
const profileContainer = document.createElement('div')
container.appendChild(profileContainer)


