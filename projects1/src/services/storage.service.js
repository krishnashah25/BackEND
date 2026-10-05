const ImageKit = require("@imagekit/nodejs");

const imagekit = new ImageKit({
    privateKey: "private_z6c9VS9DB2Vd0tCdGKxb8qv/PMM=" // This is the default and can be omitted
});

async function uploadfile(buffer) {
    
    const result = await imagekit.files.upload({
        file: buffer.toString('base64'),
        fileName : "image.jpg"
    })
    return result
}

module.exports = uploadfile
