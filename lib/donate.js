exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*

♻ Silahkan donasi dibawah ini :
   
⚜ *OVO*: 082123952125
⚜ *#DANA*: 082123952125
⚜ *#BANK*: -
⚜ *#PULSA*: 082123952125
⚜ *#GOPAY*: 082123952125
⚜ *#Trakteer*: https://trakteer.id/maulanakmil

📺 *Iklan* :

✅ Follow akun instagram admin ${@maulanakmil}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

♻️ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

♻️ Mau pasang iklan di *${MkmilBOT} ?*
☎️ WA : *${082123952125}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${24 JAM ‼️}

✳️ Official Grub [1] : ${https://chat.whatsapp.com/KH3WQpdjj1fHL3toYzUCSO}

✳️ Official Grub [2] : ${https://chat.whatsapp.com/ESYDxnhJMPI24PmF6qOPaq}

  
🔰 -----[ *POWERED BY ${MkmilBOT}* ]----- 🔰`
}
