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
  {
    id: "saldirganlik-derin",
    title: "Test 5: Saldırganlık Derinleşme",
    subtitle: "Kuramları karıştıran, gelişim ve medya vakaları",
    duration: 30,
    questions: [
      makeQuestion(
        "Freud ve hidrolik model",
        "Bir danışman, öğrencinin içindeki saldırgan enerjinin mutlaka bir çıkış bulacağını; spor, sanat veya üretken bir uğraşla dönüştürülmezse patlayacağını savunuyor. Bu yorum hangi yaklaşıma en yakındır?",
        [
          "Psikanalitik hidrolik model ve yüceltme",
          "Sosyal sorumluluk normu",
          "Eşit statülü temas",
          "Kendini açma döngüsü",
        ],
        0,
        "Freudcu hidrolik benzetmede saldırgan enerji birikir; yüceltme bu enerjinin toplumsal olarak kabul edilebilir yollara aktarılmasıdır."
      ),
      makeQuestion(
        "Etoloji ve insan",
        "Bir mahalledeki gençler, kendi sokaklarına başka grubun girmesini tehdit gibi görüp bölgeyi savunmaya çalışıyor. Bir araştırmacı bunu bölgesel savunma ve hakimiyet çerçevesinde yorumluyor. Hangi yaklaşım öne çıkar?",
        [
          "Etolojik yaklaşım",
          "Denklik kuramı",
          "Fazladan gerekçelendirme",
          "Sosyal kolaylaştırma",
        ],
        0,
        "Etoloji saldırganlığı bölge savunması, hakimiyet hiyerarşisi ve uyum sağlayıcı işlevlerle açıklar."
      ),
      makeQuestion(
        "Sosyobiyoloji",
        "Bir sunumda saldırganlığın sınırlı kaynaklara erişim, eş seçimi ve türün devamı açısından evrimsel işlevleri olduğu anlatılıyor. Bu açıklama hangi çerçevededir?",
        [
          "Sosyobiyolojik yaklaşım",
          "Çoğulcu cehalet",
          "Ayna görüntüsü algısı",
          "Bağlanma çözülmesi",
        ],
        0,
        "Sosyobiyoloji sosyal davranışların evrimsel işlevlerine, kaynak ve cinsel rekabet gibi süreçlere odaklanır."
      ),
      makeQuestion(
        "Kışkırtıcı ipuçları",
        "Trafikte korna sesi, sıcak hava ve alaycı bir el hareketi aynı anda gelen bir sürücü, normalden daha çabuk öfkeleniyor. Berkowitz çizgisinde en iyi yorum hangisidir?",
        [
          "Tatsız olaylar ve saldırgan ipuçları saldırgan eğilimi artırabilir.",
          "Saldırganlık için mutlaka bilinçli plan gerekir.",
          "Saldırgan davranış sadece çocuklukta öğrenilir.",
          "Saldırganlık yalnızca yakın ilişkilerde görülür.",
        ],
        0,
        "Berkowitz, yalnız engellenmenin değil, sıcaklık ve kışkırtma gibi tatsız uyaranların da saldırganlığı tetikleyebileceğini savunur."
      ),
      makeQuestion(
        "Operant koşullanma",
        "Bir çocuk kardeşine bağırdığında oyuncak ona veriliyor. Aile 'sussun yeter' diyerek her seferinde aynı sonucu yaratıyor. Zamanla bağırma artıyor. Bu hangi öğrenme sürecidir?",
        [
          "Saldırgan davranışın pekiştirilmesi",
          "Salt maruz kalma",
          "Bilişsel denklik",
          "Kurbanı tazmin etme",
        ],
        0,
        "Davranış ödül veya istenen sonuçla takip edilirse tekrarlanma olasılığı artar; burada saldırganlık pekiştirilmektedir."
      ),
      makeQuestion(
        "Klasik koşullanma",
        "Bir öğrenci her defasında alay edildiği koridoru görünce henüz kimse bir şey yapmadan geriliyor ve saldırgan savunmaya geçiyor. Bu örnek hangi öğrenme mantığıyla daha iyi açıklanır?",
        [
          "Koridorun olumsuz duyguyla koşullanması",
          "Eşleşme olgusu",
          "Son teklif tahkimi",
          "Üstün kimlik",
        ],
        0,
        "Nötr bir bağlam tekrar tekrar olumsuz deneyimle eşleşirse tek başına uyarılma ve savunmacı tepki doğurabilir."
      ),
      makeQuestion(
        "Ayna nöronlar",
        "Bir bebek yetişkinin yüz ifadesini ve basit hareketini hızla taklit ediyor. Saldırganlık öğrenimi tartışmasında bu bulgu hangi fikri destekler?",
        [
          "İnsanlarda gözlenen davranışı taklit etmeye biyolojik yatkınlık bulunabilir.",
          "Taklit yalnızca yetişkinlikte ortaya çıkar.",
          "Model davranışı gözlemek öğrenmeyi engeller.",
          "Saldırganlık hiçbir zaman gözlemle öğrenilmez.",
        ],
        0,
        "Ayna nöronlar ve erken taklit eğilimi, gözlenen davranışların öğrenilmesini kolaylaştıran bir altyapı olarak yorumlanır."
      ),
      makeQuestion(
        "GAM girdileri",
        "Bir kişi uykusuz, sıcak bir odada, hakaret içeren mesajlar okuyor ve zaten düşmanca kişilik eğilimi taşıyor. Genel Saldırganlık Modeli açısından bu öğeler neyi oluşturur?",
        [
          "Kişisel ve durumsal girdi faktörleri",
          "Sadece sonuç değerlendirmesi",
          "Yalnızca grup normu",
          "İlişkisel denklik",
        ],
        0,
        "GAM kişi özellikleri ve durum ipuçlarının içsel duygu, düşünce ve uyarılmayı etkilediğini söyler."
      ),
      makeQuestion(
        "Reaktif saldırganlık",
        "Bir çocuk oyun sırasında yanlışlıkla düşürülünce düşünmeden yumruk atıyor; önceden planı yok, tepki ani ve öfke dolu. Bu saldırganlık türü hangisidir?",
        [
          "Reaktif saldırganlık",
          "Proaktif saldırganlık",
          "Dolaylı fedakarlık",
          "Kazan-kazan pazarlık",
        ],
        0,
        "Reaktif saldırganlık algılanan tehdit veya kışkırtmaya verilen ani, duygusal tepkidir."
      ),
      makeQuestion(
        "Proaktif saldırganlık",
        "Bir öğrenci, popülerlik kazanmak için zayıf gördüğü arkadaşını planlı şekilde küçük düşürüyor ve bunu statü elde etmenin yolu olarak kullanıyor. Bu davranış hangisine yakındır?",
        [
          "Proaktif saldırganlık",
          "Sadece refleksif öfke",
          "Güvenli bağlanma",
          "Toplumsal sorumluluk",
        ],
        0,
        "Proaktif saldırganlık araçsaldır; kişi bir hedefe ulaşmak için planlı biçimde zarar verir."
      ),
      makeQuestion(
        "Aile zorlayıcı döngü",
        "Anne bağırınca çocuk daha çok direniyor; çocuk direnince anne daha sert ceza veriyor. Sonunda iki taraf da birbirinin sertliğini artırıyor. Bu örüntü hangi riski anlatır?",
        [
          "Zorlayıcı ebeveynlik döngüsü",
          "Salt maruz kalma etkisi",
          "Jigsaw öğrenme",
          "GRIT stratejisi",
        ],
        0,
        "Zorlayıcı döngü, ebeveyn ve çocuğun karşılıklı tepkileriyle saldırganlığın pekişmesini anlatır."
      ),
      makeQuestion(
        "Akran reddi",
        "Saldırgan çocuk sınıfta reddediliyor, sonra kendisi gibi saldırgan akranlarla takılıyor ve saldırganlığın kabul gördüğü ortamlara giriyor. En uygun yorum hangisidir?",
        [
          "Akran reddi saldırganlık döngüsünü besleyebilir.",
          "Akran reddi saldırganlığı daima hemen azaltır.",
          "Akran etkisi yalnızca yetişkinlikte başlar.",
          "Saldırgan akran çevresi koruyucu faktördür.",
        ],
        0,
        "Slaytlarda reddedilen saldırgan çocukların saldırgan akran çevrelerine yönelerek davranışı sürdürebildiği anlatılır."
      ),
      makeQuestion(
        "Bulaşma etkisi",
        "Başta sakin olan bir öğrenci, saldırganlığın normal kabul edildiği sınıfa girdikten aylar sonra fiziksel saldırganlığı artırıyor. Bu örnek neyi gösterir?",
        [
          "Akran ortamında saldırganlık bulaşması",
          "Güvenli bağlanma",
          "Kişisel adil dünya kaynağı",
          "Eşleşme olgusu",
        ],
        0,
        "Saldırganlığa toleranslı akran ortamı özellikle düşük başlangıç düzeyindeki öğrencileri etkileyebilir."
      ),
      makeQuestion(
        "Duygu düzenleme",
        "Bir çocuk hayal kırıklığı yaşayınca dikkatini sürekli engelleyici uyarana veriyor, öfkesini dışa vuruyor ve sakinleşemiyor. Bu profil hangi saldırganlık riskine yakındır?",
        [
          "Uyumsuz öfke düzenlemesi",
          "Karşılıklılık normu",
          "Denklik ilkesi",
          "Bütünleştirici anlaşma",
        ],
        0,
        "Uyumsuz öfke düzenleme, özellikle reaktif saldırganlığı öngören duygusal risk faktörlerindendir."
      ),
      makeQuestion(
        "Zihin Kuramı",
        "Bir çocuk başkasının yanlış inanca sahip olabileceğini anlayamıyor ve her davranışı kendi gördüğü sonuçtan ibaret sanıyor. Sosyal bilgi işleme açısından hangi beceri zayıftır?",
        [
          "Bilişsel Zihin Kuramı",
          "Fiziksel çekicilik",
          "Son teklif tahkimi",
          "Sosyal kaytarma",
        ],
        0,
        "Bilişsel Zihin Kuramı başkalarının inanç, niyet ve arzularını temsil etme becerisidir."
      ),
      makeQuestion(
        "Testosteronun iki işlevi",
        "Bir araştırmacı testosteronun hem erken gelişimde beyin organizasyonunu etkilediğini hem de ergenlik/yetişkinlikte mevcut davranışı etkinleştirebildiğini söylüyor. Bu ayrım hangisidir?",
        [
          "Organizasyon ve aktivasyon işlevleri",
          "Yakınlık ve tutku işlevleri",
          "Temas ve tahkim işlevleri",
          "Uyma ve kaytarma işlevleri",
        ],
        0,
        "Testosteronun organizasyon işlevi erken gelişimsel yapılandırmayı, aktivasyon işlevi mevcut davranışsal etkiyi anlatır."
      ),
      makeQuestion(
        "Alkol beklentisi",
        "Katılımcı aslında alkolsüz içecek içiyor ama alkol aldığını sanıyor ve daha saldırgan davranıyor. Bu sonuç hangi etkiyi gösterir?",
        [
          "Alkol beklentisi etkisi",
          "Kişisel adil dünya inancı",
          "Jigsaw sınıf etkisi",
          "Eşit statü etkisi",
        ],
        0,
        "Slaytlarda alkol aldığını düşünmenin bile saldırganlığı artırabilecek beklenti etkisi yaratabildiği belirtilir."
      ),
      makeQuestion(
        "Medya korelasyonu",
        "Bir öğrenci 'medya şiddeti ile saldırganlık arasındaki ilişki küçükse önemsizdir' diyor. Slaytlardaki halk sağlığı karşılaştırmasına göre daha doğru yorum hangisidir?",
        [
          "Küçük-orta korelasyonlar geniş nüfusta önemli sonuçlara sahip olabilir.",
          "Korelasyon .20 ise hiçbir pratik anlam taşımaz.",
          "Medya etkisi sadece tek bir deneyde görülmüştür.",
          "Saldırganlık yalnızca kalıtımla belirlendiği için medya anlamsızdır.",
        ],
        0,
        "Slaytlarda medya şiddeti korelasyonlarının kabul gören halk sağlığı riskleriyle karşılaştırılabilir büyüklükte olabileceği vurgulanır."
      ),
      makeQuestion(
        "Uzunlamasına medya etkisi",
        "8 yaşında yoğun şiddet izleyen çocukların, aile ve başlangıç saldırganlığı kontrol edilse bile yetişkinlikte saldırgan/suç davranışıyla ilişkisi bulunuyor. Bu bulgu neyi güçlendirir?",
        [
          "Medya şiddetinin kümülatif uzun vadeli etkisi olabileceğini",
          "Medya etkisinin yalnızca aynı gün sürdüğünü",
          "Şiddet izleyen herkesin kesin suçlu olacağını",
          "Aile etkisinin tümüyle yok sayılması gerektiğini",
        ],
        0,
        "Uzunlamasına çalışmalar medya şiddeti maruziyetinin daha sonraki saldırganlıkla bağımsız ilişki gösterebildiğini aktarır."
      ),
      makeQuestion(
        "Müdahale seçimi",
        "Bir okul saldırganlığı azaltmak için sadece cezaya değil, medya süresini sınırlamaya, öfke düzenleme becerilerine ve aile-akran döngülerine birlikte odaklanıyor. Bu yaklaşım hangi ana fikre uyar?",
        [
          "Saldırganlık çok boyutlu olduğu için çok düzeyli müdahale gerekir.",
          "Tek bir biyolojik neden tüm saldırganlığı açıklar.",
          "Saldırganlığı azaltmak için yalnızca ağır ceza yeterlidir.",
          "Akran ve aile süreçleri saldırganlıkla ilgisizdir.",
        ],
        0,
        "Slaytların ortak sonucu saldırganlığın biyolojik, bilişsel, duygusal, sosyal ve medya etkenleriyle birlikte açıklanmasıdır."
      ),
    ],
  },
  {
    id: "yardim-etme-derin",
    title: "Test 6: Yardım Etme Derinleşme",
    subtitle: "Özgecilik, normlar, seyirci etkisi ve yardım artırma yolları",
    duration: 30,
    questions: [
      makeQuestion(
        "Sosyal değiş-tokuş",
        "Bir kişi kan bağışı kararında iğne korkusu ve zaman kaybını, kendini iyi hissetme ve suçluluk duymamayı hesaba katıyor. Bu karar hangi kurama yakındır?",
        [
          "Sosyal değiş-tokuş kuramı",
          "Grupdüşün",
          "Düşmanca atıf önyargısı",
          "Eşit statülü temas",
        ],
        0,
        "Sosyal değiş-tokuş kuramı yardım davranışını maliyet ve ödül dengesiyle açıklar."
      ),
      makeQuestion(
        "Dışsal ödül",
        "Bir şirket bağışını gizli yapmak yerine reklam kampanyasının merkezine koyuyor ve toplumsal prestij kazanıyor. Yardım motivasyonu açısından ne öne çıkar?",
        [
          "Dışsal ödül ve statü kazanımı",
          "Saf çoğulcu cehalet",
          "Fiziksel anonimlik",
          "Bilişsel Zihin Kuramı",
        ],
        0,
        "Onay, imaj ve statü gibi dışsal ödüller yardım davranışını artırabilir."
      ),
      makeQuestion(
        "İçsel ödül",
        "Gönüllü biri kimse bilmediği halde yardım ettikten sonra kendini daha değerli ve iyi hissediyor. Bu hangi yardım motivasyonudur?",
        [
          "İçsel ödül",
          "Son teklif tahkimi",
          "Sosyal kaytarma",
          "Dış grup homojenliği",
        ],
        0,
        "Yardım etmek özsaygı, iyi hissetme ve içsel doyum sağlayabilir."
      ),
      makeQuestion(
        "İyi hisset-iyilik yap",
        "Bir satış görevlisi moral yükselten bir iltifat aldıktan sonra, hemen ardından yardım isteyen kişiye daha çok zaman ayırıyor. Bu hangi bulguyla uyumludur?",
        [
          "İyi ruh hali yardım etmeyi artırabilir.",
          "Olumlu duygu yardım etmeyi daima azaltır.",
          "Yardım yalnızca suçlulukla ortaya çıkar.",
          "Mutluluk sosyal sorumluluk normunu yok eder.",
        ],
        0,
        "Yardım etme slaytlarında mutlu insanların daha yardımsever olduğuna dair güçlü bulgular anlatılır."
      ),
      makeQuestion(
        "Kötü hisset-iyilik yap",
        "Bir kişi küçük bir hata yaptıktan sonra, düşen eşyaları toplamak için normalden daha istekli davranıyor. Bu hangi senaryoya uygundur?",
        [
          "Kötü hisset-iyilik yap, özellikle suçluluk üzerinden",
          "Sosyal kaytarma",
          "Ayna görüntüsü algısı",
          "Kayıtsız bağlanma",
        ],
        0,
        "Suçluluk ve bazı olumsuz duygular, benlik imajını onarma amacıyla yardımı artırabilir."
      ),
      makeQuestion(
        "Keder istisnası",
        "Yakınını yeni kaybeden biri, çevresindeki yardım çağrılarını fark etmiyor; çünkü yoğun biçimde kendi acısına gömülmüş durumda. Bu durum hangi uyarıyla uyumludur?",
        [
          "Derin keder kendine odaklanmayı artırıp yardımı azaltabilir.",
          "Her olumsuz duygu yardımı kesin artırır.",
          "Keder sosyal sorumluluğu daima güçlendirir.",
          "Yardım davranışı duygu durumundan etkilenmez.",
        ],
        0,
        "Slaytlarda derin keder ve depresif kendine odaklanmanın yardım etmeyi sınırlayabileceği belirtilir."
      ),
      makeQuestion(
        "Toplumsal sorumluluk normu",
        "Bir kişi karşılık veremeyecek durumda olan engelli bir yabancının düşürdüğü kitapları topluyor. Hangi norm daha belirgindir?",
        [
          "Toplumsal sorumluluk normu",
          "Karşılıklılık normu",
          "Fikir birliği yanılgısı",
          "Grup kutuplaşması",
        ],
        0,
        "Toplumsal sorumluluk normu, karşılık beklemeden ihtiyaç sahiplerine yardım edilmesi gerektiği inancıdır."
      ),
      makeQuestion(
        "Yardım alma ve özsaygı",
        "Gururlu bir öğrenci, herkesin içinde yardım teklif edilince minnet yerine küçük düşmüş hissediyor. Bu hangi noktayı anlatır?",
        [
          "Yardım almak özsaygıyı tehdit edebilir.",
          "Karşılıklılık normu her zaman rahatlatır.",
          "Yardım almak statüyü kesin artırır.",
          "Özsaygı yardım alma davranışıyla ilgisizdir.",
        ],
        0,
        "Talep edilmemiş veya karşılık verilemeyen yardım, bazı kişilerde bağımlılık ve yetersizlik hissi yaratabilir."
      ),
      makeQuestion(
        "Akraba koruma",
        "Yangında insanlar önce çocuklarını ve kardeşlerini kurtarmaya çalışıyor; yabancılara yardım daha sonra geliyor. Evrimsel psikoloji açısından hangi açıklama uygundur?",
        [
          "Akraba koruma",
          "Grupdüşün",
          "Denklik ilkesi",
          "Kurbanı suçlama",
        ],
        0,
        "Akraba koruma, genetik yakınlığı olan kişilere yardım eğiliminin evrimsel açıdan avantaj sağlayabileceğini söyler."
      ),
      makeQuestion(
        "Karşılıklı özgecilik",
        "Bir kişi bugün arkadaşının taşınmasına yardım ediyor; ileride kendi ihtiyacında onun da yardım edeceğini bekliyor. Evrimsel açıklama hangisidir?",
        [
          "Karşılıklı özgecilik",
          "Fiziksel anonimlik",
          "Ayna görüntüsü",
          "Kimlik yitimi",
        ],
        0,
        "Karşılıklı özgecilikte yardım, gelecekte karşılık görme beklentisiyle sürdürülebilir."
      ),
      makeQuestion(
        "Empati-özgecilik",
        "Bir öğrenci, acı çeken kişiden kolayca uzaklaşabilecek olmasına rağmen yoğun empati duyduğu için kalıp yardım ediyor. Batson'a göre hangi açıklama güçlenir?",
        [
          "Empati samimi özgeciliği tetikleyebilir.",
          "Yardım yalnızca kaçış imkanı olmadığında olur.",
          "Empati yardım davranışını azaltır.",
          "Yardım sadece dışsal ödüle dayanır.",
        ],
        0,
        "Batson'ın yaklaşımında empati, kişinin kendi sıkıntısından çok başkasının iyiliğine odaklanan yardım doğurabilir."
      ),
      makeQuestion(
        "Fark etme aşaması",
        "Kalabalık ve gürültülü bir metroda yere düşen kişiyi birçok insan gerçekten fark etmiyor; sessiz bir sokakta ise aynı olay hemen görülüyor. Yardım karar ağacında hangi aşama etkilenmiştir?",
        [
          "Olayı fark etme",
          "Yardımı ödüllendirme",
          "Bağlanma tarzı seçme",
          "Kalıpyargı tehdidi",
        ],
        0,
        "Latane ve Darley modelinde yardımın ilk adımı olayın fark edilmesidir."
      ),
      makeQuestion(
        "Yorumlama aşaması",
        "Bir kadın 'seni tanımıyorum, uzak dur' dediğinde daha çok kişi müdahale ediyor; 'seninle neden evlendim' dediğinde daha az kişi müdahale ediyor. Fark hangi aşamayla ilgilidir?",
        [
          "Olayı acil durum olarak yorumlama",
          "Akrabalık derecesini hesaplama",
          "Ödül matrisini değiştirme",
          "Fiziksel çekicilik değerlendirme",
        ],
        0,
        "Yardım davranışı, olayın nasıl yorumlandığına ve acil durum sayılıp sayılmadığına bağlıdır."
      ),
      makeQuestion(
        "Sorumluluk alma",
        "Bir kişi kazayı görüyor ve ciddi olduğunu anlıyor; ama çevrede çok kişi olduğu için 'nasıl olsa biri arar' diye bekliyor. Hangi aşamada takılmıştır?",
        [
          "Sorumluluk alma",
          "Olayı fark etme",
          "Empati kurma",
          "Yüceltme",
        ],
        0,
        "Seyirci etkisinin kritik parçalarından biri sorumluluğun başkalarına dağılmasıdır."
      ),
      makeQuestion(
        "Şehir ve yardım",
        "Büyük şehirde yaşayanlar sürekli yardım ihtiyacı, kalabalık ve uyaran bombardımanı içinde daha seçici ve mesafeli davranıyor. Bu durum neyle açıklanabilir?",
        [
          "Algısal aşırı yükleme ve merhamet yorgunluğu",
          "Güvenli bağlanma",
          "Salt maruz kalmanın artması",
          "Denklik ilkesinin yokluğu",
        ],
        0,
        "Slaytlarda büyük şehirlerde algısal aşırı yükleme ve merhamet yorgunluğunun yardımı azaltabileceği anlatılır."
      ),
      makeQuestion(
        "Benzerlik ve yardım",
        "Bir bağış kampanyasında mağdurun aynı okuldan, aynı şehirden ve benzer yaşam öyküsünden olduğu vurgulanınca destek artıyor. Hangi etki öne çıkar?",
        [
          "Benzerlik yardım etmeyi artırabilir.",
          "Benzerlik yardım etmeyi her zaman azaltır.",
          "Yardım yalnızca akrabalara yönelir.",
          "Benzerlik sadece romantik çekimde etkilidir.",
        ],
        0,
        "Benzerlik duygudaşlığı, yakınlığı ve yardım etme isteğini artırabilir."
      ),
      makeQuestion(
        "Kişisel rica",
        "Kan bağışı afişleri az etkiliyken, bir arkadaşın doğrudan 'benimle gelir misin?' demesi bağışı artırıyor. Hangi ilke çalışır?",
        [
          "Kişisel rica sorumluluğu ve yakınlığı artırır.",
          "Anonimlik yardımı artırır.",
          "Sosyal kaytarma yardımı güçlendirir.",
          "Kalıpyargı tehdidi bağışı artırır.",
        ],
        0,
        "Slaytlarda kişisel talep, göz kontağı ve isimle hitap gibi kişiselleştirmenin yardımı artırdığı aktarılır."
      ),
      makeQuestion(
        "Benlik farkındalığı",
        "Bir deneyde aynadan kendini yeni görmüş yayalar, görmeyenlere göre yabancının kartpostalını postalamaya daha istekli oluyor. Hangi mekanizma uygundur?",
        [
          "Benlik farkındalığı özgeci ideallerle uyumu artırabilir.",
          "Ayna görmek sosyal kaytarmayı artırır.",
          "Benlik farkındalığı sorumluluğu azaltır.",
          "Yardım davranışı benlik imajından etkilenmez.",
        ],
        0,
        "Benlik farkındalığı, kişinin davranışını kendi yardımsever idealleriyle daha uyumlu hale getirebilir."
      ),
      makeQuestion(
        "Manevi kapsam",
        "Bir eğitim programı öğrencilere sadece kendi grubunu değil, uzak ve farklı grupları da ahlaki ilgi çemberine almayı öğretiyor. Amaç hangi kavramı genişletmektir?",
        [
          "Manevi kapsam",
          "Fiziksel çekicilik",
          "Reaktif saldırganlık",
          "Sosyal kaytarma",
        ],
        0,
        "Manevi kapsam, ahlaki değer ve adalet kurallarının kimleri kapsadığıyla ilgilidir."
      ),
      makeQuestion(
        "Yaparak öğrenme",
        "Çocuklar hastanedeki çocuklar için oyuncak hazırladıkça, sonraki haftalarda daha yardımsever davranmaya başlıyor. Bu hangi sosyalleştirme yoludur?",
        [
          "Yardımseverliği yaparak öğrenme",
          "Kurbanı suçlama",
          "Son teklif tahkimi",
          "Dış grup homojenliği",
        ],
        0,
        "Yardım davranışı tekrarlandıkça kişi kendini daha yardımsever algılayabilir ve bu davranış pekişebilir."
      ),
    ],
  },
  {
    id: "yakin-iliskiler-derin",
    title: "Test 7: Yakın İlişkiler Derinleşme",
    subtitle: "Çekim, aşk, bağlanma, denklik ve ayrılık süreçleri",
    duration: 30,
    questions: [
      makeQuestion(
        "Aidiyet gereksinimi",
        "Yeni bir şehre taşınan öğrenci, yakın bağlarını kaybettiğinde yalnızlık, ev özlemi ve geri çekilme yaşıyor. Bu durum hangi temel ihtiyacı gösterir?",
        [
          "Aidiyet ve kalıcı yakın ilişki ihtiyacı",
          "Sosyal kaytarma ihtiyacı",
          "Düşmanca atıf ihtiyacı",
          "Tahkim ihtiyacı",
        ],
        0,
        "Yakın ilişkiler slaytları insanların kalıcı ve destekleyici bağlar kurma ihtiyacını vurgular."
      ),
      makeQuestion(
        "Sanal dışlanma",
        "Bir çevrimiçi top oyununda iki oyuncu üçüncü kişiye pas vermeyi bırakıyor. Dışlanan kişi onları hiç tanımadığı halde incinmiş ve stresli hissediyor. Hangi bulguya uygundur?",
        [
          "Sanal dışlanma bile sosyal acı yaratabilir.",
          "Dışlanma yalnızca aile içinde acı verir.",
          "Dışlanma fiziksel acıdan daha kolay unutulur.",
          "Dışlanma her zaman yardım etmeyi artırır.",
        ],
        0,
        "Slaytlarda Cyberball benzeri sanal dışlanmanın bile duygu durumunu bozduğu anlatılır."
      ),
      makeQuestion(
        "Etkileşim beklentisi",
        "Bir öğrenci dönem boyunca aynı laboratuvar partneriyle çalışacağını öğrenince, henüz tanışmadan onu daha olumlu değerlendirmeye başlıyor. Bu hangi çekim etkenidir?",
        [
          "Etkileşim beklentisi",
          "Sosyal kaytarma",
          "Ahlaki dışlama",
          "GRIT",
        ],
        0,
        "Birisiyle gelecekte etkileşim kurma beklentisi, uyumlu ilişki ihtimali nedeniyle hoşlanmayı artırabilir."
      ),
      makeQuestion(
        "Aşinalık sınırı",
        "Bir şarkı aralıklı olarak dinlendikçe seviliyor; ama sürekli ve yoğun tekrar bıkkınlık yaratıyor. Salt maruz kalma açısından en iyi yorum hangisi?",
        [
          "Tekrar genelde sevmeyi artırır ama aralıksız aşırı tekrar bıkkınlık yaratabilir.",
          "Aşinalık her koşulda tiksinti yaratır.",
          "Salt maruz kalma yalnızca yüzlerde olur.",
          "Tekrar etki yaratmaz.",
        ],
        0,
        "Slaytlarda aşinalığın çoğu zaman hoşlanmayı artırdığı, fakat kesintisiz aşırı tekrarın bıktırabileceği belirtilir."
      ),
      makeQuestion(
        "İsim harfi etkisi",
        "İnsanlar kendi adlarında geçen harfleri veya doğum tarihlerini içeren sayıları daha olumlu değerlendiriyor. Bu hangi mekanizmanın örneğidir?",
        [
          "Aşinalık ve benlikle ilişkili salt maruz kalma",
          "Grupdüşün",
          "Kamusal mülkiyet trajedisi",
          "Kurbanı suçlama",
        ],
        0,
        "Kişinin kendi ismine ve tanıdık uyaranlara maruz kalması olumlu değerlendirme yaratabilir."
      ),
      makeQuestion(
        "İlk izlenim",
        "Kısa süreli iş görüşmelerinde adayın görünüşü, karakteri hakkında sınırlı bilgi varken değerlendirmeyi güçlü etkiliyor. Çekicilik slaytlarına göre neden?",
        [
          "Çekicilik özellikle ilk izlenimlerde güçlüdür.",
          "Çekicilik yalnızca uzun evliliklerde etkilidir.",
          "İlk izlenimler sosyal psikolojide önemsizdir.",
          "Görünüş olumlu kalıpyargı yaratmaz.",
        ],
        0,
        "Fiziksel çekicilik kalıpyargısı kısa ve hızlı temaslarda daha fazla etki gösterebilir."
      ),
      makeQuestion(
        "Evrimsel eş tercihi",
        "Bir çalışmada erkekler asgari düzeyde fiziksel çekiciliğe, kadınlar ise kaynak ve statü göstergelerine daha fazla önem veriyor; iki taraf da nezaket ve zekayı istiyor. Bu hangi çerçeveyle tartışılır?",
        [
          "Evrimsel eş tercihi açıklamaları",
          "Tutsak ikilemi",
          "Çoğulcu cehalet",
          "Sosyal kaytarma",
        ],
        0,
        "Evrimsel psikoloji, eş tercihlerinin üreme ve kaynak sağlama ipuçlarıyla ilişkisini tartışır."
      ),
      makeQuestion(
        "Zıtlık etkisi",
        "Kusursuz modellerin fotoğraflarına bakan biri, hemen ardından ortalama yüzleri daha az çekici değerlendiriyor. Bu hangi etkidir?",
        [
          "Sosyal karşılaştırmaya dayalı zıtlık etkisi",
          "Karşılıklılık normu",
          "Üstün amaç",
          "Yönetici işlev",
        ],
        0,
        "Karşılaştırma standardı aşırı yükseldiğinde sıradan uyaranlar daha olumsuz değerlendirilebilir."
      ),
      makeQuestion(
        "Algılanan benzerlik",
        "Oda arkadaşları gerçekten bazı açılardan benzemese de birbirlerini benzer algıladıkça arkadaşlıkları daha uzun sürüyor. Bu neyi gösterir?",
        [
          "Algılanan benzerlik ilişkiyi besleyebilir.",
          "Gerçek ve algılanan benzerlik ilişkisizdir.",
          "Benzerlik sadece düşmanlık yaratır.",
          "Algı uzun vadeli ilişkilerde önemsizdir.",
        ],
        0,
        "Slaytlarda gerçek benzerliğin önemli olduğu, ancak algılanan benzerliğin de güçlü rol oynadığı belirtilir."
      ),
      makeQuestion(
        "Üstü örtük taklit",
        "Garson müşterinin beden dilini hafifçe yansıttığında müşteri daha sıcak hissediyor ve bahşiş artıyor. Bu hangi çekim mekanizmasına uyar?",
        [
          "Üstü örtük taklit hoşlanmayı artırabilir.",
          "Taklit her zaman rahatsızlık yaratır.",
          "Taklit yalnızca saldırganlığı artırır.",
          "Taklit kalıpyargıyı otomatik azaltır.",
        ],
        0,
        "Benzer davranma ve hafif taklit, uyum hissi yaratarak hoşlanmayı artırabilir."
      ),
      makeQuestion(
        "Olumsuz bilgi ağırlığı",
        "Bir öğrenci kendisi hakkında sekiz olumlu yorum yapan kişiyi, yedi olumlu bir olumsuz yorum yapan kişiden daha çok seviyor. Bu hangi ilkeyle uyumludur?",
        [
          "Olumsuz bilginin daha fazla ağırlık taşıması",
          "Olumlu bilginin her zaman daha güçlü olması",
          "Sosyal kolaylaştırma",
          "Akraba koruma",
        ],
        0,
        "İnsanlar eleştiriye duyarlıdır; olumsuz bilgi seyrek ve dikkat çekici olduğu için daha fazla ağırlık taşıyabilir."
      ),
      makeQuestion(
        "İltifat yüklemesi",
        "Bir kişi gerçekçi olmayan aşırı övgü duyunca, öven kişinin çıkar elde etmeye çalıştığını düşünüp ondan soğuyor. Bu hangi sürece bağlıdır?",
        [
          "Övgünün kendini sevdirme çabasına atfedilmesi",
          "Sosyal sorumluluk normu",
          "Dış grup homojenliği",
          "Uyarılma aktarımı",
        ],
        0,
        "Övgünün samimi mi yoksa çıkar amaçlı mı olduğu yönündeki yüklemeler çekimi etkiler."
      ),
      makeQuestion(
        "Özsaygı ve onay",
        "Kısa süre önce olumsuz geri bildirim alan biri, kendisine sıcak davranan çekici kişiye normalden daha güçlü ilgi duyuyor. Bu hangi bulguyla uyumludur?",
        [
          "Onaydan mahrum kalınca kabul edilme daha ödüllendirici olabilir.",
          "Düşük özsaygı her zaman ilgiyi azaltır.",
          "Onay ihtiyacı çekimde rol oynamaz.",
          "Reddedilme romantik ilgiyi kesin engeller.",
        ],
        0,
        "Hatfield çizgisindeki bulgular, özsaygı geçici zedelendiğinde kabul görmenin daha ödüllendirici olabileceğini gösterir."
      ),
      makeQuestion(
        "Tutkulu aşk",
        "İki kişi yoğun özlem, fizyolojik uyarılma ve sürekli birlikte olma isteği yaşıyor; fakat uzun vadeli bağlılık henüz oluşmamış. Sternberg açısından hangi bileşen baskın?",
        [
          "Tutku",
          "Yalnız bağlılık",
          "Yalnız denklik",
          "Yalnız sosyal sorumluluk",
        ],
        0,
        "Tutkulu aşk güçlü fizyolojik uyarılma, özlem ve romantik çekimle karakterizedir."
      ),
      makeQuestion(
        "Tam aşk",
        "Bir çiftte güçlü yakınlık, canlı tutku ve uzun vadeli bağlılık birlikte bulunuyor. Sternberg modelinde bu durum hangisidir?",
        [
          "Tam aşk",
          "Boş aşk",
          "Arkadaşça aşk",
          "Kayıtsız bağlanma",
        ],
        0,
        "Sternberg'e göre yakınlık, tutku ve bağlılığın birlikte olduğu ilişki tam aşkı gösterir."
      ),
      makeQuestion(
        "Korkulu bağlanma",
        "Bir kişi yakınlık istiyor ama reddedilmekten korktuğu için ilişkilere yaklaşınca geri çekiliyor. Benlik ve başkaları imgesi olumsuz. Bu tarz hangisidir?",
        [
          "Korkulu bağlanma",
          "Güvenli bağlanma",
          "Tam aşk",
          "Üstün amaç",
        ],
        0,
        "Korkulu bağlanmada hem benlik hem başkaları hakkında olumsuz beklenti ve yakınlıktan kaçınma görülür."
      ),
      makeQuestion(
        "Kayıtsız bağlanma",
        "Bir kişi yakın ilişkiye yatırım yapmaktan kaçınıyor, bağımsızlığını vurguluyor ve başkalarına güvenmiyor; kendini ise yeterli görüyor. Bu hangi bağlanma tarzıdır?",
        [
          "Kayıtsız bağlanma",
          "Saplantılı bağlanma",
          "Güvenli bağlanma",
          "Arkadaşça aşk",
        ],
        0,
        "Kayıtsız bağlanmada benlik imgesi olumlu, başkaları imgesi olumsuzdur; kaçınma belirgindir."
      ),
      makeQuestion(
        "Algılanan adaletsizlik",
        "Ev işlerinin çoğunu yaptığını düşünen eş, partnerinin kendi katkısını abarttığını fark ettikçe ilişki doyumu düşüyor. Hangi ilke öne çıkar?",
        [
          "Algılanan denklik ve doyum ilişkisi",
          "Sosyal kaytarma ve seyirci etkisi",
          "Ayna görüntüsü ve GRIT",
          "Kalıpyargı tehdidi ve dışlama",
        ],
        0,
        "İlişkide adil katkı ve karşılık algısı doyumla yakından ilişkilidir."
      ),
      makeQuestion(
        "Yatırım modeli",
        "Bir kişi ilişkiden memnun değil; ancak çok zaman, ortak çevre ve gelecek planı yatırımı olduğu için hemen ayrılmıyor. Hangi süreç açıklayıcıdır?",
        [
          "İlişkiye yapılan yatırımın bağlılığı artırması",
          "Salt maruz kalmanın bıkkınlık yaratması",
          "Sosyal kaytarma",
          "Kurbanı suçlama",
        ],
        0,
        "Yatırım, seçenekler ve doyum ilişkiyi sürdürme kararında etkilidir."
      ),
      makeQuestion(
        "Gottman oranı",
        "Bir çift tartışıyor ama eleştiriyi gülümseme, dokunma, onay ve mizahla dengeliyor; olumlu etkileşimler olumsuzlardan açıkça fazla. Bu neyi destekler?",
        [
          "Sağlıklı ilişkide olumlu etkileşimlerin olumsuzlara üstün gelmesi gerekir.",
          "Sağlıklı ilişkide hiç çatışma olmamalıdır.",
          "Olumsuz etkileşimler ilişkiyi daima güçlendirir.",
          "Yakın ilişki doyumu iletişimden etkilenmez.",
        ],
        0,
        "Gottman bulguları başarılı ilişkilerde olumlu etkileşimlerin olumsuzları belirgin biçimde aşmasını vurgular."
      ),
    ],
  },
  {
    id: "grup-surecleri-derin",
    title: "Test 8: Grup Süreçleri Derinleşme",
    subtitle: "Uyma, verimlilik, kutuplaşma, grupdüşün ve azınlık etkisi",
    duration: 30,
    questions: [
      makeQuestion(
        "Grup tanımı",
        "Otobüs durağında bekleyen insanlar yan yana duruyor ama etkileşim yok. Aynı kişiler geciken otobüs için birlikte çözüm aramaya başlayınca 'biz' dili oluşuyor. En temel grup koşulu hangisidir?",
        [
          "Etkileşim",
          "Fiziksel yakınlık tek başına",
          "Mutlak benzerlik",
          "Anonimlik",
        ],
        0,
        "Slaytlarda bir topluluğun grup olmasında en az koşulun etkileşim olduğu vurgulanır."
      ),
      makeQuestion(
        "Grup işlevleri",
        "Bir öğrenci kulübü üyelerine aidiyet, sosyal kimlik, güvenlik ve tek başına yapamayacakları etkinlikleri gerçekleştirme imkanı sağlıyor. Bu örnek neyi anlatır?",
        [
          "Grupların psikolojik ve işlevsel gereksinimleri karşılamasını",
          "Grupların her zaman verimliliği düşürmesini",
          "Grupların sadece çatışma yaratmasını",
          "Aidiyetin saldırganlığı zorunlu artırmasını",
        ],
        0,
        "Gruplar aidiyet, başarı, sosyal kimlik ve güvenlik gibi gereksinimleri karşılayabilir."
      ),
      makeQuestion(
        "Orta statü uyumu",
        "Bir grupta en çok uyma davranışını, gruba kısmen kabul edilmiş ama yerini sağlamlaştırmak isteyen üyeler gösteriyor. Bu hangi statü düzeyidir?",
        [
          "Orta statüdekiler",
          "En yüksek statüdekiler",
          "Gruba hiç değer vermeyen dış üyeler",
          "Tamamen anonim üyeler",
        ],
        0,
        "Dittes ve Kelley bulgularında orta statüdekiler kabulü sağlamlaştırmak için norma daha çok uyar."
      ),
      makeQuestion(
        "Alt statü uyumu",
        "Grubu pek sevmeyen ama başka seçeneği olmadığı için grup içindeyken norma uyan, yalnızken norma aldırmayan üye hangi uyma biçimini gösterir?",
        [
          "İtaat düzeyinde uyma",
          "Benimseme",
          "Azınlık etkisi",
          "Grup kutuplaşması",
        ],
        0,
        "Alt statüdeki üyelerde uyma çoğu zaman içten benimseme değil, gruptan atılmamak için itaat olabilir."
      ),
      makeQuestion(
        "Yüksek statü uyumu",
        "Grubun sevilen lideri normlara orta statüdeki üyeler kadar titizlikle uymuyor; çünkü yeri zaten sağlam. Bu bulgu neyi anlatır?",
        [
          "Yüksek statü güveni uyma baskısını azaltabilir.",
          "Liderler her zaman en fazla uyar.",
          "Statü uyma davranışıyla ilişkili değildir.",
          "Yüksek statü sosyal kaytarmayı imkansız kılar.",
        ],
        0,
        "Yüksek statülü üyeler kazanacak statüleri zaten olduğu için normlara daha az bağımlı davranabilir."
      ),
      makeQuestion(
        "Tutum değişimi",
        "Bir konuşma grup normuyla aynı yönde olduğunda üyeleri daha çok etkiliyor; normla ters düştüğünde grup değişimi engelliyor. Bu neyi gösterir?",
        [
          "Grup tutum değişimini norm yönüne göre artırabilir veya engelleyebilir.",
          "Gruplar tutum değişimini hiçbir zaman etkilemez.",
          "Norma ters mesajlar her zaman daha etkileyicidir.",
          "Tutum değişimi yalnız bireysel süreçtir.",
        ],
        0,
        "Grup, normuyla uyumlu tutum değişimini destekleyebilir, ters yöndeki değişimi baskılayabilir."
      ),
      makeQuestion(
        "Toplamsal iş",
        "Halat çekmede grubun toplam gücü, bireysel güçlerin toplamından düşük çıkıyor. Önce koordinasyon şüphesi var; sonra tek tek çabanın da azaldığı gösteriliyor. Hangi kavram doğrulanır?",
        [
          "Sosyal kaytarma",
          "Sosyal kolaylaştırma",
          "Azınlık etkisi",
          "Kendini açma",
        ],
        0,
        "Ringelmann çizgisindeki bulgular ortak işlerde bireysel çabanın azalabileceğini gösterir."
      ),
      makeQuestion(
        "Kaytarmayı azaltma",
        "Bir takımda üyeler arkadaş, görev zorlu ve herkes kendi katkısını vazgeçilmez görüyor. Bu koşullar hangi sonucu doğurabilir?",
        [
          "Sosyal kaytarma azalır.",
          "Sosyal kaytarma kesin artar.",
          "Grupdüşün kaçınılmaz olur.",
          "Fiziksel anonimlik artar.",
        ],
        0,
        "Zorlu görev, grup özdeşleşmesi, arkadaşlık ve vazgeçilmezlik algısı sosyal kaytarmayı azaltabilir."
      ),
      makeQuestion(
        "Değerlendirilme kaygısı",
        "Bir piyanist iyi bildiği parçayı kalabalık önünde daha iyi çalıyor ama yeni öğrendiği parçayı karıştırıyor. Uyarılma neden böyle iki yönlü etki yapar?",
        [
          "Başkalarının varlığı baskın tepkiyi güçlendirir.",
          "Başkalarının varlığı her görevi iyileştirir.",
          "Değerlendirilme kaygısı performansla ilgisizdir.",
          "Sosyal kolaylaştırma yalnız hayvanlarda görülür.",
        ],
        0,
        "Sosyal uyarılma doğru veya yanlış baskın tepkiyi güçlendirir."
      ),
      makeQuestion(
        "Salt varlık",
        "Bir kişi yalnızca izlenmese bile odada başka insanların bulunmasıyla uyarılıyor ve basit görevde hızlanıyor. Sosyal kolaylaştırmanın hangi kaynağı tartışılır?",
        [
          "Salt varlık",
          "Akraba koruma",
          "Denklik",
          "Adil dünya inancı",
        ],
        0,
        "Sosyal kolaylaştırmanın kaynakları arasında değerlendirilme kaygısı, dikkat dağılması ve salt varlık sayılır."
      ),
      makeQuestion(
        "Anonimlik",
        "Halloween'de grup halinde ve kimliği sorulmadan gelen çocuklar, yalnız ve kimliği bilinen çocuklara göre daha çok fazladan şeker alıyor. Hangi süreç etkilidir?",
        [
          "Anonimlik ve kimlik yitimi",
          "Üstün amaç",
          "Kendini açma",
          "Karşılıklılık normu",
        ],
        0,
        "Diener'in çalışmaları grup ve anonimlik koşullarında öz denetimin azalabileceğini gösterir."
      ),
      makeQuestion(
        "Uyarıcı aktiviteler",
        "Kalabalık bir gösteride birlikte bağırma, ritmik alkış ve dans arttıkça bireysel öz farkındalık azalıyor ve grup davranışı güçleniyor. Bu hangi koşuldur?",
        [
          "Kimlik yitimini artıran uyarıcı ve dikkat dağıtan etkinlikler",
          "Denklik sağlayan ritüeller",
          "Fikir birliği yanılgısını azaltan teknikler",
          "Eşit statülü temas koşulları",
        ],
        0,
        "Uyarıcı ve dikkat dağıtan grup etkinlikleri öz farkındalığı azaltıp grup normlarına uyumu güçlendirebilir."
      ),
      makeQuestion(
        "Bilgisel etki",
        "Bir tartışmada aynı görüşü destekleyen yeni kanıtlar ve örnekler peş peşe paylaşılıyor. Üyeler başlangıçtaki görüşlerini daha uç biçimde savunuyor. Kutuplaşmanın hangi açıklaması öne çıkar?",
        [
          "Bilgisel etki",
          "Fiziksel anonimlik",
          "Kayıtsız bağlanma",
          "Akraba koruma",
        ],
        0,
        "Bilgisel etki, tartışma sırasında baskın görüşü destekleyen argümanların birikmesiyle kutuplaşmayı açıklar."
      ),
      makeQuestion(
        "Normatif etki",
        "Bir grup içinde herkesin kendisinden biraz daha cesur olduğunu sanan kişi, beğenilmek için daha da cesur bir pozisyon açıklıyor. Kutuplaşmanın hangi açıklaması uygundur?",
        [
          "Normatif etki ve sosyal karşılaştırma",
          "Yönetici işlev",
          "Toplumsal sorumluluk",
          "Kişisel adil dünya",
        ],
        0,
        "Normatif etki, kabul görme ve referans gruba uygun görünme isteğiyle görüşlerin uçlaşmasını açıklar."
      ),
      makeQuestion(
        "Günlük kutuplaşma",
        "Sadece aynı politik görüştekileri takip eden kişi, aylar içinde başlangıçtakinden daha sert ve uç ifadeler kullanmaya başlıyor. Bu hangi grup sürecidir?",
        [
          "Grup kutuplaşması",
          "Sosyal kolaylaştırma",
          "Kendini açma",
          "Eşleşme olgusu",
        ],
        0,
        "Benzer görüşlü gruplarda tekrar eden tartışmalar var olan eğilimleri güçlendirebilir."
      ),
      makeQuestion(
        "Grupdüşün zemini",
        "Sıkı bağlı, dış görüşlere kapalı, güçlü liderli ve yüksek stres altındaki ekip hızlıca tek seçeneğe kilitleniyor. Janis'e göre bu zemin ne üretir?",
        [
          "Grupdüşün riskini",
          "Sosyal kaytarma imkansızlığını",
          "Salt maruz kalma etkisini",
          "Güvenli bağlanmayı",
        ],
        0,
        "Sargın grup, izolasyon, yönlendirici liderlik ve kriz baskısı grupdüşün riskini artırır."
      ),
      makeQuestion(
        "Akıl muhafızları",
        "Bir ekip üyesi, projenin başarısız olabileceğini gösteren raporları liderin moralini bozmasın diye toplantıya sokmuyor. Bu grupdüşün belirtisi hangisidir?",
        [
          "Akıl muhafızlığı",
          "Sosyal kolaylaştırma",
          "Azınlık tutarlılığı",
          "Karşılıklılık normu",
        ],
        0,
        "Akıl muhafızları grubu rahatsız edici veya kararı sorgulatıcı bilgilerden korur."
      ),
      makeQuestion(
        "Zarar görmezlik yanılgısı",
        "Bir kriz ekibi, tüm uyarılara rağmen 'bize bir şey olmaz, plan kusursuz' diyerek riskleri küçümsüyor. Hangi grupdüşün belirtisidir?",
        [
          "Zarar görmezlik yanılgısı",
          "Toplumsal sorumluluk",
          "Dış grup arkadaşlığı",
          "Yaparak öğrenme",
        ],
        0,
        "Grupdüşünde aşırı iyimserlik ve risk uyarılarını görmezden gelme zarar görmezlik yanılgısıdır."
      ),
      makeQuestion(
        "Azınlık tutarlılığı",
        "Bir azınlık üyesi her toplantıda aynı gerekçeyi sakin, tutarlı ve özgüvenli biçimde savunuyor; çoğunluk zamanla alternatifleri düşünmeye başlıyor. Etkinin kaynağı nedir?",
        [
          "Tutarlılık ve özgüven",
          "Anonimlik ve kalabalık",
          "Ödül matrisi",
          "İlişkisel çekicilik",
        ],
        0,
        "Azınlık etkisi için tutarlılık, özgüven ve çoğunluktan ayrılma belirleyici olabilir."
      ),
      makeQuestion(
        "Muhalefetin faydası",
        "Bir ekip, samimi bir muhalif sayesinde ilk fikrine körü körüne bağlanmak yerine daha yaratıcı alternatifler üretiyor. Bu neyi gösterir?",
        [
          "Azınlık görüşü karar kalitesini artırabilir.",
          "Muhalefet her zaman grubu bozar.",
          "Fikir ayrılığı mutlaka sosyal kaytarma yaratır.",
          "Tek seslilik daima en iyi karardır.",
        ],
        0,
        "Azınlıkların sesini duyurması çoğunluğu seçenekleri yeniden değerlendirmeye ve yaratıcı düşünmeye zorlayabilir."
      ),
    ],
  },
  {
    id: "catismalar-derin",
    title: "Test 9: Çatışma ve Uzlaşma Derinleşme",
    subtitle: "Sosyal ikilemler, rekabet, temas, işbirliği ve iletişim",
    duration: 30,
    questions: [
      makeQuestion(
        "Sıfır toplamlı olmayan oyun",
        "İki departman bütçe için kavga ediyor; oysa ortak proje yapılırsa ikisi de daha yüksek kaynak alabilecek. Bu durum hangi oyun türüne yakındır?",
        [
          "Sıfır toplamlı olmayan karma güdülü durum",
          "Zorunlu kazan-kaybet oyunu",
          "Salt bireysel ödül oyunu",
          "Tek taraflı tahkim oyunu",
        ],
        0,
        "Sıfır toplamlı olmayan durumlarda iki taraf birlikte kazanabilir veya birlikte kaybedebilir."
      ),
      makeQuestion(
        "Toplumsal tuzak",
        "Her şirket filtre takmazsa kısa vadede para kazanıyor; hepsi böyle yapınca hava kirliliği artıyor ve herkes zarar görüyor. Bu hangi kavramdır?",
        [
          "Toplumsal tuzak",
          "Salt maruz kalma",
          "Bilişsel Zihin Kuramı",
          "Güvenli bağlanma",
        ],
        0,
        "Toplumsal tuzakta taraflar kendi çıkarını rasyonel biçimde izlerken ortak zarar üretir."
      ),
      makeQuestion(
        "Düzenleme",
        "Balık stokları tükenmesin diye av sezonu ve kota belirleniyor. Sosyal ikilemi çözme yollarından hangisi uygulanır?",
        [
          "Düzenleme ve kural koyma",
          "Kutuplaşmayı artırma",
          "Anonimliği artırma",
          "Yardımı gizleme",
        ],
        0,
        "Ortak kaynakların korunmasında kurallar, kotalar ve yaptırımlar sosyal ikilemi azaltabilir."
      ),
      makeQuestion(
        "Küçük grup etkisi",
        "Apartman ölçeğinde su tasarrufu kampanyası başarılı olurken, büyük şehir ölçeğinde herkes 'benim katkım fark etmez' diyor. Hangi çözüm ilkesi vurgulanır?",
        [
          "Grubu küçük tutmak sorumluluk hissini artırabilir.",
          "Grup büyüdükçe sorumluluk mutlaka artar.",
          "Büyük gruplarda iletişim gereksizdir.",
          "Küçük gruplar sosyal kimlik oluşturamaz.",
        ],
        0,
        "Küçük gruplarda bireyler etkilerini ve sorumluluklarını daha fazla hissedebilir."
      ),
      makeQuestion(
        "İletişim ve güven",
        "İkilem oyununda taraflar konuşamadığında iş birliği düşüyor; konuşup ortak norm kurduklarında iş birliği artıyor. Hangi çözüm yolu işler?",
        [
          "İletişim",
          "Fiziksel anonimlik",
          "Kurbanı suçlama",
          "Düşmanca atıf",
        ],
        0,
        "İletişim grup kimliği, güven, norm ve karşılıklı taahhüt oluşturarak iş birliğini artırabilir."
      ),
      makeQuestion(
        "Kazançları değiştirme",
        "Şehir, tek kişi araç kullanmayı pahalılaştırıp araç paylaşımına indirim sağlıyor. Sosyal ikilemi çözmek için ne yapılmıştır?",
        [
          "Ödül ve maliyet matrisi değiştirilmiştir.",
          "Kimlik yitimi artırılmıştır.",
          "Temas eşitsizleştirilmiştir.",
          "Kutuplaşma teşvik edilmiştir.",
        ],
        0,
        "Kişisel çıkarla ortak yararı uyumlu hale getirmek için ödüller ve maliyetler değiştirilebilir."
      ),
      makeQuestion(
        "Temel atıf hatası",
        "Çatışmada iki taraf da kendi sertliğini 'mecbur kaldık' diye açıklarken, karşı tarafın sertliğini 'onlar kötü niyetli' diye açıklıyor. Hangi hata görülür?",
        [
          "Temel atıf hatası ve kendini haklı çıkarma",
          "Salt maruz kalma",
          "Güvenli bağlanma",
          "Sosyal kolaylaştırma",
        ],
        0,
        "Taraflar kendi davranışlarını durumla, karşı tarafın davranışını kötü eğilimle açıklama eğilimindedir."
      ),
      makeQuestion(
        "Değişen güdüler",
        "Bir yatırımcı önce kar etmek için, sonra kaybını azaltmak için, en sonunda itibarını kurtarmak için zararlı projeye devam ediyor. Çatışma slaytlarına göre bu neyi gösterir?",
        [
          "Güdülerin zamanla değişip çatışmayı sürdürebileceğini",
          "İnsanların her zaman aynı güdüyle davrandığını",
          "Sosyal ikilemlerde itibarın önemsiz olduğunu",
          "Kaybın her zaman iş birliği doğurduğunu",
        ],
        0,
        "Çatışmalarda başlangıç güdüleri zamanla kaybı azaltma ve yüz kurtarma güdülerine dönüşebilir."
      ),
      makeQuestion(
        "Rekabet ve tehdit",
        "Bir ülkede ekonomik tehdit algısı arttıkça göçmen karşıtı duygu ve sert cezaya destek artıyor. Çatışma kaynaklarından hangisi öne çıkar?",
        [
          "Kıt kaynak ve tehdit algısıyla rekabet",
          "Kendini açma",
          "Denklikli aşk",
          "Akraba koruma",
        ],
        0,
        "Kıt iş, konut, kaynak veya tehdit algısı gruplar arası düşmanlığı artırabilir."
      ),
      makeQuestion(
        "Robbers Cave aşaması",
        "Kampın ilk haftasında iki grup ayrı etkinliklerle kendi içinde bağ kuruyor, isim ve semboller geliştiriyor. Bu aşama neyi hazırlar?",
        [
          "Grup kimliği ve sonraki rekabet zemini",
          "Doğrudan uzlaşma",
          "Tam asimilasyon",
          "Sosyal kaytarma yokluğu",
        ],
        0,
        "Sherif çalışmalarında önce iç grup kimliği oluşmuş, sonra rekabetle dış grup düşmanlığı artmıştır."
      ),
      makeQuestion(
        "Algılanan adaletsizlik",
        "Genç çalışanlar ücretin üretkenliğe göre, yaşlı çalışanlar kıdeme göre verilmesini adil buluyor. Çatışmanın kaynağı nedir?",
        [
          "Katkının ve adalet ilkesinin farklı tanımlanması",
          "Salt maruz kalma",
          "Fiziksel çekicilik",
          "Ayna nöronlar",
        ],
        0,
        "İnsanlar adaleti farklı ilkelerle tanımladığında algılanan adaletsizlik çatışma yaratabilir."
      ),
      makeQuestion(
        "Güç ve adalet",
        "Bir kurumda en güçlü grup, kendi aldığı yüksek payı 'hak edilmiş' sayan kuralları normalleştiriyor. Bu durum hangi saptamaya yakındır?",
        [
          "Sosyal gücü olanlar adalet kurallarını kendi lehine tanımlayabilir.",
          "Güç adalet algısını hiç etkilemez.",
          "Adalet algısı kültürden bağımsızdır.",
          "Güçlü gruplar her zaman eşitliği seçer.",
        ],
        0,
        "Slaytlarda sosyal güce sahip olanların aldıklarını hak ettiklerine başkalarını ikna edebildiği anlatılır."
      ),
      makeQuestion(
        "Önyargı kör noktası",
        "Bir tartışmada her iki taraf da 'biz objektifiz, onların görüşü ideolojik önyargıdan ibaret' diyor. Bu hangi yanlış algıya yakındır?",
        [
          "Önyargı kör noktası",
          "Güvenli bağlanma",
          "İçsel ödül",
          "Sosyal kolaylaştırma",
        ],
        0,
        "Önyargı kör noktası, kişinin kendi yargılarının önyargıdan etkilenmediğini, karşı tarafın ise etkilendiğini sanmasıdır."
      ),
      makeQuestion(
        "Basit düşünme",
        "Kriz tırmandıkça liderin söylemi 'biz tamamen iyiyiz, onlar tamamen kötü' düzeyine iniyor; ara çözümler düşünülmüyor. Hangi süreç vardır?",
        [
          "Gerginlikte basitleşmiş düşünme",
          "Kendini açma",
          "Denklik",
          "Salt maruz kalma",
        ],
        0,
        "Çatışma beklentisi rasyonel ve karmaşık düşünmeyi zorlaştırıp basit biz-onlar kalıplarını artırabilir."
      ),
      makeQuestion(
        "Temasın sınırı",
        "Düşman iki grup sadece aynı salona konuluyor; ortak amaç yok, kaygı yüksek ve statüler eşit değil. Temas düşmanlığı azaltmıyor. Neden?",
        [
          "Her temas değil, uygun koşullu temas önyargıyı azaltır.",
          "Temas hiçbir koşulda işe yaramaz.",
          "Temas için iş birliği zararlıdır.",
          "Statü farkı temasın etkisini artırır.",
        ],
        0,
        "Olumlu temas için eşit statü, iş birliği, destek ve kişisel etkileşim gibi koşullar önemlidir."
      ),
      makeQuestion(
        "Arkadaşlık genellemesi",
        "Bir kişi dış gruptan biriyle yakın arkadaş oluyor; arkadaşının grup kimliğini de fark ettiği için olumlu tutumu o grubun geneline yayılıyor. Temas kuramı açısından hangi şart önemlidir?",
        [
          "Arkadaşlığın grup üyeliğiyle birlikte algılanması",
          "Grup kimliğinin tamamen inkar edilmesi",
          "Temasın yalnızca rekabet içinde olması",
          "Kişisel temasın hiç olmaması",
        ],
        0,
        "Olumlu temasın genellenmesi için arkadaş hem birey olarak sevilmeli hem de dış grubu temsil ettiği fark edilmelidir."
      ),
      makeQuestion(
        "Ortak dış tehdit",
        "Bir doğal afet sırasında farklı sosyal gruplar birlikte hayatta kalmaya çalışıyor ve geçici olarak daha güçlü 'biz' duygusu geliştiriyor. Bu hangi süreçtir?",
        [
          "Ortak dış tehdidin bağlılık oluşturması",
          "Sosyal kaytarma",
          "Kurbanı suçlama",
          "Fazladan gerekçelendirme",
        ],
        0,
        "Ortak tehdit, grup üyelerini ve bazen daha geniş toplulukları birleştirebilir."
      ),
      makeQuestion(
        "Başarısız işbirliği",
        "Düşman iki grup ortak hedefte birlikte çalışıyor ama başarısızlığı birbirine yüklüyor. Sonuçta düşmanlık daha da artıyor. Bu hangi uyarıdır?",
        [
          "İşbirliğinin başarılı olması ve başarısızlığın tek tarafa yüklenmemesi önemlidir.",
          "Her işbirliği otomatik barış getirir.",
          "Üstün amaçlar başarısızlıkta bile düşmanlığı azaltır.",
          "Temasın sonucu başarısızlıktan etkilenmez.",
        ],
        0,
        "Slaytlarda başarısız işbirliğinin, taraflar başarısızlığı birbirine yüklerse çatışmayı kötüleştirebileceği belirtilir."
      ),
      makeQuestion(
        "Arabuluculuk",
        "Bir arabulucu taraflara taviz verdiklerinde zayıf görünmeyecekleri bir çerçeve sunuyor ve çıkarlarını açıklatıyor. Temel işlev hangisidir?",
        [
          "Kazan-kaybet algısını kazan-kazan arayışına çevirmek",
          "Tarafları daha uç pozisyona itmek",
          "İletişimi kesmek",
          "Sorumluluğu dağıtmak",
        ],
        0,
        "Arabuluculuk, iletişimi yapılandırıp tarafların çıkarlarını anlamasını ve bütünleştirici çözümler bulmasını kolaylaştırır."
      ),
      makeQuestion(
        "Son teklif tahkimi",
        "İki taraf aşırı taleplerle tahkimciyi etkilemeye çalışıyor. Sistem değiştirilip hakem yalnızca iki son tekliften birini seçecek deniyor. Bu neden makul teklifleri artırır?",
        [
          "Aşırı teklifin tümüyle kaybetme riskini yükseltir.",
          "Tarafları daha aşırı olmaya ödüllendirir.",
          "Hakemin iki teklifi birleştirmesini sağlar.",
          "İletişimi gereksiz hale getirir.",
        ],
        0,
        "Son teklif tahkimi tarafları makul teklif vermeye iter; çünkü aşırı teklif tamamen reddedilebilir."
      ),
    ],
  },
  {
    id: "karma-zor",
    title: "Test 10: Zor Karma Prova",
    subtitle: "Kavramları birbirinden ayırmaya zorlayan final denemesi",
    duration: 35,
    questions: [
      makeQuestion(
        "Kavram ayrımı",
        "Bir kişi 'yaşlılar teknolojiden anlamaz' diye düşünüyor, yaşlı çalışanlara karşı soğuk hissediyor ve onları projeye almıyor. Bu sırayla hangi üçlüdür?",
        [
          "Kalıpyargı, önyargı, ayrımcılık",
          "Önyargı, ayrımcılık, kalıpyargı",
          "Ayrımcılık, kalıpyargı, önyargı",
          "Kalıpyargı, sosyal kaytarma, GRIT",
        ],
        0,
        "Kalıpyargı bilişsel genelleme, önyargı olumsuz değerlendirme, ayrımcılık davranışsal dışlamadır."
      ),
      makeQuestion(
        "Kalıpyargı tehdidi",
        "Bir öğrenci sınavdan önce grubunun bu alanda başarısız olduğu imasının yapıldığını duyuyor ve performansı düşüyor. Bu sonuç hangi kavrama uygundur?",
        [
          "Kalıpyargı tehdidi",
          "Eşleşme olgusu",
          "GRIT",
          "Akraba koruma",
        ],
        0,
        "Kalıpyargı tehdidi, kişinin grubu hakkındaki olumsuz kalıpyargının performans durumunda baskı yaratmasıdır."
      ),
      makeQuestion(
        "Adil dünya paradoksu",
        "Bir kişi masum kurbanı tazmin edebiliyorsa yardım ediyor; tazmin edemiyorsa kurbanın hatalarını aramaya başlıyor. Bu örüntü neyi gösterir?",
        [
          "Adalet gerçek yollarla sağlanamazsa psikolojik savunma devreye girebilir.",
          "Adil dünya inancı her zaman yardımı azaltır.",
          "Kurbanı suçlama sadece önyargıyla ilgilidir.",
          "Tazmin imkanı kurban algısını etkilemez.",
        ],
        0,
        "Adil dünya inancı tehdit edildiğinde kişi adaleti gerçekçi olarak onaramazsa kurbanı suçlama gibi bilişsel savunmalara yönelebilir."
      ),
      makeQuestion(
        "Kişisel kaynak",
        "Kişisel adil dünya inancı yüksek biri, günlük haksızlıklarla baş ederken daha az çaresiz hissediyor ve genel iyi oluşu daha yüksek. Bu hangi hipoteze uygundur?",
        [
          "Kişisel kaynak hipotezi",
          "Sadece tampon hipotezi",
          "Sosyal kaytarma hipotezi",
          "Grupdüşün hipotezi",
        ],
        0,
        "Kaynak hipotezi, adil dünya inancının günlük olaylarla başa çıkmada genel bir kişisel kaynak gibi işlemesini anlatır."
      ),
      makeQuestion(
        "Risk algısı",
        "Adil dünya inancı güçlü bir kişi 'iyi bir insan olduğum için soygun gibi dış riskler bana daha az olur' diye düşünüyor. Bu hangi etkiyle uyumludur?",
        [
          "Adil dünya inancının dış risklerde iyimser tampon etkisi",
          "Yönetici işlevin saldırganlığı azaltması",
          "Sosyal kaytarma",
          "Eşleşme olgusu",
        ],
        0,
        "Slaytlarda adil dünya inancının özellikle başkaları veya kader tarafından kontrol edilen dış risklerde iyimserlik sağlayabileceği belirtilir."
      ),
      makeQuestion(
        "Yardım ve adil dünya",
        "Adil dünya inancı güçlü biri, iç grup üyesi ve masum görülen mağdura yardım ediyor; ama 'kendi suçu' dediği mağdura yardım etmiyor. Hangi iki süreç kesişir?",
        [
          "Adil dünya inancı ve yardımda sorumluluk yüklemesi",
          "Sosyal kolaylaştırma ve sosyal kaytarma",
          "Tutku ve bağlılık",
          "Son teklif tahkimi ve GRIT",
        ],
        0,
        "Yardım etme, mağdurun sorumluluğuna ilişkin yüklemelerden ve adil dünya savunmasından etkilenebilir."
      ),
      makeQuestion(
        "Sosyal kolaylaştırma-kaytarma ayrımı",
        "Bir yüzücü kalabalık önünde bireysel derecesini iyileştiriyor; ama ekip çalışmasında katkısı görünmeyince çabasını azaltıyor. İki süreç sırasıyla hangileridir?",
        [
          "Sosyal kolaylaştırma ve sosyal kaytarma",
          "Sosyal kaytarma ve sosyal kolaylaştırma",
          "Kimlik yitimi ve GRIT",
          "Kendini açma ve denklik",
        ],
        0,
        "İzleyici varlığı bireysel baskın tepkiyi güçlendirebilir; ortak işte bireysel katkı görünmezse kaytarma artabilir."
      ),
      makeQuestion(
        "Anonimlik ve norm",
        "Online anonim forumda kişiler daha kaba davranıyor; fakat başka bir anonim toplulukta norm yardımlaşma olduğu için insanlar daha çok destek veriyor. Kimlik yitimi için en doğru yorum hangisidir?",
        [
          "Kimlik yitimi mevcut grup normuna uyumu iyi ya da kötü yönde artırabilir.",
          "Kimlik yitimi her zaman saldırganlık üretir.",
          "Anonimlik norm etkisini tamamen yok eder.",
          "Anonimlik sadece fiziksel kalabalıkta görülür.",
        ],
        0,
        "Kimlik yitimi öz denetimi azaltıp grup normlarına uyumu güçlendirebilir; normun içeriği önemlidir."
      ),
      makeQuestion(
        "Çekim ve yardım kesişimi",
        "Bir erkek, çekici bulduğu yabancıya yardım etmeye daha istekli oluyor; yardımın arkasında özgecilik kadar iyi görünme ve yakınlaşma motivasyonu da var. Hangi yorum en dengelidir?",
        [
          "Yardım davranışı dışsal ödül ve çekim motivasyonlarıyla karışabilir.",
          "Çekicilik yardım davranışını asla etkilemez.",
          "Yardım yalnızca samimi özgeciliktir.",
          "Çekim yalnızca evlilik doyumunu etkiler.",
        ],
        0,
        "Yardım davranışı bazen onay, statü veya çekici kişiye yakınlaşma gibi dışsal ödüllerle de güdülenebilir."
      ),
      makeQuestion(
        "Duygu ve yardım ayrımı",
        "Mutlu kişi yardım ediyor; suçlu kişi de yardım ediyor. Ama yoğun yas yaşayan kişi kendine dönük olduğu için yardım etmiyor. Buradan hangi sonuç çıkar?",
        [
          "Duygu durumunun yardıma etkisi duygunun türüne ve odaklanmaya bağlıdır.",
          "Tüm olumsuz duygular yardımı artırır.",
          "Sadece olumlu duygu yardım doğurur.",
          "Duygular yardım davranışını etkilemez.",
        ],
        0,
        "İyi ruh hali ve suçluluk yardımı artırabilir; derin keder gibi kendine odaklı durumlar yardımı sınırlayabilir."
      ),
      makeQuestion(
        "Yakınlık ve çatışma",
        "Komşular sık karşılaştıkları için arkadaş olabilir; ama gürültü ve ortak alan sorunları nedeniyle düşman da olabilirler. Yakınlık için en doğru ifade hangisidir?",
        [
          "Yakınlık etkileşim fırsatı yaratır; çoğu zaman hoşlanmayı, bazen çatışmayı artırabilir.",
          "Yakınlık yalnızca romantik aşk yaratır.",
          "Yakınlık daima düşmanlık üretir.",
          "Yakınlık sosyal psikolojide önemsizdir.",
        ],
        0,
        "Yakınlık beğenmeyi güçlü biçimde yordar, fakat sık temas aynı zamanda çatışma fırsatı da yaratabilir."
      ),
      makeQuestion(
        "Benzerlik ve önyargı",
        "Bir kişi başka ırktan ama değerleri kendisine çok benzeyen biriyle çalışmayı, kendi ırkından ama değerleri zıt biriyle çalışmaya tercih ediyor. Bu neyi gösterir?",
        [
          "Algılanan değer benzerliği grup sınırlarını aşan çekim yaratabilir.",
          "Irk kategorisi her zaman değer benzerliğinden güçlüdür.",
          "Benzerlik yalnızca aynı grup içinde işler.",
          "Değerler kişilerarası çekimde rol oynamaz.",
        ],
        0,
        "Slaytlarda düşünce benzerliğinin ırksal farklılıkları aşarak hoşlanmayı artırabileceği örneklenir."
      ),
      makeQuestion(
        "Temas sıralaması",
        "Bir program önce farklı grupları birey olarak tanıştırıyor, sonra grup kimliklerini kabul ettiriyor, en sonunda ortak kimliği güçlendiriyor. Bu yaklaşım hangi öneriye uyar?",
        [
          "Çeşitliliği önce küçümseyip sonra kabul edip aşmak",
          "Grup kimliğini baştan düşmanlaştırmak",
          "Teması yalnızca rekabete dayandırmak",
          "Ortak kimliği tamamen yasaklamak",
        ],
        0,
        "Temas slaytlarında önyargıyı azaltmak için grup çeşitliliğini önce kişisel ilişkiyle yumuşatıp sonra kabul ederek aşma fikri anlatılır."
      ),
      makeQuestion(
        "Uzlaşma stratejisi ayrımı",
        "Bir taraf koşulsuz teslim olmuyor; küçük uzlaşmacı adımları ilan edip uyguluyor, karşılık bekliyor ve sömürüye ölçülü karşılık veriyor. Bu neden sadece 'yumuşama' değildir?",
        [
          "Çünkü GRIT hem uzlaşmacı hem de sömürüyü caydırıcıdır.",
          "Çünkü GRIT tüm tavizleri gizli yapar.",
          "Çünkü GRIT iletişimi keser.",
          "Çünkü GRIT karşılıklılığı reddeder.",
        ],
        0,
        "GRIT uzlaşmacı niyet ve karşılıklılığı içerirken, istismara açık koşulsuz teslimiyeti savunmaz."
      ),
      makeQuestion(
        "Saldırganlık ve çatışma",
        "Bir taraf karşı tarafın cezalandırmasını savunma değil saldırı olarak algılıyor ve daha sert misilleme yapıyor. Bu döngü hangi çatışma ilkesine uyar?",
        [
          "Misilleme algısı çatışmayı tırmandırabilir.",
          "Ceza her zaman iş birliği doğurur.",
          "Karşı tarafın algısı çatışmada önemsizdir.",
          "Saldırganlık sadece bireysel öfkeyle ilgilidir.",
        ],
        0,
        "Çatışmalarda taraflar kendi cezalarını savunma, karşı tarafınkini saldırı gibi görerek tırmanma döngüsüne girebilir."
      ),
      makeQuestion(
        "Medya ve duyarsızlaşma ayrımı",
        "Bir genç şiddet sahnesine artık fizyolojik tepki vermiyor; bu, şiddeti onayladığını açıkça söylemesinden farklı bir bulgu. Hangi kavram daha doğru?",
        [
          "Duyarsızlaşma",
          "Kalıpyargı tehdidi",
          "Fikir birliği yanılgısı",
          "Denklik",
        ],
        0,
        "Duyarsızlaşma, şiddete verilen duygusal/fizyolojik tepkinin azalmasıdır; bilinçli onaydan farklıdır."
      ),
      makeQuestion(
        "Gelişim ve etiketleme",
        "Okul öncesi dönemde kısa süreli fiziksel saldırganlık görülen bir çocuğa hemen 'kalıcı suçlu' etiketi yapıştırılıyor. Slaytlara göre en doğru uyarı hangisidir?",
        [
          "Bazı saldırganlık yaşa göre normatif olabilir; kalıcılık ve risk örüntüsü izlenmelidir.",
          "Her okul öncesi saldırganlık yetişkin suçunu kesin belirler.",
          "Saldırganlık çocuklukta hiç görülmez.",
          "Erken davranışların gelişimsel anlamı yoktur.",
        ],
        0,
        "Saldırganlık çocuklukta belirli ölçüde normatif olabilir; sorun yüksek, kalıcı ve çoklu risklerle birlikte görüldüğünde büyür."
      ),
      makeQuestion(
        "Bağlanma ve yardım",
        "Güvenli bağlanan biri, yakınlarının acısına duyarlı ama ilişkide boğulma korkusu yaşamadan destek verebiliyor. Hangi genel sonuç uygundur?",
        [
          "Güvenli bağlanma empati ve istikrarlı yakınlığı destekleyebilir.",
          "Güvenli bağlanma yardım etmeyi engeller.",
          "Güvenli bağlanma kıskançlığı artırır.",
          "Bağlanma yardım davranışıyla hiçbir biçimde kesişmez.",
        ],
        0,
        "Güvenli bağlanma başkalarına güven, yakınlık ve empatiyle ilişkilendirilebilir."
      ),
      makeQuestion(
        "Sınav tipi ayırt etme",
        "Bir soru 'Aşağıdakilerden hangisi sosyal kaytarma örneğidir?' diye soruyor. En iyi seçenek hangisi olur?",
        [
          "Grup projesinde katkısı görünmeyen öğrencinin daha az çalışması",
          "Seyirci önünde iyi öğrenilmiş şiiri daha akıcı okuma",
          "Karşı tarafı kötü niyetli görüp aynı kusurları atfetme",
          "Yabancıya kişisel rica ile yardım isteme",
        ],
        0,
        "Sosyal kaytarma, ortak işte bireysel katkı görünmediğinde çabanın azalmasıdır."
      ),
      makeQuestion(
        "Final bütünleştirme",
        "Bir sınıfta şiddet içerikli medya, saldırgan akran normu, düşük öz denetim ve düşmanca atıf birlikte görülüyor. En bilimsel sonuç hangisidir?",
        [
          "Tek neden aramak yerine çoklu risklerin birleşik etkisi değerlendirilmelidir.",
          "Sadece medya tüm davranışı açıklar.",
          "Sadece genetik tüm davranışı açıklar.",
          "Saldırganlık sosyal bağlamdan bağımsızdır.",
        ],
        0,
        "Dersin genel çizgisi sosyal davranışları tek nedene indirgemeden çoklu etkenlerle açıklamaktır."
      ),
    ],
  },
];

const concepts = [
  {
    term: "Sosyal kolaylaştırma",
    explanation:
      "Başkalarının varlığı baskın tepkiyi güçlendirir; iyi öğrenilmiş görevlerde performansı artırabilir, zor görevlerde düşürebilir.",
  },
  {
    term: "Sosyal kaytarma",
    explanation:
      "İnsanların ortak hedef için çalışırken, bireysel katkıları görünmediğinde daha az çaba göstermesidir.",
  },
  {
    term: "Kimlik yitimi",
    explanation:
      "Kalabalık, anonimlik ve uyarılma içinde öz farkındalık ile değerlendirilme kaygısının azalmasıdır.",
  },
  {
    term: "Grup kutuplaşması",
    explanation:
      "Grup tartışmasının, üyelerin başlangıçtaki eğilimini daha uç ve güçlü hale getirmesidir.",
  },
  {
    term: "Grupdüşün",
    explanation:
      "Sargın gruplarda uyum arayışının eleştirel değerlendirmeyi ve alternatifleri bastırmasıdır.",
  },
  {
    term: "Azınlık etkisi",
    explanation:
      "Tutarlı, özgüvenli ve kararlı bir azınlığın çoğunluğu yeniden düşünmeye zorlayabilmesidir.",
  },
  {
    term: "Kalıpyargı",
    explanation:
      "Bir sosyal grubun üyeleri hakkında aşırı genellenmiş bilişsel beklenti veya inançtır.",
  },
  {
    term: "Önyargı",
    explanation:
      "Bir gruba veya grup üyesine yönelik çoğunlukla olumsuz değerlendirme ve tutum eğilimidir.",
  },
  {
    term: "Ayrımcılık",
    explanation:
      "Bir kişiye grup üyeliği nedeniyle davranışsal olarak farklı, haksız veya dışlayıcı muamele edilmesidir.",
  },
  {
    term: "Kalıpyargı tehdidi",
    explanation:
      "Kişinin grubu hakkındaki olumsuz kalıpyargıyı doğrulama kaygısı nedeniyle performansının düşmesidir.",
  },
  {
    term: "Adil dünya inancı",
    explanation:
      "İnsanların herkesin hak ettiğini aldığı ve aldığını hak ettiği bir dünyaya inanma eğilimidir.",
  },
  {
    term: "Kurbanı suçlama",
    explanation:
      "Adaletsizliği anlamlandırmak için mağdurun başına gelenlerden mağdurun kendisini sorumlu tutmaktır.",
  },
  {
    term: "Düşmanca atıf önyargısı",
    explanation:
      "Belirsiz davranışları bile karşı tarafın düşmanca niyetiyle açıklama eğilimidir.",
  },
  {
    term: "Uyarılma aktarımı",
    explanation:
      "Bir olaydan kalan fizyolojik uyarılmanın sonraki olaya yanlış atfedilerek tepkiyi güçlendirmesidir.",
  },
  {
    term: "Genel Saldırganlık Modeli",
    explanation:
      "Kişisel ve durumsal girdilerin düşünce, duygu ve uyarılma üzerinden saldırgan kararı şekillendirdiğini söyler.",
  },
  {
    term: "Reaktif saldırganlık",
    explanation:
      "Algılanan tehdit veya kışkırtmaya verilen ani, öfkeli ve savunmacı saldırgan tepkidir.",
  },
  {
    term: "Proaktif saldırganlık",
    explanation:
      "Statü, kazanç veya kontrol gibi bir hedefe ulaşmak için planlı biçimde kullanılan araçsal saldırganlıktır.",
  },
  {
    term: "Duyarsızlaşma",
    explanation:
      "Şiddete tekrar tekrar maruz kalma sonucunda şiddete verilen duygusal veya fizyolojik tepkinin azalmasıdır.",
  },
  {
    term: "Zorlayıcı döngü",
    explanation:
      "Sert ebeveynlik ile çocuğun karşıt davranışının birbirini besleyerek saldırganlığı pekiştirmesidir.",
  },
  {
    term: "Akran reddi",
    explanation:
      "Saldırgan çocuğun akranları tarafından dışlanması ve bu dışlanmanın saldırgan çevrelere yönelimi artırmasıdır.",
  },
  {
    term: "Yakınlık",
    explanation:
      "İnsanların yollarının sık kesişmesi ve etkileşim fırsatı bulması, hoşlanmayı güçlü biçimde artırabilir.",
  },
  {
    term: "Salt maruz kalma",
    explanation:
      "Bir uyarıcıya tekrar tekrar maruz kalmanın, o uyarıcıyı daha tanıdık ve olumlu hale getirmesidir.",
  },
  {
    term: "Benzerlik",
    explanation:
      "Tutum, değer, yaşam tarzı veya davranış benzerliği kişilerarası çekimi ve ilişki doyumunu artırır.",
  },
  {
    term: "Eşleşme olgusu",
    explanation:
      "İnsanların çekicilik, statü ve diğer değerler bakımından kendilerine denk kişilere yönelme eğilimidir.",
  },
  {
    term: "Fiziksel çekicilik kalıpyargısı",
    explanation:
      "Çekici kişilere daha zeki, başarılı, sosyal ve olumlu özellikler atfetme eğilimidir.",
  },
  {
    term: "Tutkulu aşk",
    explanation:
      "Yoğun özlem, fizyolojik uyarılma ve romantik çekimin baskın olduğu aşk biçimidir.",
  },
  {
    term: "Arkadaşça aşk",
    explanation:
      "Tutkunun zayıf, yakınlık ve bağlılığın güçlü olduğu sıcak, güvenli ve uzun soluklu sevgidir.",
  },
  {
    term: "Güvenli bağlanma",
    explanation:
      "Kişinin hem kendine hem başkalarına olumlu bakarak yakınlıktan ve bağımlılıktan aşırı kaygı duymamasıdır.",
  },
  {
    term: "Saplantılı bağlanma",
    explanation:
      "Kişinin kendini değersiz görüp başkalarından yoğun kabul beklediği, kaygılı ve sahiplenici bağlanmadır.",
  },
  {
    term: "Kendini açma",
    explanation:
      "Kişinin özel duygu, düşünce ve yaşantılarını uygun düzeyde paylaşması; karşılıklı açılma yakınlığı artırır.",
  },
  {
    term: "Denklik",
    explanation:
      "İlişkide elde edilenlerin, ilişkiye katılan emek ve kaynaklarla orantılı algılanmasıdır.",
  },
  {
    term: "Seyirci etkisi",
    explanation:
      "Acil durumda başka izleyicilerin varlığı, fark etme, yorumlama ve sorumluluk alma olasılığını düşürebilir.",
  },
  {
    term: "Çoğulcu cehalet",
    explanation:
      "Belirsiz durumda herkesin diğerlerinin sakinliğini durumun ciddi olmadığına kanıt sanmasıdır.",
  },
  {
    term: "Sorumluluğun dağılması",
    explanation:
      "Kalabalıkta her bireyin yardım etme sorumluluğunu başkalarının da üstleneceğini düşünerek daha az hissetmesidir.",
  },
  {
    term: "Karşılıklılık normu",
    explanation:
      "Bize yardım eden kişiye yardım etme ve yapılan iyiliğe karşılık verme sosyal beklentisidir.",
  },
  {
    term: "Toplumsal sorumluluk normu",
    explanation:
      "Karşılık beklemeden, yardıma ihtiyacı olan ve kendi kusuruyla bu durumda olmayan kişilere yardım edilmesi gerektiği inancıdır.",
  },
  {
    term: "Empati-özgecilik",
    explanation:
      "Empatinin, kişinin kendi ödülünden çok başkasının iyiliğine odaklanan yardım davranışı doğurabileceği görüşüdür.",
  },
  {
    term: "Toplumsal tuzak",
    explanation:
      "Tarafların kendi çıkarlarını izlerken uzun vadede herkes için zararlı ortak sonuç üretmesidir.",
  },
  {
    term: "Tutsak ikilemi",
    explanation:
      "İki tarafın güvenmediği için iş birliği yapmadığı ve ikisinin de iş birliğinden daha kötü sonuç aldığı sosyal ikilemdir.",
  },
  {
    term: "Kamusal mülkiyet trajedisi",
    explanation:
      "Paylaşılan sınırlı kaynağın herkes tarafından fazla tüketilmesiyle kaynağın çökmesidir.",
  },
  {
    term: "Ayna görüntüsü algıları",
    explanation:
      "Çatışan tarafların kendini ahlaklı ve savunmada, karşı tarafı kötü niyetli ve saldırgan görmesidir.",
  },
  {
    term: "Eşit statülü temas",
    explanation:
      "Önyargıyı azaltmak için gruplar arası temasın eşit konumda, desteklenen ve işbirlikçi olması gerektiğini anlatır.",
  },
  {
    term: "Üstün amaç",
    explanation:
      "Çatışan grupların ancak birlikte çalışarak ulaşabileceği, iki tarafı da kapsayan ortak hedeftir.",
  },
  {
    term: "Jigsaw sınıf",
    explanation:
      "Her öğrencinin bilginin bir parçasında uzmanlaşıp diğerlerine öğretmek zorunda olduğu işbirlikçi öğrenme tekniğidir.",
  },
  {
    term: "GRIT",
    explanation:
      "Gerginliği azaltmak için küçük, ilan edilmiş, doğrulanabilir ve karşılıklılık davet eden uzlaşmacı adımlar stratejisidir.",
  },
  {
    term: "Arabuluculuk",
    explanation:
      "Üçüncü tarafın, tarafların çıkarlarını açıklamasına ve kazan-kazan çözüm bulmasına yardım etmesidir.",
  },
  {
    term: "Son teklif tahkimi",
    explanation:
      "Hakemin iki tarafın son teklifinden yalnızca birini seçtiği, aşırı talepleri azaltan tahkim türüdür.",
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
let revealed = [];
let feedbackMode = "exam";
let remainingSeconds = 0;
let timerId = null;
let lastResult = null;
let conceptIndex = 0;
let activeGame = null;
let conceptTouchStartX = null;

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

function shuffleArray(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

function sampleConcepts(count, excludeTerm = null) {
  return shuffleArray(concepts.filter((concept) => concept.term !== excludeTerm)).slice(0, count);
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
  activeGame = null;
  lastResult = null;
  setStatus("Hazırlık ekranı");
  const scores = getBestScores();
  const totalQuestions = exams.reduce((sum, exam) => sum + exam.questions.length, 0);
  const bestValues = Object.values(scores);
  const bestText = bestValues.length ? `%${Math.max(...bestValues)}` : "Yok";
  const concept = concepts[conceptIndex];

  app.innerHTML = `
    <section class="dashboard">
      <div class="dashboard-head">
        <div>
          <p class="eyebrow">EPS204 / Sosyal Psikoloji II</p>
          <h1>Slayt temelli sınav provası</h1>
          <p class="lead">Önce kavram kartlarını oku, sonra oyunlarla kavramları kilitle ve istersen 10 denemelik sınav moduna geç.</p>
        </div>
        <div class="summary-rack" aria-label="Sınav özeti">
          <div class="summary-pill"><strong>${exams.length}</strong><span>test</span></div>
          <div class="summary-pill"><strong>${totalQuestions}</strong><span>soru</span></div>
          <div class="summary-pill"><strong>${bestText}</strong><span>en iyi</span></div>
        </div>
      </div>
      <section class="concept-zone" aria-label="Kavram kartları">
        <div class="section-head">
          <div>
            <p class="eyebrow">Kavram Bölümü</p>
            <h2>Kartları oku, sonra oyunla pekiştir</h2>
          </div>
          <span class="chip">${concepts.length} kavram</span>
        </div>
        <div class="concept-layout">
          <div class="concept-reader">
            <div class="concept-stage">
              <button class="round-nav" type="button" data-concept-prev aria-label="Önceki kavram">‹</button>
              <article class="concept-card" data-concept-card>
                <span class="chip">${conceptIndex + 1}/${concepts.length}</span>
                <h3>${escapeHtml(concept.term)}</h3>
                <p>${escapeHtml(concept.explanation)}</p>
              </article>
              <button class="round-nav" type="button" data-concept-next aria-label="Sonraki kavram">›</button>
            </div>
            <div class="concept-actions">
              <button class="btn ghost" type="button" data-concept-prev>Önceki</button>
              <button class="btn" type="button" data-concept-random>Rastgele kart</button>
              <button class="btn primary" type="button" data-concept-next>Sonraki</button>
            </div>
          </div>
          <div class="concept-games">
            <article>
              <span class="chip">Oyun 1</span>
              <h3>Eşleştirme</h3>
              <p>Kavramı doğru açıklamayla eşleştir.</p>
              <button class="btn primary" type="button" data-game-start="match">Başla</button>
            </article>
            <article>
              <span class="chip">Oyun 2</span>
              <h3>Boşluk doldurma</h3>
              <p>Açıklamadaki boşluğa uygun kavramı seç.</p>
              <button class="btn primary" type="button" data-game-start="blank">Başla</button>
            </article>
            <article>
              <span class="chip">Oyun 3</span>
              <h3>Doğru / Yanlış</h3>
              <p>Kavram ve açıklama eşleşmesi doğru mu karar ver.</p>
              <button class="btn primary" type="button" data-game-start="tf">Başla</button>
            </article>
          </div>
        </div>
      </section>
      <div class="section-head compact">
        <div>
          <p class="eyebrow">Deneme Sınavları</p>
          <h2>10 testlik sınav seti</h2>
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
                  <button class="btn primary" type="button" data-start="${exam.id}" data-mode="study">Çalışma modu</button>
                  <button class="btn ghost" type="button" data-start="${exam.id}" data-mode="exam">Sınav modu</button>
                </div>
              </article>
            `;
          })
          .join("")}
      </div>
    </section>
  `;
}

function renderGameShell(content) {
  app.innerHTML = `
    <section class="game-screen">
      <div class="game-top">
        <div>
          <p class="eyebrow">Kavram Oyunu</p>
          <h1>${escapeHtml(activeGame.title)}</h1>
          <p class="lead">${escapeHtml(activeGame.subtitle)}</p>
        </div>
        <div class="result-meta">
          <span class="chip">Skor ${activeGame.score}</span>
          <span class="chip">${activeGame.roundText}</span>
        </div>
      </div>
      ${content}
      <div class="actions">
        <button class="btn ghost" type="button" data-game-home>Kavramlara dön</button>
        <button class="btn" type="button" data-game-restart>Yenile</button>
      </div>
    </section>
  `;
}

function startConceptGame(type) {
  stopTimer();
  activeExam = null;
  lastResult = null;
  if (type === "match") {
    const pairs = sampleConcepts(6);
    activeGame = {
      type,
      title: "Eşleştirme",
      subtitle: "Soldan kavramı, sağdan doğru açıklamayı seç.",
      score: 0,
      roundText: "6 eşleşme",
      termOrder: shuffleArray(pairs),
      definitionOrder: shuffleArray(pairs),
      selectedTerm: null,
      matchedTerms: [],
      message: "Önce bir kavram seç.",
      messageType: "idle",
    };
  }
  if (type === "blank") {
    activeGame = {
      type,
      title: "Boşluk doldurma",
      subtitle: "Açıklamayı oku, doğru kavramı seç.",
      score: 0,
      round: 0,
      selected: null,
      rounds: sampleConcepts(10).map((concept) => ({
        concept,
        options: shuffleArray([concept, ...sampleConcepts(3, concept.term)]),
      })),
    };
    activeGame.roundText = `1/${activeGame.rounds.length}`;
  }
  if (type === "tf") {
    activeGame = {
      type,
      title: "Doğru / Yanlış",
      subtitle: "Kavram ile açıklama gerçekten eşleşiyor mu?",
      score: 0,
      round: 0,
      selected: null,
      rounds: sampleConcepts(10).map((concept, index) => {
        const shouldBeTrue = index % 2 === 0;
        const shownConcept = shouldBeTrue ? concept : sampleConcepts(1, concept.term)[0];
        return {
          concept: shownConcept,
          explanationConcept: concept,
          correct: shouldBeTrue,
        };
      }),
    };
    activeGame.roundText = `1/${activeGame.rounds.length}`;
  }
  setStatus(`Kavram oyunu / ${activeGame.title}`);
  renderConceptGame();
}

function renderConceptGame() {
  if (!activeGame) return;
  if (activeGame.type === "match") {
    renderMatchingGame();
    return;
  }
  if (activeGame.type === "blank") {
    renderBlankGame();
    return;
  }
  renderTrueFalseGame();
}

function renderMatchingGame() {
  const complete = activeGame.matchedTerms.length === activeGame.termOrder.length;
  const content = `
    <div class="match-board">
      <div class="match-column">
        <h2>Kavramlar</h2>
        ${activeGame.termOrder
          .map(
            (concept, index) => `
              <button class="match-item ${activeGame.selectedTerm === index ? "selected" : ""} ${activeGame.matchedTerms.includes(concept.term) ? "matched" : ""}" type="button" data-match-term="${index}" ${activeGame.matchedTerms.includes(concept.term) ? "disabled" : ""}>
                ${escapeHtml(concept.term)}
              </button>
            `
          )
          .join("")}
      </div>
      <div class="match-column">
        <h2>Açıklamalar</h2>
        ${activeGame.definitionOrder
          .map(
            (concept, index) => `
              <button class="match-item definition ${activeGame.matchedTerms.includes(concept.term) ? "matched" : ""}" type="button" data-match-def="${index}" ${activeGame.matchedTerms.includes(concept.term) ? "disabled" : ""}>
                ${escapeHtml(concept.explanation)}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
    <div class="game-feedback ${activeGame.messageType}">
      ${complete ? "Bitti. Tüm kavramları eşleştirdin." : escapeHtml(activeGame.message)}
    </div>
  `;
  activeGame.roundText = `${activeGame.matchedTerms.length}/${activeGame.termOrder.length}`;
  renderGameShell(content);
}

function renderBlankGame() {
  const round = activeGame.rounds[activeGame.round];
  const isAnswered = activeGame.selected !== null;
  const selectedConcept = isAnswered ? round.options[activeGame.selected] : null;
  const correct = selectedConcept?.term === round.concept.term;
  activeGame.roundText = `${activeGame.round + 1}/${activeGame.rounds.length}`;
  const content = `
    <div class="quiz-card">
      <span class="chip">Boşluğu tamamla</span>
      <h2>_____</h2>
      <p>${escapeHtml(round.concept.explanation)}</p>
    </div>
    <div class="game-options">
      ${round.options
        .map(
          (concept, index) => `
            <button class="game-option ${isAnswered && concept.term === round.concept.term ? "correct" : ""} ${isAnswered && activeGame.selected === index && concept.term !== round.concept.term ? "wrong" : ""}" type="button" data-blank-option="${index}" ${isAnswered ? "disabled" : ""}>
              ${escapeHtml(concept.term)}
            </button>
          `
        )
        .join("")}
    </div>
    ${
      isAnswered
        ? `<div class="game-feedback ${correct ? "correct" : "wrong"}">
            ${correct ? "Doğru." : `Yanlış. Doğru kavram: ${escapeHtml(round.concept.term)}.`}
          </div>
          <button class="btn primary" type="button" data-game-next>${activeGame.round === activeGame.rounds.length - 1 ? "Sonucu bitir" : "Sonraki"}</button>`
        : `<div class="game-feedback idle">Açıklamayı hangi kavram tamamlıyor?</div>`
    }
  `;
  renderGameShell(content);
}

function renderTrueFalseGame() {
  const round = activeGame.rounds[activeGame.round];
  const isAnswered = activeGame.selected !== null;
  const correct = activeGame.selected === round.correct;
  activeGame.roundText = `${activeGame.round + 1}/${activeGame.rounds.length}`;
  const content = `
    <div class="quiz-card">
      <span class="chip">Doğru mu?</span>
      <h2>${escapeHtml(round.concept.term)}</h2>
      <p>${escapeHtml(round.explanationConcept.explanation)}</p>
    </div>
    <div class="true-false-row">
      <button class="game-option ${isAnswered && round.correct === true ? "correct" : ""} ${isAnswered && activeGame.selected === true && !round.correct ? "wrong" : ""}" type="button" data-tf-option="true" ${isAnswered ? "disabled" : ""}>Doğru</button>
      <button class="game-option ${isAnswered && round.correct === false ? "correct" : ""} ${isAnswered && activeGame.selected === false && round.correct ? "wrong" : ""}" type="button" data-tf-option="false" ${isAnswered ? "disabled" : ""}>Yanlış</button>
    </div>
    ${
      isAnswered
        ? `<div class="game-feedback ${correct ? "correct" : "wrong"}">
            ${correct ? "Doğru karar." : "Yanlış karar."}
            ${round.correct ? "" : ` Bu açıklama aslında "${escapeHtml(round.explanationConcept.term)}" kavramına ait.`}
          </div>
          <button class="btn primary" type="button" data-game-next>${activeGame.round === activeGame.rounds.length - 1 ? "Sonucu bitir" : "Sonraki"}</button>`
        : `<div class="game-feedback idle">Kavram ve açıklama eşleşiyor mu?</div>`
    }
  `;
  renderGameShell(content);
}

function renderGameResult() {
  const total =
    activeGame.type === "match" ? activeGame.termOrder.length : activeGame.rounds.length;
  renderGameShell(`
    <div class="result-panel compact-result">
      <div class="score-ring">
        <div>
          <strong>${activeGame.score}/${total}</strong>
          <span>oyun skoru</span>
        </div>
      </div>
      <div>
        <h2>${escapeHtml(activeGame.title)} tamamlandı</h2>
        <p class="lead">Kavramları kartlardan tekrar okuyup başka bir oyunla pekiştirebilirsin.</p>
      </div>
    </div>
  `);
}

function startExam(examId, mode = "study") {
  activeExam = exams.find((exam) => exam.id === examId);
  if (!activeExam) return;
  feedbackMode = mode;
  sessionQuestions = activeExam.questions.map(shuffleQuestion);
  currentIndex = 0;
  answers = Array(sessionQuestions.length).fill(null);
  flagged = Array(sessionQuestions.length).fill(false);
  revealed = Array(sessionQuestions.length).fill(false);
  remainingSeconds = activeExam.duration * 60;
  lastResult = null;
  setStatus(`${activeExam.title} / ${feedbackMode === "study" ? "Çalışma modu" : "Sınav modu"}`);
  renderExam();
  startTimer();
}

function renderExam() {
  if (!activeExam) return;
  const question = sessionQuestions[currentIndex];
  const answeredCount = answers.filter((answer) => answer !== null).length;
  const progress = ((currentIndex + 1) / sessionQuestions.length) * 100;
  const isStudyMode = feedbackMode === "study";
  const isRevealed = isStudyMode && revealed[currentIndex] && answers[currentIndex] !== null;
  const selectedAnswer = answers[currentIndex];
  const answeredCorrectly = selectedAnswer === question.answer;

  app.innerHTML = `
    <section class="exam-layout">
      <div class="exam-main">
        <div class="exam-head">
          <div class="meta-row">
            <span class="chip">${escapeHtml(activeExam.title)}</span>
            <span class="chip">${isStudyMode ? "Çalışma modu" : "Sınav modu"}</span>
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
                <button
                  class="choice ${answers[currentIndex] === index ? "selected" : ""} ${isRevealed && index === question.answer ? "correct" : ""} ${isRevealed && answers[currentIndex] === index && index !== question.answer ? "wrong" : ""}"
                  type="button"
                  data-choice="${index}"
                  ${isRevealed ? "disabled" : ""}
                >
                  <span class="letter">${letters[index]}</span>
                  <span class="choice-text">${escapeHtml(option)}</span>
                </button>
              `
            )
            .join("")}
        </div>
        ${
          isRevealed
            ? `
              <div class="instant-feedback ${answeredCorrectly ? "is-correct" : "is-wrong"}">
                <strong>${answeredCorrectly ? "Doğru." : "Yanlış."}</strong>
                <span>Doğru cevap: ${letters[question.answer]} - ${escapeHtml(question.options[question.answer])}</span>
                <p>${escapeHtml(question.explain)}</p>
              </div>
            `
            : isStudyMode
              ? `<div class="instant-feedback idle">Bir seçeneğe basınca doğru cevap ve açıklama burada hemen açılır.</div>`
              : ""
        }
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
        <button class="btn danger" type="button" data-finish>${isStudyMode ? "Sonucu gör" : "Bitir"}</button>
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
  if (event.target.closest("[data-concept-prev]")) {
    conceptIndex = (conceptIndex - 1 + concepts.length) % concepts.length;
    renderHome();
    return;
  }

  if (event.target.closest("[data-concept-next]")) {
    conceptIndex = (conceptIndex + 1) % concepts.length;
    renderHome();
    return;
  }

  if (event.target.closest("[data-concept-random]")) {
    const nextIndex = Math.floor(Math.random() * concepts.length);
    conceptIndex = nextIndex === conceptIndex ? (nextIndex + 1) % concepts.length : nextIndex;
    renderHome();
    return;
  }

  const gameStart = event.target.closest("[data-game-start]");
  if (gameStart) {
    startConceptGame(gameStart.dataset.gameStart);
    return;
  }

  if (event.target.closest("[data-game-home]")) {
    renderHome();
    return;
  }

  if (event.target.closest("[data-game-restart]") && activeGame) {
    startConceptGame(activeGame.type);
    return;
  }

  const matchTerm = event.target.closest("[data-match-term]");
  if (matchTerm && activeGame?.type === "match") {
    const index = Number(matchTerm.dataset.matchTerm);
    const concept = activeGame.termOrder[index];
    if (!activeGame.matchedTerms.includes(concept.term)) {
      activeGame.selectedTerm = index;
      activeGame.message = `${concept.term} için açıklamayı seç.`;
      activeGame.messageType = "idle";
      renderConceptGame();
    }
    return;
  }

  const matchDef = event.target.closest("[data-match-def]");
  if (matchDef && activeGame?.type === "match") {
    if (activeGame.selectedTerm === null) {
      activeGame.message = "Önce soldan bir kavram seç.";
      activeGame.messageType = "wrong";
      renderConceptGame();
      return;
    }
    const termConcept = activeGame.termOrder[activeGame.selectedTerm];
    const defConcept = activeGame.definitionOrder[Number(matchDef.dataset.matchDef)];
    if (termConcept.term === defConcept.term) {
      activeGame.matchedTerms.push(termConcept.term);
      activeGame.score += 1;
      activeGame.selectedTerm = null;
      activeGame.message = "Doğru eşleşme.";
      activeGame.messageType = "correct";
    } else {
      activeGame.selectedTerm = null;
      activeGame.message = "Bu açıklama o kavrama ait değil. Bir daha dene.";
      activeGame.messageType = "wrong";
    }
    renderConceptGame();
    return;
  }

  const blankOption = event.target.closest("[data-blank-option]");
  if (blankOption && activeGame?.type === "blank" && activeGame.selected === null) {
    activeGame.selected = Number(blankOption.dataset.blankOption);
    const round = activeGame.rounds[activeGame.round];
    if (round.options[activeGame.selected].term === round.concept.term) activeGame.score += 1;
    renderConceptGame();
    return;
  }

  const tfOption = event.target.closest("[data-tf-option]");
  if (tfOption && activeGame?.type === "tf" && activeGame.selected === null) {
    activeGame.selected = tfOption.dataset.tfOption === "true";
    const round = activeGame.rounds[activeGame.round];
    if (activeGame.selected === round.correct) activeGame.score += 1;
    renderConceptGame();
    return;
  }

  if (event.target.closest("[data-game-next]") && activeGame) {
    if (activeGame.round >= activeGame.rounds.length - 1) {
      renderGameResult();
      return;
    }
    activeGame.round += 1;
    activeGame.selected = null;
    renderConceptGame();
    return;
  }

  const start = event.target.closest("[data-start]");
  if (start) {
    startExam(start.dataset.start, start.dataset.mode || "study");
    return;
  }

  const choice = event.target.closest("[data-choice]");
  if (choice && activeExam) {
    if (feedbackMode === "study" && revealed[currentIndex]) return;
    answers[currentIndex] = Number(choice.dataset.choice);
    if (feedbackMode === "study") revealed[currentIndex] = true;
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

app.addEventListener(
  "touchstart",
  (event) => {
    if (!event.target.closest("[data-concept-card]")) return;
    conceptTouchStartX = event.touches[0]?.clientX ?? null;
  },
  { passive: true }
);

app.addEventListener(
  "touchend",
  (event) => {
    if (conceptTouchStartX === null || !event.target.closest("[data-concept-card]")) return;
    const endX = event.changedTouches[0]?.clientX ?? conceptTouchStartX;
    const delta = endX - conceptTouchStartX;
    conceptTouchStartX = null;
    if (Math.abs(delta) < 42) return;
    conceptIndex = delta < 0 ? (conceptIndex + 1) % concepts.length : (conceptIndex - 1 + concepts.length) % concepts.length;
    renderHome();
  },
  { passive: true }
);

renderHome();
