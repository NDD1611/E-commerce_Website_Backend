
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


module.exports = {
    addNSX,
    getLoaiSp,
    getAllNsxDTDD
}