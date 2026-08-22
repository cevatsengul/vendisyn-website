# VENDISYN Tanıtım Sitesi

Statik, responsive ve çok dilli kurumsal tanıtım sitesidir. Varsayılan dil İngilizcedir.

## Ürün Ekranları

`platform.html` içindeki “VENDISYN’i Farklı Kılan Özellikler” bölümü gerçek demo ürün ekranlarını kullanır. Web sitesi dili Türkçe, İngilizce, Rusça veya Arapça seçildiğinde ekran görüntüleri de aynı dile otomatik olarak geçer. Diğer web sitesi dillerinde İngilizce ürün ekranları gösterilir.

Kullanılan ekranlarda hasta adı, telefon numarası veya e-posta adresi bulunmaz. Web sitesinde `-safe.png` uzantılı redakte edilmiş kopyalar gösterilir; demo kullanıcı hesabı ile Denetim Kaydı ekranındaki kurum ve hastane adları bu kopyalardan kaldırılmıştır. Platformun masaüstü, tablet ve mobil uyumu ile Türkçe, İngilizce, Rusça ve Arapça uygulama desteği aynı bölümde belirtilmiştir.

## Sayfalar

- `index.html`: VENDISYN nedir, amacı ve sade süreç grafiği
- `platform.html`: Kuruma özel mimari, modüller, yerelleştirilmiş ürün ekranları ve entegrasyon yaklaşımı
- `how-it-works.html`: Uçtan uca çalışma biçimi ve yönetici görünürlüğü
- `contact.html`: Yalnız e-posta üzerinden iletişim

## Yerel Çalıştırma

Klasör içinde basit bir statik web sunucusu çalıştırın ve `index.html` adresini açın. Yayın sırasında klasör içeriği alan adının web köküne kopyalanabilir.

## Yapılandırma Notu

Alan adı mevcut talebe göre `vendisiyn.com` olarak kabul edilmiştir. Gerçek iletişim alıcısı yalnız Hetzner üzerindeki `CONTACT_RECIPIENT_ADDRESS` ortam değişkeninde tutulur; web dosyalarına yazılmaz.

Cloudflare Turnstile site anahtarı yayın öncesinde `assets/contact-config.js` dosyasına, gizli anahtar ise yalnız backend ortamına eklenmelidir.
