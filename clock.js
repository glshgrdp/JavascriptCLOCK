function showTime() {
    let date = new Date();
    const dayNames = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = dayNames[date.getDay()];
    
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    
    let time = `${hours}:${minutes}:${seconds} ${day}`;
    
    const clockElement = document.getElementById("myClock");
    if(clockElement) {
        clockElement.innerHTML = time;
    }
    
    setTimeout(showTime, 1000);
}


document.addEventListener('DOMContentLoaded', () => {

    // Elementlerin atanması
    const myNameSpan = document.getElementById('myName');     
    const anaIcerikDiv = document.getElementById('anaIcerik');    
    const modal = document.getElementById('isimSormaKutusu');     
    const form = document.getElementById('isimFormu');
    const input = document.getElementById('kullaniciAdiInput');
    
    const storedName = localStorage.getItem('userName');
    
    showTime(); // Saat döngüsünü başlat

    // --- Sayfa Yükleniş Akışı Kontrolü ---
    if (storedName) {
        myNameSpan.textContent = storedName;
        anaIcerikDiv.style.display = 'block'; 
        modal.style.display = 'none';
        
        // 🔥 Müzik çalmayı LocalStorage'dan isim geldiğinde de deniyoruz
        const muzikElementi = document.getElementById('arkaPlanMuzik');
        if (muzikElementi) {
            muzikElementi.play().catch(error => {
                console.log("Müzik otomatik çalma hatası (Stored Name):", error);
            });
        }
    } else {
        myNameSpan.textContent = "Misafir"; 

        setTimeout(() => {
            modal.style.display = 'flex'; 
            input.focus();
        }, 3000); 
    }

    
    // --- Form Gönderim İşlemi ---
    form.addEventListener('submit', function(event) {
        event.preventDefault(); 
        
        const yeniAd = input.value.trim();

        if (yeniAd) {
            myNameSpan.textContent = yeniAd; 
            localStorage.setItem('userName', yeniAd); 
        } else {
            myNameSpan.textContent = "Misafir";
            localStorage.removeItem('userName'); 
        }
        
        modal.style.display = 'none'; 
        anaIcerikDiv.style.display = 'block'; 
        
        // Müzik çalma kısmı
        const muzikElementi = document.getElementById('arkaPlanMuzik');
        if (muzikElementi) {
            muzikElementi.play().catch(error => {
                console.log("Müzik otomatik çalma hatası (Form Submit):", error);
            });
        }
    });

});