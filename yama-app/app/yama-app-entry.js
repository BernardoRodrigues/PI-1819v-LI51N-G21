require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

// const headerTemplate = require('./templates/header.hbs')
const routes = require('./routes')

;

(function() {
    const mainContent = document.getElementById('main-content')
    const header = document.getElementById('nav-content')
    const content = document.querySelector('.main-content')
          //?

    window.onhashchange = showView
    window.onload = showView
    console.log('entered yama-app-entry')
   
    //showView();
    showHeader();

    async function showHeader() {
        console.log("header")
        console.log(document.cookie)

        const decodedCookies = document.cookie.split(";")
        console.log({cookies: decodedCookies})
        let username;
        let playlistsId;
        decodedCookies.forEach(element => {
            console.log(element)
            if (element.includes("username")) {
                username = element.split("=")[1]
            } else if (element.includes("playlistsId")) {
                playlistsId = element.split("=")[1]
            }
        });
        header.innerHTML = await routes.header.view({username: username, playlistsId: playlistsId})
        await routes.header.script()
    }

    async function showView() {
        console.log("show view")
        let [view, ...params] = window.location.hash.split('/')
        view = view.substring(1)
        let viewTemplate = routes[view]
        console.log(viewTemplate)
        if (viewTemplate) {
            try {
                mainContent.innerHTML = await viewTemplate.view.apply(null, params)
                await viewTemplate.script()
                
            } catch(err) {
                console.log(viewTemplate)
                console.log(err)
                window.location.hash = '#welcome'
            }
        } else {
            console.log(`View Template undefined. View value: ${view}`)
            window.location.hash = '#welcome'
        }
    }
})()


