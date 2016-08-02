---
layout: post
title: "[#2] Javascript - DOM - Jak początki to początki! Hello Javascript!"
date: 2016-08-02 16:00
author: FuruArt
comments: true
category: Dla webdeveloper'a
tags: [javascript, js, script, developer, webdeveloper, front-end, kodowanie, skryptowanie, skrypt, hello, world, podstawy, var, zmienne, function, funkcje]
image: "/uploads/images/js.png"
---
### Tak jak przy każdym innym języku programowania, tak przy Javascripcie musimy zderzyć się z brutalnymi regułami i mądrościami związanymi ze składnią, funkcjami, operatorami, zmiennymi i całym tym tałatajstwem które gdzieś tam kiedyś pomoże nam stworzyć upragniony skrypt, czyli podstawy.

<!--more-->

Niestety rzeczywistość jest niesprawiedliwa i brutalna, no bo czy nie było by prościej gdyby mieć kompletnie u dołu pleców całą składnię, wszystkie operacje na zmiennych, funkcje, pętle i warunki, a pisać po prostu kod który jakimś magicznym cudem sam się uformuje na daną składnię? Może kiedyś, lecz teraz musimy przeżyć tak jak jest! Dziś powałkujemy się trochę podstawami panującymi w `Javascript`, napiszemy pierwsze funkcje oraz skryptu i nauczymy się wywoływać oraz dodawać Javascript do `HTML`. Cóż, nie lubię owijania w bawełnę, wolę podchodzić praktycznie do teorii, także wyrzucamy z pamięci jakikolwiek inny język programowania który znamy i na czysty mózg zanużmy się w świat Javascriptowy:

![JS #2-1](http://memecrunch.com/meme/HNHL/javascript/image.jpg)

Pisząc skryptu już `x` czasu, muszę zgodzić się z tą staruszką... Jeśli zostawicie swój skrypt na około miesiąc i zapomnicie napisać komentarzy co w danym momencie się dzieje, będziecie poprawiać okulary (nawet jeśli ich nie nosicie) ze zdumienia, co tu się tak właściwie odpier`*`ala?! Ale zacznijmy od początku...

`Jak dodać Javascript do mojej strony?` - no i tutaj są dwie szkoły. Ludzi sprytnych pozornie i ludzi sprytnie leniwych. Pierwsza szkoła traktuje, że Javascript należy umieszczać w sekcji `<head>` naszego dokumentu HTML, bo wtedy wraz z ładowaniem strony, załaduje się cały potrzebny skrypt i wszystko cacy. Zaraz powiem dlaczego nie do końca wszystko Cacy przy takim rozwiązani, lecz pierw powiem co rzecze druga szkoła, a mianowicie Javascript wrzucamy na koniec dokumentu i gitara, ponieważ jak mi się przypomni to dodam na końcu te skrypty i powinno śmigać. Wada pierwszej szkoły jest taka, że tego typu rozwiązanie jest dobre jeżeli nie chcemy, aby javascript działał na element ładujący się znacznie później niż sekcja Head oraz Body. W chwili obecnej nie przedstawię jasnego przykładu, zrobię to gdy przejdziemy do praktycznego zastosowania. Jak na moje, zawsze dodawałem skrypty przed znacznikiem zamykającym `</body>` i wszystko działało, więc wam również polecam tą metodę. Teraz przykładowo dodany skrypt wewnętrzny do dokumentu HTML:

```html
<!doctype html>
<html>
<head>
  <title>Dodajemy skrypt</title>
</head>
<body>
<script>
  document.write("Javascript witaj!");
</script>
</body>
</html>
```

I tutaj możecie lecieć na mnie z widłami, bo przecież wszędzie w internecie jest napisane że trzeba pisać `<script type="text/javascript"></script>`, owszem, zgodzę się, trzeba pisać jeśli mamy do czynienia z prymitywną przeglądarką klasy Internet Explorer 7 - 9, bo obecnym przeglądarkom kompletnie zwisa czy w dokumencie będzie `type` czy też nie. Czyli wiemy już jak dodawać skrypt wewnętrzny, czas na zewnętrzny i tutaj przychodzą 2 szkoły, oczywiście ja wybieram tą drugą:

```html
<!doctype html>
<html>
<head>
  <title>Dodajemy skrypt</title>
</head>
<body>
<script src="js/functions.js"></script>
</body>
</html>
```

Czyli zaimportowaliśmy plik o nazwie `functions.js` z katalogu `/js`, `src` czyli `source` - źródło. Teraz idąc za dobrymi nawykami zawartymi w poradnikach, powinienem napisać jeszcze minimum 3 linijki ciągłego tekstu o tym jakież to ważne, aby zauważać czy domkneliście znacznik `<script>` oraz czy nic między niego nie wpisaliście - ale serio, nie róbmy z siebie koczkodanów (bez urazy dla koczkodanów rzecz jasna...). Dobra, czas dowalić podręcznikową wiedzę i w ogóle wszystko co najlepsze, znacie mnie już, odpalamy nasze ulubione środowisko pracy, możemy zrobić plik lokalnie, odpalić serwer, zgulp'ować sobie miejsce do pracy i tak dalej, byle mieć takie coś na pierwszym planie:

![JS #2-2](http://image.prntscr.com/image/75e272197450471f87de2e403af1d001.png)

Jak widać dodałem plik z zewnętrznym skryptem, którego zadaniem będzie importowanie wszystkich funkcji(skryptów), zawartych w functions.js, dodatkowo pobawimy się z akapitem, w pliku `functions.js`

```javascript 
function doSomeMagic() {
  document.getElementById("magic").innerHTML="Czas na trochę magii!";
}
```

Co tutaj się zadziało i co to za potrzaskany tasiemiec?! Już spieszę z wyjaśnieniami: Utworzyliśmy `funkcję` o nazwie doSomeMagic(). Czemu tak dziwnie napisałem nazwę tej funkcji? Ponieważ w Javascripcie nazwy wieloczłonowe, składające się z kilku wyrazów zapisujemy w formacie tak zwanego `camelCase`, skąd taka dziwna `WielbłądzioSkrzynia` nazwa? Bladego pojęcia nie mam, ale wiem że pozwala to zachować dobrą czytelność dla zmiennych, funkcji i tym podobnych. Czyli jeśli mamy naszą funkcję o przykładowej nazwie: `Zrób mi herbaty proszę()`, to po pierwsze zapisujemy to po angielsku `Do some tea please`, usuwamy spacje i pierwszy wyraz piszemy z małej litery, zaś każdy następny pierwszą literę wielką: `doSomeTeaPlease()` Voila! Można się bawić w tak zwane podłogi i zamiast spacji pisać: `_`, acz wydaje mi się że szybsze i czytelniejsze jest `WielbłądzioSkrzyniowanie`.

![JS #2-3](http://cf.chucklesnetwork.com/items/1/5/2/2/9/8/original/wordpress-y-u-no-use-camelcase.jpg)

Dobrze, jak widać powyżej (nie na memie) funkcje tworzymy poprzez `function nazwaFunkcji()`, można nie robić funkcji, ale jak chcemy być profesjonalistami i tworzyć ładny i schludny kod, to tworzymy funkcje. Dalej otwieramy klamerki i wewnątrz klamerek dzieją się czary! Czyli nasz skrypt. Dobrze, to teraz rozwiniemy tasiemca i co się tutaj dzieje. Pierw rozróżniamy z pomocą `DOM` nasze miejsce działań, w tym przypadku `dokument`, czyli nasz plik `HTML`, dalej stosuję jedno z najbardziej podstawowych poleceń w JS, czyli `getElementById()`, do czego służy? Jest jednym z poleceń szukających, rozpoznaje na podstawie elementów na stronie odpowiedni identyfikator elementu, a co jeśli chcemy użyć klasy? Albo nie używać ani identyfikatora, ani klasy? W przypadku klasy stosujemy: `getElementByClassName()`, gdzie wyszuka danej klasy, zaś jeśli nie klasa i nie identyfikator to: `getElementByTagName()` który będzie szukał danego znacznika `html`. Następnym poleceniem jest wyświetlenie tekstu wewnątrz pobranego identyfikatora `magic` i tutaj ja zawsze z rozpędu zamiast pisać znak `=""`, wpisuję z przyzwyczajenia `(" ")`, a potem dziwię się dlaczego to nie działa. Wewnątrz innerHTML umieszczamy w `""` tekst który chcemy wyświetlić oraz całość kończymy dobrze znanym `;` średnikiem, semi-colon'em. No dobrze, to nasza pierwsza mega wypaśna funkcja, ale teraz co z nią zrobimy i jak ją dodamy? Owszem, zaimportowaliśmy ten plik z funkcją do naszego dokumentu, lecz... sprawdźmy czy nasz skrypt działa:

![JS #2-4](http://image.prntscr.com/image/79c2bd02d322499b8383794a8329a904.png)

No jak dla mnie to magia nie działa... Mamy za mało many? Nic z tych rzeczy, brakuje nam odpowiedniego przewodnika Magii, czyli np. Kija czarodzieja, różdżki, czy jakiś rękawic lvl 99 Mag, a co w JS będzie takim Staffem? Tak zwane `triggery`, czyli wszelkie elementy wykonujące nasz skrypt, jakie? 

* Przyciski - buttony
* Kliknięte elementy zawarte w modelu DOM
* Odnośniki
* Najechane kursorem elementy
* Załadowanie sekcji Body
* Wciśnięcie klawisza na klawiaturze
* Kilkukrotne walnięcie głową w klawiaturę (nie no bez przesady...)

Więc dodajmy teraz do naszego pliku HTML jakiś trigger!

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>NaukaJS</title>
  <link rel="stylesheet" href="css/main.css">
</head>
<body>
  <div class="container">
    <header>
      <h1>Nauka JS</h1>
    </header>

    <div class="content">
      <p id="magic">W tym akapicie stanie się magia!</p>
      <button onclick="doSomeMagic()">Włącz magię!</button>
    </div>
  </div>
<script src="js/functions.js"></script>
</body>
</html>
```

Gdy teraz klikniemy w nasz przycisk, nasz akapit z tekstem zmieni swoją treść, zgodnie z zapisem zawartym w funkcji. Czyli w tym przypadku nasz `trigger` to przycisk, który posiada w sobie `event` czyli wydarzenie o nazwie `onclick`, gdy kliknę w przycisk zostanie wykonany skrypt. Jakie są pozostałe `eventy`?

* `onchange` - gdy element ulegnie zmianie
* `onmouseover` - gdy kursor znajdzie się na elemencie
* `onmouseout` - gdy kursor znajdzie się po za elementem
* `onkeydown` - gdy zostanie wciśnięty klawisza
* `onload` - gdy element się załaduje

Zasada działania jest dokładnie taka sama, przykładowo możemy sprawić żeby nasza funkcja została załadowana w momencie załadowania `<body>`, czyli dodajemy event do `body` i wszystko śmiga. Dobrze, właściwie mógłbym w tym momencie zakończyć lekcje i być super nieudolnym nauczycielem, lecz ja wprowadzę na tej lekcji jeszcze: `zmienne`, `szeregi` oraz `operatory`!

`Zmienne`, czym zmienne są powinniście już doskonale wiedzieć z lekcji poprzednich związanych z `Gulp'owaniem`, a dla nadal zielonych, zmienna to po prostu obiekt który przechowuje jakieś dane, np. `x = 20`. Jak definiujemy zmienne w JS? `var nazwaZmiennej = "";` - dokładnie tak. Co może być zmienną? Wszystko. Dosłownie, od liczb po ciągi znakowe. Zapiszmy nasz czarodziejski skrypt z pomocą zmiennych:

![JS #2-5](http://s2.quickmeme.com/img/df/df2071e1084c273fe910863f1b2cfde86f938c161259d95e8fd0ee5d893b0c6f.jpg)

Zacznijmy od zdefiniowania sobie całego tekstu jako zmienne oraz wpiszemy wyświetlimy te zmienne jako `.innerHTML`

```javascript
function doSomeMagic() {
  var czas = "Czas ";
  var na = " na ";
  var troche = " trochę ";
  var magii = "magii";

  document.getElementById("magic").innerHTML=czas+na+troche+magii+"!";
}
```

Oczywiście otrzymamy to samo, lecz zapisane zmiennymi. Jak widać, jeśli wywołujemy zmienne, wpisujemy wyłącznie ich nazwę, zaś gdy chcemy je łączyć ze sobą wstawiamy znak `+`, pamiętając o tym że zmienne wyświetlą dokładnie to co wpiszemy, czyli musimy pamiętać o spacjach. Dobrze, zaskoczenia nie ma, ale teraz zajmiemy się uproszczeniem naszych zmiennych i zapisaniem ich w inny sposób:

```javascript
function doSomeMagic() {
  var czas = "Czas ",
      na = " na ",
      troche = " trochę ",
      magii = "magii";

  document.getElementById("magic").innerHTML=czas + na + troche + magii + "!";
}
```

Teraz zapisaliśmy nasze zmienne poprzedzając je przecinkami i używając tylko jednego wyrazenia `var`. A teraz zrobimy jeszcze inne czary mary i tutaj wprowadzimy `szeregi` zwane `Array`:

```javascript
function doSomeMagic() {
  var tekst = new Array("Czas ", " na ", " trochę ", "magii");

  document.getElementById("magic").innerHTML=tekst[0]+tekst[1]+tekst[2]+tekst[3]+"!";
}
```

Tak, wydłużyliśmy skrypt do maksimum, acz upakowaliśmy nasze zmienne w formie szeregu pod zmienną o nazwie `tekst`, która korzysta z polecenia `new Array`. Wewnątrz zapisuję po prostu wszystko to co wcześniej w zmiennych. Po co nam to? Obecnie do niczego nie służy i generalnie, równie dobrze mogłem zapisać nasz cały tekst jako jedna zmienna, lecz chcę pokazać to jak można kombinować robiąc dokładnie to samo, na tym polega programowanie, a sprytne i optymalne programowanie polega na upychaniu wszystkiego do granic możliwości. Dobrze, ale jak wywoływać zmienne zawarte w szeregu? Tak: `nazwa zmiennej[numer]`, pamiętając o tym że pierwszy element w szeregu ma numer `0`. Teraz zrobimy małą zabawę na operatorach między zmiennymi, oczywiście już nie tekstowymi, tylko liczbowymi:

```javascript
function doSomeMagic() {
  var daneLiczbowe = new Array(10, 2, 45, 22, 80, 150, 1337, 3600, "krowa");
  var dodaj = daneLiczbowe[0] + daneLiczbowe[2];
  var odejmij = daneLiczbowe[6] - daneLiczbowe[0];
  var razy = daneLiczbowe[5] * daneLiczbowe[1];
  var podziel = daneLiczbowe[4] / daneLiczbowe[1];
  var modulo = daneLiczbowe[3] % daneLiczbowe[1];
  var inkrementuj = daneLiczbowe[0]++;
  var dekrementuj = daneLiczbowe[1]--;

  document.getElementById("magic").innerHTML="";
}
```

Wprowadziliśmy sobie teraz wszystkie operatory liczbowe jakie istnieją i wykonujemy nimi operacje na zmiennych zawartych w `Array()`. Dodawania, odejmwowania, mnożenia i dzielenia tłumaczyć nie muszę, za to czym jest `Modulo`? Modulo to nic innego jak reszta z dzielenia, czyli jeśli dzieli `10` przez `5` otrzymujemy wynik `2`, czyli modulo z tego działania to `0`, bo nie pozostała reszta z dzielenia. `Inkrementuj`? Inkrementacja czyli działanie polegające na zwiększaniu danej wartości o jeden, z kolei dekrementacja to działania obniżające. Dobrze, teraz jak my te czary wyświetlimy?! Mamy mnóstwo zmiennych, a nic ich nie wyświetla. Pierw zmodyfikujemy nasz dokument `html`, aby każde działanie miało swój przycisk i obszar działania:

```html
<div class="content">
  <p id="dodaj">W tym akapicie stanie się magia!</p>

  <p id="odejmij">W tym akapicie stanie się magia!</p>

  <p id="mnoz">W tym akapicie stanie się magia!</p>

  <p id="dziel">W tym akapicie stanie się magia!</p>

  <p id="modulo">W tym akapicie stanie się magia!</p>

  <p id="inkrement">W tym akapicie stanie się magia!</p>

  <p id="dekrement">W tym akapicie stanie się magia!</p>

  <button onclick="doSomeMagic()">Uruchom magię</button>
</div>
```

Teraz zajmiemy się stworzeniem nowych funkcji dla każdego działania osobno:

```javascript
function doSomeMagic() {
  var daneLiczbowe = new Array(10, 2, 45, 22, 80, 150, 1337, 3600, "krowa");
  var dodaj = daneLiczbowe[0] + daneLiczbowe[2];
  var odejmij = daneLiczbowe[6] - daneLiczbowe[0];
  var razy = daneLiczbowe[5] * daneLiczbowe[1];
  var podziel = daneLiczbowe[4] / daneLiczbowe[1];
  var modulo = daneLiczbowe[3] % daneLiczbowe[1];
  var inkrementuj = daneLiczbowe[0]++;
  var dekrementuj = daneLiczbowe[1]--;

  function dodawanie() {
    document.getElementById("dodaj").innerHTML=dodaj;
  }

  function odejmowanie() {
    document.getElementById("odejmij").innerHTML=odejmij;
  }

  function mnozenie() {
    document.getElementById("mnoz").innerHTML=razy;
  }

  function dzielenie() {
    document.getElementById("dziel").innerHTML=podziel;
  }

  function modulowanie() {
    document.getElementById("modulo").innerHTML=modulo;
  }

  function inkrementacja() {
    document.getElementById("inkrement").innerHTML=inkrementuj;
  }

  function dekrementacja() {
    document.getElementById("dekrement").innerHTML=dekrementuj;
  }

  dodawanie();
  odejmowanie();
  mnozenie();
  dzielenie();
  modulowanie();
  inkrementacja();
  dekrementacja();
}
```

Nazwa funkcji musi być różna od nazwy zmiennej, to bardzo istotne! Przypisaliśmy odpowiednio funkcje do danego działania oraz wywołaliśmy je u dołu, więc teraz sprawdźmy czy to działa, jeśli naciśniemy przycisk u dołu:

![JS #2-6](http://image.prntscr.com/image/03158b1720004ee5917e93610def39fe.png)

Jak widać wszystko wykonało się prawidłowo, rzecz jasna jest to bardzo trywialny i prymitywny przykład, nie mniej dużo pokazuje i mówi o samym zachowaniu Javascriptu. Dziś nauczyliśmy się podstaw, solidnych podstaw, który później wzbogacimy o warunki i pętle, na dziś to wszystko, jak zawsze jeśli podobał Ci się ten artykuł, zachęciłem Cię do nauki Javascriptu, pogrzebałeś w funkcjach lub chcesz docenić moją pracę, zostaw 'Lubię to!', napisz komentarz, udostępnij a będę wdzięczny, do następnej lekcji w Pełni :>

---

Artykuł jest moją własnościa - **Furu.Art** - zakaz kopiowania treści na inne blogi, fanpage czy strony bo nogi z **** powyrywam!