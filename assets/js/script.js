function initengahan(){kadoIn.style="display:none",ket.style="display:none",Content.style="opacity:1;margin-top:0",bodyblur.style="opacity:.7",wallpaper.style="transform: scale(1.5);"}async function mulainama(){bodyblur.style="opacity:.7",wallpaper.style="transform: scale(1);",fotostiker.style="display:inline-flex;",setTimeout(ftmuncul,200),setTimeout(kethalo,500)}function ftmuncul(){0==ftganti&&(fotostiker.src=deffotostiker),1==ftganti&&(fotostiker.src=fotostiker1.src),2==ftganti&&(fotostiker.src=fotostiker2.src),3==ftganti&&(fotostiker.src=fotostiker3.src),4==ftganti&&(fotostiker.src=fotostiker4.src),5==ftganti&&(fotostiker.src=fotostiker5.src),fotostiker.style="display:inline-flex;opacity:1;transform:scale(1)"}function fthilang(){fotostiker.style="display:inline-flex;opacity:0;transition:all .7s ease;transform:scale(.1)"}function jjfoto(){fotostiker.style.animation="rto .8s infinite alternate"}function bqmuncul(){bq.style="position:relative;opacity:1;visibility:visible;transform: scale(1);margin-top:0",mulaiketik1()}function bqhilang(){wallpaper.style="transform: scale(2);",bodyblur.style="opacity:.3",bq.style="position:relative;transition:all .7s ease;"}function kethalo(){new TypeIt("#halo",{strings:[""+vketikhalo],startDelay:50,speed:40,waitUntilVisible:!0,afterComplete:function(){halo.innerHTML=vketikhalo,setTimeout(bqmuncul,200)}}).go()}function tombol(){wallpaper.style="transform: scale(1);",Tombol.style="opacity:1;transform: scale(1);",2==fungsi&&(By.innerHTML="&#128140; Balas")}document.getElementById("By").onclick=function(){1==fungsi&&(Tombol.style="",fthilang(),fungsi=0,pertanyaan()),2==fungsi&&(Tombol.style="",menuju())};const waktuSekarang=(new Date).getHours();let ucapan;function mulaiketik1(){new TypeIt("#kalimat",{strings:[""+vketik1],startDelay:400,speed:20,cursor:!1,deleteSpeed:20,breakLines:!1,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){aktiopsL()}}).go()}function aktiopsL(){opsL.innerHTML=defopsL,opsL.style.opacity=".8",opsLclick=1,opsLcheck+=1}function gantiopsL(){opsL.innerHTML="[ Klik beberapa LOVE-nya ]",opsL.style.opacity=".8"}function otomatis(){pesan3.style="transition:none",pesan8.style="display:none",kalimat.style="opacity:0",0==otoaktipesan&&setTimeout(otolanj,400)}function otolanj(){kalimat.style="opacity:1"}function aktipesan1(){kalimat.innerHTML=pesan1.innerHTML,kolombaru.style="position:relative;opacity:1;transform:scale(1);"}function aktipesan2(){wallpaper.style="transform: scale(1.5);",kolombaru.style="",kalimat.innerHTML="",new TypeIt("#kalimat",{strings:[""+vketik2],startDelay:20,speed:40,cursor:!0,deleteSpeed:50,breakLines:!1,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){setTimeout(aktipesan3,500)}}).go()}function aktipesan3(){kalimat.style="display:none",pesan3.style="position:relative;opacity:1;transform: scale(1)",wallpaper.style="transform: scale(1)",fthilang(),ftganti=2,setTimeout(ftmuncul,300),new TypeIt("#pesan3",{strings:[""+vketik3],startDelay:1,speed:45,cursor:!0,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){pesan3.innerHTML=vketik3,setTimeout(otomatis,600),setTimeout(aktipesan4,1010)}}).go()}function aktipesan4(){wallpaper.style="transform: scale(1.5);",kalimat.innerHTML=pesan4.innerHTML+nama+" 🥳",kalimat.style="transform:scale(1.2)",setTimeout(aktipesan5,1e3)}function aktipesan5(){fthilang(),ftganti=3,setTimeout(ftmuncul,300),wallpaper.style="transform: scale(1);",new TypeIt("#pesan5",{strings:[""+vketik5],startDelay:1,speed:52,cursor:!0,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){pesan5.innerHTML=vketik5+"",setTimeout(aktipesan6,800)}}).go()}function aktipesan6(){wallpaper.style="transform: scale(1.5);",new TypeIt("#pesan6",{strings:[""+vketik6],startDelay:1,speed:52,cursor:!0,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){pesan6.innerHTML=vketik6,setTimeout(aktipesan7,800)}}).go()}function aktipesan7(){fthilang(),ftganti=1,setTimeout(ftmuncul,300),wallpaper.style="transform: scale(1);",new TypeIt("#pesan7",{strings:[""+vketik7],startDelay:1,speed:52,cursor:!0,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){pesan7.innerHTML=vketik7,fungsi=1,setTimeout(tombol,400)}}).go()}function aktipesan8(){pesan5.style="display:none",pesan6.style="display:none",pesan7.style="display:none",pesan8.style="",wallpaper.style="transform: scale(1);",ftganti=4,ftmuncul(),new TypeIt("#pesan8",{strings:[""+vketik8,""+vketik9],startDelay:20,speed:45,cursor:!0,deleteSpeed:30,breakLines:!1,waitUntilVisible:!0,lifelike:!0,afterComplete:function(){pesan8.innerHTML=vketik9,setTimeout(otomatis,1300),setTimeout(aktipesan10,1710)}}).go()}function aktipesan10(){wallpaper.style="transform: scale(1.5);",fthilang(),ftganti=5,setTimeout(ftmuncul,300),otoaktipesan=1,otomatis(),setTimeout(toaktipesan,300),setInterval(berjatuhan,400),fungsi=2,setTimeout(tombol,2e3)}ucapan=waktuSekarang<10?"Selamat Pagi, ":waktuSekarang<16?"Selamat Siang, ":waktuSekarang<19?"Selamat Sore, ":"Selamat Malam, ",vketik1=kalimat.innerHTML,kalimat.innerHTML="",opsLclick=0,opsLcheck=0,defopsL=opsL.innerHTML,document.getElementById("bq").onclick=function(){1==opsLclick&&(1==opsLcheck&&(setTimeout(aktipesan1,400),fthilang(),ftganti=1,setTimeout(ftmuncul,300)),2==opsLcheck&&mulaiketik3(),3==opsLcheck&&mulaiketik4(),4==opsLcheck&&mulaiketik5(),5==opsLcheck&&kethalo2(),otomatis(),opsL.style.opacity="0",opsLclick=0)},vketik2=pesan2.innerHTML,vketik3=pesan3.innerHTML,pesan3.innerHTML="",vketik5=pesan5.innerHTML,pesan5.innerHTML="",vketik6=pesan6.innerHTML,pesan6.innerHTML="",vketik7=pesan7.innerHTML,pesan7.innerHTML="",vketik81=pesan8.innerHTML,pesan8.innerHTML="",vketik9=pesan9.innerHTML,pesan9.innerHTML="",vketik10=pesan10.innerHTML,pesan10.innerHTML="";var otoaktipesan=0;function toaktipesan(){kalimat.innerHTML=vketik10,kalimat.style="transform:scale(1);font-size:24px;font-family:var(--gaya-font2)"}document.getElementById("lv1").onclick=function(){lv1.style="opacity:0",slov+=1,this.onclick=null,checkslov()},document.getElementById("lv2").onclick=function(){lv2.style="opacity:0",slov+=1,this.onclick=null,checkslov()},document.getElementById("lv3").onclick=function(){lv3.style="opacity:0",slov+=1,this.onclick=null,checkslov()},document.getElementById("lv4").onclick=function(){lv4.style="opacity:0",slov+=1,this.onclick=null,checkslov()};var slov=0;function checkslov(){4==slov&&(kolombaru.style="position:relative;transform:scale(1)",otomatis(),setTimeout(aktipesan2,400))}async function pertanyaan(){var{isConfirmed:t}=await swals.fire({title:tanya,text:""+opstanya,imageUrl:""+fotostiker6.src,showCancelButton:!0,confirmButtonText:""+tompositif,cancelButtonText:""+tomnegatif});t?(await swalst.fire({title:""+katatambahan.innerHTML,timer:2e3,imageUrl:""+stikerditolak.src}),vketik8=vketik81,aktipesan8()):(await swalst.fire({title:""+kataditolak.innerHTML,timer:2e3,imageUrl:""+stikerditolak.src}),vketik8="",aktipesan8())}