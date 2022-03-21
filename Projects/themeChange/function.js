function toggleTheme(){
    //querryselector brukes til å retunere verdien i dokumenet. i denne sammenheng 
     const sunMoonContainer = document.querySelector('.sun-moon-container')
    document.body.classList.toggle('dark')
     const currentRotation = parseInt(getComputedStyle(sunMoonContainer).getPropertyValue('--rotation'))
     sunMoonContainer.style.setProperty('--rotation', currentRotation + 180)
}

