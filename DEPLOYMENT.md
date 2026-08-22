# Hetzner Yayın Notları

## Statik Site

Bu klasörün içeriği alan adının Nginx web köküne yüklenir. Varsayılan giriş dosyası `index.html` olmalıdır.

## Güvenli İletişim Formu

Form istekleri aynı alan adındaki aşağıdaki adrese gönderilir:

`POST /api/v1/public/contact`

Nginx üzerinde `/api/` istekleri VENDISYN Laravel backend uygulamasına yönlendirilmelidir. Backend tarafında aşağıdaki ortam değerleri tanımlanır:

```env
CONTACT_RECIPIENT_ADDRESS=
CONTACT_TURNSTILE_ENABLED=true
CONTACT_TURNSTILE_SECRET_KEY=
```

E-posta teslimi Laravel'in standart `MAIL_*` ortam ayarları üzerinden yapılır. Sağlayıcı kod içinde sabitlenmemiştir.

Cloudflare Turnstile herkese açık site anahtarı `assets/contact-config.js` içindeki `turnstileSiteKey` alanına yazılır. Gizli Turnstile anahtarı hiçbir zaman web dosyalarına eklenmez.

## Yayın Öncesi Kontrol

- Alan adı ve HTTPS yönlendirmesi
- Nginx web kökü ve `index.html`
- `/api/` reverse proxy yönlendirmesi
- Turnstile site ve gizli anahtarları
- `CONTACT_RECIPIENT_ADDRESS`
- Laravel `MAIL_*` ayarları
- SPF, DKIM ve DMARC kayıtları
- İletişim formu gönderim testi

