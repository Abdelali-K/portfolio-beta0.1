
const sections = document.querySelectorAll('.section')
const sectItems = document.querySelectorAll('.navlist')
const sectItm = document.querySelectorAll('.item')
const intBody = document.querySelector('.main-content')

function pageTransitions() {
    // Button click active class

    for(let i = 0; i < sectItm.length; i++) {
        sectItm[i].addEventListener('click', function() {
            let currentItm = document.querySelectorAll('.active-itm')
            currentItm[0].className = currentItm[0].className.replace('active-itm', '')
            this.className += ' active-itm'
        })
    }
    // Sections toggle active class

    intBody.addEventListener('click', (event) => {
        // console.log(event.target)
        const id = event.target.dataset.id
        if(id) {
            // remove selected from the other item
            
            // sectItems.forEach((item) => {
            //     item.classList.remove('active-itm')
            // })
            // event.target.classList.add('active-itm')
            
            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active')
            })

            const element = document.getElementById(id)
            element.classList.add('active')
        }

        // Toggle theme 
        const themeBtn = document.querySelector('.theme-btn')
        themeBtn.addEventListener('click', () => {
            let element = document.body 
            element.classList.toggle('light-mode')
        })
    })
}
pageTransitions()

// $('.navlist li a').on('click', function () {
//     $('.navlist li a.active-itm').removeClass('active-itm')
//     $(this).addClass('active-itm')
// })
