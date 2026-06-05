# Bugün Ne Oldu? - API

Bu depo, **Bugün Ne Oldu?** ekosisteminin veri yönetimini, veritabanı işlemlerini ve iş mantığını yürüten Backend / API projesidir. Frontend ve Admin paneline gerekli veri akışını sağlar.

## 🔗 Proje Ekosistemi

Bu proje, üç parçalı bir mimarinin veri merkezidir. Ekosistemin diğer repolarına aşağıdan ulaşabilirsiniz:

* **Frontend:** [kopyabugunneoldu](https://github.com/burakaltinbicak/kopyabugunneoldu)
* **API / Backend (Şu an buradasınız):** [kopyabugunneoldu-api](https://github.com/burakaltinbicak/kopyabugunneoldu-api)
* **Admin Paneli:** [kopyabugunneoldu-admin](https://github.com/burakaltinbicak/kopyabugunneoldu-admin)

## 💻 Kullanılan Teknolojiler

* **Çalışma Ortamı:** Node.js
* **Framework:** Express.js (v5.2.1)
* **Veritabanı ODM:** Mongoose (v9.3.2)
* **Dil:** TypeScript
* **Diğer:** CORS, dotenv, ts-node-dev

## 🚀 Kurulum ve Çalıştırma

**1. Repoyu Klonlayın**
```bash
git clone [https://github.com/burakaltinbicak/kopyabugunneoldu-api.git](https://github.com/burakaltinbicak/kopyabugunneoldu-api.git)
cd kopyabugunneoldu-api
2. Bağımlılıkları Yükleyin

Bash
npm install
3. Çevresel Değişkenleri Ayarlayın
Dizin içerisinde bulunan .env.example dosyasını referans alarak bir .env dosyası oluşturun ve MongoDB bağlantı bilginizi girin:

Kod snippet'i
MONGODB_URL=sizin_mongodb_baglanti_adresiniz
4. Geliştirme Sunucusunu Başlatın

Bash
npm run dev
🛠️ Kullanılabilir Komutlar
npm run dev: ts-node-dev kullanarak geliştirme sunucusunu başlatır ve dosya değişikliklerinde otomatik yeniden başlatır.
