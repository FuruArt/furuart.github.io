---
layout: post
title: "Czasem dobrze jest zdać sobie sprawę z tego, że jest się do dupy!"
date: 2016-09-07 10:00 Europe/Warsaw
author: FuruArt
comments: true
category: Życiowe sentencje
image: "/uploads/images/dobrzeJestBycDoDupy.png"
---
### W życiu każdego twórcy, czy to developera, designera, architekta, projektanta, malarza, rzeźbiarza pojawia się ten moment, w którym zdają sobie sprawę że są po prostu do dupy, dzięki czemu mogą spojrzeć z innej perspektywy na siebie i swoje umiejętności, tym samym stawiając sobie kolejne wyzwania i poprzeczki do pokonania - dokładnie tak samo jak stało się w moim przypadku.

#### ! Uwaga: Wpis ten nie ma na celu użalania się nad sobą, a pokrzepienie twórców którzy przestali tworzyć bo uważają się za najlepszych. Ponadto wpis może zawierać wulgaryzmy (ocenzurowane).

Nadszedł ten cudowny dzień, pisałem sobie dla was artykuł `[#4] Javascript`, napisałem około połowę zaplanowanego wpisu, po czym stanąłem na długie godziny męcząc się z czymś niesamowicie trywialnym, mianowicie Walidator formularza w jQuery, dlaczego aż tyle czasu mi to zajęło? Co robiłem nie tak? Dlaczego ten wpis nadal nie widnieje na blogu? Odpowiedź jest jednoznaczna i zawarta w tytule tego artykułu: `Zdałem sobie sprawę, że jestem do dupy!`. A co to oznacza? Przejechałem się na własnym Ego, myślałem że jestem super mega hiper duper web developerem, który potrafi napisać już każdy skrypt jaki tylko się da i tutaj był mój podstawowy błąd...

<!--more-->

![meme #0-1](http://s2.quickmeme.com/img/53/53a61890a8d075fe1b7694a1c69c7c4937f0a4f03c0ceea68eefcc0b2056460d.jpg)

Pisząc już tyle skryptów różnego typu i stosując naprzemiennie `Javascript` oraz `jQuery` nie pomyślałem nawet przez chwilę, że mogę mieć jakąkolwiek trudność z napisaniem prostego Walidatora formularza, zwykłe pobieranie danych z pól oraz weryfikacja pod danym kątem, parę pętli warunkowych i gotowe. No tak, w głowie wyglądało to wspaniale. Szkoda tylko, że pisząc ten skrypt zbaraniałem w momencie w którym mój walidator za każdym razem wyrzucał, że `pole name nie może być puste`, nieistotne czy w tym polu były dane czy też nie. Pierwsza myśl, na pewno źle warunki napisałem. Niestety, warunki były dobrze, kombinowałem na różne sposoby, od kilka razy `if`, przez `else if`, kończąc na pętli `while` (bo czemu nie? I tak gorzej być nie może), rezultat był taki jak możecie się tego spodziewać: `Dupny` (nie po śląsku). Zacząłem więc szukać odpowiedzi i podpowiedzi w internecie, gdzie najlepiej szukać tego typu informacji? [Stackoverflow](http://stackoverflow.com/), jeżeli nie ma tam waszego problemu to znaczy, że jesteście geniuszami/idiotami i nikt wcześniej nie próbował robić takich akrobacji podczas pisania kodu, czyli możecie być dumni z siebie. Odpowiedzi na temat mojego problemu były rzecz jasna oczywiste i to co zrobiłem powinno działać, poradziłem się wobec tego wujaszka google wpisując magiczne zapytanie: `jQuery form validation tutorial`, po czym otrzymałem pierdyliard wpisów, gdzie każdy zaleca użycie biblioteki (gotowego skryptu) o nazwie: [jQuery validation](https://jqueryvalidation.org/). I co? To jest remedium na wszystkie moje bolączki ze skryptem? Iść na łatwiznę i korzystać z gotowca? Owszem, gdybym nie stwierdził że jestem do Dupy, zrobiłbym właśnie w ten sposób. A skoro zdałem sobie sprawę z tego, iż jestem jaki jestem to porzuciłem wpis i zająłem się wertowaniem Javascriptu na `W3Schools` oraz `Mozilla Developers Network`, z czego doszedłem do wniosku że z głowy wyleciały mi praktycznie wszystkie podstawy tego języka! Więc, aby odświeżyć wiedzę i przy okazji odświeżyć aktywność bloga, postanowiłem przypominać sobie i uczyć was od podstaw. Możecie się teraz zastanawiać czy mówię serio, skoro nienawidzę tego typu metody nauczania, owszem, nienawidzę. Lecz jak widać jest mi to potrzebne, do praktycznych projektów przejdziemy od razu po zdobyciu podstaw Javascriptu. A teraz wylistuję podstawowe błędy jakie twórca może sobie założyć i zablokować swoją produktywność oraz dla rozwodnienia gęstej atmosfery tego wpisu, podam kilka metod jak obudzić w sobie kreatywność i chęć do tworzenia na nowo!

![meme #0-2](http://lolheaven.com/wp-content/uploads/2013/06/2102-600x437.jpg)

Pierw zacznijmy od tych błędów:

* #1 Napisałeś już tak wiele skryptów, że uważasz się za niezrównanego mistrza w developerce i nikt nie może Ci dorównać - a co tam, uważasz że mógłbyś napisać własny język programowania który wyświetlałby zamiast `Hello World` - `Jestem debeściak` (cytując klasyka).

Dobrze, ale czy to oznacza że nie można się uważać za dobrego w tym co się robi? Owszem można, tylko trzeba pamiętać o tej cieniutkiej granicy między docenieniem własnej dobrze wykonanej pracy, a hiperbolicznym(uwypuklonym, przesadzonym) zapatrzeniem we własne Ego i jeśli nasz kod składa się z +30 linijek, a ma za zadanie zmieniać ikonkę nawigacji po kliknięciu i uważamy, że to świetnie i lepiej być nie może to właśnie jest najlepszy moment, żeby wziąć cokolwiek co mamy po naszej lewej/prawej stronie i się tym bardzo mocno pierdol*ąć (nie przyjmuję reklamacji jeśli przypadkiem na waszym biurku leżą pustaki, bo lubicie hardcorowe stress ball'e). Możecie uważać, że ten przykład jest przesadzony i przecież nikt takich rzeczy nie robi. Do prawdy?

Porównajmy moje dwa skrypty od suwanej nawigacji zaimplementowanej w `FuruFrames`:

```javascript
function slideNavigation() {
  $(".navOpen").on("click", function( event ) {
    var event;
    event.preventDefault();
    $(".menuContent").toggleClass("closedLeft");
    $(".navClose").toggleClass("openedLeft");
    $(this).toggleClass("closedLeft");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushRight");
  });

  $(".navOpen > .right").on("click", function( event ) {
    var event;
    event.preventDefault();
    $(".menuContent").toggleClass("closedRight");
    $(this).toggleClass("closedRight");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushLeft");
  });

  $(".navClose, .mask").on("click", function() {
    $(".menuContent").toggleClass("closedLeft");
    $(".navOpen").toggleClass("closedLeft");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushRight");
  });

  $(".navClose > .right, .mask").on("click", function() {
    $(".menuContent").toggleClass("closedRight");
    $(".navOpen").toggleClass("closedRight");
    $(".mask").toggleClass("run");
    $("html").toggleClass("nonScroll");
    $(".content").toggleClass("pushLeft");
  });
}
```

oraz

```javascript
function slideNavigation() {
  var triggerLeft, triggerRight, navigationElements;

  var triggerLeft = ".slide.left>#trigger, .slide.left>.list>#trigger, .mask.left",
      triggerRight = ".slide.right>#trigger, .slide.right>.list>#trigger, .mask.right",
      navigationElements = "#trigger, .menuContent, .mask, html, .content";

  $(triggerLeft).on("click", function() {
    $(navigationElements).toggleClass("close");
  });

  $(triggerRight).on("click", function() {
    $(navigationElements).toggleClass("close");
  });
}
```

Oba skrypty robią dokładnie to samo. Jaka jest wobec tego różnica, oprócz objętości kodu? Prędkość wczytywania skryptu oraz samego działania. Pierwszy skrypt był dla mnie wspaniały i po prostu miodzio, lepszego się nie dało (pisałem go podczas wyjazdu). Po czym gdy wróciłem do domu zrozumiałem jak bardzo miałkie jest to rozwiązanie. Po czym postanowiłem zminimalizować ten kod i to co widzicie obecnie, zostało już zaimplementowane w wersji `0.0.3 Alpha`, której jeszcze nie ma na Githubie (ale będzie, jak tylko dodam wszystkie możliwości dla Hero).

* #1 Lekarstwo: 

Po skończonej pracy, zajmij się czymś kompletnie innym, pograj, poczytaj książkę, ugotuj coś, idź na spacer, pośpij, po prostu cokolwiek byle trzymać się z daleka od twojego skryptu. Wróć do niego po mniej więcej 4-10 dniach i sprawdź czy nie da się czegoś jeszcze bardziej usprawnić. To najlepsza metoda, aby nie popadać w marazm(uśpienie), czyli sprawdzenia tego co sami zrobiliśmy jakiś czas temu, jeśli znajdziemy jakieś uszczerbki i sposób na ich załatanie, zwiększenie prędkości działania to możemy czuć, że wykonaliśmy kawał dobrej roboty. Prócz tego uświadamiamy sobie, że nie jesteśmy doskonali, ale potrafimy dążyć do niej. Jeśli za pierwszym razem napiszem idealny kod to możemy być z siebie zadowoleni, tylko nie popadajmy w zachwyt i zajmijmy się czymś znacznie trudniejszym od poprzedniego skryptu lub poszerzajmy swoją obecną wiedzę do granic możliwości.

![meme #0-3](http://s2.quickmeme.com/img/3e/3ead9356472273616671958cd9cc3ce9e1159c08c0154142dfe91d3fa5fe60a2.jpg)

* #2 Jesteś miszczem Kontrol Ce i Kontrol Fał? Każdy skrypt lub gotowy kod, który widzisz jest dla Ciebie łatwym kąskiem? Codrops, Stackoverflow, Codehouse itp. to twoje ulubione skarbnice do kserowania? Dobrze trafiłeś! Posada Copywritera stoi dla Ciebie otworem!

Jest to podstawowy błąd jaki popełniają zazwyczaj początkujący developerzy, nie mogą sobie poradzić z kodem mimo przeczytania przez godzinę poradnika z danego języka, który ma +600 stron A4, wpisują w skarbnicy wiedzy pożądane hasła, klikają w pierwsze linki (z pewnością Stackoverflow), czytają pobieżnie problem innego użytkownika, wybierają rozwiązanie z 'zielonym ptaszkiem', które ma najwięcej pozytywnej reputacji i bez głębszego zastanawowienia kopiują kod z Fiddle, Codepen czy po prostu `[code]` na stronie. Wklejają, zapisują, wszystko działa! Są z siebie dumni i uważają się za super developera (patrz punkt pierwszy). Gdzie popełnił błąd nasz młody programista? Nietrudno się domyślić, że w momencie kiedy robił memiczną czynność: `Ctrl + C`, `Ctrl + V`. Dlaczego? Ponieważ niczego się nie nauczył, skopiował kod doświadczonego programisty i zapisał go, bez większych refleksji. No dobrze, ale przecież serwisy tego typu są po to, aby programista mógł sprawdzić czemu jego kod nie działa w porównaniu do czyjejś solucji(rozwiązania), więc o co ja się sapię? Zgodzę się w zupełności, powstały w celu weryfikacji swojego kodu z propozycją czyjegoś kodu i znalezienia własnego rozwiązania na podstawie podanych możliwości, tutaj jest ta znacząca różnica, gdzie zamiast kopiowania i wklejania, czytamy, sprawdzamy, weryfikujemy i implementujemy we własnym kodzie. 

* #2 Lekarstwo:

Wszystkie swoje problemy z kodem, pierw rozwiązuj sprawdzając podstawy danego języka, dopiero później korzystając ze `Stackoverflow`, porównując swój kod z proponowanymi rozwiązaniami innego programisty, bo tylko w ten sposób uczymy się na własnych błędach i możemy wzbogacić się o wiedzę od bardziej doświadczonego developera.

* #3 Masz prześwietną stronę, która wygląda jak wyciągnięta psu z gardła, nie jest ani trochę mobilna, nie przyjaźni się z SEO, a grafiki ładują się raz na 50 razy, natomiast cała strona ładuje się z prędkością ślimaka wrzuconego do zbiornika z melasą, bo twoje dzieło waży +30 MB? Jesteś na dobrej drodze do zostania webmasterem z 2000-2004 roku, chyba nieco za późno...

O ile nie jesteś zwolennikiem [Turpizmu](https://pl.wikipedia.org/wiki/Turpizm) i nie przeniosłeś się w czasie do roku 2000, to śmiało możesz stwierdzić że twoja strona jest po prostu genetycznie spier*olona, zastanawiasz się wtedy czy nie lepiej byłoby zatrudnić jakiegoś studenciaka za stówkę, żeby Ci to wszystko ogarnął i będzie cacy, jednakże wystający palec z dziurawej skarpety(chyba, że tak lubisz) przysuwa Ci wniosek że lepiej byłoby odłożyć trochę grosza i zająć się tym samemu. Odpalasz swój hiper zaawansowany edytor `WYSYWIG`, otwierasz `index.html` i rozpoczynasz wirtuozerię na skalę Google, zmieniłeś kodowanie na stronie z `<meta http-equiv="Content-type" content="text/html; charset=ISO-8859-2">` na `<meta charset="UTF-8">` oraz z bardzo długiego doctype, na `<!doctype html>`, zapisujesz całość i uznajesz że stronka nie zając, czas pyknąć jakiegoś MM'a w Kanterka. Po emocjonującym `Cyka blyat` meczu i dobrych bułach z `Pro 90` czujesz się spełniony, jednakże pojawia się pustka w duszy, coś Cię woła z oddali, tak, to twoja zapuszczona strona!

* #3 Lekarstwo:

Pyknij w Kanterka zanim zaczniesz myśleć o odpaleniu IDE, czy tego słynnego WYSYWIG (oraz zmień taktykę z Rush B, na cokolwiek innego...), następnie po meczyku sprawdź czy posiadasz wiedzę zgodną z nowymi standardami w sieci, jeśli nie to uzupełnij braki. Następnie przemyśl od podstaw co chcesz osiągnąć, najważniejsze cele, jeśli strona jest faktycznie koszmarna, zbuduj ją całkowicie od nowa, jakby to był czysty projekt. A jeśli twoja strona wygląda dobrze to co możesz zrobić, aby nie siedzieć i nie pierdzieć w przysłowiowy stołek? Sprawdź czy jest mobilna, jeśli nie jest, spraw aby była, jeżeli widzisz że twoja strona posiada jakieś braki staraj się je naprawić. Jednakże, jeśli nie musisz tego robić na ASAFP (As soon as fucking possible, czyli tak szybko jak się tylko da, bo ekałnt znajdzie studenciaka za dwie dyszki), rób to z pewnymi przerwami, tak abyś nie zniechęcił się za szybko, jeśli osiągniesz jakiś progress i wykonasz pewien postawiony cel, budujący cały projekt, odpocznij, zrób kawę, napij się, posłuchaj muzyki, pyknij w kanterka, cokolwiek, po prostu wychilluj, oszczędzaj mózg, bo może się za chwilę okazać że będziesz zmuszony napisać najtrudniejszy skrypt w swoim życiu, nauczyć się SEO czy poznać podstawy responsywnego web designu. Jeśli będzie robił wszystko tak szybko jak się tylko da, nie tylko będziesz mylił się znacznie częściej i nie zauważał podstawowych błędów jakie robisz, ale sprawisz że cały proces tworzenia projektu wydłuży się niesamowicie z powodu licznych powrotów i napraw pisanych na gwałt linijek kodu. Programowanie czy developerka to nie wyścigi, tutaj nie lecimy na rekord (chyba że musimy, o czym wspominałem nieco wyżej), liczy się skupienie i luźny umysł nieobciążany wielogodzinnymi sesjami z kodem, o czym przekonałem się najlepiej ja sam tworząc blog od zera. 

Tak ot dotarliśmy do końca tego motywującego postu z prześmiewczym charakterem. Jeśli cierpicie, na jedno z podanych zjawisk, zastosujcie się do moich sposobów, a gwarantuję że chęci do tworzenia powrócą! Jeżeli taka forma artykułu przypadła wam do gustu, zmotywowałem was do działania lub po prostu przyjemnie czytało się ten artykuł, zostawcie polubienie na [Facebooku]({ site.facebook_url }), skomentujcie, podzielcie się własnymi problemami i doświadczeniami oraz udostępnijcie, a tymczasem do następnej lekcji w Pełni :>

---

Artykuł ten jest moją własnością - **Furu.Art** - zakaz kopiowania treści na inne blogi, fanpage czy strony - bo nogi z dupy powyrywam!
