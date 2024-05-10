    const navlinks = document.querySelector('.nav-links')
    function onToggleMenu(e){
        console.log(e?.name)
        e.name = e.name === 'menu' ? 'close' : 'menu'
        navlinks.classList.toggle('invisible')
    }
