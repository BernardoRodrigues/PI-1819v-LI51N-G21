module.exports = function (service, router) {

    const User = require('./model/user-model')

    router.post('/login', loginUser)
    router.post('/logout', logoutUser)
    router.post('/sign-up', signInUser)

    function signInUser(req, res) {
        const user = User.init(req.body.username, req.body.password)
        try {
            return service
                .signInUser(user)
                .then(result => {
                    req.login(user, (err) => handleError(err, res))
                    res.cookie("username", result.username)
                    res.cookie("playlistsId", result.playlistsListId)
                    res.cookie("userId", result.id)
                })
                .then(_ => response({
                    result: {
                        message: "sign in successful"
                    },
                    resp: res,
                    status: 200
                }))
                .catch(err => handleError(err, res))
        } catch (err) {
            handleError(err, res)
        }
    }

    function logoutUser(req, res) {
        if (req.isAuthenticated()) {
            req.logout()
            response({
                result: {
                    message: "logout successfully"
                },
                resp: res,
                status: 200
            })
        }
    }

    function loginUser(req, res) {
        const user = User.init(req.user.username, req.user.password)
        try {
            return service
                .validateLogin(user)
                .then(result => checkLoginResult(result, user, req, res))
                .catch((err) => handleError(err, res))
        } catch (err) {
            handleError(err, res)
        }
    }

    function handleError(err, resp) {
        response({
            result: {
                message: err.message,
                statusCode: err.statusCode
            },
            resp,
            status: err.statusCode || 500
        })
    }

    function checkLoginResult(result, user, req, res) {
        let status;
        let message;
        if (result) {
            req.login(user, (err) => handleError(err, res))
            message = "login successful"
            status = 200
            req.login(user, (err) => handleError(err, res))
            res.cookie("username", result.username)
            res.cookie("playlistsId", result.playlistsListId)
        } else {
            message = "login failed"
            status = 400
        }
        response({
            result: {
                message: message
            },
            resp: res,
            status: status
        })
    }


    function response({
        result,
        res,
        status
    }) {
        res
            .status(status)
            .type('json')
            .end(JSON.stringify(result))
    }


    return router

}