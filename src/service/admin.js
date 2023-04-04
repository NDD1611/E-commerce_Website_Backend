const db = require('../models/index')

class adminService {

    getLoaiSp() {
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

    getAllMaSpDTDD() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.sanpham.findAll();
                resolve(data)
            } catch (e) {
                reject({
                    mes: "Error from server",
                    errCode: 1
                })
                console.log(e)
            }
        })
    }

    async addNewSanPham(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let sp = await db.sanpham.findOne({ where: { maSp: data.maSp } })
                if (sp) {
                    resolve({
                        error: 1,
                        mes: 'Product is exist'
                    })
                } else {
                    await db.sanpham.create(data)
                    resolve({
                        error: 0,
                        mes: 'Success'
                    })
                }
            } catch (e) {
                console.log(e)
                reject({
                    error: 1,
                    mes: 'Error from server'
                })
            }
        })
    }

    async addNewPhienBan(data) {
        return new Promise(async (resolve, reject) => {
            try {
                let sp = await db.phienban.findOne({
                    where: {
                        maSp: data.maSp,
                        Ram: data.Ram,
                        Rom: data.Rom
                    }
                })
                if (sp) {
                    resolve({
                        error: 1,
                        mes: 'Product is exist'
                    })
                } else {
                    await db.phienban.create(data)
                    resolve({
                        error: 0,
                        mes: 'Success'
                    })
                }
            } catch (e) {
                console.log(e)
                reject({
                    error: 1,
                    mes: 'Error from server'
                })
            }
        })
    }

    getAllPhienBanDTDD(maSp) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.phienban.findAll({
                    where: { maSp: maSp.maSp }
                })
                resolve({
                    errCode: 0,
                    data: data
                })
            } catch (e) {
                reject({
                    mes: "Error from server",
                    errCode: 1
                })
                console.log(e)
            }
        })
    }
}

module.exports = adminService