
const admin = require('../controller/adminController.js')


let initWebRoutes = (app) => {
    app.get("/", (req, res) => {
        res.json("from server")
    })

    app.post("/admin/addnsx", admin.addNSX)
    app.get("/get_all_loai_sp", admin.getLoaiSp)
    app.get("/get_all_nsx_dtdd", admin.getAllNsxDTDD)
}

module.exports = initWebRoutes;