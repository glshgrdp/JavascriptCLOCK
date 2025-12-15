  document.addEventListener('DOMContentLoaded', () => {

    const modal = document.getElementById('isimSormaKutusu');
    const form = document.getElementById('isimFormu');
    const input = document.getElementById('kullaniciAdiInput');
    const adGosterSpan = document.getElementById('adGoster');

    // Kaydedilmiş bir isim varsa, direkt göster ve pop-up'ı atla
    const storedName = localStorage.getItem('kullaniciAdi');
    if (storedName) {
        adGosterSpan.textContent = storedName;
    } else {
        //  2000 milisaniye (2 saniye) sonra modalı göster
        setTimeout(() => {
            modal.style.display = 'flex'; // Modalı görünür yap
            input.focus(); // İmleci input alanına odakla
        }, 2000); 
    }
    
    // Form gönderildiğinde (Gönder butonuna basıldığında)
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Sayfanın yenilenmesini engelle
        
        const yeniAd = input.value.trim();

        if (yeniAd) {
            // İsim varsa, ekrana bas ve localStorage'a kaydet
            adGosterSpan.textContent = yeniAd;
            localStorage.setItem('kullaniciAdi', yeniAd);
        }
        
        modal.style.display = 'none'; // Modalı gizle (Kaybolma)
    });

});