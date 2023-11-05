// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
        {text: 'all', href: '/catalog/all'},
        {text: 'top selling', href: '/catalog/top'},
        {text: 'search', href: '/catalog/search'},
      ]},
      {text: 'orders', href: '#' , subLinks: [
        {text: 'new', href: '/orders/new'},
        {text: 'pending', href: '/orders/pending'},
        {text: 'history', href: '/orders/history'},
      ]},
      {text: 'account', href: '#', subLinks: [
        {text: 'profile', href: '/account/profile'},
        {text: 'sign out', href: '/account/signout'},
      ]},
  ];

// -----{TASK1}
const mainEl = document.querySelector('main')
mainEl.style.backgroundColor = 'var(--main-bg)'
const h1 = document.createElement('h1')
h1.textContent = 'SEI Rocks!'
mainEl.appendChild(h1)
mainEl.setAttribute('class','flex-ctr')

// -----{TASK2}
const topMenuEl = document.getElementById('top-menu')
topMenuEl.style.height = '100%'
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)'
topMenuEl.setAttribute('class','flex-around')



for (let i = 0 ; i < menuLinks.length; i++) {
    const a = document.createElement('a')
    a.textContent = menuLinks[i].text
    a.setAttribute('href', menuLinks[i].href)
    topMenuEl.appendChild(a)
}


// ----------{TASK4}

const subMenuEl = document.querySelector('#sub-menu')
subMenuEl.style.height = '100%'
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)'
subMenuEl.setAttribute('class', 'flex-around')
subMenuEl.style.position = 'absolute'
subMenuEl.style.top = '0'



