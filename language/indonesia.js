exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat`
	}
exports.wait = () => {
    return `⏳ Memproses..`
}
exports.ok = () => {
    return `✅ Selesai..`
}

exports.err = () => {
    return `⚠️ Fitur Sedang Error`
}
exports.erorLink = () => {
    return `⚠️ Link error`
}
exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download`
}
exports.replyImg = (prefix, command) => {
    return `Kirim/Reply Foto Dengan Caption ${prefix + command}`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*.`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus Owner`
}

exports.doneOwner = () => {
    return `✅  ️Sudah selesai, Owner ~`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!`
}

exports.nhFalse = () => {
    return `Kode tidak valid!`
}

exports.listBlock = (blockNumber) => {
    return `*── 「 HALL OF SHAME 」 ──*
    
Total diblokir: *${blockNumber.length}* user\n`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin! ❎`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!`
}
exports.menunya = (salam, pushname, botname) =>{
	return`Indonesia : Hai kak ${pushname} 👋 Selamat ${salam} , 
  Ketuk button *List Command* Untuk Menampilkan Fitur-Fitur Bot, kalau button tidak ada ketik *.command*
  English : Hi, ${pushname} 👋, Have a nice day.. Tap the *List Command* Button to display the Bot's features.  If you are using WhatsApp Mod, type *.command* to display the bot features. Thank you.
Note : Fitur Download Instagram Error
`
}
exports.listMenu = (time, salam, pushname, prefix) => {
    return `*Selamat ${salam} ${pushname}*
*⌚ Jam : ${time}*
*📚 List-Menu One Bot :*

┏━━━ꕥ 「 Bot Info 」 
┃✾ ${prefix}owner
┃✾ ${prefix}rules
┃✾ ${prefix}sc
┃✾ ${prefix}ping
┃✾ ${prefix}runtime
┃✾ ${prefix}botstatus
┗━ꕥ ${prefix}donate


┏━━━ꕥ 「 Owner 」 
┃✾ < evaluate
┃✾ > evaluate
┃✾ $ exec
┃✾ => exec
┃✾ ${prefix}setmenu [query]
┃✾ ${prefix}setmenu templateLocation
┃✾ ${prefix}setmenu templateTenor
┃✾ ${prefix}setmenu katalog
┃✾ ${prefix}setmenu katalog2
┃✾ ${prefix}setmenu list
┃✾ ${prefix}setwm packname|author
┃✾ ${prefix}sendsesi
┃✾ ${prefix}listpc
┃✾ ${prefix}listgc
┃✾ ${prefix}broadcast [text]
┃✾ ${prefix}bc [text]
┃✾ ${prefix}bcgc [text]
┃✾ ${prefix}nsfw [on/off]
┃✾ ${prefix}autorespond [on/off]
┃✾ ${prefix}antiviewonce [on/off]
┃✾ ${prefix}join [link]
┃✾ ${prefix}self
┃✾ ${prefix}public [only bot]
┃✾ ${prefix}del [reply pesan bot]
┗━ꕥ ${prefix}setppbot [reply image]


┏━━━ꕥ 「 Database 」 
┃✾ ${prefix}setcmd [reply stiker]
┃✾ ${prefix}delcmd [reply stiker]
┃✾ ${prefix}listcmd
┃✾ ${prefix}absen
┃✾ ${prefix}cekabsen
┃✾ ${prefix}deleteabsen
┃✾ ${prefix}absenstart
┃✾ ${prefix}addmsg [nama file]
┃✾ ${prefix}getmsg [nama file]
┃✾ ${prefix}listmsg
┗━ꕥ ${prefix}delmsg [nama file]


┏━━━ꕥ 「 Group 」 
┃✾ ${prefix}listonline
┃✾ ${prefix}sider
┃✾ ${prefix}wm packname|author
┃✾ ${prefix}infochat
┃✾ ${prefix}setdesk [text]
┃✾ ${prefix}setppgrup [reply image]
┃✾ ${prefix}antilink [on/off]
┃✾ ${prefix}revoke
┃✾ ${prefix}leave
┃✾ ${prefix}add [62***]
┃✾ ${prefix}kick @tag
┃✾ ${prefix}leave
┃✾ ${prefix}linkgc
┃✾ ${prefix}take packname|author
┃✾ ${prefix}group [open/close]
┃✾ ${prefix}tagall [text]
┗━ꕥ ${prefix}hidetag [text]

┏━━━ꕥ 「 Anime 」 
┃✾ ${prefix}quotesanime
┃✾ ${prefix}anime [query]
┃✾ ${prefix}manga [query]
┗━ꕥ ${prefix}character [query]

┏━━━ꕥ 「 Tag 」 
┃✾ ${prefix}stickertag
┃✾ ${prefix}videotag [query]
┃✾ ${prefix}vntag [query]
┗━ꕥ ${prefix}imagetag [query]

┏━━━ꕥ 「 Stalking 」 
┃✾ ${prefix}igstalk [username]
┃✾ ${prefix}ghstalk [username]
┗━ꕥ ${prefix}ytstalk [channel]


┏━━━ꕥ 「 Search 」 
┃✾ ${prefix}ytsearch [query]
┃✾ ${prefix}wallpaper [query]
┃✾ ${prefix}wikimedia [query]
┃✾ ${prefix}hentai
┃✾ ${prefix}wattpad [query]
┃✾ ${prefix}webtoons [query]
┃✾ ${prefix}drakor [query]
┗━ꕥ ${prefix}pinterest [query]


┏━━━ꕥ 「 Converter 」
┃✾ ${prefix}toaudio [video]
┃✾ ${prefix}tomp3 [video]
┃✾ ${prefix}tovn [video]
┃✾ ${prefix}stiker [reply image]
┃✾ ${prefix}tourl [image/video/stiker]
┃✾ ${prefix}togif [sticker]
┃✾ ${prefix}tomp4 [sticker]
┗━ꕥ${prefix}toimg [reply sticker]


┏━━━ꕥ 「 Image Effect 」 
┃✾ ${prefix}wanted [reply image/stiker]
┃✾ ${prefix}utatoo [reply image/stiker]
┃✾ ${prefix}unsharpen [reply image/stiker]
┃✾ ${prefix}thanos [reply image/stiker]
┃✾ ${prefix}sniper [reply image/stiker]
┃✾ ${prefix}sharpen [reply image/stiker]
┃✾ ${prefix}sepia [reply image/stiker]
┃✾ ${prefix}scary [reply image/stiker]
┃✾ ${prefix}rip [reply image/stiker]
┃✾ ${prefix}redple [reply image/stiker]
┃✾ ${prefix}rejected [reply image/stiker]
┃✾ ${prefix}posterize [reply image/stiker]
┃✾ ${prefix}ps4 [reply image/stiker]
┃✾ ${prefix}pixelize [reply image/stiker]
┃✾ ${prefix}missionpassed [reply image/stiker]
┃✾ ${prefix}moustache [reply image/stiker]
┃✾ ${prefix}lookwhatkarenhave [reply image/stiker]
┃✾ ${prefix}jail [reply image/stiker]
┃✾ ${prefix}invert [reply image/stiker]
┃✾ ${prefix}instagram [reply image/stiker]
┃✾ ${prefix}greyscale [reply image/stiker]
┃✾ ${prefix}glitch [reply image/stiker]
┃✾ ${prefix}gay [reply image/stiker]
┃✾ ${prefix}frame [reply image/stiker]
┃✾ ${prefix}fire [reply image/stiker]
┃✾ ${prefix}distort [reply image/stiker]
┃✾ ${prefix}dictator [reply image/stiker]
┃✾ ${prefix}deepfry [reply image/stiker]
┃✾ ${prefix}ddungeon [reply image/stiker]
┃✾ ${prefix}circle [reply image/stiker]
┃✾ ${prefix}challenger [reply image/stiker]
┃✾ ${prefix}burn [reply image/stiker]
┃✾ ${prefix}brazzers [reply image/stiker]
┗━ꕥ ${prefix}beautiful [reply image/stiker]


┏━━━ꕥ 「 Sticker Effect 」 
┃✾ ${prefix}jail [reply image/stiker]
┃✾ ${prefix}red [reply image/stiker]
┃✾ ${prefix}gay [reply image/stiker]
┃✾ ${prefix}bloo [reply image/stiker]
┃✾ ${prefix}blue [reply image/stiker]
┃✾ ${prefix}sepia [reply image/stiker]
┃✾ ${prefix}green [reply image/stiker]
┃✾ ${prefix}glass [reply image/stiker]
┃✾ ${prefix}invert [reply image/stiker]
┃✾ ${prefix}blurple [reply image/stiker]
┃✾ ${prefix}blurple2 [reply image/stiker]
┃✾ ${prefix}wasted [reply image/stiker]
┃✾ ${prefix}passed [reply image/stiker]
┃✾ ${prefix}triggered [reply image/stiker]
┃✾ ${prefix}comrade [reply image/stiker]
┃✾ ${prefix}greyscale [reply image/stiker]
┃✾ ${prefix}threshold [reply image/stiker]
┃✾ ${prefix}brightness [reply image/stiker]
┗━ꕥ ${prefix}invertgreyscale [reply image/stiker]


┏━━━ꕥ 「 Download 」 
┃✾ ${prefix}tiktok [link]
┃✾ ${prefix}tiktoknowm [link]
┃✾ ${prefix}tiktokwm [link]
┃✾ ${prefix}tiktokaudio [link]
┃✾ ${prefix}ytdl [link]
┃✾ ${prefix}play [query]
┃✾ ${prefix}ytmp3 [link]
┃✾ ${prefix}ytshortmp3 [link]
┃✾ ${prefix}ytmp4 [link]
┃✾ ${prefix}ytshorts [link]
┃✾ ${prefix}facebook [link]
┃✾ ${prefix}facebooksd [link]
┃✾ ${prefix}facebookhd [link]
┃✾ ${prefix}fbaudio [link]
┃✾ ${prefix}igstory [username]
┃✾ ${prefix}igdl [link]
┃✾ ${prefix}igphoto [link]
┃✾ ${prefix}igvideo [link]
┃✾ ${prefix}igreels [link]
┃✾ ${prefix}igtv [link]
┃✾ ${prefix}soundcloud [link]
┃✾ ${prefix}gitclone [link repo]
┃✾ ${prefix}gitrepo [username repo branch]
┃✾ ${prefix}mediafire [link]
┗━ꕥ ${prefix}twitter link

┏━━━ꕥ 「 Primbon 」
┃✾ ${prefix}nomorhoki 887435047326
┃✾ ${prefix}artimimpi [query]
┃✾ ${prefix}artinama [query]
┃✾ ${prefix}ramaljodoh
┃✾ ${prefix}ramaljodohbali
┃✾ ${prefix}suamiistri
┃✾ ${prefix}ramalcinta
┃✾ ${prefix}cocoknama
┃✾ ${prefix}pasangan
┃✾ ${prefix}jadiannikah
┃✾ ${prefix}sifatusaha
┃✾ ${prefix}rezeki
┃✾ ${prefix}pekerjaan
┃✾ ${prefix}nasib
┃✾ ${prefix}penyakit
┃✾ ${prefix}tarot
┃✾ ${prefix}fengshui
┃✾ ${prefix}haribaik
┃✾ ${prefix}harisangar
┃✾ ${prefix}harisial
┃✾ ${prefix}nagahari
┃✾ ${prefix}arahrezeki
┃✾ ${prefix}peruntungan
┃✾ ${prefix}weton
┃✾ ${prefix}karakter
┃✾ ${prefix}keberuntungan
┃✾ ${prefix}memancing
┃✾ ${prefix}masasubur
┃✾ ${prefix}zodiak 
┗━ꕥ ${prefix}shio [query]

┏━━━ꕥ 「 Random Anime 」
┃✾ ${prefix}loli
┃✾ ${prefix}neko
┃✾ ${prefix}waifu
┃✾ ${prefix}shinobu
┃✾ ${prefix}megumin
┃✾ ${prefix}bully
┃✾ ${prefix}cuddle
┃✾ ${prefix}cry
┃✾ ${prefix}hug
┃✾ ${prefix}awoo
┃✾ ${prefix}kiss
┃✾ ${prefix}lick
┃✾ ${prefix}pat
┃✾ ${prefix}smug
┃✾ ${prefix}bonk
┃✾ ${prefix}yeet
┃✾ ${prefix}blush
┃✾ ${prefix}smile
┃✾ ${prefix}wave
┃✾ ${prefix}highfive
┃✾ ${prefix}handhold
┃✾ ${prefix}nom
┃✾ ${prefix}bite
┃✾ ${prefix}glomp
┃✾ ${prefix}slap
┃✾ ${prefix}kill
┃✾ ${prefix}happy
┃✾ ${prefix}wink
┃✾ ${prefix}poke
┃✾ ${prefix}dance
┗━ꕥ ${prefix}cringe

┏━━━ꕥ 「 Nsfw & Sfw 」
┃✾ ${prefix}ahegao
┃✾ ${prefix}ass
┃✾ ${prefix}bdsm
┃✾ ${prefix}blowjob
┃✾ ${prefix}cuckold
┃✾ ${prefix}cum
┃✾ ${prefix}ero
┃✾ ${prefix}femdom
┃✾ ${prefix}foot
┃✾ ${prefix}gangbang
┃✾ ${prefix}glasses
┃✾ ${prefix}jahy
┃✾ ${prefix}manga
┃✾ ${prefix}masturbation
┃✾ ${prefix}neko
┃✾ ${prefix}orgy
┃✾ ${prefix}panties
┃✾ ${prefix}pussy
┃✾ ${prefix}tentacles
┃✾ ${prefix}thighs
┃✾ ${prefix}yuri
┃✾ ${prefix}feet
┃✾ ${prefix}lewdkemo
┃✾ ${prefix}woof
┃✾ ${prefix}gasm
┃✾ ${prefix}solo
┃✾ ${prefix}8ball
┃✾ ${prefix}goose
┃✾ ${prefix}avatar
┃✾ ${prefix}hololewd
┃✾ ${prefix}gecg
┃✾ ${prefix}holo
┃✾ ${prefix}fox_girl
┃✾ ${prefix}tits
┃✾ ${prefix}eroyuri
┃✾ ${prefix}holoyero
┃✾ ${prefix}lizard
┃✾ ${prefix}keta
┃✾ ${prefix}eron
┃✾ ${prefix}erok
┃✾ ${prefix}kemonomimi
┃✾ ${prefix}cum_jpg
┃✾ ${prefix}nsfw_avatar
┃✾ ${prefix}erofeet
┃✾ ${prefix}meow
┃✾ ${prefix}wallpaper
┃✾ ${prefix}waifu
┃✾ ${prefix}trap
┃✾ ${prefix}lewd
┃✾ ${prefix}pussy_jpg
┃✾ ${prefix}futanari
┃✾ ${prefix}lewdk
┃✾ ${prefix}solog
┃✾ ${prefix}smug
┃✾ ${prefix}cum
┃✾ ${prefix}slap
┃✾ ${prefix}les
┃✾ ${prefix}erokemo
┃✾ ${prefix}bj
┃✾ ${prefix}pwankg
┃✾ ${prefix}pat
┃✾ ${prefix}poke
┃✾ ${prefix}feed
┃✾ ${prefix}nsfw_neko_gif
┃✾ ${prefix}pussy
┃✾ ${prefix}feetg
┃✾ ${prefix}baka
┃✾ ${prefix}hug
┃✾ ${prefix}kiss
┃✾ ${prefix}tickle
┃✾ ${prefix}spank
┃✾ ${prefix}kuni
┃✾ ${prefix}classic
┃✾ ${prefix}boobs
┃✾ ${prefix}anal
┃✾ ${prefix}ngif
┃✾ ${prefix}cuddle
┗━ꕥ ${prefix}zettai

┏━━━ꕥ 「 Textpro Menu 」
┃✾ ${prefix}halloween2 text|text2
┃✾ ${prefix}horror text|text2
┃✾ ${prefix}game8bit text|text2
┃✾ ${prefix}layered text|text2
┃✾ ${prefix}glitch2 text|text2
┃✾ ${prefix}coolg text|text2
┃✾ ${prefix}coolwg text|text2
┃✾ ${prefix}realistic text|text2
┃✾ ${prefix}space3d text|text2
┃✾ ${prefix}gtiktok text|text2
┃✾ ${prefix}stone text|text2
┃✾ ${prefix}marvel text|text2
┃✾ ${prefix}marvel2 text|text2
┃✾ ${prefix}pornhub text|text2
┃✾ ${prefix}avengers text|text2
┃✾ ${prefix}metalr text|text2
┃✾ ${prefix}metalg text|text2
┃✾ ${prefix}metalg2 text|text2
┃✾ ${prefix}halloween2 text|text2
┃✾ ${prefix}lion text|text2
┃✾ ${prefix}wolf_bw text|text2
┃✾ ${prefix}wolf_g text|text2
┃✾ ${prefix}ninja text|text2
┃✾ ${prefix}3dsteel text|text2
┃✾ ${prefix}horror2 text|text2
┃✾ ${prefix}lava text|text2
┃✾ ${prefix}bagel text|text2
┃✾ ${prefix}blackpink text
┃✾ ${prefix}rainbow2 text
┃✾ ${prefix}water_pipe text
┃✾ ${prefix}halloween text
┃✾ ${prefix}sketch text
┃✾ ${prefix}sircuit text
┃✾ ${prefix}discovery text
┃✾ ${prefix}metallic2 text
┃✾ ${prefix}fiction text
┃✾ ${prefix}demon text
┃✾ ${prefix}transformer text
┃✾ ${prefix}berry text
┃✾ ${prefix}thunder text
┃✾ ${prefix}magma text
┃✾ ${prefix}3dstone text
┃✾ ${prefix}neon text
┃✾ ${prefix}glitch text
┃✾ ${prefix}harry_potter text
┃✾ ${prefix}embossed text
┃✾ ${prefix}broken text
┃✾ ${prefix}papercut text
┃✾ ${prefix}gradient text
┃✾ ${prefix}glossy text
┃✾ ${prefix}watercolor text
┃✾ ${prefix}multicolor text
┃✾ ${prefix}neon_devil text
┃✾ ${prefix}underwater text
┃✾ ${prefix}bear text
┃✾ ${prefix}wonderfulg text
┃✾ ${prefix}christmas text
┃✾ ${prefix}neon_light text
┃✾ ${prefix}snow text
┃✾ ${prefix}cloudsky text
┃✾ ${prefix}luxury2 text
┃✾ ${prefix}gradient2 text
┃✾ ${prefix}summer text
┃✾ ${prefix}writing text
┃✾ ${prefix}engraved text
┃✾ ${prefix}summery text
┃✾ ${prefix}3dglue text
┃✾ ${prefix}metaldark text
┃✾ ${prefix}neonlight text
┃✾ ${prefix}oscar text
┃✾ ${prefix}minion text
┃✾ ${prefix}holographic text
┃✾ ${prefix}purple text
┃✾ ${prefix}glossyb text
┃✾ ${prefix}deluxe2 text
┃✾ ${prefix}glossyc text
┃✾ ${prefix}fabric text
┃✾ ${prefix}neonc text
┃✾ ${prefix}newyear text
┃✾ ${prefix}newyear2 text
┃✾ ${prefix}metals text
┃✾ ${prefix}xmas text
┃✾ ${prefix}blood text
┃✾ ${prefix}darkg text
┃✾ ${prefix}joker text
┃✾ ${prefix}wicker text
┃✾ ${prefix}natural text
┃✾ ${prefix}firework text
┃✾ ${prefix}skeleton text
┃✾ ${prefix}balloon text
┃✾ ${prefix}balloon2 text
┃✾ ${prefix}balloon3 text
┃✾ ${prefix}balloon4 text
┃✾ ${prefix}balloon5 text
┃✾ ${prefix}balloon6 text
┃✾ ${prefix}balloon7 text
┃✾ ${prefix}steel text
┃✾ ${prefix}gloss text
┃✾ ${prefix}denim text
┃✾ ${prefix}decorate text
┃✾ ${prefix}decorate2 text
┃✾ ${prefix}peridot text
┃✾ ${prefix}rock text
┃✾ ${prefix}glass text
┃✾ ${prefix}glass2 text
┃✾ ${prefix}glass3 text
┃✾ ${prefix}glass4 text
┃✾ ${prefix}glass5 text
┃✾ ${prefix}glass6 text
┃✾ ${prefix}glass7 text
┃✾ ${prefix}glass8 text
┃✾ ${prefix}captain_as2 text
┃✾ ${prefix}robot text
┃✾ ${prefix}equalizer text
┃✾ ${prefix}toxic text
┃✾ ${prefix}sparkling text
┃✾ ${prefix}sparkling2 text
┃✾ ${prefix}sparkling3 text
┃✾ ${prefix}sparkling4 text
┃✾ ${prefix}sparkling5 text
┃✾ ${prefix}sparkling6 text
┃✾ ${prefix}sparkling7 text
┃✾ ${prefix}decorative text
┃✾ ${prefix}chocolate text
┃✾ ${prefix}strawberry text
┃✾ ${prefix}koifish text
┃✾ ${prefix}bread text
┃✾ ${prefix}matrix text
┃✾ ${prefix}blood2 text
┃✾ ${prefix}neonligth2 text
┃✾ ${prefix}thunder2 text
┃✾ ${prefix}3dbox text
┃✾ ${prefix}neon2 text
┃✾ ${prefix}roadw text
┃✾ ${prefix}bokeh text
┃✾ ${prefix}gneon text
┃✾ ${prefix}advanced text
┃✾ ${prefix}dropwater text
┃✾ ${prefix}wall text
┃✾ ${prefix}chrismast text
┃✾ ${prefix}honey text
┃✾ ${prefix}drug text
┃✾ ${prefix}marble text
┃✾ ${prefix}marble2 text
┃✾ ${prefix}ice text
┃✾ ${prefix}juice text
┃✾ ${prefix}rusty text
┃✾ ${prefix}abstra text
┃✾ ${prefix}biscuit text
┃✾ ${prefix}wood text
┃✾ ${prefix}scifi text
┃✾ ${prefix}metalr text
┃✾ ${prefix}purpleg text
┃✾ ${prefix}shiny text 
┃✾ ${prefix}jewelry text
┃✾ ${prefix}jewelry2 text
┃✾ ${prefix}jewelry3 text
┃✾ ${prefix}jewelry4 text
┃✾ ${prefix}jewelry5 text
┃✾ ${prefix}jewelry6 text
┃✾ ${prefix}jewelry7 text
┃✾ ${prefix}jewelry8 text
┃✾ ${prefix}metalh text
┃✾ ${prefix}golden text
┃✾ ${prefix}glitter text
┃✾ ${prefix}glitter2 text
┃✾ ${prefix}glitter3 text
┃✾ ${prefix}glitter4 text
┃✾ ${prefix}glitter5 text
┃✾ ${prefix}glitter6 text
┃✾ ${prefix}glitter7 text
┃✾ ${prefix}metale text
┃✾ ${prefix}carbon text
┃✾ ${prefix}candy text
┃✾ ${prefix}metalb text
┃✾ ${prefix}gemb text
┃✾ ${prefix}3dchrome text
┃✾ ${prefix}metalb2 text
┃✾ ${prefix}metalg text
┗━ꕥ ${prefix}metalg text


┏━━━ꕥ 「 Others 」
┃✾ ${prefix}afk [reason]
┃✾ ${prefix}translate kode_bahasa text
┃✾ ${prefix}kalkulator [query]
┃✾ ${prefix}smeme [text]
┃✾ ${prefix}smeme2 [text|text]
┃✾ ${prefix}memegen [text|text]
┗━ꕥ

┏━━━ꕥ 「 Game Menu 」
┃✾ ${prefix}kuismath
┃✾ ${prefix}tebak [option]
┃✾ ${prefix}tekateki
┃✾ ${prefix}susunkata
┗━ꕥ ${prefix}caklontong


┏━━━ꕥ 「 Asupan Menu 」
┃✾ ${prefix}chika
┃✾ ${prefix}delvira
┃✾ ${prefix}ayu
┃✾ ${prefix}bunga
┃✾ ${prefix}aura
┃✾ ${prefix}nisa
┃✾ ${prefix}ziva
┃✾ ${prefix}yana
┃✾ ${prefix}viona
┃✾ ${prefix}syania
┃✾ ${prefix}riri
┃✾ ${prefix}syifa
┃✾ ${prefix}mama_gina
┃✾ ${prefix}alcakenya
┃✾ ${prefix}mangayutri
┃✾ ${prefix}rikagusriani
┃✾ ${prefix}asupan
┃✾ ${prefix}bocil
┃✾ ${prefix}geayubi
┃✾ ${prefix}santuy
┃✾ ${prefix}ukhty
┗━ꕥ ${prefix}syifa

┏━━━ꕥ 「 Telegram Sticker 」
┃✾ ${prefix}awoawo
┃✾ ${prefix}benedict
┃✾ ${prefix}chat
┃✾ ${prefix}dbfly
┃✾ ${prefix}dino_kuning
┃✾ ${prefix}doge
┃✾ ${prefix}gojosatoru
┃✾ ${prefix}hope_boy
┃✾ ${prefix}jisoo
┃✾ ${prefix}kr_robot
┃✾ ${prefix}kucing
┃✾ ${prefix}lonte
┃✾ ${prefix}manusia_lidi
┃✾ ${prefix}menjamet
┃✾ ${prefix}meow
┃✾ ${prefix}nicholas
┃✾ ${prefix}patrick
┃✾ ${prefix}popoci
┃✾ ${prefix}sponsbob
┃✾ ${prefix}kawan_sponsbob
┗━ꕥ ${prefix}tyni
,
┏━━━ꕥ 「 Random Cewe 」
┃✾ ${prefix}china 
┃✾ ${prefix}indonesia 
┃✾ ${prefix}malaysia 
┃✾ ${prefix}thailand 
┃✾ ${prefix}korea 
┃✾ ${prefix}japan 
┃✾ ${prefix}vietnam 
┃✾ ${prefix}jenni 
┃✾ ${prefix}jiso 
┃✾ ${prefix}lisa  
┗━ꕥ ${prefix}rose

┏━━━ꕥ 「 TqTo 」 
┃✾ My God
┃✾ My Parents
┃✾ Fatih A.
┃✾ Ferdi
┃✾ DikaArdnt
┃✾ Mhankbarbar
┃✾ Nurutomo
┃✾ Rashid
┃✾ KingOfBear
┃✾ SaipulAnuar
┃✾ ZeeoneOfc
┃✾ Penyedia Module
┗━ꕥ And All Support
    `
}

exports.rules = (prefix) => {
    return `
╭═════〘 𝗥 𝗨 𝗟 𝗘 𝗦  𝗕 𝗢 𝗧 〙═══
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙎𝙥𝙖𝙢 𝘽𝙤𝙩 𝙠𝙖𝙧𝙚𝙣𝙖 𝘽𝙤𝙩 𝙞𝙣𝙞 𝙨𝙪𝙙𝙖𝙝 𝙢𝙚𝙢𝙞𝙡𝙞𝙠𝙞 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 𝘽𝙡𝙤𝙠𝙞𝙧 𝘽𝙖𝙜𝙞 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝘽𝙤𝙩 𝙮𝙖𝙣𝙜 𝙎𝙥𝙖𝙢
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙢𝙖𝙖𝙛 𝙟𝙞𝙠𝙖 𝙖𝙙 𝙮𝙜 𝙢𝙚𝙢𝙖𝙠𝙖𝙞 𝙢𝙚𝙣𝙪 𝙉𝙨𝙛𝙬 𝙢𝙖𝙠𝙖 𝙖𝙠𝙖𝙣 𝙙𝙞 𝙗𝙡𝙤𝙘𝙠 𝙤𝙡𝙚𝙝 𝙗𝙤𝙩, 𝙟𝙞𝙠𝙖 𝙙𝙞 𝙜𝙘 𝙩𝙤𝙡𝙤𝙣𝙜 𝙖𝙙𝙢𝙞𝙣 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙜𝙝𝙪𝙗𝙪𝙣𝙜𝙞 𝙠𝙖𝙢𝙞!!
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙈𝙚𝙣𝙚𝙡𝙥𝙤𝙣 𝘽𝙤𝙩 𝙠𝙖𝙧𝙚𝙣𝙖 𝘽𝙤𝙩 𝙞𝙣𝙞 𝙨𝙪𝙙𝙖𝙝 𝙢𝙚𝙢𝙞𝙡𝙞𝙠𝙞 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 𝘽𝙡𝙤𝙠𝙞𝙧 𝘽𝙖𝙜𝙞 𝙤𝙧𝙖𝙣𝙜 𝙮𝙖𝙣𝙜 𝙣𝙚𝙡𝙥𝙤𝙣 𝘽𝙤𝙩
⬡ 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙧𝙩𝙖𝙣𝙜𝙜𝙪𝙣𝙜 𝙟𝙖𝙬𝙖𝙗 𝙖𝙩𝙖𝙨 𝙥𝙚𝙣𝙮𝙖𝙡𝙖𝙝𝙜𝙪𝙣𝙖𝙖𝙣 𝙗𝙤𝙩
⬡ 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙧𝙩𝙖𝙣𝙜𝙜𝙪𝙣𝙜 𝙟𝙖𝙬𝙖𝙗 𝙖𝙩𝙖𝙨 𝙠𝙚𝙗𝙤𝙘𝙤𝙧𝙖𝙣 𝙙𝙖𝙩𝙖 𝙥𝙧𝙞𝙗𝙖𝙙𝙞 𝙖𝙣𝙙𝙖
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙢𝙚𝙣𝙜𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙗𝙚𝙧𝙗𝙖𝙜𝙖𝙞 𝙗𝙪𝙜, 𝙫𝙞𝙧𝙩𝙚𝙭, 𝙙𝙡𝙡 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙗𝙤𝙩.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙝𝙖𝙧𝙖𝙥 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙡𝙖𝙠𝙪𝙠𝙖𝙣 𝙨𝙥𝙖𝙢 𝙙𝙖𝙡𝙖𝙢 𝙥𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙖𝙣 𝙗𝙤𝙩.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙢𝙚𝙣𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙣𝙤𝙢𝙤𝙧 𝙗𝙤𝙩 𝙨𝙚𝙘𝙖𝙧𝙖 𝙞𝙡𝙡𝙚𝙜𝙖𝙡, 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙨𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙝𝙪𝙗𝙪𝙣𝙜𝙞 𝙤𝙬𝙣𝙚𝙧.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙝𝙖𝙧𝙖𝙥 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙣𝙮𝙖𝙡𝙖𝙝 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙛𝙞𝙩𝙪𝙧 𝙛𝙞𝙩𝙪𝙧 𝙗𝙤𝙩.
╰═════════════════════════
╭═════〘 𝗞𝗘𝗕𝗜𝗝𝗔𝗞𝗔𝗡 𝗣𝗥𝗜𝗩𝗔𝗦𝗜 〙═══
1. 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙧𝙚𝙠𝙖𝙢 𝙙𝙖𝙩𝙖 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩 𝙪𝙨𝙚𝙧.
2. 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙚𝙗𝙖𝙧𝙠𝙖𝙣 𝙣𝙤𝙢𝙤𝙧 𝙪𝙨𝙚𝙧𝙨.
3. 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙞𝙢𝙥𝙖𝙣 𝙢𝙚𝙙𝙞𝙖 𝙮𝙖𝙣𝙜 𝙙𝙞𝙠𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙤𝙡𝙚𝙝 𝙪𝙨𝙚𝙧𝙨.
4. 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙖𝙡𝙖𝙝 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙙𝙖𝙩𝙖 𝙙𝙖𝙩𝙖 𝙪𝙨𝙚𝙧𝙨.
5.  𝙆𝙖𝙢𝙞 𝙗𝙚𝙧𝙝𝙖𝙠 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙙𝙖𝙩𝙖 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩 𝙪𝙨𝙚𝙧𝙨.
6. 𝙆𝙖𝙢𝙞 𝙗𝙚𝙧𝙝𝙖𝙠 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙨𝙩𝙖𝙩𝙪𝙨 𝙪𝙨𝙚𝙧𝙨.
7. 𝙆𝙖𝙢𝙞 𝙙𝙖𝙥𝙖𝙩 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩, 𝙙𝙖𝙣 𝙢𝙚𝙙𝙞𝙖 𝙮𝙖𝙣𝙜 𝙙𝙞𝙠𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙪𝙨𝙚𝙧𝙨.
╰═════════════════════════
║╭─────❉ 〔 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧 〕 ❉─────
║│➥ *name:* 𝖮𝗇𝖾 𝖡𝗈𝗍
║│➥ *HomePage:* Private 404
║│➥ *Issue:* Private 404
║╰──────────────────
║╭─────❉〘 𝘿𝙊𝙉𝘼𝙎𝙄 〙❉───── 
║│➥ Pulsa : 082128475388
║╰──────────────────
╠════════════════════════
║╭────❉ 「 𝙎𝙊𝘾𝙄𝘼𝙇 𝙈𝙀𝘿𝙄𝘼 」 ❉─────
║│ ❍ *𝗢𝗪𝗡𝗘𝗥*          :
║│ wa.me/6282160268332
║│ ❍ *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*               :
║│ https://tinyurl.com/ya49ovfp
║│ ❍ *𝗧𝗜𝗞𝗧𝗢𝗞*                   :
║│ https://vt.tiktok.com/ZSeos3uX5/
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ ©𝗕𝗮𝘀𝗲𝗡𝗲𝘄 𝗗𝗮𝗽𝗶𝘁𝘁
║│ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝙗𝙮 𝗗𝗮𝗽𝗶𝘁𝘁👑
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ © 𝟤𝟢𝟤𝟤 𝖮𝗇𝖾 𝖡𝗈𝗍 𝖡𝗒 𝖣𝖺𝗏𝗂𝖽
║╰──────────────────
╰═════〘 𝗗𝗮𝗽𝗶𝘁𝘁 *_?_*〙 ═
`
}
exports.welcome = () =>{
	return`𝖧𝖺𝗂 𝖻𝖾𝖻𝖺𝗇.. 𝖩𝖺𝗇𝗀𝖺𝗇 𝗅𝗎𝗉𝖺 𝗂𝗇𝗍𝗋𝗈 𝗒𝖺.. 😊
	
╭ 𝖭𝖺𝗆𝖺 :
┃✾ 𝖴𝗆𝗎𝗋 :
┃✾ 𝖦𝖾𝗇𝖽𝖾𝗋 :
┃✾ 𝖠𝗌𝗄𝗈𝗍 :
┗━ꕥ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k ~
ᴶᵃⁿᵍᵃⁿ ʲᵃᵈⁱ ᵇᵉᵇᵃⁿ ᵍʳᵘᵖ ᵃⁿᵃᵏ ⁿᵍᵉⁿ`
}
exports.leave = () =>{
	return`Good Bye Beban...`
}
exports.source = () =>{
return`𝖧𝖺𝗁, 𝗌𝖼?.. 𝖽𝖾𝗌𝖺𝗁 𝖽𝗎𝗅𝗎 𝖽𝖾𝗄.. 🐦
`
}
exports.tos = (ownernomer) => {
    return `
*-------「 DONATE 」 -------*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi

Berapapun donasi kalian akan sangat berarti 👍

Thanks!

Contact person Owner:
wa.me/${ownernomer}

    `
}

exports.info = (prefix) =>{
	return`┏━━━ꕥ 「 Bot Info 」 
┃✾ ${prefix}owner
┃✾ ${prefix}rules
┃✾ ${prefix}sc
┃✾ ${prefix}ping
┃✾ ${prefix}runtime
┃✾ ${prefix}botstatus
┗━ꕥ ${prefix}donate
`}

exports.ownermenu = (prefix) =>{
return`┏━━━ꕥ 「 Owner 」 
┃✾ < evaluate
┃✾ > evaluate
┃✾ $ exec
┃✾ => exec
┃✾ ${prefix}setmenu [query]
┃✾ ${prefix}setmenu templateLocation
┃✾ ${prefix}setmenu templateTenor
┃✾ ${prefix}setmenu katalog
┃✾ ${prefix}setmenu katalog2
┃✾ ${prefix}setmenu list
┃✾ ${prefix}setwm packname|author
┃✾ ${prefix}sendsesi
┃✾ ${prefix}listpc
┃✾ ${prefix}listgc
┃✾ ${prefix}broadcast [text]
┃✾ ${prefix}bc [text]
┃✾ ${prefix}bcgc [text]
┃✾ ${prefix}nsfw [on/off]
┃✾ ${prefix}autorespond [on/off]
┃✾ ${prefix}antiviewonce [on/off]
┃✾ ${prefix}join [link]
┃✾ ${prefix}self
┃✾ ${prefix}public [only bot]
┃✾ ${prefix}del [pesan bot]
┗━ꕥ ${prefix}setppbot [reply image]
`}

exports.database = (prefix) =>{
	return`┏━━━ꕥ 「 Database 」 
┃✾ ${prefix}setcmd [reply stiker]
┃✾ ${prefix}delcmd [reply stiker]
┃✾ ${prefix}listcmd
┃✾ ${prefix}absen
┃✾ ${prefix}cekabsen
┃✾ ${prefix}deleteabsen
┃✾ ${prefix}absenstart
┃✾ ${prefix}addmsg [nama file]
┃✾ ${prefix}getmsg [nama file]
┃✾ ${prefix}listmsg
┗━ꕥ ${prefix}delmsg [nama file]
`}

exports.group = (prefix) =>{
	return`┏━━━ꕥ 「 Group 」 
┃✾ ${prefix}listonline
┃✾ ${prefix}sider
┃✾ ${prefix}wm packname|author
┃✾ ${prefix}infochat
┃✾ ${prefix}setdesk [text]
┃✾ ${prefix}setppgrup [reply image]
┃✾ ${prefix}antilink [on/off]
┃✾ ${prefix}revoke
┃✾ ${prefix}leave
┃✾ ${prefix}add [62***]
┃✾ ${prefix}kick @tag
┃✾ ${prefix}leave
┃✾ ${prefix}linkgc
┃✾ ${prefix}take packname|author
┃✾ ${prefix}group [open/close]
┃✾ ${prefix}tagall [text]
┗━ꕥ ${prefix}hidetag [text]
`}

exports.anime = (prefix) =>{
	return`┏━━━ꕥ 「 Anime 」 
┃✾ ${prefix}quotesanime
┃✾ ${prefix}anime [query]
┃✾ ${prefix}manga [query]
┗━ꕥ ${prefix}character [query]
`}

exports.tag = (prefix) =>{
	return`┏━━━ꕥ 「 Tag 」 
┃✾ ${prefix}stickertag
┃✾ ${prefix}videotag [query]
┃✾ ${prefix}vntag [query]
┗━ꕥ ${prefix}imagetag [query]
`}

exports.stalk = (prefix) =>{
	return`┏━━━ꕥ 「 Stalking 」 
┃✾ ${prefix}igstalk [username]
┃✾ ${prefix}ghstalk [username]
┗━ꕥ ${prefix}ytstalk [channel]
`}

exports.search = (prefix) =>{
	return`┏━━━ꕥ 「 Search 」 
┃✾ ${prefix}ytsearch [query]
┃✾ ${prefix}wallpaper [query]
┃✾ ${prefix}wikimedia [query]
┃✾ ${prefix}hentai
┃✾ ${prefix}wattpad [query]
┃✾ ${prefix}webtoons [query]
┃✾ ${prefix}drakor [query]
┗━ꕥ ${prefix}pinterest [query]
`}

exports.converter = (prefix) =>{
	return`┏━━━ꕥ 「 Converter 」 
┃✾ ${prefix}toaudio [video]
┃✾ ${prefix}tomp3 [video]
┃✾ ${prefix}tovn [video]
┃✾ ${prefix}stiker [reply image]
┃✾ ${prefix}tourl [image/video]
┃✾ ${prefix}togif [sticker]
┃✾ ${prefix}tomp4 [sticker]
┗━ꕥ${prefix}toimg [reply sticker]
`}

exports.effect = (prefix) =>{
	return`┏━━━ꕥ 「 Image Effect 」 
┃✾ ${prefix}wanted [reply image/stiker]
┃✾ ${prefix}utatoo [reply image/stiker]
┃✾ ${prefix}unsharpen [reply image/stiker]
┃✾ ${prefix}thanos [reply image/stiker]
┃✾ ${prefix}sniper [reply image/stiker]
┃✾ ${prefix}sharpen [reply image/stiker]
┃✾ ${prefix}sepia [reply image/stiker]
┃✾ ${prefix}scary [reply image/stiker]
┃✾ ${prefix}rip [reply image/stiker]
┃✾ ${prefix}redple [reply image/stiker]
┃✾ ${prefix}rejected [reply image/stiker]
┃✾ ${prefix}posterize [reply image/stiker]
┃✾ ${prefix}ps4 [reply image/stiker]
┃✾ ${prefix}pixelize [reply image/stiker]
┃✾ ${prefix}missionpassed [reply image/stiker]
┃✾ ${prefix}moustache [reply image/stiker]
┃✾ ${prefix}lookwhatkarenhave [reply image/stiker]
┃✾ ${prefix}jail [reply image/stiker]
┃✾ ${prefix}invert [reply image/stiker]
┃✾ ${prefix}instagram [reply image/stiker]
┃✾ ${prefix}greyscale [reply image/stiker]
┃✾ ${prefix}glitch [reply image/stiker]
┃✾ ${prefix}gay [reply image/stiker]
┃✾ ${prefix}frame [reply image/stiker]
┃✾ ${prefix}fire [reply image/stiker]
┃✾ ${prefix}distort [reply image/stiker]
┃✾ ${prefix}dictator [reply image/stiker]
┃✾ ${prefix}deepfry [reply image/stiker]
┃✾ ${prefix}ddungeon [reply image/stiker]
┃✾ ${prefix}circle [reply image/stiker]
┃✾ ${prefix}challenger [reply image/stiker]
┃✾ ${prefix}burn [reply image/stiker]
┃✾ ${prefix}brazzers [reply image/stiker]
┗━ꕥ ${prefix}beautiful [reply image/stiker]
`}

//
exports.effect2 = (prefix) =>{
	return`┏━━━ꕥ 「 Sticker Effect 」 
┃✾ ${prefix}jail [reply image/stiker]
┃✾ ${prefix}red [reply image/stiker]
┃✾ ${prefix}gay [reply image/stiker]
┃✾ ${prefix}bloo [reply image/stiker]
┃✾ ${prefix}blue [reply image/stiker]
┃✾ ${prefix}sepia [reply image/stiker]
┃✾ ${prefix}green [reply image/stiker]
┃✾ ${prefix}glass [reply image/stiker]
┃✾ ${prefix}invert [reply image/stiker]
┃✾ ${prefix}blurple [reply image/stiker]
┃✾ ${prefix}blurple2 [reply image/stiker]
┃✾ ${prefix}wasted [reply image/stiker]
┃✾ ${prefix}passed [reply image/stiker]
┃✾ ${prefix}triggered [reply image/stiker]
┃✾ ${prefix}comrade [reply image/stiker]
┃✾ ${prefix}greyscale [reply image/stiker]
┃✾ ${prefix}threshold [reply image/stiker]
┃✾ ${prefix}brightness [reply image/stiker]
┗━ꕥ ${prefix}invertgreyscale [reply image/stiker]
`
}

exports.download = (prefix) =>{
return`┏━━━ꕥ 「 Download 」 
┃✾ ${prefix}tiktok [link]
┃✾ ${prefix}tiktoknowm [link]
┃✾ ${prefix}tiktokwm [link]
┃✾ ${prefix}tiktokaudio [link]
┃✾ ${prefix}ytdl [link]
┃✾ ${prefix}play [query]
┃✾ ${prefix}ytmp3 [link]
┃✾ ${prefix}ytshortmp3 [link]
┃✾ ${prefix}ytmp4 [link]
┃✾ ${prefix}ytshorts [link]
┃✾ ${prefix}facebook [link]
┃✾ ${prefix}facebooksd [link]
┃✾ ${prefix}facebookhd [link]
┃✾ ${prefix}fbaudio [link]
┃✾ ${prefix}igstory [username]
┃✾ ${prefix}igdl [link]
┃✾ ${prefix}igphoto [link]
┃✾ ${prefix}igvideo [link]
┃✾ ${prefix}igreels [link]
┃✾ ${prefix}igtv [link]
┃✾ ${prefix}soundcloud [link]
┃✾ ${prefix}gitclone [link repo]
┃✾ ${prefix}gitrepo [username repo branch]
┃✾ ${prefix}mediafire [link]
┗━ꕥ ${prefix}twitter link
`
}

exports.ranime = (prefix) =>{
	return`┏━━━ꕥ 「 Random Anime 」
┃✾ ${prefix}loli
┃✾ ${prefix}neko
┃✾ ${prefix}waifu
┃✾ ${prefix}shinobu
┃✾ ${prefix}megumin
┃✾ ${prefix}bully
┃✾ ${prefix}cuddle
┃✾ ${prefix}cry
┃✾ ${prefix}hug
┃✾ ${prefix}awoo
┃✾ ${prefix}kiss
┃✾ ${prefix}lick
┃✾ ${prefix}pat
┃✾ ${prefix}smug
┃✾ ${prefix}bonk
┃✾ ${prefix}yeet
┃✾ ${prefix}blush
┃✾ ${prefix}smile
┃✾ ${prefix}wave
┃✾ ${prefix}highfive
┃✾ ${prefix}handhold
┃✾ ${prefix}nom
┃✾ ${prefix}bite
┃✾ ${prefix}glomp
┃✾ ${prefix}slap
┃✾ ${prefix}kill
┃✾ ${prefix}happy
┃✾ ${prefix}wink
┃✾ ${prefix}poke
┃✾ ${prefix}dance
┗━ꕥ ${prefix}cringe
`
}

exports.nsfw = (prefix) =>{
	return`┏━━━ꕥ 「 Nsfw & Sfw 」
┃✾ ${prefix}ahegao
┃✾ ${prefix}ass
┃✾ ${prefix}bdsm
┃✾ ${prefix}blowjob
┃✾ ${prefix}cuckold
┃✾ ${prefix}cum
┃✾ ${prefix}ero
┃✾ ${prefix}femdom
┃✾ ${prefix}foot
┃✾ ${prefix}gangbang
┃✾ ${prefix}glasses
┃✾ ${prefix}jahy
┃✾ ${prefix}manga
┃✾ ${prefix}masturbation
┃✾ ${prefix}neko
┃✾ ${prefix}orgy
┃✾ ${prefix}panties
┃✾ ${prefix}pussy
┃✾ ${prefix}tentacles
┃✾ ${prefix}thighs
┃✾ ${prefix}yuri
┃✾ ${prefix}feet
┃✾ ${prefix}lewdkemo
┃✾ ${prefix}woof
┃✾ ${prefix}gasm
┃✾ ${prefix}solo
┃✾ ${prefix}8ball
┃✾ ${prefix}goose
┃✾ ${prefix}avatar
┃✾ ${prefix}hololewd
┃✾ ${prefix}gecg
┃✾ ${prefix}holo
┃✾ ${prefix}fox_girl
┃✾ ${prefix}tits
┃✾ ${prefix}eroyuri
┃✾ ${prefix}holoyero
┃✾ ${prefix}lizard
┃✾ ${prefix}keta
┃✾ ${prefix}eron
┃✾ ${prefix}erok
┃✾ ${prefix}kemonomimi
┃✾ ${prefix}cum_jpg
┃✾ ${prefix}nsfw_avatar
┃✾ ${prefix}erofeet
┃✾ ${prefix}meow
┃✾ ${prefix}wallpaper
┃✾ ${prefix}waifu
┃✾ ${prefix}trap
┃✾ ${prefix}lewd
┃✾ ${prefix}pussy_jpg
┃✾ ${prefix}futanari
┃✾ ${prefix}lewdk
┃✾ ${prefix}solog
┃✾ ${prefix}smug
┃✾ ${prefix}cum
┃✾ ${prefix}slap
┃✾ ${prefix}les
┃✾ ${prefix}erokemo
┃✾ ${prefix}bj
┃✾ ${prefix}pwankg
┃✾ ${prefix}pat
┃✾ ${prefix}poke
┃✾ ${prefix}feed
┃✾ ${prefix}nsfw_neko_gif
┃✾ ${prefix}pussy
┃✾ ${prefix}feetg
┃✾ ${prefix}baka
┃✾ ${prefix}hug
┃✾ ${prefix}kiss
┃✾ ${prefix}tickle
┃✾ ${prefix}spank
┃✾ ${prefix}kuni
┃✾ ${prefix}classic
┃✾ ${prefix}boobs
┃✾ ${prefix}anal
┃✾ ${prefix}ngif
┃✾ ${prefix}cuddle
┗━ꕥ ${prefix}zettai
`
}

exports.textpro = (prefix) =>{
	return`┏━━━ꕥ 「 Textpro Menu 」
┃✾ ${prefix}halloween2 text|text2
┃✾ ${prefix}horror text|text2
┃✾ ${prefix}game8bit text|text2
┃✾ ${prefix}layered text|text2
┃✾ ${prefix}glitch2 text|text2
┃✾ ${prefix}coolg text|text2
┃✾ ${prefix}coolwg text|text2
┃✾ ${prefix}realistic text|text2
┃✾ ${prefix}space3d text|text2
┃✾ ${prefix}gtiktok text|text2
┃✾ ${prefix}stone text|text2
┃✾ ${prefix}marvel text|text2
┃✾ ${prefix}marvel2 text|text2
┃✾ ${prefix}pornhub text|text2
┃✾ ${prefix}avengers text|text2
┃✾ ${prefix}metalr text|text2
┃✾ ${prefix}metalg text|text2
┃✾ ${prefix}metalg2 text|text2
┃✾ ${prefix}halloween2 text|text2
┃✾ ${prefix}lion text|text2
┃✾ ${prefix}wolf_bw text|text2
┃✾ ${prefix}wolf_g text|text2
┃✾ ${prefix}ninja text|text2
┃✾ ${prefix}3dsteel text|text2
┃✾ ${prefix}horror2 text|text2
┃✾ ${prefix}lava text|text2
┃✾ ${prefix}bagel text|text2
┃✾ ${prefix}blackpink text
┃✾ ${prefix}rainbow2 text
┃✾ ${prefix}water_pipe text
┃✾ ${prefix}halloween text
┃✾ ${prefix}sketch text
┃✾ ${prefix}sircuit text
┃✾ ${prefix}discovery text
┃✾ ${prefix}metallic2 text
┃✾ ${prefix}fiction text
┃✾ ${prefix}demon text
┃✾ ${prefix}transformer text
┃✾ ${prefix}berry text
┃✾ ${prefix}thunder text
┃✾ ${prefix}magma text
┃✾ ${prefix}3dstone text
┃✾ ${prefix}neon text
┃✾ ${prefix}glitch text
┃✾ ${prefix}harry_potter text
┃✾ ${prefix}embossed text
┃✾ ${prefix}broken text
┃✾ ${prefix}papercut text
┃✾ ${prefix}gradient text
┃✾ ${prefix}glossy text
┃✾ ${prefix}watercolor text
┃✾ ${prefix}multicolor text
┃✾ ${prefix}neon_devil text
┃✾ ${prefix}underwater text
┃✾ ${prefix}bear text
┃✾ ${prefix}wonderfulg text
┃✾ ${prefix}christmas text
┃✾ ${prefix}neon_light text
┃✾ ${prefix}snow text
┃✾ ${prefix}cloudsky text
┃✾ ${prefix}luxury2 text
┃✾ ${prefix}gradient2 text
┃✾ ${prefix}summer text
┃✾ ${prefix}writing text
┃✾ ${prefix}engraved text
┃✾ ${prefix}summery text
┃✾ ${prefix}3dglue text
┃✾ ${prefix}metaldark text
┃✾ ${prefix}neonlight text
┃✾ ${prefix}oscar text
┃✾ ${prefix}minion text
┃✾ ${prefix}holographic text
┃✾ ${prefix}purple text
┃✾ ${prefix}glossyb text
┃✾ ${prefix}deluxe2 text
┃✾ ${prefix}glossyc text
┃✾ ${prefix}fabric text
┃✾ ${prefix}neonc text
┃✾ ${prefix}newyear text
┃✾ ${prefix}newyear2 text
┃✾ ${prefix}metals text
┃✾ ${prefix}xmas text
┃✾ ${prefix}blood text
┃✾ ${prefix}darkg text
┃✾ ${prefix}joker text
┃✾ ${prefix}wicker text
┃✾ ${prefix}natural text
┃✾ ${prefix}firework text
┃✾ ${prefix}skeleton text
┃✾ ${prefix}balloon text
┃✾ ${prefix}balloon2 text
┃✾ ${prefix}balloon3 text
┃✾ ${prefix}balloon4 text
┃✾ ${prefix}balloon5 text
┃✾ ${prefix}balloon6 text
┃✾ ${prefix}balloon7 text
┃✾ ${prefix}steel text
┃✾ ${prefix}gloss text
┃✾ ${prefix}denim text
┃✾ ${prefix}decorate text
┃✾ ${prefix}decorate2 text
┃✾ ${prefix}peridot text
┃✾ ${prefix}rock text
┃✾ ${prefix}glass text
┃✾ ${prefix}glass2 text
┃✾ ${prefix}glass3 text
┃✾ ${prefix}glass4 text
┃✾ ${prefix}glass5 text
┃✾ ${prefix}glass6 text
┃✾ ${prefix}glass7 text
┃✾ ${prefix}glass8 text
┃✾ ${prefix}captain_as2 text
┃✾ ${prefix}robot text
┃✾ ${prefix}equalizer text
┃✾ ${prefix}toxic text
┃✾ ${prefix}sparkling text
┃✾ ${prefix}sparkling2 text
┃✾ ${prefix}sparkling3 text
┃✾ ${prefix}sparkling4 text
┃✾ ${prefix}sparkling5 text
┃✾ ${prefix}sparkling6 text
┃✾ ${prefix}sparkling7 text
┃✾ ${prefix}decorative text
┃✾ ${prefix}chocolate text
┃✾ ${prefix}strawberry text
┃✾ ${prefix}koifish text
┃✾ ${prefix}bread text
┃✾ ${prefix}matrix text
┃✾ ${prefix}blood2 text
┃✾ ${prefix}neonligth2 text
┃✾ ${prefix}thunder2 text
┃✾ ${prefix}3dbox text
┃✾ ${prefix}neon2 text
┃✾ ${prefix}roadw text
┃✾ ${prefix}bokeh text
┃✾ ${prefix}gneon text
┃✾ ${prefix}advanced text
┃✾ ${prefix}dropwater text
┃✾ ${prefix}wall text
┃✾ ${prefix}chrismast text
┃✾ ${prefix}honey text
┃✾ ${prefix}drug text
┃✾ ${prefix}marble text
┃✾ ${prefix}marble2 text
┃✾ ${prefix}ice text
┃✾ ${prefix}juice text
┃✾ ${prefix}rusty text
┃✾ ${prefix}abstra text
┃✾ ${prefix}biscuit text
┃✾ ${prefix}wood text
┃✾ ${prefix}scifi text
┃✾ ${prefix}metalr text
┃✾ ${prefix}purpleg text
┃✾ ${prefix}shiny text 
┃✾ ${prefix}jewelry text
┃✾ ${prefix}jewelry2 text
┃✾ ${prefix}jewelry3 text
┃✾ ${prefix}jewelry4 text
┃✾ ${prefix}jewelry5 text
┃✾ ${prefix}jewelry6 text
┃✾ ${prefix}jewelry7 text
┃✾ ${prefix}jewelry8 text
┃✾ ${prefix}metalh text
┃✾ ${prefix}golden text
┃✾ ${prefix}glitter text
┃✾ ${prefix}glitter2 text
┃✾ ${prefix}glitter3 text
┃✾ ${prefix}glitter4 text
┃✾ ${prefix}glitter5 text
┃✾ ${prefix}glitter6 text
┃✾ ${prefix}glitter7 text
┃✾ ${prefix}metale text
┃✾ ${prefix}carbon text
┃✾ ${prefix}candy text
┃✾ ${prefix}metalb text
┃✾ ${prefix}gemb text
┃✾ ${prefix}3dchrome text
┃✾ ${prefix}metalb2 text
┃✾ ${prefix}metalg text
┗━ꕥ ${prefix}metalg text
`
}


exports.other = (prefix) =>{
return`┏━━━ꕥ 「 Others 」
┃✾ ${prefix}ttp [text]
┃✾ ${prefix}attp [text]
┃✾ ${prefix}afk [reason]
┃✾ ${prefix}translate kode_bahasa text
┃✾ ${prefix}kalkulator [query]
┃✾ ${prefix}smeme [text]
┃✾ ${prefix}smeme2 [text|text]
┗━ꕥ ${prefix}memegen [text|text]
`
}
exports.game = (prefix) =>{
return`┏━━━ꕥ 「 Game Menu 」
┃✾ ${prefix}kuismath
┃✾ ${prefix}tebak [option]
┃✾ ${prefix}tekateki
┃✾ ${prefix}susunkata
┗━ꕥ ${prefix}caklontong
`
}
exports.asupan = (prefix) =>{
return`┏━━━ꕥ 「 Asupan Menu 」
┃✾ ${prefix}chika
┃✾ ${prefix}delvira
┃✾ ${prefix}ayu
┃✾ ${prefix}bunga
┃✾ ${prefix}aura
┃✾ ${prefix}nisa
┃✾ ${prefix}ziva
┃✾ ${prefix}yana
┃✾ ${prefix}viona
┃✾ ${prefix}syania
┃✾ ${prefix}riri
┃✾ ${prefix}syifa
┃✾ ${prefix}mama_gina
┃✾ ${prefix}alcakenya
┃✾ ${prefix}mangayutri
┃✾ ${prefix}rikagusriani
┃✾ ${prefix}asupan
┃✾ ${prefix}bocil
┃✾ ${prefix}geayubi
┃✾ ${prefix}santuy
┃✾ ${prefix}ukhty
┗━ꕥ ${prefix}syifa
`
}
exports.cecan = (prefix) =>{
return`┏━━━ꕥ 「 Random Cewe 」
┃✾ ${prefix}china 
┃✾ ${prefix}indonesia 
┃✾ ${prefix}malaysia 
┃✾ ${prefix}thailand 
┃✾ ${prefix}korea 
┃✾ ${prefix}japan 
┃✾ ${prefix}vietnam 
┃✾ ${prefix}jenni 
┃✾ ${prefix}jiso 
┃✾ ${prefix}lisa  
┗━ꕥ ${prefix}rose
`
}

exports.tqto = () =>{
	return`┏━━━ꕥ 「 TqTo 」 
┃✾ My God
┃✾ My Parents
┃✾ Fatih A.
┃✾ Ferdi
┃✾ DikaArdnt
┃✾ Mhankbarbar
┃✾ Nurutomo
┃✾ Rashid
┃✾ KingOfBear
┃✾ SaipulAnuar
┃✾ ZeeoneOfc
┃✾ Penyedia Module
┗━ꕥ And All Support
`
}

exports.primbonmenu = (prefix) =>{
	return`┏━━━ꕥ 「 Primbon 」
┃✾ ${prefix}nomorhoki
┃✾ ${prefix}artimimpi [query]
┃✾ ${prefix}artinama [query]
┃✾ ${prefix}ramaljodoh
┃✾ ${prefix}ramaljodohbali
┃✾ ${prefix}suamiistri
┃✾ ${prefix}ramalcinta
┃✾ ${prefix}cocoknama
┃✾ ${prefix}pasangan
┃✾ ${prefix}jadiannikah
┃✾ ${prefix}sifatusaha
┃✾ ${prefix}rezeki
┃✾ ${prefix}pekerjaan
┃✾ ${prefix}nasib
┃✾ ${prefix}penyakit
┃✾ ${prefix}tarot
┃✾ ${prefix}fengshui
┃✾ ${prefix}haribaik
┃✾ ${prefix}harisangar
┃✾ ${prefix}harisial
┃✾ ${prefix}nagahari
┃✾ ${prefix}arahrezeki
┃✾ ${prefix}peruntungan
┃✾ ${prefix}weton
┃✾ ${prefix}karakter
┃✾ ${prefix}keberuntungan
┃✾ ${prefix}memancing
┃✾ ${prefix}masasubur
┃✾ ${prefix}zodiak 
┗━ꕥ ${prefix}shio [query]
`
}

exports.stcmenu = (prefix) =>{
	return`┏━━━ꕥ 「 Telegram Sticker 」
┃✾ ${prefix}awoawo
┃✾ ${prefix}benedict
┃✾ ${prefix}chat
┃✾ ${prefix}dbfly
┃✾ ${prefix}dino_kuning
┃✾ ${prefix}doge
┃✾ ${prefix}gojosatoru
┃✾ ${prefix}hope_boy
┃✾ ${prefix}jisoo
┃✾ ${prefix}kr_robot
┃✾ ${prefix}kucing
┃✾ ${prefix}lonte
┃✾ ${prefix}manusia_lidi
┃✾ ${prefix}menjamet
┃✾ ${prefix}meow
┃✾ ${prefix}nicholas
┃✾ ${prefix}patrick
┃✾ ${prefix}popoci
┃✾ ${prefix}sponsbob
┃✾ ${prefix}kawan_sponsbob
┗━ꕥ ${prefix}tyni
`}
