# VENDISYN Tanıtım Sitesi

Statik, responsive ve çok dilli kurumsal tanıtım sitesidir. Varsayılan dil İngilizcedir.

## Ürün Ekranları

`platform.html` içindeki “VENDISYN’i Farklı Kılan Özellikler” bölümü gerçek demo ürün ekranlarını kullanır. Web sitesi dili Türkçe, İngilizce, Rusça veya Arapça seçildiğinde ekran görüntüleri de aynı dile otomatik olarak geçer. Diğer web sitesi dillerinde İngilizce ürün ekranları gösterilir.

Kullanılan ekranlarda hasta adı, telefon numarası veya e-posta adresi bulunmaz. Web sitesinde `-safe.png` uzantılı redakte edilmiş kopyalar gösterilir; demo kullanıcı hesabı ile Denetim Kaydı ekranındaki kurum ve hastane adları bu kopyalardan kaldırılmıştır. Platformun masaüstü, tablet ve mobil uyumu ile Türkçe, İngilizce, Rusça ve Arapça uygulama desteği aynı bölümde belirtilmiştir.

## Sayfalar

- `index.html`: VENDISYN nedir, amacı ve sade süreç grafiği
- `ai-powered-patient-acquisition.html`: VENDISYN AI yeteneklerini, İnsan + AI ayrımını ve AI destekli hasta kazanım akışını anlatan ana satış sayfası
- `platform.html`: Kuruma özel mimari, modüller, yerelleştirilmiş ürün ekranları ve entegrasyon yaklaşımı
- `how-it-works.html`: Uçtan uca çalışma biçimi ve yönetici görünürlüğü
- `contact.html`: Yalnız e-posta üzerinden iletişim

## SEO ve GEO Temeli

- Ana sayfada `Organization`, `WebSite`, `SoftwareApplication` ve `WebApplication` yapılandırılmış verileri bulunur.
- VENDISYN AI sayfasında `WebPage`, `BreadcrumbList` ve görünür SSS içeriğiyle eşleşen `FAQPage` yapılandırılmış verileri bulunur.
- İndekslenebilir sayfalarda benzersiz title, description, canonical, Open Graph ve Twitter metadata kullanılır.
- `robots.txt` arama motorlarına izin verir ve `sitemap.xml` dosyasını bildirir.
- `sitemap.xml` yalnız kanonik ve indekslenebilir genel sayfaları içerir.
- VENDISYN AI satış sayfası İngilizce kök URL ile Türkçe, Fransızca, Arapça, Rusça, Çince ve İspanyolca dil klasörlerinde ayrı ve indekslenebilir URL'ler kullanır.
- Her VENDISYN AI dil sayfası kendini canonical olarak işaretler ve karşılıklı `hreflang` ile `x-default` bağlantılarını içerir. Dil seçici bu gerçek URL'ler arasında gezinir.
- AI anlatısı karar desteği, açıklanabilir önceliklendirme ve kontrollü outbound Robotik Arama sınırlarında tutulur; klinik karar, inbound call center veya otonom satış temsilcisi iddiası taşımaz.

## Yerel Çalıştırma

Klasör içinde basit bir statik web sunucusu çalıştırın ve `index.html` adresini açın. Yayın sırasında klasör içeriği alan adının web köküne kopyalanabilir.

## Yapılandırma Notu

Yayın alan adı `vendisyn.com` olarak belirlenmiştir. İletişim formu, alıcı e-posta adresini HTML içinde yayımlamadan Formspree uç noktasına gönderim yapar. Form uç noktası `assets/contact-config.js` dosyasında yapılandırılır.

İstenirse Formspree panelinden ek spam koruması ve alan adı kısıtlamaları etkinleştirilebilir.
