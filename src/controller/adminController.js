
const adminService = require('../service/adminService.js')

let addNSX = async (req, res) => {
    try {
        let result = await adminService.addNSX(req.body)
        res.json(result)
    } catch (e) {
        console.log("erre controller addNSX")
    }
}

let getLoaiSp = async (req, res) => {
    try {
        let result = await adminService.getLoaiSp()
        res.json(result)
    } catch (e) {
        console.log("erre controller getLoaiSp")
    }
}


let getAllNsxDTDD = async (req, res) => {
    try {
        let result = await adminService.getAllNsxDTDD()
        // console.log(result)
        res.json(result)
    } catch (e) {
        console.log("erre controller getAllNsxDTDD")
    }
}
let getAllMaSpDTDD = async (req, res) => {
    try {
        let result = await adminService.getAllMaSpDTDD()
        // console.log(result)
        res.json(result)
    } catch (e) {
        console.log("err controller getAllMaSpDTDD")
    }
}

let addNewSanPham = async (req, res) => {
    try {
        let result = await adminService.addNewSanPham(req.body)
        res.json(result)
    } catch (e) {

        console.log(e, "err controller addNewSanPham")
    }
}

let addNewPhienBan = async (req, res) => {
    try {
        let result = await adminService.addNewPhienBan(req.body)
        res.json(result)
    } catch (e) {

        console.log(e, "err controller addNewPhienBan")
    }
}

let getAllPhienBanDTDD = async (req, res) => {
    try {
        let result = await adminService.getAllPhienBanDTDD(req.body)
        // console.log(result)
        res.json(result)
    } catch (e) {
        console.log("err controller getAllPhienBanDTDD")
    }
}

let getAllPhienBanDayDu = async (req, res) => {
    try {
        let listPhienBanDayDu = []
        let listSp = await adminService.getAllMaSpDTDD()
        for (let i = 0; i < listSp.length; i++) {
            let listPhienBan = await adminService.getAllPhienBanDTDD({ maSp: listSp[i].maSp })
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
module.exports = {
    addNSX,
    getLoaiSp,
    getAllNsxDTDD,
    getAllMaSpDTDD,
    addNewSanPham,
    addNewPhienBan,
    getAllPhienBanDTDD,
    getAllPhienBanDayDu
}