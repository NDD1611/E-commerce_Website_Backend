const db = require('../models/index')

class Nsx {
    async addNSX(data) {
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

    getAllNsxDTDD() {
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

    deleteNsx(maNsx) {
        return new Promise(async (resolve, reject) => {
            try {
                await db.Nsx.destroy({
                    where: {
                        maNsx: maNsx
                    },
                    force: true
                });
                resolve({
                    errcode: 0,
                    mes: "delete success"
                })
            } catch (e) {
                reject({
                    mes: "Error from server",
                    errCode: 1
                })
            }
        })
    }
}

module.exports = Nsx