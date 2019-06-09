require('./node_modules/bootstrap/dist/css/bootstrap.min.css')
require('bootstrap')


const routes = require('./app/routes')

;

(function() {
    const mainContent = document.querySelector('.id')
    window.addEventListener('hashchange', showView);
    showView();

    async function showView() {
        let [view, ...params] = window.location.hash.split('/')
        view = view.substring(1)
        let viewTemplate = routes[view]

        if (viewTemplate) {
            try {
                mainContent.innerHTML = await viewTemplate.view.apply(null, params)
                await viewTemplate.script()
            } catch(err) {
                
            }
        }
    }
})()


