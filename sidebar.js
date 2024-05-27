const closer = document.querySelector('.closer')
const closerIcon = document.querySelector('.chevron')
const sidebar = document.querySelector('.sidebar')
const welcomeText = document.querySelector('.text')
const textSpans = document.querySelectorAll('span')
const moonIcon = document.querySelector('.fa-moon')
const hr = document.querySelector('.hr')
const input = document.querySelector('input')
const lastPart = document.querySelector('.lastPart')
const logoutIcon = document.querySelector('.logoutIcon')
const darkMood= document.querySelector('.darkMood')
const secondPart = document.querySelector('.secondPart')
const onofSwitch = document.querySelector('.switch')
const indicator = document.querySelector('.indicator')
const text1s = document.querySelectorAll('.text1')
const itags = document.querySelectorAll('i')

closer.addEventListener('click', () => {
    sidebar.classList.toggle('shrink')
    welcomeText.classList.toggle('hideText')
    textSpans.forEach(span=>{
        span.classList.toggle('hideText')


    })

    // moonIcon.classList.toggle('hideText')
    input.classList.toggle('hideText')
    hr.classList.toggle('hrVisibility')
    


    if(sidebar.classList.contains('shrink')){

        closer.style.left = '90px'
        lastPart.style.padding = '10px'
        logoutIcon.style.paddingLeft = '20px'    
        moonIcon.style.display = 'none';
        hr.style.display = 'none'
        secondPart.style.paddingBottom = '44px'


 
    } else {
        closer.style.left = '280px'
        moonIcon.style.display = 'inline-block';
    }
    

})


onofSwitch.addEventListener('click',() => {
    sidebar.classList.toggle('dark');
    textSpans.forEach(span =>{
        span.classList.toggle('textWhite')
    })
    text1s.forEach(text1 => {
        text1.classList.toggle('textWhite')
    
    })


    itags.forEach(itag => {
       itag.classList.toggle('textWhite')
    })
    indicator.classList.toggle('dark')
    input.classList.toggle('dark')
    input.classList.toggle('textWhite')



    if (indicator.style.backgroundColor === 'black') {
        indicator.style.backgroundColor = 'white';
    } else {
        indicator.style.backgroundColor = 'black';
    }


})




