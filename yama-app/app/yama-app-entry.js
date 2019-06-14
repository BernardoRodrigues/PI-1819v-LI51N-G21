require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')

// const headerTemplate = require('./templates/header.hbs')
const routes = require('./routes')

;

(function() {
    const mainContent = document.getElementById('main-content')
    const header = document.getElementById('nav-content')
          //?
    window.addEventListener('hashchange', showView);
    showView();
    showHeader();

    async function showHeader() {
        console.log("header")
        const decodedCookies = decodeURIComponent(document.cookie).split(";")
        let username;
        let playlistsId;
        decodedCookies.forEach(element => {
            if (element.includes("username")) {
                username = element.split("=")[1]
            } else if (element.includes("playlistsId")) {
                playlistsId = element.split("=")[1]
            }
        });
        header.innerHTML = await routes.header.view.apply(null, {username: username, playlistsId: playlistsId})
    }

    async function showView() {
        console.log("show view")
        let [view, ...params] = window.location.hash.split('/')
        view = view.substring(1)
        let viewTemplate = routes[view]

        if (viewTemplate) {
            try {
                mainContent.innerHTML = await viewTemplate.view.apply(null, params)
                await viewTemplate.script()
            } catch(err) {
                alert('error')
            }
        } 
    }
})()


