const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

// Free apikey
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

// setting 
global.autoread = true // auto read pesan / message
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = true //status auto mengetik (auto typing)
global.available = true //status online (online)

// Other
global.botname = "One Bot" //namabot kalian
global.ownername = "𝖣𝖺𝗏𝗂𝖽" //nama kalian
global.myweb ="https://s.id/lordBot" //bebas asal jan hapus
global.youtube = "https://www.youtube.com/channel/UCVSEzfCh6VYL3g9ixHnSqXQ" //bebas asal jan hapus
global.github = "https://saipulanuar.github.io/" //bebas
global.email = "davidpangrib001@gmail.com" //bebas
global.region = "Inggris" //bebas
global.ownernomer = "6282160268332" // nomor wa kalian
global.ownernomerr = "+6282160268332" //nmr wa kalian
global.thumbnail = "./image/lol.jpg" // ini lol.jpg adalah nama foto di folder image. untuk foto bot
global.donasi = "./image/donasi.jpg" // foto donasi di folder image
global.background_welcome= "https://telegra.ph/file/21a9ebfc9c9348260272f.jpg" // maks size 30kb, agar welcome image nya tdk delay
global.owner = ["6282128475388","0","6282160268332"] //ganti agar fitur owner bisa di gunakan
global.packname = '' //sticker wm ubah
global.author = '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@david.png\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n' //sticker wm ganti nama kalian
global.sessionName = 'sesimd'
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    sukses: '*Siap ngab..*',
    admin: '*Lu admin ? 🤨*',
    botAdmin: '*Bot Bukan Admin 🙃*',
    owner: '*Ini untuk onwer gua anak ngen......* 😡',
    group: '*Fitur khusus grup* 🙄',
    private: '*Fitur khusus privat chat* 🙄',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf, Saat Ini Belum Support Sticker Gif',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner',
	example1: 'Hai beban grup alias @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
