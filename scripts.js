let hamMenu = document.getElementsByClassName('ham')[0]
let hamMenu2 = document.getElementsByClassName('ham2')[0]
let navMenu = document.querySelector('.menu-container')
let widthTotal = window.innerWidth
let buttonList_total = document.getElementsByClassName("button-list")
let buttonList1 = buttonList_total[0].children
let buttonList2 = buttonList_total[1].children
let scrollParts = document.getElementsByClassName("img-cards")
let scrollPart1 = scrollParts[0]
let scrollPart2 = scrollParts[1]
let container = document.getElementsByClassName('container-main')[0]

let youShould = document.getElementsByClassName('you-should-know')[0].children[3]
let editPicks = document.getElementsByClassName('editors-picks')[0].children[4]

let search = document.getElementsByClassName('search')[0]
let searchSpace = document.getElementsByClassName('search')[0].children[0].children[1]
let multiplication = document.getElementsByClassName('search')[0].children[0].children[3]
let searchSign = document.getElementsByClassName('search')[0].children[0].children[0]

let nav1 = document.getElementsByClassName('nav')[0]
let nav2 = document.getElementsByClassName('nav2')[0]


let prescrollTop = window.scrollY
if (widthTotal > 900) {
    window.onscroll = function () {
        let currentScrollTop = window.pageYOffset
        if (prescrollTop > currentScrollTop) {
            nav1.style.top = '0'
            nav2.style.top = '56px'
            nav2.children[1].style.display = 'none'
            nav2.children[2].style.top = '-41px'
            nav2.children[2].style.left = '34.94%'
            search.style.top = '56px'
            navMenu.style.top = '112px'
    
        } else {
            nav1.style.top = '-56px'
            nav2.style.top = '0'
            nav2.children[1].style.display = 'inline-block'
            nav2.children[2].style.top = '-56px'
            nav2.children[2].style.left = '28.5%'
            search.style.top = '0'
            navMenu.style.top = '56px'
    
        }
        prescrollTop = currentScrollTop
    }
}

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('ham-c')
    navMenu.style.top = '56px'
    if (hamMenu.classList.contains('ham-c')) {
        navMenu.style.left = 0
        container.style.opacity = '0.4'
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('search')[0].style.left = '20%'
        document.getElementsByClassName('search')[0].style.justifyContent = 'center'
        searchSpace.style.display = 'none'

    } else {
        navMenu.style.left = '-75%'
        container.style.opacity = '1'
        document.body.style.overflow = 'auto'
        document.getElementsByClassName('search')[0].style.left = '100%'
        searchSpace.style.display = 'inline-block'

    }
})


hamMenu2.addEventListener('click', () => {
    hamMenu2.classList.toggle('ham-c')
    window.onscroll = ''
    
    if (hamMenu2.classList.contains('ham-c')) {
        navMenu.style.left = 0
        container.style.opacity = '0.4'
        document.body.style.overflow = 'hidden'
        document.getElementsByClassName('search')[0].style.left = '20%'
        document.getElementsByClassName('search')[0].style.justifyContent = 'center'
        searchSpace.style.display = 'none'

    } else {
        navMenu.style.left = '-75%'
        container.style.opacity = '1'
        document.body.style.overflow = 'auto'
        document.getElementsByClassName('search')[0].style.left = '95%'
        document.getElementsByClassName('search')[0].style.justifyContent = 'start'
        searchSpace.style.display = 'inline-block'
    }
})
hamMenu2.addEventListener('click', () => {
    if (!hamMenu2.classList.contains('ham-c')) {
        setTimeout(() => {
            window.onscroll = function () {
                let currentScrollTop = window.pageYOffset
                if (prescrollTop > currentScrollTop) {
                    nav1.style.top = '0'
                    nav2.style.top = '56px'
                    nav2.children[1].style.display = 'none'
                    nav2.children[2].style.top = '-41px'
                    nav2.children[2].style.left = '34.94%'
                    search.style.top = '56px'
                    navMenu.style.top = '112px'
                } else {
                    nav1.style.top = '-56px'
                    nav2.style.top = '0'
                    nav2.children[1].style.display = 'inline-block'
                    nav2.children[2].style.top = '-56px'
                    nav2.children[2].style.left = '28.5%'
                    search.style.top = '0'
                    navMenu.style.top = '56px'

                }
                prescrollTop = currentScrollTop
            }
        }, 400);
    }
})


container.addEventListener('click', () => {
    if (hamMenu.classList.contains('ham-c') || hamMenu2.classList.contains('ham-c')) {
        hamMenu.classList.remove('ham-c')
        hamMenu2.classList.remove('ham-c')
        navMenu.style.left = '-75%'
        container.style.opacity = '1'
        document.body.style.overflow = 'auto'
        document.getElementsByClassName('search')[0].style.left = '100%'
        document.getElementsByClassName('search')[0].style.justifyContent = 'start'
        searchSpace.style.display = 'inline-block'
    }
})


searchSign.addEventListener('click', () => {
    document.getElementsByClassName('search')[0].style.left = '20%'
    document.getElementsByClassName('search')[0].style.justifyContent = 'center'
    searchSpace.style.display = 'none'
})
multiplication.addEventListener('click', () => {
    document.getElementsByClassName('search')[0].style.left = '95%'
    document.getElementsByClassName('search')[0].style.justifyContent = 'start'
    searchSpace.style.display = 'inline-block'

})


for (const button of buttonList1) {
    button.addEventListener('click', () => {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        button.classList.add('grey')
        if (button.id == 'b-1') {
            scrollPart1.scrollLeft = 0
        } else if (button.id == 'b-2') {
            scrollPart1.scrollLeft = widthTotal * 0.67
        } else if (button.id == 'b-3') {
            scrollPart1.scrollLeft = widthTotal * 1.4
        } else if (button.id == 'b-4') {
            scrollPart1.scrollLeft = widthTotal * 2.18
        } else if (button.id == 'b-5') {
            scrollPart1.scrollLeft = widthTotal * 3
        }
    })
}

for (const button of buttonList2) {
    button.addEventListener('click', () => {
        for (const b of buttonList2) {
            b.classList.remove('grey')
        }
        button.classList.add('grey')
        if (button.id == 'b-1') {
            scrollPart2.scrollLeft = 0
        } else if (button.id == 'b-2') {
            scrollPart2.scrollLeft = widthTotal * 0.75
        } else if (button.id == 'b-3') {
            scrollPart2.scrollLeft = widthTotal * 1.57
        } else if (button.id == 'b-4') {
            scrollPart2.scrollLeft = widthTotal * 2.8
        }
    })
}


let videosData = {
    'vid1': {
        'header': 'How to Train Like an Olympian',
        'desc': "TIME's senior sports correspondent Sean Gregory tries his hand at several Olympic sports while learning from Olympians.",
        'date': "Jul 25, 2024 | 8:10",
        'src': "img/video/video1.mp4"
    },
    'vid2': {
        'header': 'Noah Lyles Runs in His Dreams',
        'desc': "Olympic track-and-field athlete Noah Lyles on his big goals for the 2024 Paris games",
        'date': "Jun 21, 2024 | 4:12",
        'src': "img/video/video2.mp4"
    },
    'vid3': {
        'header': "Frederick Richard's Family Reaction",
        'desc': "Frederick Richard's family reacts to his performance at the 2024 Paris Olympics.",
        'date': "Jul 30, 2024 | 1:09",
        'src': "img/video/video3.mp4"
    },
    'vid4': {
        'header': "Behind the Scenes as Team USA Gets Fitted for Their Olympic Uniforms",
        'desc': "One of the first stops U.S. Olympians make when they arrive in Paris is the Team USA Welcome Experience, located about a 30-minute drive from the heart of Paris. Run by the U.S. Olympic and Paralympic Committee, for...",
        'date': "Jul 24, 2024 | 2:09",
        'src': "img/video/video4.mp4"
    },
}

let mainVid = document.getElementById('main-vid')
let mainVidDesc = document.getElementsByClassName('grid-2-1')[0].children[1]
let mainIcon = document.getElementsByClassName('main-icon')[0]


let vid1 = document.getElementById('v-1').children[0]
let vid2 = document.getElementById('v-2').children[0]
let vid3 = document.getElementById('v-3').children[0]
let vid4 = document.getElementById('v-4').children[0]
let vidTotal = [vid1, vid2, vid3, vid4]

let playingTotal = document.getElementsByClassName('playing')
let playing1 = playingTotal[0]
let playing2 = playingTotal[1]
let playing3 = playingTotal[2]
let playing4 = playingTotal[3]

playing1.style.display = 'inline-block'
vid1.style.opacity = '0.3'

vid1.addEventListener('click', () => {
    mainVid.attributes[1].textContent = videosData.vid1.src
    mainVidDesc.children[0].children[0].textContent = videosData.vid1.header
    mainVidDesc.children[0].children[1].textContent = videosData.vid1.date
    mainVidDesc.children[1].textContent = videosData.vid1.desc
    for (const img of vidTotal) {
        img.style.opacity = '1'
    }
    for (const img of playingTotal) {
        img.style.display = 'none'
    }
    playing1.style.display = 'inline-block'
    vid1.style.opacity = '0.2'
})

vid2.addEventListener('click', () => {
    mainVid.attributes[1].textContent = videosData.vid2.src
    mainVidDesc.children[0].children[0].textContent = videosData.vid2.header
    mainVidDesc.children[0].children[1].textContent = videosData.vid2.date
    mainVidDesc.children[1].textContent = videosData.vid2.desc
    for (const img of vidTotal) {
        img.style.opacity = '1'
    }
    for (const img of playingTotal) {
        img.style.display = 'none'
    }
    playing2.style.display = 'inline-block'
    vid2.style.opacity = '0.2'
})
vid3.addEventListener('click', () => {
    mainVid.attributes[1].textContent = videosData.vid3.src
    mainVidDesc.children[0].children[0].textContent = videosData.vid3.header
    mainVidDesc.children[0].children[1].textContent = videosData.vid3.date
    mainVidDesc.children[1].textContent = videosData.vid3.desc
    for (const img of vidTotal) {
        img.style.opacity = '1'
    }
    for (const img of playingTotal) {
        img.style.display = 'none'
    }
    playing3.style.display = 'inline-block'
    vid3.style.opacity = '0.2'
})
vid4.addEventListener('click', () => {
    mainVid.attributes[1].textContent = videosData.vid4.src
    mainVidDesc.children[0].children[0].textContent = videosData.vid4.header
    mainVidDesc.children[0].children[1].textContent = videosData.vid4.date
    mainVidDesc.children[1].textContent = videosData.vid4.desc
    for (const img of vidTotal) {
        img.style.opacity = '1'
    }
    for (const img of playingTotal) {
        img.style.display = 'none'
    }
    playing4.style.display = 'inline-block'
    vid4.style.opacity = '0.2'
})

youShould.addEventListener('scroll', () => {
    if (youShould.scrollLeft < widthTotal * 0.35) {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        buttonList1[0].classList.add('grey')
    }
    if (youShould.scrollLeft > widthTotal * 0.35 && youShould.scrollLeft < widthTotal * 1.09) {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        buttonList1[1].classList.add('grey')
    }
    if (youShould.scrollLeft >= widthTotal * 1.2 && youShould.scrollLeft < widthTotal * 2) {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        buttonList1[2].classList.add('grey')
    }
    if (youShould.scrollLeft >= widthTotal * 2 && youShould.scrollLeft < widthTotal * 2.64) {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        buttonList1[3].classList.add('grey')
    }
    if (youShould.scrollLeft >= widthTotal * 2.64) {
        for (const b of buttonList1) {
            b.classList.remove('grey')
        }
        buttonList1[4].classList.add('grey')
    }

})

editPicks.addEventListener('scroll', () => {
    if (editPicks.scrollLeft < widthTotal * 0.35) {
        for (const b of buttonList2) {
            b.classList.remove('grey')
        }
        buttonList2[0].classList.add('grey')
    }
    if (editPicks.scrollLeft > widthTotal * 0.35 && editPicks.scrollLeft < widthTotal * 1.09) {
        for (const b of buttonList2) {
            b.classList.remove('grey')
        }
        buttonList2[1].classList.add('grey')
    }
    if (editPicks.scrollLeft >= widthTotal * 1.2 && editPicks.scrollLeft < widthTotal * 2) {
        for (const b of buttonList2) {
            b.classList.remove('grey')
        }
        buttonList2[2].classList.add('grey')
    }
    if (editPicks.scrollLeft >= widthTotal * 2) {
        for (const b of buttonList2) {
            b.classList.remove('grey')
        }
        buttonList2[3].classList.add('grey')
    }
})

