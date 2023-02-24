
const db = require('../models/index')

let addNSX = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.Nsx.create({
                maNsx: data.maNsx,
                tenNsx: data.tenNsx,
                linkImg: data.linkImg,
                maTb: data.maTb
            })
            resolve({
                error: 0,
                mes: 'Success'
            })
        } catch (e) {
            console.log(e)
            reject({
                error: 1,
                mes: 'Error from server'
            })
        }
    })
}
let getLoaiSp = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.loaisp.findAll({
                attributes: ['maTb', 'tenTb']
            });
            resolve(data)
        } catch (e) {
            reject({
                mes: "Error from server",
                errCode: 1
            })
        }
    })
}
let getAllNsxDTDD = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Nsx.findAll({
                where: { maTb: "DTDD" }
            });
            resolve(data)
        } catch (e) {
            reject({
                mes: "Error from server",
                errCode: 1
            })
        }
    })
}

module.exports = {
    addNSX,
    getLoaiSp,
    getAllNsxDTDD
}