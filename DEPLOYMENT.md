# GitHub Pages Yayın Notları

## Statik Site

Site `cevatsengul/vendisyn-website` repository’sinin `main` dalından GitHub Pages üzerinde yayınlanır. Varsayılan giriş dosyası `index.html`, özel alan adı `vendisyn.com` olmalıdır.

## İletişim Formu

İletişim formu JavaScript üzerinden Formspree’ye JSON isteği gönderir. Form uç noktası `assets/contact-config.js` dosyasındaki `endpoint` alanında tanımlanır.

Alıcı e-posta adresi yalnızca Formspree panelinde tutulur; HTML ve JavaScript dosyalarına yazılmaz. Formspree panelinde alan adı kısıtlaması ve spam koruması etkinleştirilmelidir.

## Yayın Sonrası Kontrol

- `vendisyn.com` ve `www.vendisyn.com` erişimi
- HTTPS sertifikası
- Masaüstü ve mobil görünüm
- Dil seçimi ve dile bağlı ürün ekranları
- Form doğrulaması
- Formspree üzerinden kontrollü test gönderimi
- Gmail teslimi ve spam klasörü kontrolü
