// "Load" Animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show')
        }
    })
})


const hiddenElments = document.querySelectorAll(".hidden , .hiddenFromLeft , .hiddenFromRight")

hiddenElments.forEach((el) => observer.observe(el))




// Navigation
const divs = document.querySelectorAll('#IntroDiv,#AboutMeDiv,#ContactMeDiv,#ProjectsDiv')



divs[0]['name'] = 'Intro'
divs[1]['name'] = 'About Me'
divs[2]['name'] = 'Contact Me'
divs[3]['name'] = 'Projects'

let nearestDivIndex = 0

let nearestDiv

const fadeDown = document.querySelector('#fadeDown')

const fadeUp =  document.querySelector('#fadeUp')

const NavigationIndicator = document.querySelector('#NavigationIndicator')

fadeUp.style.opacity = 0

window.addEventListener('scroll', (ev) => {
    
    let nearestDistance = 9999999

    for (let i = divs.length - 1; i >= 0; i--){
        const div = divs[i];
        
        let distanceToDiv = Math.abs(div.offsetTop - window.scrollY)
       

        if ( distanceToDiv < nearestDistance ){
            nearestDistance = distanceToDiv
            nearestDiv = divs[i]
            nearestDivIndex = i
      
        }
    }

    if(nearestDivIndex == 0){
        NavigatorIndicatorUp.innerHTML= '&nbsp;'
        fadeUp.style.opacity = 0
        NavigationIndicator.children[3].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[1].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[2].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[0].children[1].src = 'imgs/svgs/Navigator/Navigation Current Indicator.webp'
        
    }else{
        NavigatorIndicatorUp.innerHTML =  divs[nearestDivIndex - 1]['name']
        fadeUp.style.opacity = 1
        NavigationIndicator.children[0].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[1].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[2].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[nearestDivIndex].children[1].src = 'imgs/svgs/Navigator/Navigation Current Indicator.svg'
    }
    
    if(nearestDivIndex == 3){
        NavigatorIndicatorDown.innerHTML = '&nbsp;'
        fadeDown.style.opacity = 0
        NavigationIndicator.children[0].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[1].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[2].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[3].children[1].src = 'imgs/svgs/Navigator/Navigation Current Indicator.webp'
    }else{
        NavigatorIndicatorDown.innerHTML = divs[nearestDivIndex + 1]['name']
        fadeDown.style.opacity = 1
        
        
        NavigationIndicator.children[0].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[1].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[2].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[3].children[1].src = 'imgs/svgs/Navigator/Navigation Indicator.webp'
        NavigationIndicator.children[nearestDivIndex].children[1].src = 'imgs/svgs/Navigator/Navigation Current Indicator.svg'
        
        
        
    }
})



NavigationIndicator.children[0].children[0].addEventListener('click',()=>{
    window.scrollTo({top: divs[0].offsetTop, behavior: "smooth"})
})
NavigationIndicator.children[1].children[0].addEventListener('click',()=>{
    window.scrollTo({top: divs[1].offsetTop, behavior: "smooth"})
})
NavigationIndicator.children[2].children[0].addEventListener('click',()=>{
    window.scrollTo({top: divs[2].offsetTop, behavior: "smooth"})
})
NavigationIndicator.children[3].children[0].addEventListener('click',()=>{
    window.scrollTo({top: divs[3].offsetTop, behavior: "smooth"})
})




const NavigatorIndicatorDown = document.querySelector("#NavigatorIndicatorDown")

const navigatorDownButton = document.querySelector('#NavigatorDown')

const NavigatorIndicatorUp = document.querySelector("#NavigatorIndicatorUp")

const navigatorUpButton = document.querySelector('#NavigatorUp')

navigatorDownButton.addEventListener('click', ( event )=> {
    
    window.scrollTo({top: divs[nearestDivIndex + 1].offsetTop, behavior: "smooth"})
   

})

navigatorUpButton.addEventListener('click', ( event )=> {
    
    window.scrollTo({top: divs[nearestDivIndex - 1 ]?.offsetTop, behavior: "smooth"})

})

//Bounce Animation
const Stars = document.querySelectorAll('.star')
Stars.forEach(star => {
    star.addEventListener('mouseover', () => {

        if(!star.classList.contains('bounce')){
            star.classList.add('bounce')
            setTimeout(() => { star.classList.remove('bounce') }, 1000)
        }
    })
    
});

