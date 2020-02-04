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
profileContainer.classList.add('profile-container')


// function capitalizeFirst (string) {
//   return string[0].toUpperCase() + string.slice(1)
// }

// const custNames = customers.map(function (customer) {
//   return capitalizeFirst(customer.name.first) + ' ' + capitalizeFirst(customer.name.last)
// })

// const customerListItems = customerNames.map(function (name) {
//   const li =document.createElement('li')
//   li.textContent = name
//   return li
// })

let cust = customers[0]

for (let cust of customers) {
  let profileDiv = document.createElement('div')
  profileDiv.classList.add('profile')
  profileContainer.appendChild(profileDiv)
  // IMAGE
  let custImage = cust.picture.large
  let imageNode = document.createElement('img')
  imageNode.classList.add('profile-photo')
  imageNode.src = custImage
  profileDiv.appendChild(imageNode)
  // NAME
  let name = cust.name.first + ' ' + cust.name.last
  let custName = document.createElement('h2')
  custName.innerText = name
  profileDiv.appendChild(custName)
  custName.classList.add('cust-name')
  // EMAIL
  let email = cust.email
  let emailDiv = document.createElement('div')
  emailDiv.innerText = email
  profileDiv.appendChild(emailDiv)
  emailDiv.classList.add('email')
  //ADDRESS
  let address = cust.location.street + "\n" + cust.location.city + ', ' + nameToAbbr(cust.location.state) + ' ' + cust.location.postcode
  let addressDiv = document.createElement('div')
  addressDiv.innerText = address
  profileDiv.appendChild(addressDiv)
  addressDiv.classList.add('address')
  //DATES
  let dateOfBirth = `DOB: ${moment(cust.dob).format('MMMM Do, YYYY')}`
  let customerSince = `Customer since: ${moment(cust.registered).format('MMMM Do, YYYY')}`
  let dateDiv = document.createElement('div')
  dateDiv.innerText = dateOfBirth + '\n' + customerSince
  profileDiv.appendChild(dateDiv)
  dateDiv.classList.add('dates')

}

//create array, push needed cust values into it
