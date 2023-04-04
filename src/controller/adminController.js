
const adminService = require('../service/admin')

let getAllPhienBanDayDu = async (req, res) => {
    try {
        let service = new adminService()
        let listPhienBanDayDu = []
        let listSp = await service.getAllMaSpDTDD()
        for (let i = 0; i < listSp.length; i++) {
            let listPhienBan = await service.getAllPhienBanDTDD({ maSp: listSp[i].maSp })
            listPhienBan = listPhienBan.data
            for (let j = 0; j < listPhienBan.length; j++) {
                let phienBanDayDu = {
                    ...listSp[i],
                    ...listPhienBan[j],
                }
                listPhienBanDayDu.push(phienBanDayDu)
            }
        }
        res.json(listPhienBanDayDu)
    } catch (e) {
        console.log("err controller getAllPhienBanDTDD")
    }
}
let getLoaiSp = async (req, res) => {
    try {
        let service = new adminService()
        let result = await service.getLoaiSp()
        res.json(result)
    } catch (e) {
        console.log("erre controller getLoaiSp")
    }
}

let getAllMaSpDTDD = async (req, res) => {
    try {
        let service = new adminService()
        let result = await service.getAllMaSpDTDD()
        // console.log(result)
        res.json(result)
    } catch (e) {
        console.log("err controller getAllMaSpDTDD")
    }
}

let addNewSanPham = async (req, res) => {
    try {

        let service = new adminService()
        let result = await service.addNewSanPham(req.body)
        res.json(result)
    } catch (e) {

        console.log(e, "err controller addNewSanPham")
    }
}

let addNewPhienBan = async (req, res) => {
    try {

        let service = new adminService()
        let result = await service.addNewPhienBan(req.body)
        res.json(result)
    } catch (e) {

        console.log(e, "err controller addNewPhienBan")
    }
}

let getAllPhienBanDTDD = async (req, res) => {
    try {
        let service = new adminService()
        let result = await service.getAllPhienBanDTDD(req.body)
        // console.log(result)
        res.json(result)
    } catch (e) {
        console.log("err controller getAllPhienBanDTDD")
    }
}

module.exports = {
    getLoaiSp,
    getAllMaSpDTDD,
    addNewSanPham,
    addNewPhienBan,
    getAllPhienBanDTDD,
    getAllPhienBanDayDu
}