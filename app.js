const makeQuestion = (topic, stem, options, answer, explain) => ({
  topic,
  stem,
  options,
  answer,
  explain,
});

const exams = [
  {
    id: "saldirganlik",
    title: "Test 1: Saldırganlık",
    subtitle: "Kuramlar, biyoloji, gelişim, medya ve sosyal çevre",
    duration: 25,
    questions: [
      makeQuestion(
        "Engellenme ve tatsız olaylar",
        "Kaan'ın sunumu teknik bir sorun yüzünden yarıda kalıyor. Çıkışta garsonun küçük bir sipariş hatasını kendisine yapılmış saygısızlık gibi yorumlayıp sert biçimde bağırıyor. Bu vaka en iyi hangi açıklamayla yakalanır?",
        [
          "Hayal kırıklığı ve diğer tatsız olaylar saldırgan eğilimleri artırabilir.",
          "Saldırganlık yalnızca doğuştan gelen ölüm içgüdüsünün sonucudur.",
          "Saldırganlık sadece genetik aktarımla açıklanır.",
          "Saldırganlık ancak ödüllendirildiğinde ortaya çıkar.",
        ],
        0,
        "Dollard ve arkadaşlarının engellenme-saldırganlık çizgisi, Berkowitz'te tüm tatsız olayları kapsayacak biçimde genişler."
      ),
      makeQuestion(
        "Uyarılma aktarımı",
        "Spor salonunda yoğun antrenman yapan Ece, hemen ardından arkadaşıyla tartışınca normalde vereceğinden çok daha sert bir tepki veriyor. Öfkesini tamamen tartışmaya bağlı sanıyor. Hangi kavram daha uygundur?",
        [
          "Sosyal kaytarma",
          "Kurbanı suçlama",
          "Uyarılma aktarımı",
          "Salt maruz kalma",
        ],
        2,
        "Zillmann'ın uyarılma aktarımı kuramında ilk olaydan kalan fizyolojik uyarılma ikinci olaya yanlış atfedilebilir."
      ),
      makeQuestion(
        "Sosyal öğrenme",
        "Bir çocuk, çizgi filmde kahramanın vurup kırarak istediğini aldığını ve alkışlandığını görüyor. Ertesi gün oyuncağı almak için aynı davranışı deniyor. Bu örnek en çok neyi gösterir?",
        [
          "Ayna görüntüsü algısı",
          "Sosyal öğrenme ve model alma",
          "Toplumsal sorumluluk normu",
          "Denklik ilkesi",
        ],
        1,
        "Bandura çizgisinde çocuklar saldırgan davranışı gözlem, taklit ve modelin aldığı sonuçlar üzerinden öğrenebilir."
      ),
      makeQuestion(
        "Düşmanca atıf",
        "Koridorda biri Deniz'e yanlışlıkla çarpıyor. Deniz, çarpmanın kaza olabileceğini hiç düşünmeden 'beni küçük düşürmeye çalıştı' deyip karşılık veriyor. Hangi bilişsel risk faktörü öne çıkar?",
        [
          "Düşmanca atıf önyargısı",
          "Eşleşme olgusu",
          "Fikir birliği yanılgısı",
          "Karşılıklılık normu",
        ],
        0,
        "Düşmanca atıf önyargısı belirsiz davranışları kasıtlı ve düşmanca niyetle yorumlama eğilimidir."
      ),
      makeQuestion(
        "Senaryo modeli",
        "Mert çok sayıda şiddet içerikli oyun oynadıktan sonra 'biri laf sokarsa hemen fiziksel karşılık verilir' gibi hazır bir davranış kalıbı geliştiriyor. Bu kalıp hangi modele daha yakındır?",
        [
          "Huesmann'ın senaryo modeli",
          "Sternberg'in aşk üçgeni",
          "Dunbar'ın grup büyüklüğü modeli",
          "Kendini açma döngüsü",
        ],
        0,
        "Senaryo modelinde kişi, durumları ve bu durumlarda ne yapılacağını bellekte tutulan davranış senaryolarıyla işler."
      ),
      makeQuestion(
        "Alkol ve dikkat",
        "Alkollü bir öğrenci, kendisine söylenen tek bir alaycı cümleye kilitleniyor; kamera, disiplin cezası ve arkadaşlarının uyarılarını dikkate almadan saldırganlaşıyor. En iyi açıklama hangisidir?",
        [
          "Alkol dışsal kışkırtıcı ipuçlarına odağı artırıp sonuçları düşünmeyi zayıflatır.",
          "Alkol sadece testosteronu düşürdüğü için saldırganlık artar.",
          "Alkol sosyal sorumluluk normunu güçlendirir.",
          "Alkol saldırganlığı yalnızca genetik yatkınlığı olmayanlarda artırır.",
        ],
        0,
        "Slaytlarda alkolün muhakeme, öz-izleme ve prefrontal yönetici işlevleri zayıflatıp kışkırtıcı ipuçlarını öne çıkardığı anlatılıyor."
      ),
      makeQuestion(
        "Biyoloji ve bağlam",
        "İki kardeşte benzer genetik riskler var. Biri destekleyici aile ve sakin akran çevresinde büyürken saldırganlaşmıyor; diğeri sert disiplin ve saldırgan arkadaş grubunda kalıcı saldırganlık gösteriyor. Bu durum neyi vurgular?",
        [
          "Genetik yatkınlık sosyal bağlamdan bağımsızdır.",
          "Saldırganlık yalnızca medya etkisiyle oluşur.",
          "Biyolojik yatkınlık çevresel koşullarla birlikte işler.",
          "Saldırgan davranış çocuklukta normatif değildir.",
        ],
        2,
        "Biyolojik temeller slaytlarında genetik, hormon ve beyin mekanizmalarının sosyal bağlamla birlikte işlediği vurgulanır."
      ),
      makeQuestion(
        "Kümülatif süreklilik",
        "İlkokulda sık kavga eden bir çocuk derslerden uzaklaşıyor, akademik başarısızlık yaşıyor, öfkesi artıyor ve saldırgan davranışları daha da pekişiyor. Bu döngü hangi süreklilik biçimidir?",
        [
          "Kümülatif süreklilik",
          "Salt maruz kalma",
          "Fazladan gerekçelendirme",
          "Ayna görüntüsü algısı",
        ],
        0,
        "Kümülatif süreklilikte saldırganlığın kendi sonuçları zamanla yeni riskler biriktirerek davranışı sürdürür."
      ),
      makeQuestion(
        "Etkileşimsel süreklilik",
        "Sık saldırganlık gösteren Ela, öğretmenleri ve akranları tarafından daha sert ve mesafeli karşılanıyor. Bu tepkiler Ela'nın 'herkes bana düşman' beklentisini güçlendiriyor ve saldırganlığı sürüyor. Bu en çok neyi anlatır?",
        [
          "Etkileşimsel süreklilik",
          "Grup kutuplaşması",
          "Denklik",
          "Karşılıklılık normu",
        ],
        0,
        "Etkileşimsel süreklilikte bireyin davranışı çevreden aldığı tepkileri şekillendirir; bu tepkiler de davranışı geri besler."
      ),
      makeQuestion(
        "Gelişimsel yörünge",
        "Bir öğretmen, fiziksel saldırganlığın okul öncesinde görece yaygın olduğunu, orta çocuklukta azaldığını, ergenlikte bazı biçimlerinin yeniden arttığını söylüyor. Bu anlatım hangi sonuca uygundur?",
        [
          "Saldırganlık gelişim boyunca tamamen sabittir.",
          "Saldırganlıkta doğrusal olmayan normatif bir gelişim örüntüsü vardır.",
          "Saldırganlık yalnızca yetişkinlikte başlar.",
          "Saldırganlık çocuklukta her zaman patolojiktir.",
        ],
        1,
        "Çocukluk ve ergenlik slaytları saldırganlığın yaşa göre normatif olabildiğini ve doğrusal olmayan bir yörünge izlediğini belirtir."
      ),
      makeQuestion(
        "Saldırganlık biçimleri",
        "Bir sınıfta bazı öğrenciler itme ve vurma ile, bazıları ise dedikodu çıkarma ve dışlama ile zarar veriyor. Slaytlardaki ayrım açısından ikinci davranış türü hangisidir?",
        [
          "Dolaylı veya ilişkisel saldırganlık",
          "Etolojik saldırganlık",
          "Seçici avcı saldırganlığı",
          "Yönetici işlev",
        ],
        0,
        "Dolaylı ve ilişkisel saldırganlık sosyal ilişkilere zarar verme, dışlama ve dedikodu gibi yollarla ortaya çıkar."
      ),
      makeQuestion(
        "Silah etkisi",
        "Bir deneyde katılımcılar ya silah modeli ya da masa oyunu görüyor. Silah gören grupta testosteron artıyor ve sonraki kişiye daha fazla acı sos bırakılıyor. Bu bulgu neye işaret eder?",
        [
          "Silah ipuçları fizyolojik uyarılma ve saldırgan davranışı artırabilir.",
          "Silahlar yalnızca saldırgan olmayan kişilerde sakinleştirici etki yapar.",
          "Testosteron saldırganlıkla hiçbir koşulda ilişkili değildir.",
          "Saldırganlık yalnızca sözel biçimde öğrenilir.",
        ],
        0,
        "Klinesmith ve arkadaşlarının çalışması silah ipuçlarının testosteron ve saldırgan davranış göstergeleriyle ilişkisini örnekler."
      ),
      makeQuestion(
        "Duyarsızlaşma",
        "Şiddet içeriğine yoğun maruz kalan ergenler şiddet klipleri izlerken daha düşük fizyolojik tepki veriyor ve sonrasında daha saldırgan seçimler yapıyor. Bu örüntü hangi kavramdır?",
        [
          "Duyarsızlaşma",
          "Yüceltme",
          "Toplumsal kolaylaştırma",
          "Kendini açma",
        ],
        0,
        "Medya slaytlarında duyarsızlaşma, şiddete verilen fizyolojik ve duygusal tepkinin azalması ve saldırganlığın kolaylaşmasıyla anlatılır."
      ),
      makeQuestion(
        "Cinsel şiddet medyası",
        "Bir erkek katılımcı, mağdurun saldırıdan zevk aldığı gibi kurgulanmış cinsel şiddet sahnesini izledikten sonra kadın kışkırtıcıya daha fazla saldırganlık gösteriyor. Bu bulgu hangi uyarıya en yakındır?",
        [
          "Şiddet içeren cinsel medya, saldırganlığa toleransı ve saldırgan davranışı artırabilir.",
          "Şiddet içermeyen romantik içerik aynı etkiyi kaçınılmaz biçimde üretir.",
          "Medya etkileri yalnızca okul öncesi çocuklarda görülür.",
          "Cinsel içerik saldırganlığı her durumda azaltır.",
        ],
        0,
        "Slaytlarda cinsel şiddet içeren medyanın özellikle kadınlara yönelik saldırganlığa toleransı artırabildiği aktarılır."
      ),
      makeQuestion(
        "Medya müdahalesi",
        "Bir okul, öğrencilerde 10 günlük medya kesintisi ve sonrasında haftalık süre sınırı uyguluyor; akranların bildirdiği saldırganlık ve sözel saldırganlık azalıyor. Bu sonuç hangi öneriyi destekler?",
        [
          "Şiddet medyasını sınırlama saldırganlığı azaltmaya yardımcı olabilir.",
          "Medya şiddetiyle saldırganlık arasında hiçbir ilişki yoktur.",
          "Yalnızca cezalandırma medya etkisini değiştirir.",
          "Medya yasağı saldırganlığı kaçınılmaz olarak artırır.",
        ],
        0,
        "Robinson ve arkadaşlarının müdahalesi, medya tüketimini azaltmanın saldırganlık göstergelerini düşürebileceğini gösterir."
      ),
      makeQuestion(
        "Yönetici işlev",
        "Bir çocuk planlama, dürtü durdurma ve dikkat kaydırmada zorlanıyor. Özellikle ani öfke patlamalarıyla saldırganlaşıyor; önceden planlanmış saldırganlığı ise yüksek değil. Hangi sonuç daha uygundur?",
        [
          "Düşük yönetici işlev daha çok reaktif saldırganlıkla ilişkilidir.",
          "Düşük yönetici işlev yalnızca proaktif saldırganlığı artırır.",
          "Yönetici işlev saldırganlıkla ilgisizdir.",
          "Yönetici işlev sadece yetişkinlerde ölçülebilir.",
        ],
        0,
        "Slaytlarda yönetici işlev eksikliğinin özellikle reaktif saldırganlığı öngördüğü vurgulanır."
      ),
      makeQuestion(
        "Göreceli yoksunluk",
        "Aynı şehirde polislerin maaşı artınca itfaiyeciler kendi maaşları değişmediği halde daha haksızlığa uğramış hissediyor ve öfkeleri artıyor. Bu hangi kavramdır?",
        [
          "Göreceli yoksunluk",
          "Salt maruz kalma",
          "Sosyal sorumluluk normu",
          "Denklikten kaçınma",
        ],
        0,
        "Göreceli yoksunluk, mutlak durumdan çok başkalarıyla karşılaştırmanın yarattığı eksiklik ve engellenme hissidir."
      ),
      makeQuestion(
        "Etolojik yaklaşım",
        "Bir araştırmacı saldırganlığı bölge savunması, hakimiyet hiyerarşisi ve türün çevreye uyumu üzerinden açıklıyor. Bu bakış hangi yaklaşıma aittir?",
        [
          "Etolojik yaklaşım",
          "Sosyal değiş-tokuş kuramı",
          "Kendini gerçekleştiren kehanet",
          "Grupdüşün",
        ],
        0,
        "Etoloji, davranışın evrimi ve işlevini özellikle hayatta kalma, bölgesellik ve hakimiyet bağlamında inceler."
      ),
      makeQuestion(
        "Genel Saldırganlık Modeli",
        "Bir model; biyolojik cinsiyet, kişilik, sıcaklık, kışkırtma ve medya ipuçlarının düşünce, duygu ve uyarılmayı etkilediğini; ardından değerlendirme ve kararın saldırganlığı belirlediğini söyler. Bu model hangisidir?",
        [
          "Genel Saldırganlık Modeli",
          "Yalnızca Freud'un hidrolik modeli",
          "Jigsaw sınıf tekniği",
          "Sternberg'in aşk modeli",
        ],
        0,
        "GAM kişi ve durum girdilerini içsel durumlar ve karar süreçleriyle birleştiren bütüncül saldırganlık modelidir."
      ),
      makeQuestion(
        "Bireysel moderatör",
        "İki kişi aynı miktarda alkol alıyor ve aynı biçimde kışkırtılıyor. Eğilimsel empatisi yüksek olan kişi daha az saldırgan davranıyor. Bu durum hangi sonuca gider?",
        [
          "Alkol-saldırganlık bağlantısı bireysel özellikler tarafından düzenlenebilir.",
          "Alkol her bireyde aynı saldırganlık düzeyini üretir.",
          "Empati yalnızca yardım davranışını etkiler, saldırganlığı etkilemez.",
          "Kışkırtma saldırganlıkla ilişkili değildir.",
        ],
        0,
        "Slaytlarda alkol etkisinin empati gibi bireysel özellikler ve sosyal durum tarafından aracılanabileceği belirtilir."
      ),
    ],
  },
  {
    id: "cekim-yardim",
    title: "Test 2: Çekim, Yakınlık ve Yardım",
    subtitle: "İlişki kurma, bağlanma, özgecilik ve seyirci etkisi",
    duration: 25,
    questions: [
      makeQuestion(
        "Yakınlık",
        "Aynı yurtta kalan iki öğrenciden yan odada olanlar yakın arkadaş olurken, aynı katta ama uzak koridorda olanlar neredeyse hiç görüşmüyor. Bu örnek en çok neyi gösterir?",
        [
          "İşlevsel yakınlık ve etkileşim fırsatı",
          "Zıt kutupların çekimini",
          "Grupdüşünü",
          "Ahlaki dışlamayı",
        ],
        0,
        "Slaytlarda coğrafi yakınlıktan daha önemlisinin yolların ne kadar sık kesiştiği, yani işlevsel yakınlık olduğu vurgulanır."
      ),
      makeQuestion(
        "Salt maruz kalma",
        "Seçmenler, hakkında hiçbir bilgi sahibi olmadıkları iki adaydan sadece adını daha sık duydukları adaya daha sıcak bakıyor. Hangi etki çalışıyor olabilir?",
        [
          "Salt maruz kalma etkisi",
          "Sosyal kaytarma",
          "Düşmanca atıf",
          "GRIT",
        ],
        0,
        "Salt maruz kalma, tekrar tekrar karşılaşılan uyarıcının daha olumlu değerlendirilmesi eğilimidir."
      ),
      makeQuestion(
        "Benzerlik",
        "Asya bir partide Vedat'la değerleri, müzik zevki ve politik görüşlerinin çok benzediğini fark ediyor; Furkan'la ise neredeyse hiçbir ortaklık bulamıyor. Çıkışta Vedat'ı daha zeki ve sıcak buluyor. En iyi açıklama hangisi?",
        [
          "Benzerlik hoşlanmayı artırır.",
          "Farklılık uzun vadeli çekimin temelidir.",
          "Salt izleyici varlığı çekimi azaltır.",
          "İç grup üyeleri her zaman daha az sevilir.",
        ],
        0,
        "Donn Byrne çizgisindeki bulgular, benzer tutum ve değerlerin hoşlanmayı güçlü biçimde artırdığını gösterir."
      ),
      makeQuestion(
        "Karşılıklı hoşlanma",
        "Zeynep, kendisini sevdiğini ve yanında rahat hissettiğini açıkça gösteren bir sınıf arkadaşına zamanla daha sıcak davranmaya başlıyor. Bu hangi çekim ilkesidir?",
        [
          "Bizi sevenleri sevme eğilimi",
          "Göreceli yoksunluk",
          "Sosyal ikilem",
          "Kimlik yitimi",
        ],
        0,
        "Hoşlanma çoğu zaman karşılıklıdır; kabul edilme ihtiyacı bizi bizden hoşlanan kişilere yaklaştırır."
      ),
      makeQuestion(
        "Fiziksel çekicilik kalıpyargısı",
        "Bir öğretmen, aynı akademik bilgi verilen iki öğrenciden fotoğrafı daha çekici olanın daha zeki ve başarılı olacağını düşünüyor. Bu hangi yanlılıktır?",
        [
          "Fiziksel çekicilik kalıpyargısı",
          "Çoğulcu cehalet",
          "Uyarılma aktarımı",
          "Son teklif tahkimi",
        ],
        0,
        "Güzel olan iyidir kalıpyargısı, çekici kişilere zeka, başarı ve sosyal beceri gibi olumlu özellikler atfetmeye yol açabilir."
      ),
      makeQuestion(
        "Ortalama ve simetri",
        "Bir araştırmada birçok yüzün dijital ortalaması alınarak oluşturulan bileşik yüz, tek tek yüzlerin çoğundan daha çekici bulunuyor. Bu bulgu neyi destekler?",
        [
          "Ortalama ve simetrik yüzlerin çekici algılanabildiğini",
          "Çekiciliğin yalnızca statüden kaynaklandığını",
          "Çekiciliğin ilk izlenimleri etkilemediğini",
          "Çekicilik algısının tamamen rastlantısal olduğunu",
        ],
        0,
        "Slaytlarda bilgisayarla ortalaması alınmış ve simetrik yüzlerin daha çekici değerlendirilebildiği anlatılır."
      ),
      makeQuestion(
        "Sosyal karşılaştırma",
        "Bir kişi sürekli gerçek dışı kusursuz beden görsellerine baktıktan sonra kendi partnerini ve kendini daha az çekici değerlendirmeye başlıyor. Hangi süreç öne çıkar?",
        [
          "Sosyal karşılaştırma ve zıtlık etkisi",
          "Toplumsal sorumluluk normu",
          "Bilişsel zihin kuramı",
          "Küçük grup etkisi",
        ],
        0,
        "Çekicilik slaytlarında medya idealleriyle karşılaştırmanın partner ve beden doyumunu azaltabileceği belirtilir."
      ),
      makeQuestion(
        "Eşleşme olgusu",
        "Bir hızlı buluşma etkinliğinde insanlar, reddedilme ihtimali olduğunda genellikle kendi çekicilik ve sosyal arzu edilirlik düzeylerine yakın kişilere yöneliyor. Bu hangi kavramdır?",
        [
          "Eşleşme olgusu",
          "Kurbanı suçlama",
          "Yansıma imajı",
          "Sosyal tuzak",
        ],
        0,
        "Eşleşme olgusu, insanların çekicilik ve diğer değerler açısından kendilerine uygun kişilerle eşleşme eğilimini anlatır."
      ),
      makeQuestion(
        "Aşk bileşenleri",
        "Uzun yıllardır birlikte olan iki kişi arasında sıcaklık, güven ve bağlılık çok güçlü; ancak tutku belirgin değil. Sternberg'in üçgen modeline göre bu ilişki türü en çok hangisine yakındır?",
        [
          "Arkadaşça aşk",
          "Tutkulu kara sevda",
          "Boş aşk",
          "Saçma aşk",
        ],
        0,
        "Yakınlık ve bağlılık olup tutku olmadığında model arkadaşça aşkı işaret eder."
      ),
      makeQuestion(
        "Kendini açma",
        "İki yabancı 45 dakika boyunca giderek daha kişisel sorulara yanıt veriyor ve kısa sürede birbirlerine belirgin yakınlık hissediyor. Bu sonuç hangi mekanizmayla açıklanır?",
        [
          "Karşılıklı kendini açma",
          "Sosyal kaytarma",
          "Akraba koruma",
          "Mantığa bürüme",
        ],
        0,
        "Kendini açma açılmayı doğurur; uygun düzeyde karşılıklı paylaşım yakınlığı artırır."
      ),
      makeQuestion(
        "Denklik",
        "Bir ilişkide taraflardan biri sürekli daha fazla emek verdiğini ama daha az karşılık aldığını düşünüyor; zamanla kırgınlık ve kızgınlık yaşıyor. Bu hangi ilkeyle ilgilidir?",
        [
          "Denklik ilkesi",
          "Salt maruz kalma",
          "Fiziksel anonimlik",
          "Ayna nöronlar",
        ],
        0,
        "Denklik, ilişkiden elde edilenlerin ilişkiye katılanlarla orantılı algılanmasıdır; adaletsizlik doyumu düşürür."
      ),
      makeQuestion(
        "Yakın ilişkide değişim",
        "Resmi bir iş ilişkisinde yapılan iyiliğin hemen karşılık bulması beğeniyi artırıyor. Ama yakın arkadaşlıkta aynı hesapçı tavır soğukluk yaratıyor. Bu fark neyi anlatır?",
        [
          "Yakın ilişkilerde kısa vadeli değişim hesabı geri tepebilir.",
          "Arkadaşlıkta her yardım hemen ödenmelidir.",
          "Denk olmayan ilişkiler her zaman daha mutludur.",
          "Kendini açma sadece iş ilişkilerinde görülür.",
        ],
        0,
        "Clark ve Mills çizgisinde yakın ilişkilerde insanlar fayda hesabından kaçınır; gönüllülük ve ihtiyaç duyarlılığı daha önemlidir."
      ),
      makeQuestion(
        "Güvenli bağlanma",
        "Ayşe yakın ilişkiler kurmakta rahat, terk edilme konusunda aşırı kaygılı değil ve partnerine güvenebiliyor. Bağlanma modeli açısından bu örüntü hangisidir?",
        [
          "Güvenli bağlanma",
          "Saplantılı bağlanma",
          "Korkulu bağlanma",
          "Kayıtsız bağlanma",
        ],
        0,
        "Güvenli bağlanmada kişinin benlik ve diğerleri imgesi olumludur; yakınlık ve güven daha rahattır."
      ),
      makeQuestion(
        "Saplantılı bağlanma",
        "Bora partnerinin sevgisine çok ihtiyaç duyuyor, sık sık terk edileceğinden korkuyor, kıskanç ve sahiplenici davranıyor. Bu bağlanma tarzı hangisine yakındır?",
        [
          "Saplantılı bağlanma",
          "Güvenli bağlanma",
          "Kayıtsız bağlanma",
          "Üstün kimlik",
        ],
        0,
        "Saplantılı bağlanmada kişi diğerlerinden kabul beklerken kendi değerinden kuşku duyar; kaygı ve sahiplenme belirgindir."
      ),
      makeQuestion(
        "İlişki onarma",
        "Bir ilişkiden memnun olmayan kişi, uzaklaşmak yerine sorunu konuşuyor, danışmanlık arıyor ve değişim için aktif adım atıyor. Rusbult çizgisinde bu tepki hangisidir?",
        [
          "Dile getirme",
          "İhmal",
          "Kimlik yitimi",
          "Ahlaki dışlama",
        ],
        0,
        "Dile getirme, sorunları tartışarak ve çözüm arayarak ilişkiyi onarmaya yönelik aktif tepkidir."
      ),
      makeQuestion(
        "Zaman baskısı",
        "İlahiyat öğrencileri yardım konulu bir konuşmaya giderken yerde yardıma muhtaç birini görüyor. Acele ettirilenler, acele ettirilmeyenlere göre çok daha az yardım ediyor. Hangi faktör belirleyicidir?",
        [
          "Zaman baskısı",
          "Eşleşme olgusu",
          "Göreceli yoksunluk",
          "Yüceltme",
        ],
        0,
        "Darley ve Batson çalışması, değerlerden bağımsız olarak acele etmenin yardım etmeyi güçlü biçimde düşürebildiğini gösterir."
      ),
      makeQuestion(
        "Çoğulcu cehalet",
        "Duman dolu bir odada herkes diğerlerinin sakin kaldığını görünce durumun ciddi olmadığını sanıyor ve kimse bildirmiyor. Hangi süreç işler?",
        [
          "Çoğulcu cehalet",
          "Uyarılma aktarımı",
          "Eşit statülü temas",
          "Akraba koruma",
        ],
        0,
        "Belirsiz durumda herkes diğerlerinin sakinliğini bilgi olarak kullanır; ortak yanlış yorum çoğulcu cehalet yaratır."
      ),
      makeQuestion(
        "Sorumluluğun dağılması",
        "Bir acil durum çağrısını yalnızca kendisinin duyduğunu sanan katılımcı hemen yardım arıyor; dört kişinin daha duyduğunu sanan katılımcı ise bekliyor. Bu farkı ne açıklar?",
        [
          "Sorumluluğun dağılması",
          "Benzerlik etkisi",
          "Ayna görüntüsü algısı",
          "Bilişsel Zihin Kuramı",
        ],
        0,
        "Seyirci sayısı arttıkça her bireyin kişisel sorumluluk hissi azalabilir."
      ),
      makeQuestion(
        "Suçluluk",
        "Küçük bir yalan söyleyen katılımcılar, deney sonunda fazladan anket değerlendirmeye daha fazla zaman ayırıyor. Yardımı artıran duygu hangisidir?",
        [
          "Suçluluk",
          "Kıskançlık",
          "Dehşet",
          "Kayıtsızlık",
        ],
        0,
        "Suçluluk, benlik imajını onarma ve telafi etme isteğiyle yardım davranışını artırabilir."
      ),
      makeQuestion(
        "Kapıyı yüzüne çarpma",
        "Bir öğrenciye önce iki yıl boyunca gönüllü danışmanlık yapması isteniyor ve ret alınıyor. Sonra tek günlük hayvanat bahçesi gezisine eşlik etmesi istenince kabul oranı yükseliyor. Bu teknik hangisidir?",
        [
          "Kapıyı yüzüne çarpma",
          "Ayak kapıda",
          "Salt maruz kalma",
          "Sosyal kolaylaştırma",
        ],
        0,
        "Kapıyı yüzüne çarpma tekniğinde büyük bir talep reddedildikten sonra daha makul talep sunulur."
      ),
    ],
  },
  {
    id: "grup-catismalar",
    title: "Test 3: Grup, Önyargı ve Çatışma",
    subtitle: "Grup süreçleri, adil dünya, sosyal ikilemler ve uzlaşma",
    duration: 25,
    questions: [
      makeQuestion(
        "Sosyal kolaylaştırma",
        "Bir öğrenci iyi bildiği çarpım tablosunu seyirciler varken daha hızlı yapıyor; ama yeni öğrendiği karmaşık problemleri seyirciler varken daha kötü çözüyor. Hangi kavram bunu açıklar?",
        [
          "Sosyal kolaylaştırma: baskın tepkinin güçlenmesi",
          "Sosyal kaytarma: bireysel çabanın kaybolması",
          "Kurbanı suçlama",
          "Kendini açma",
        ],
        0,
        "Sosyal kolaylaştırmanın güncel anlamı, başkalarının varlığında baskın tepkinin güçlenmesidir; kolay işte yarar, zor işte zarar doğabilir."
      ),
      makeQuestion(
        "Sosyal kaytarma",
        "Beş kişilik proje grubunda kimin ne kadar çalıştığı görünmüyor. Herkes biraz azaltınca toplam performans düşüyor. Bu hangi süreçtir?",
        [
          "Sosyal kaytarma",
          "Sosyal kolaylaştırma",
          "Üstün amaç",
          "Azınlık etkisi",
        ],
        0,
        "Sosyal kaytarma, bireysel katkı değerlendirilmediğinde ortak hedefte daha az çaba harcama eğilimidir."
      ),
      makeQuestion(
        "Kimlik yitimi",
        "Yüzleri kapalı ve kalabalık içinde anonim olan taraftarlar normalde yapmayacakları biçimde vitrin kırıp yağmaya katılıyor. Hangi kavram öne çıkar?",
        [
          "Kimlik yitimi",
          "Denklik",
          "Sosyal sorumluluk normu",
          "Akraba koruma",
        ],
        0,
        "Kimlik yitimi öz farkındalık ve değerlendirilme kaygısının azalmasıyla grup normlarına uyumu güçlendirebilir."
      ),
      makeQuestion(
        "Grup kutuplaşması",
        "Başta biraz risk almaya yatkın üyelerden oluşan bir ekip kısa tartışmadan sonra çok daha riskli bir kararda birleşiyor. Bu hangi grup etkisidir?",
        [
          "Grup kutuplaşması",
          "Sosyal kaytarma",
          "Sorumluluğun dağılması",
          "Kendini açma",
        ],
        0,
        "Grup kutuplaşması, grup tartışmasının başlangıçtaki eğilimi daha uç hale getirmesidir."
      ),
      makeQuestion(
        "Grupdüşün",
        "Çok bağlı bir yönetim ekibi, dış uzmanları dinlemiyor, başarısızlık ihtimalini küçümsüyor, itiraz edenleri susturuyor ve herkes hemfikir sanıyor. Bu tablo hangisine en yakındır?",
        [
          "Grupdüşün",
          "Salt maruz kalma",
          "Karşılıklılık",
          "Bilişsel Zihin Kuramı",
        ],
        0,
        "Grupdüşün, mutabakat arayışının alternatifleri gerçekçi değerlendirmeyi bastırdığı sargın iç gruplarda görülür."
      ),
      makeQuestion(
        "Grupdüşünü önleme",
        "Bir lider, toplantıda kendi tercihini açıklamadan önce karşıt görüşleri istiyor, bir üyeyi şeytanın avukatı yapıyor ve dış uzman çağırıyor. Amaç hangi riski azaltmaktır?",
        [
          "Grupdüşün",
          "Sosyal değiş-tokuş",
          "Akraba koruma",
          "Yakınlık etkisi",
        ],
        0,
        "Tarafsız liderlik, eleştirel değerlendirme ve şeytanın avukatı atama grupdüşünü azaltmaya yönelik önerilerdir."
      ),
      makeQuestion(
        "Azınlık etkisi",
        "Toplantıda iki kişi aynı alternatif görüşü tutarlı, özgüvenli ve sakin biçimde savunuyor. Çoğunluk hemen ikna olmuyor ama kararını yeniden düşünmeye başlıyor. Bu hangi etkidir?",
        [
          "Azınlık etkisi",
          "Sosyal kaytarma",
          "Duyarsızlaşma",
          "Göreceli yoksunluk",
        ],
        0,
        "Moscovici çizgisinde tutarlı ve özgüvenli azınlık, fikir birliği illüzyonunu kırıp çoğunluğu düşünmeye zorlayabilir."
      ),
      makeQuestion(
        "Ayrımcılık",
        "Bir müdür, yaşlı çalışanların yavaş olduğuna inanıyor, onlardan hoşlanmıyor ve bu yüzden terfide sistemli olarak onları dışlıyor. Bu zincirde terfiden dışlama kısmı nedir?",
        [
          "Ayrımcılık",
          "Kalıpyargı",
          "Önyargı",
          "Salt maruz kalma",
        ],
        0,
        "Kalıpyargı bilişsel genelleme, önyargı olumsuz tutum/duygu, ayrımcılık ise davranışsal dışlama veya farklı muameledir."
      ),
      makeQuestion(
        "Kendini gerçekleştiren kehanet",
        "Bir öğretmen, belli gruptaki öğrencilerin başarısız olacağını düşünüp onlarla daha az göz teması kuruyor ve daha kısa yanıtlar veriyor. Öğrenciler de katılımı azaltınca öğretmen ilk inancının doğru çıktığını sanıyor. Bu hangi süreçtir?",
        [
          "Kendini gerçekleştiren kehanet",
          "Son teklif tahkimi",
          "Akraba koruma",
          "GRIT",
        ],
        0,
        "Kalıpyargıya dayalı beklenti davranışı değiştirip hedef kişinin performansını etkileyerek beklentiyi doğrulatabilir."
      ),
      makeQuestion(
        "Bilişsel kaynaklar",
        "Bir öğrenci kendi bölümündeki kişileri çok farklı karakterlerde görürken başka bölümdekileri 'hepsi aynı' diye değerlendiriyor. Hangi bilişsel eğilim öne çıkar?",
        [
          "Dış grubu homojen görme",
          "Kendini açma",
          "Sosyal sorumluluk",
          "Uyarılma aktarımı",
        ],
        0,
        "Sosyal kimlik ve sınıflandırma süreçleri dış grubun daha homojen, iç grubun daha çeşitli algılanmasına yol açabilir."
      ),
      makeQuestion(
        "Günah keçisi",
        "Ekonomik sıkıntı yaşayan bir topluluk, sorunların karmaşık nedenlerini konuşmak yerine göçmenleri suçlamaya başlıyor. Bu hangi motivasyonel kaynakla ilişkilidir?",
        [
          "Günah keçisi mekanizması",
          "Salt maruz kalma",
          "Kendini açma",
          "Denklik",
        ],
        0,
        "Engellenme ve göreceli yoksunluk, olumsuz duyguların daha zayıf veya hedef alınabilir dış gruba yöneltilmesine neden olabilir."
      ),
      makeQuestion(
        "Adil dünya inancı",
        "Bir kazanın mağduru için 'mutlaka dikkatsiz davranmıştır, yoksa başına gelmezdi' deniyor. Bu yorum hangi savunmayı gösterir?",
        [
          "Adil dünya inancı ve kurbanı suçlama",
          "Azınlık etkisi",
          "Sosyal kolaylaştırma",
          "Eşleşme olgusu",
        ],
        0,
        "Adil dünya inancı tehdit edildiğinde insanlar adaletsizliği bilişsel olarak özümsemek için kurbanı suçlayabilir."
      ),
      makeQuestion(
        "Adil dünya boyutları",
        "Bir araştırmada kişinin kendi hayatında adil muamele göreceğine inanması iyi oluşu daha iyi açıklarken, insanların genel olarak hak ettiğini aldığına inanmak daha sert sosyal tutumlarla ilişkili çıkıyor. Bu ayrım hangisidir?",
        [
          "Kişisel ve genel adil dünya inancı ayrımı",
          "Reaktif ve proaktif saldırganlık ayrımı",
          "Romantik ve arkadaşça aşk ayrımı",
          "Küçük ve büyük grup ayrımı",
        ],
        0,
        "Slaytlarda kişisel adil dünya inancı uyumsal sonuçları, genel adil dünya inancı ise sert sosyal tutumları daha iyi yordar."
      ),
      makeQuestion(
        "Tutsak ikilemi",
        "İki taraf konuşamadığı için her biri kendini korumak adına iş birliği yapmıyor. Sonuçta ikisi de güvenip iş birliği yapsaydı alacaklarından daha kötü sonuç alıyor. Bu hangi yapıdadır?",
        [
          "Toplumsal tuzak ve tutsak ikilemi",
          "Salt maruz kalma",
          "Sosyal kolaylaştırma",
          "Fazladan gerekçelendirme",
        ],
        0,
        "Tutsak ikileminde rasyonel görünen bireysel korunma davranışı karşılıklı kayba yol açabilir."
      ),
      makeQuestion(
        "Kamusal mülkiyet trajedisi",
        "Ortak meraya herkes birer hayvan koyarsa kaynak yenileniyor. Her çiftçi 'bir tane daha koymam fark etmez' deyince mera çöküyor. Bu hangi ikilemdir?",
        [
          "Kamusal mülkiyet trajedisi",
          "Bilişsel Zihin Kuramı",
          "Fiziksel çekicilik kalıpyargısı",
          "Bağlanma çözülmesi",
        ],
        0,
        "Paylaşılan sınırlı kaynağın bireysel çıkarla aşırı tüketilmesi kamusal mülkiyet trajedisidir."
      ),
      makeQuestion(
        "Ayna görüntüsü algıları",
        "İki siyasi grup da kendisini barışçıl ve ahlaklı, karşı tarafı saldırgan ve kötü niyetli görüyor. Yanlış algı türü hangisidir?",
        [
          "Ayna görüntüsü algıları",
          "Salt maruz kalma",
          "Kendini açma",
          "Denklik",
        ],
        0,
        "Ayna görüntüsü algılarında çatışan taraflar birbirine simetrik biçimde erdem ve kusur atfeder."
      ),
      makeQuestion(
        "Gerçekçi çatışma",
        "Robbers Cave benzeri bir kampta rastgele ayrılan iki grup, ödüllü turnuvalar başlayınca birbirini aşağılamaya, bayrak yakmaya ve kavga etmeye başlıyor. En güçlü açıklama hangisidir?",
        [
          "Kıt kaynak ve kazan-kaybet rekabeti dış grup düşmanlığını artırır.",
          "Gruplar arası temas her koşulda önyargıyı azaltır.",
          "Çatışma için biyolojik farklılık şarttır.",
          "Çekicilik kalıpyargısı grup çatışmasının tek nedenidir.",
        ],
        0,
        "Sherif'in kamp çalışmaları rekabetin grup kimliği, dış grup olumsuzluğu ve iç grup uyumunu artırabileceğini gösterir."
      ),
      makeQuestion(
        "Eşit statülü temas",
        "Bir iş yerinde farklı gruplar sık görüşüyor ama biri sürekli hizmet eden, diğeri emir veren konumda. Temas önyargıyı azaltmıyor. Hangi koşul eksiktir?",
        [
          "Eşit statülü temas",
          "Fiziksel anonimlik",
          "Uyarılma aktarımı",
          "Kişisel adil dünya inancı",
        ],
        0,
        "Temasın olumlu sonuç vermesi için eşit statü, desteklenen iş birliği ve anlamlı etkileşim önemlidir."
      ),
      makeQuestion(
        "Üstün amaçlar",
        "Düşman iki takım, tek başına çözemeyecekleri su kesintisini birlikte onarıyor. Başarıdan sonra birlikte yemek yiyor ve birbirlerine daha sıcak bakıyorlar. Bu hangi barış yapma aracıdır?",
        [
          "Üstün amaçlar",
          "Sosyal kaytarma",
          "Kurbanı suçlama",
          "Fazladan gerekçelendirme",
        ],
        0,
        "Üstün amaçlar, iki grubun ancak birlikte başarabileceği ve iş birliğini gerektiren hedeflerdir."
      ),
      makeQuestion(
        "GRIT",
        "Bir taraf önce uzlaşmacı niyetini ilan ediyor, küçük ve doğrulanabilir tavizler veriyor, karşılık davet ediyor; sömürü olursa ölçülü karşılık veriyor. Bu strateji hangisidir?",
        [
          "GRIT",
          "Ayak kapıda",
          "Sosyal kolaylaştırma",
          "Akraba koruma",
        ],
        0,
        "GRIT, gerginliği azaltmak için kademeli, karşılıklı ve ilan edilmiş uzlaşma girişimleri stratejisidir."
      ),
    ],
  },
  {
    id: "karma-final",
    title: "Test 4: Karma Final Provası",
    subtitle: "Slaytların tamamından çapraz ve vaka temelli sorular",
    duration: 30,
    questions: [
      makeQuestion(
        "Seyirci etkisini azaltma",
        "Kalabalıkta biri bayılıyor. En etkili tepki, 'birisi ambulans arasın' demek yerine 'mavi montlu arkadaş, 112'yi ara' demek oluyor. Neden?",
        [
          "Belirsizliği azaltır ve sorumluluğu belirli kişiye yükler.",
          "Sosyal kaytarmayı artırır.",
          "Kalıpyargıyı güçlendirir.",
          "Ayna görüntüsü algısı yaratır.",
        ],
        0,
        "Latane ve Darley karar ağacına göre yardım için olayın yorumlanması ve sorumluluk alınması gerekir."
      ),
      makeQuestion(
        "Atıf ve yardım",
        "İki mağdurdan biri hastalığını kontrol edemediği koşullar nedeniyle, diğeri ise kendi ihmalkarlığı nedeniyle yaşadığı söylenerek tanıtılıyor. İnsanlar ilkine daha çok yardım ediyor. Hangi süreç işler?",
        [
          "Yükleme, sempatiyi ve yardım davranışını etkiler.",
          "Salt maruz kalma yardım davranışını tamamen belirler.",
          "Akraba olmayanlara yardım imkansızdır.",
          "Kalabalık her zaman yardımı artırır.",
        ],
        0,
        "Toplumsal sorumluluk normu genellikle ihtiyacı kendi ihmaliyle açıklanmayan kişilere daha güçlü uygulanır."
      ),
      makeQuestion(
        "Medya ve biliş",
        "Şiddet içerikli dizilerden sonra bir genç, belirsiz bir omuz çarpmasını kasıtlı aşağılama olarak yorumlayıp daha önce izlediği 'hemen karşılık ver' kalıbını uyguluyor. Hangi ikili açıklama en uygundur?",
        [
          "Düşmanca atıf önyargısı ve saldırgan senaryo öğrenme",
          "Kendini açma ve denklik",
          "Eşit statülü temas ve GRIT",
          "Salt maruz kalma ve karşılıklı hoşlanma",
        ],
        0,
        "Medya şiddeti hem saldırgan senaryoları erişilebilir kılabilir hem de belirsiz durumları düşmanca yorumlamayı besleyebilir."
      ),
      makeQuestion(
        "Grup performansı",
        "Bir ekipte herkesin bireysel katkısı ölçülmeye başlanınca üretim artıyor. Değişiklik özellikle hangi sorunu azaltmıştır?",
        [
          "Sosyal kaytarma",
          "Fiziksel çekicilik kalıpyargısı",
          "Saplantılı bağlanma",
          "Akraba koruma",
        ],
        0,
        "Bireysel katkının görünür olması değerlendirilme kaygısını artırır ve sosyal kaytarmayı azaltır."
      ),
      makeQuestion(
        "Jigsaw sınıf",
        "Irksal ve akademik olarak karışık gruplarda her öğrenci konunun bir parçasının uzmanı oluyor; sonra grubuna öğretmek zorunda kalıyor. Bu düzenleme niçin etkili olabilir?",
        [
          "Eşit statülü, işbirlikçi ve birbirine bağımlı temas yaratır.",
          "Dış grup kimliğini tamamen yasaklar.",
          "Rekabeti ve ödül kıtlığını artırır.",
          "Sosyal kaytarmayı özellikle güçlendirir.",
        ],
        0,
        "Yapboz sınıf tekniği, ortak başarı için karşılıklı bağımlılık ve iş birliği oluşturur."
      ),
      makeQuestion(
        "Benzerlik ve çekim",
        "Bir arkadaş 'zıt kutuplar çeker' diyerek uzun vadeli ilişki tahmini yapıyor. Slaytlara göre daha güçlü genel bulgu hangisidir?",
        [
          "Benzer tutum, değer ve yaşam tarzı çekimi ve ilişki doyumunu daha iyi destekler.",
          "Farklılık her koşulda sevgiyi artırır.",
          "Benzerlik yalnızca kısa süreli flörtte önemlidir.",
          "Çekimde fiziksel yakınlığın hiçbir rolü yoktur.",
        ],
        0,
        "Çekim slaytlarında benzerliğin hoşlanma ve ilişki doyumu için tamamlayıcılıktan daha güçlü olduğu vurgulanır."
      ),
      makeQuestion(
        "Samimi özgecilik",
        "Bir kişi kimsenin bilmeyeceği şekilde, hiçbir karşılık beklemeden zor durumdaki birine yardım ediyor; yardımın temelinde güçlü empati olduğu görülüyor. Batson çizgisinde bu neyi destekler?",
        [
          "Samimi özgecilik olasılığını",
          "Sosyal kaytarma zorunluluğunu",
          "Kurbanı suçlamayı",
          "Grup kutuplaşmasını",
        ],
        0,
        "Batson'ın empati-özgecilik yaklaşımı, bazı yardımların başkasının iyiliğine odaklanabileceğini savunur."
      ),
      makeQuestion(
        "Karşılıklılık normu",
        "Bir öğrenciye önce küçük bir şeker ikram ediliyor. Daha sonra aynı kişi bağış isteyince öğrenci bağışa daha sıcak bakıyor. Hangi norm tetiklenmiştir?",
        [
          "Karşılıklılık normu",
          "Toplumsal tuzak",
          "Fikir birliği yanılgısı",
          "Dış grup homojenliği",
        ],
        0,
        "Karşılıklılık normu, bize yardım edenlere karşılık verme beklentisidir."
      ),
      makeQuestion(
        "Protesto ve destek",
        "Bir hak arama hareketi, vandalizm ve fiziksel çatışmaya yönelince medyada daha çok görünür oluyor ama genel halk desteği düşüyor. Slaytların çatışma kısmına göre en uygun yorum hangisi?",
        [
          "Şiddet dikkat çekebilir ama davaya desteği baltalayabilir.",
          "Şiddet içeren eylem her zaman toplumsal desteği artırır.",
          "Yanlış algılar çatışmada rol oynamaz.",
          "Grup kimliği protestolarda hiç etkili değildir.",
        ],
        0,
        "Çatışma slaytları şiddet ve vandalizmin davaya kamu desteğini azaltabileceğini vurgular."
      ),
      makeQuestion(
        "Alkol ve koruyucu özellik",
        "Aynı provokasyon ve alkol düzeyinde, eğilimsel empatisi yüksek kişi daha az saldırgan tepki veriyor. Bu sonuç hangi öneriye en çok yakındır?",
        [
          "Durumsal riskler kişisel özelliklerle etkileşir.",
          "Alkolün etkisi herkes için aynıdır.",
          "Empati yalnızca romantik ilişkilerde önemlidir.",
          "Provokasyon saldırganlıkla ilişkisizdir.",
        ],
        0,
        "Bütünleşik bakış, biyolojik ve durumsal etkilerin kişisel özelliklerle birlikte işlediğini söyler."
      ),
      makeQuestion(
        "Adalet ilkeleri",
        "Bir ekip ödülü dağıtırken bazıları 'herkes eşit pay almalı', bazıları 'en çok katkı yapan daha çok almalı', bazıları 'en çok ihtiyacı olan desteklenmeli' diyor. Bu tartışma hangi başlığa girer?",
        [
          "Algılanan adaletsizlik ve farklı adalet ilkeleri",
          "Salt maruz kalma",
          "Uyarılma aktarımı",
          "Fiziksel anonimlik",
        ],
        0,
        "Çatışma slaytlarında adaletin eşitlik, ihtiyaç veya katkıya orantı gibi farklı ilkelerle tanımlanabileceği anlatılır."
      ),
      makeQuestion(
        "Birlik içinde çeşitlilik",
        "Bir üniversite hem öğrencilerin kültürel kimliklerini görünür kılmasına izin veriyor hem de hepsini ortak akademik değerler ve kampüs aidiyeti etrafında topluyor. Bu yaklaşım hangisine yakındır?",
        [
          "Birlik içinde çeşitlilik",
          "Tam asimilasyon",
          "Kimlik yitimi",
          "Sosyal kaytarma",
        ],
        0,
        "Birlik içinde çeşitlilik, alt kimlikleri yok saymadan daha geniş paylaşılan kimlik ve değerler oluşturmayı hedefler."
      ),
      makeQuestion(
        "Fikir birliği yanılgısı",
        "Toplantıda çoğu üye kuşkulu ama kimse itiraz etmiyor. Sessizlik, herkesin desteklediği sanısını yaratıyor. Grupdüşün belirtilerinden hangisi doğar?",
        [
          "Fikir birliği yanılgısı",
          "Salt maruz kalma",
          "Akraba koruma",
          "Denklik",
        ],
        0,
        "Öz-sansürleme, görünürde itiraz olmadığı için fikir birliği yanılgısına yol açar."
      ),
      makeQuestion(
        "Moffitt yörüngeleri",
        "Bir birey çok erken çocukluktan itibaren yüksek saldırganlık, okul sorunu, akran reddi ve yetişkinlikte suç davranışı gösteriyor. Moffitt'in ayrımı açısından bu profil hangisine yakındır?",
        [
          "Yaşam boyu kalıcı yörünge",
          "Ergenlikle sınırlı yörünge",
          "Güvenli bağlanma",
          "Arkadaşça aşk",
        ],
        0,
        "Erken başlayan ve yetişkinliğe uzanan kalıcı saldırganlık yaşam boyu kalıcı yörüngeye işaret eder."
      ),
      makeQuestion(
        "Sevilen kişinin çekiciliği",
        "Başta sıradan bulunan biri, sıcak, yardımsever ve düşünceli biri olarak tanındıkça daha çekici algılanıyor. Bu bulgu hangi sonuca uyar?",
        [
          "Hoşlanılabilirlik çekicilik algısını artırabilir.",
          "Çekicilik yalnızca yüz simetrisidir.",
          "Benzerlik çekiciliği azaltır.",
          "Övgü her zaman güvensizlik yaratır.",
        ],
        0,
        "Çekim slaytlarında olumlu kişilik bilgisinin fiziksel çekicilik değerlendirmesini yükseltebildiği aktarılır."
      ),
      makeQuestion(
        "Çerçeveleme ve iş birliği",
        "Aynı sosyal ikilem oyunu 'Wall Street Oyunu' diye sunulduğunda az, 'Topluluk Oyunu' diye sunulduğunda daha çok iş birliği görülüyor. Bu fark neyi gösterir?",
        [
          "Durumun adı ve çağrıştırdığı normlar iş birliğini etkileyebilir.",
          "Ödül matrisi davranışı asla etkilemez.",
          "Sosyal ikilemlerde iletişim gereksizdir.",
          "Gruplar küçük olduğunda iş birliği azalır.",
        ],
        0,
        "Slaytlarda işbirlikçi normları çağrıştıran durum tanımlarının fedakarlığı ve ortak yararı artırabildiği anlatılır."
      ),
      makeQuestion(
        "Fazladan gerekçelendirme",
        "Çocuklar zaten keyifle yardım ettikleri bir etkinlik için sürekli ödüllendiriliyor. Bir süre sonra ödül yoksa yardım etmeyi daha az istiyorlar. Hangi kavram en uygundur?",
        [
          "Fazladan gerekçelendirme etkisi",
          "Sosyal kolaylaştırma",
          "Ayna görüntüsü algısı",
          "Kümülatif süreklilik",
        ],
        0,
        "Fazla dışsal gerekçe, kişinin davranışı içsel yardımseverlik yerine ödüle bağlamasına yol açabilir."
      ),
      makeQuestion(
        "Cinsiyet ve yardım",
        "Tehlikeli bir sokak olayında erkekler daha sık fiziksel müdahale ediyor; yakın bir arkadaşın duygusal sorununda kadınlar daha çok zaman ve empati gösteriyor. Bu sonuç için en iyi yorum hangisi?",
        [
          "Yardımda cinsiyet farkı durumla etkileşim halindedir.",
          "Erkekler her yardım türünde daha yardımseverdir.",
          "Kadınlar hiçbir durumda yardım istemez.",
          "Cinsiyet yardım davranışıyla hiç ilişkili değildir.",
        ],
        0,
        "Yardım etme slaytları cinsiyet farklarının yardımın türüne ve sosyal role göre değiştiğini belirtir."
      ),
      makeQuestion(
        "Bütünleştirici anlaşma",
        "İki kardeş tek portakal için kavga ediyor. Biri suyunu, diğeri kabuğunu istediğini söylese ikisi de tüm ihtiyacını karşılayabilecek. Arabulucunun asıl hedefi ne olmalıdır?",
        [
          "Kazan-kaybet çerçevesini kazan-kazan çıkar analizine çevirmek",
          "Tarafları hiç konuşturmadan rastgele karar vermek",
          "Her zaman portakalı iki eşit parçaya bölmek",
          "Çatışmayı daha da kişiselleştirmek",
        ],
        0,
        "Arabuluculuk, görünen pozisyonların altındaki çıkarları açığa çıkararak bütünleştirici anlaşma sağlayabilir."
      ),
      makeQuestion(
        "Adil dünya ve performans",
        "Güçlü kişisel adil dünya inancı olan bir öğrenci, sınavın adil olacağına ve emeğinin karşılığını alacağına güveniyor; durumu tehditten çok meydan okuma gibi yaşıyor. Slaytlara göre hangi sonuç beklenebilir?",
        [
          "Daha iyi başa çıkma ve performans olasılığı artabilir.",
          "Öznel iyi oluş kaçınılmaz biçimde düşer.",
          "Geleceğe yatırım motivasyonu azalır.",
          "Kişilerarası güven tamamen ortadan kalkar.",
        ],
        0,
        "Adil dünya inancı slaytlarında kişisel kaynak işlevi, başarı durumunda daha az tehdit ve daha iyi performansla ilişkilendirilir."
      ),
    ],
  },
];

const letters = ["A", "B", "C", "D"];
const app = document.querySelector("#app");
const topbarStatus = document.querySelector("#topbarStatus");
const homeButton = document.querySelector("#homeButton");

let activeExam = null;
let sessionQuestions = [];
let currentIndex = 0;
let answers = [];
let flagged = [];
let remainingSeconds = 0;
let timerId = null;
let lastResult = null;

const storageKey = "sp2-exam-best-scores";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getBestScores() {
  try {
    return JSON.parse(localStorage.getItem(storageKey)) || {};
  } catch {
    return {};
  }
}

function saveBestScore(examId, percent) {
  const scores = getBestScores();
  scores[examId] = Math.max(scores[examId] || 0, percent);
  localStorage.setItem(storageKey, JSON.stringify(scores));
}

function shuffleQuestion(question) {
  const options = question.options.map((text, originalIndex) => ({ text, originalIndex }));
  for (let index = options.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [options[index], options[swapIndex]] = [options[swapIndex], options[index]];
  }
  return {
    ...question,
    options: options.map((option) => option.text),
    answer: options.findIndex((option) => option.originalIndex === question.answer),
  };
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(Math.max(0, totalSeconds) / 60);
  const seconds = Math.max(0, totalSeconds) % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function setStatus(text) {
  topbarStatus.textContent = text;
}

function stopTimer() {
  if (timerId) {
    clearInterval(timerId);
    timerId = null;
  }
}

function startTimer() {
  stopTimer();
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    const timer = document.querySelector("#timer");
    if (timer) timer.textContent = formatTime(remainingSeconds);
    if (remainingSeconds <= 0) {
      finishExam(true);
    }
  }, 1000);
}

function renderHome() {
  stopTimer();
  activeExam = null;
  lastResult = null;
  setStatus("Hazırlık ekranı");
  const scores = getBestScores();
  const totalQuestions = exams.reduce((sum, exam) => sum + exam.questions.length, 0);
  const bestValues = Object.values(scores);
  const bestText = bestValues.length ? `%${Math.max(...bestValues)}` : "Yok";

  app.innerHTML = `
    <section class="dashboard">
      <div class="dashboard-head">
        <div>
          <p class="eyebrow">EPS204 / Sosyal Psikoloji II</p>
          <h1>Slayt temelli sınav provası</h1>
          <p class="lead">Dört ayrı test, vaka ağırlıklı çoktan seçmeli sorular ve sınav bitiminde kısa gerekçeli değerlendirme.</p>
        </div>
        <div class="summary-rack" aria-label="Sınav özeti">
          <div class="summary-pill"><strong>${exams.length}</strong><span>test</span></div>
          <div class="summary-pill"><strong>${totalQuestions}</strong><span>soru</span></div>
          <div class="summary-pill"><strong>${bestText}</strong><span>en iyi</span></div>
        </div>
      </div>
      <div class="exam-grid">
        ${exams
          .map((exam) => {
            const best = scores[exam.id];
            return `
              <article class="exam-card">
                <div>
                  <div class="meta-row">
                    <span class="chip">${exam.questions.length} soru</span>
                    <span class="chip">${exam.duration} dk</span>
                    <span class="chip">${best ? `En iyi %${best}` : "Yeni"}</span>
                  </div>
                  <h2>${escapeHtml(exam.title)}</h2>
                  <p>${escapeHtml(exam.subtitle)}</p>
                </div>
                <div class="actions">
                  <button class="btn primary" type="button" data-start="${exam.id}">Başla</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function startExam(examId) {
  activeExam = exams.find((exam) => exam.id === examId);
  if (!activeExam) return;
  sessionQuestions = activeExam.questions.map(shuffleQuestion);
  currentIndex = 0;
  answers = Array(sessionQuestions.length).fill(null);
  flagged = Array(sessionQuestions.length).fill(false);
  remainingSeconds = activeExam.duration * 60;
  lastResult = null;
  setStatus(activeExam.title);
  renderExam();
  startTimer();
}

function renderExam() {
  if (!activeExam) return;
  const question = sessionQuestions[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = ((currentIndex + 1) / sessionQuestions.length) * 100;

  app.innerHTML = `
    <section class="exam-layout">
      <div class="exam-main">
        <div class="exam-head">
          <div class="meta-row">
            <span class="chip">${escapeHtml(activeExam.title)}</span>
            <span class="chip">${answeredCount}/${sessionQuestions.length} cevaplandı</span>
          </div>
          <div class="timer" id="timer">${formatTime(remainingSeconds)}</div>
        </div>
        <div class="progress-track" aria-hidden="true">
          <div class="progress-fill" style="width: ${progress}%"></div>
        </div>
        <div class="question-kicker">
          <span class="chip">Soru ${currentIndex + 1}</span>
          <span class="chip">${escapeHtml(question.topic)}</span>
        </div>
        <h2 class="question-title">${escapeHtml(question.stem)}</h2>
        <div class="choices">
          ${question.options
            .map(
              (option, index) => `
                <button class="choice ${answers[currentIndex] === index ? "selected" : ""}" type="button" data-choice="${index}">
                  <span class="letter">${letters[index]}</span>
                  <span class="choice-text">${escapeHtml(option)}</span>
                </button>
              `
            )
            .join("")}
        </div>
        <div class="question-actions">
          <button class="btn ghost" type="button" data-prev ${currentIndex === 0 ? "disabled" : ""}>Önceki</button>
          <button class="btn ghost" type="button" data-flag>${flagged[currentIndex] ? "İşareti kaldır" : "İşaretle"}</button>
          <button class="btn" type="button" data-next ${currentIndex === sessionQuestions.length - 1 ? "disabled" : ""}>Sonraki</button>
        </div>
      </div>
      <aside class="exam-side">
        <div class="palette-title">
          <strong>Soru Paleti</strong>
          <span class="chip">${formatTime(remainingSeconds)}</span>
        </div>
        <div class="palette">
          ${sessionQuestions
            .map(
              (_, index) => `
                <button class="palette-button ${index === currentIndex ? "current" : ""} ${answers[index] !== null ? "answered" : ""} ${flagged[index] ? "flagged" : ""}" type="button" data-jump="${index}">
                  ${index + 1}
                </button>
              `
            )
            .join("")}
        </div>
        <div class="side-stats">
          <div class="side-stat"><span>Cevaplanan</span><strong>${answeredCount}</strong></div>
          <div class="side-stat"><span>Boş</span><strong>${sessionQuestions.length - answeredCount}</strong></div>
          <div class="side-stat"><span>İşaretli</span><strong>${flagged.filter(Boolean).length}</strong></div>
        </div>
        <button class="btn danger" type="button" data-finish>Bitir</button>
      </aside>
    </section>
  `;
}

function finishExam(fromTimeout = false) {
  if (!activeExam) return;
  const unanswered = answers.filter((answer) => answer === null).length;
  if (!fromTimeout && unanswered > 0) {
    const shouldFinish = window.confirm(`${unanswered} boş soru var. Sınavı bitirmek istiyor musun?`);
    if (!shouldFinish) return;
  }

  stopTimer();
  const correct = sessionQuestions.reduce(
    (sum, question, index) => sum + (answers[index] === question.answer ? 1 : 0),
    0
  );
  const percent = Math.round((correct / sessionQuestions.length) * 100);
  const usedSeconds = activeExam.duration * 60 - Math.max(0, remainingSeconds);
  saveBestScore(activeExam.id, percent);
  lastResult = { correct, percent, usedSeconds, fromTimeout };
  setStatus(`${activeExam.title} sonucu: %${percent}`);
  renderResults();
}

function getBreakdown() {
  const map = new Map();
  sessionQuestions.forEach((question, index) => {
    const item = map.get(question.topic) || { total: 0, correct: 0 };
    item.total += 1;
    if (answers[index] === question.answer) item.correct += 1;
    map.set(question.topic, item);
  });
  return [...map.entries()].map(([topic, item]) => ({
    topic,
    total: item.total,
    correct: item.correct,
    percent: Math.round((item.correct / item.total) * 100),
  }));
}

function renderResults() {
  if (!activeExam || !lastResult) return;
  const wrongItems = sessionQuestions
    .map((question, index) => ({ question, index, selected: answers[index] }))
    .filter((item) => item.selected !== item.question.answer);

  app.innerHTML = `
    <section class="result-panel">
      <div class="result-head">
        <div class="score-ring">
          <div>
            <strong>%${lastResult.percent}</strong>
            <span>${lastResult.correct}/${sessionQuestions.length} doğru</span>
          </div>
        </div>
        <div>
          <p class="eyebrow">${escapeHtml(activeExam.title)}</p>
          <h1>Sonuç</h1>
          <div class="result-meta">
            <span class="chip">${formatTime(lastResult.usedSeconds)} sürdü</span>
            <span class="chip">${wrongItems.length} yanlış/boş</span>
            <span class="chip">${lastResult.fromTimeout ? "Süre bitti" : "Tamamlandı"}</span>
          </div>
        </div>
      </div>
      <div class="breakdown">
        ${getBreakdown()
          .map(
            (row) => `
              <div class="breakdown-row">
                <strong>${escapeHtml(row.topic)}</strong>
                <div class="mini-track"><div class="mini-fill" style="width: ${row.percent}%"></div></div>
                <span>${row.correct}/${row.total}</span>
              </div>
            `
          )
          .join("")}
      </div>
      <div class="actions">
        <button class="btn primary" type="button" data-retry>Tekrar çöz</button>
        <button class="btn ghost" type="button" data-home>Ana ekran</button>
      </div>
      <div class="review-list">
        ${
          wrongItems.length
            ? wrongItems
                .map(({ question, index, selected }) => {
                  const selectedText =
                    selected === null ? "Boş" : `${letters[selected]} - ${question.options[selected]}`;
                  const correctText = `${letters[question.answer]} - ${question.options[question.answer]}`;
                  return `
                    <article class="review-item">
                      <span class="chip">Soru ${index + 1} / ${escapeHtml(question.topic)}</span>
                      <h3>${escapeHtml(question.stem)}</h3>
                      <p class="answer-line"><strong>Senin cevabın:</strong> ${escapeHtml(selectedText)}</p>
                      <p class="answer-line"><strong>Doğru cevap:</strong> ${escapeHtml(correctText)}</p>
                      <p class="explain">${escapeHtml(question.explain)}</p>
                    </article>
                  `;
                })
                .join("")
            : `<div class="empty-state">Yanlış ya da boş soru yok.</div>`
        }
      </div>
    </section>
  `;
}

app.addEventListener("click", (event) => {
  const start = event.target.closest("[data-start]");
  if (start) {
    startExam(start.dataset.start);
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice && activeExam) {
    answers[currentIndex] = Number(choice.dataset.choice);
    renderExam();
    return;
  }

  if (event.target.closest("[data-prev]") && currentIndex > 0) {
    currentIndex -= 1;
    renderExam();
    return;
  }

  if (event.target.closest("[data-next]") && activeExam && currentIndex < sessionQuestions.length - 1) {
    currentIndex += 1;
    renderExam();
    return;
  }

  if (event.target.closest("[data-flag]") && activeExam) {
    flagged[currentIndex] = !flagged[currentIndex];
    renderExam();
    return;
  }

  const jump = event.target.closest("[data-jump]");
  if (jump && activeExam) {
    currentIndex = Number(jump.dataset.jump);
    renderExam();
    return;
  }

  if (event.target.closest("[data-finish]")) {
    finishExam(false);
    return;
  }

  if (event.target.closest("[data-retry]") && activeExam) {
    startExam(activeExam.id);
    return;
  }

  if (event.target.closest("[data-home]")) {
    renderHome();
  }
});

homeButton.addEventListener("click", () => {
  if (activeExam && !lastResult) {
    const leave = window.confirm("Sınav devam ediyor. Ana ekrana dönmek istiyor musun?");
    if (!leave) return;
  }
  renderHome();
});

renderHome();
