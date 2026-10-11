const {imageKit} = require("@imagekit/nodejs")

const imageKitClient = new ImageKit({
    PublicKey : process.env.IMAGEKIT_PRIVATE_KEY
})

async function uploadFile(file) {
    const result = await imageKitClient.files.upload({
        file,
        fileName : "music_"+ Date.now(),
        folder : "project3-backend/music"
    })

    return result
}

module.exports = {uploadFile}