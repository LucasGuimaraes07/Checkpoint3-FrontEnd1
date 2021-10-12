window.onscroll = () => {
    hideHeader()
}

hideHeader = () => {    
    if (document.documentElement.scrollTop > 100) {
        document.getElementById('header').style.backgroundColor = '#242633'
    } else {        
        document.getElementById('header').style.backgroundColor = '#24263365'
    }
}