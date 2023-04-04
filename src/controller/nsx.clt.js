
const adminService = require('../service/admin')
const Nsx = require('../service/nsx.sv')

let addNSX = async (req, res) => {
    try {
        let service = new Nsx()
        let result = await service.addNSX(req.body)
        res.json(result)
    } catch (e) {
        console.log("erre controller addNSX")
    }
}

let getAllNsxDTDD = async (req, res) => {
    try {
        let service = new Nsx()
        let result = await service.getAllNsxDTDD()
        res.json(result)
    } catch (e) {
        console.log("erre controller getAllNsxDTDD", e)
    }
}

let deleteNSX = async (req, res) => {
    try {
        let service = new Nsx()
        let result = await service.deleteNsx(req.body.maNsx)
        res.json(result)
    } catch (e) {
        console.log("erre controller deleteNsx", e)
    }
}
module.exports = {
    addNSX,
    getAllNsxDTDD,
    deleteNSX
}