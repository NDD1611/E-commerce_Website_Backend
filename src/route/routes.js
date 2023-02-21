


let initWebRoutes = (app) => {
    app.get("/", (req, res) => {
        res.json("from server")
    })
}

module.exports = initWebRoutes;