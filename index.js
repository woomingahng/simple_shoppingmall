'use strict'

function getClothes() {
  return [
    {
      size: 'Small',
      color: 'Blue',
      category: 'Pants',
    },
    {
      size: 'Small',
      color: 'Blue',
      category: 'Skirts',
    },
    {
      size: 'Small',
      color: 'Blue',
      category: 'Tshirts',
    },
    {
      size: 'Small',
      color: 'Yellow',
      category: 'Pants',
    },
    {
      size: 'Small',
      color: 'Yellow',
      category: 'Skirts',
    },
    {
      size: 'Small',
      color: 'Yellow',
      category: 'Tshirts',
    },
    {
      size: 'Small',
      color: 'Pink',
      category: 'Pants',
    },
    {
      size: 'Small',
      color: 'Pink',
      category: 'Skirts',
    },
    {
      size: 'Small',
      color: 'Pink',
      category: 'Tshirts',
    },
    {
      size: 'Medium',
      color: 'Blue',
      category: 'Pants',
    },
    {
      size: 'Medium',
      color: 'Blue',
      category: 'Skirts',
    },
    {
      size: 'Medium',
      color: 'Blue',
      category: 'Tshirts',
    },
    {
      size: 'Medium',
      color: 'Yellow',
      category: 'Pants',
    },
    {
      size: 'Medium',
      color: 'Yellow',
      category: 'Skirts',
    },
    {
      size: 'Medium',
      color: 'Yellow',
      category: 'Tshirts',
    },
    {
      size: 'Medium',
      color: 'Pink',
      category: 'Pants',
    },
    {
      size: 'Medium',
      color: 'Pink',
      category: 'Skirts',
    },
    {
      size: 'Medium',
      color: 'Pink',
      category: 'Tshirts',
    },
    {
      size: 'Large',
      color: 'Blue',
      category: 'Pants',
    },
    {
      size: 'Large',
      color: 'Blue',
      category: 'Skirts',
    },
    {
      size: 'Large',
      color: 'Blue',
      category: 'Tshirts',
    },
    {
      size: 'Large',
      color: 'Yellow',
      category: 'Pants',
    },
    {
      size: 'Large',
      color: 'Yellow',
      category: 'Skirts',
    },
    {
      size: 'Large',
      color: 'Yellow',
      category: 'Tshirts',
    },
    {
      size: 'Large',
      color: 'Pink',
      category: 'Pants',
    },
    {
      size: 'Large',
      color: 'Pink',
      category: 'Skirts',
    },
    {
      size: 'Large',
      color: 'Pink',
      category: 'Tshirts',
    },
  ]
}

const clothes = getClothes()
function showClothes(clothes) {
  const itemArea = document.querySelector('.itemarea')
  itemArea.innerHTML = ''
  clothes.forEach((item) => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    img.src = `/imgs/${item.color.toLowerCase()}_${item.category
      .charAt(0)
      .toLowerCase()}.png`
    img.className = 'itemimg'
    const span = document.createElement('span')
    span.className = 'itemdesc'
    span.innerHTML = `${item.size} size`
    li.appendChild(img)
    li.appendChild(span)
    itemArea.appendChild(li)
  })
}

const logo = document.querySelector('.logoarea')
logo.addEventListener('click', () => {
  showClothes(clothes)
})
const filterTshirts = document.querySelector('.filterimg.tshirts')
filterTshirts.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.category === 'Tshirts'))
})
const filterPants = document.querySelector('.filterimg.pants')
filterPants.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.category === 'Pants'))
})
const filterSkirts = document.querySelector('.filterimg.skirts')
filterSkirts.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.category === 'Skirts'))
})
const filterBlue = document.querySelector('.filtercolor.blue')
filterBlue.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.color === 'Blue'))
})
const filterYellow = document.querySelector('.filtercolor.yellow')
filterYellow.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.color === 'Yellow'))
})
const filterPink = document.querySelector('.filtercolor.pink')
filterPink.addEventListener('click', () => {
  showClothes(clothes.filter((item) => item.color === 'Pink'))
})

showClothes(clothes)
