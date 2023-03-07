
const admin = require('../controller/adminController.js')


let initWebRoutes = (app) => {
    app.get("/", (req, res) => {
        res.json("from server")
    })

    app.post("/admin/addnsx", admin.addNSX)
    app.post("/admin/addnewsanpham", admin.addNewSanPham)
    app.post("/admin/addnewphienban", admin.addNewPhienBan)
    app.get("/get_all_loai_sp", admin.getLoaiSp)
    app.get("/get_all_nsx_dtdd", admin.getAllNsxDTDD)
    app.get("/get_all_masp_dtdd", admin.getAllMaSpDTDD)
    app.post("/get_all_phien_ban_bang_ma_san_pham", admin.getAllPhienBanDTDD)
    app.get("/get_all_phien_ban_day_du", admin.getAllPhienBanDayDu)
}

module.exports = initWebRoutes;