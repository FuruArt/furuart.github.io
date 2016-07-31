---
layout: post
title: "Przenosimy szkice do programu graficznego - header + article"
date: 2016-05-25 16:00
author: FuruArt
comments: true
category: Dla webdesigner'a
tags: [design, Dla Webdesignera, layers, narzędzia, photoshop, projektowanie, ps, psd, sketch, szkic, tools, warstwy, webdesign, wireframe]
---
### Poprzednio nauczyliśmy się budować Szkielety stron WWW, rzecz jasna na kartce, przy pomocy ołówka, dzisiaj zajmiemy się następnym krokiem w procesie projektowania, czyli przetworzymy nasze bazgroły w programie graficznym, tworząc interaktywny Szkielet, który będziemy mogli modyfikować dowolnie gdy coś wizualnie nie będzie się zgadzało.

<!--more-->

Jeśli nie mamy zaległości i przećwiczyliśmy [proces tworzenia na kartce]({% post_url 2016-05-21-design-na-kartce-0 %}), pora zabrać się za kolejny etap pracy projektanta stron WWW, czyli wdrożenie do programu graficznego. Zaznaczam, że w tej lekcji wymagana jest elementarna wiedza na temat obsługi programu Adobe Photoshop, lista narzędzi oraz poleceń jakimi trzeba się posługiwać:

* Tworzenie nowych dokumentów, ustawianie wymiarów dokumentu
* Znajomość poleceń ALT+CTRL+Z oraz SHIFT + CTRL + Z
* Zmienianie wymiarów obszaru roboczego w czasie pracy
* Tworzenie linii pomocniczych
* Tworzenie nowych warstw, tworzenie nowych warstw wraz z wypełnieniem
* Grupowanie warstw, nazywanie ich, zmiana nazw plików
* Posługiwanie narzędziem przemieszczania (Move tool)
* Posługiwanie narzędziem zaznaczania prostokątnego
* Posługiwanie narzędziem tworzenia kształtów
* Posługiwanie narzędziem służącym do wprowadzania tekstu
* Posługiwanie paletą kolorów oraz przybornikiem

Dobrze, to bez większego owijania w bawełnę, przystępujemy do pracy (dziś będzie bardzo obrazkowo), tworzymy nowy dokument o wymiarach np. `960 x 1000 [px]`. Tworzymy nowe linie pomocnicze na ustawieniach: Pionowo: `0%; 50%; 100%`; oraz Pionowo: `20px; 460px; 500px; 940px`; Powinno to wyglądać tak:

![DesignNaKartce #1-1](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-1.png)

Teraz zdefiniujmy sobie 2 odcienie szarości, jeden będzie nam służył do oznaczania bloków, sekcji, drugi do przycisków akcji, tekstów i tym podobnych. Kolor pierwszoplanowy ustawiam na: <span style="color:#dedede;">**#dedede**</span>, drugoplanowy na: <span style="color:#838383;">**#838383**</span>. W ten sposób odzwierciedlimy ideę ołówka, jednakże teraz będziemy mogli zamiast zmazywania i robienia koślawych prostokątów czy kółek, dowolnie przesuwać, usuwać, precyzyjnie wymierzone kształty. Dobrze, ale tak właściwie co ja będę robił, jaki szkic wdrożę do Photoshopa? A no dokładnie to co w ostatniej lekcji odnośnie projektowania na kartce przedstawiłem jak finalny rezultat:

![DesignNaKartce #1-2](https://blogwpelni.files.wordpress.com/2016/05/projekt.png)

Także, zaczynamy od góry i skończymy na dole! (co wydaje się całkiem logiczne...) W moim kontenerze znajduje się nagłówek strony czyli tak zwany Header, który zawiera tytuł strony lub logo po lewej, zaś po prawej uproszczone Menu, czyli odnośniki po prostu. Czas przerzucić to na Photoshopa. Mniej więcej na oko ustalam sobie, że mój Header ma wymiary `100% x 170px`, więc zaznaczam sobie taką wartość za pomocą linii pomocniczych, można przeciągając Move tool'em z wciśniętym `Shift'em`, aby przesunięcie odbywało się równo co `10 px` (Działa to przy każdym elemencie, zarówno podczas przesuwania strzałkami jak i myszą). Zaznaczamy narzędziem zaznaczania prostokątnego od góry do utworzonej przez nas linii pomocniczej. Wypełniamy zaznaczenie kolorem białym, jeśli takiego koloru mamy tło, dla lepszego rozeznania możemy ten element nazwać 'Header'

![DesignNaKartce #1-3](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-21.png)

Dalej przystępujemy do dodania Tytułu oraz linków. Tworzę za pomocą narzędzia tekstu, jakikolwiek tekst o rozmiarze np. 36px oraz 4 teksty, które będą służyły za linki w rozmiarze np. 18px, koloru czarnego lub drugiej barwy z próbnika. Utworzone elementu ustawiam odpowiednie, Tytuł wyśrodkowuje w poziomie (CTRL + Lewy przycisk myszy na miniaturce obok nazwy warstwy. ![DesignNaKartce #1-4](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-4.png),
następnie ![DesignNaKartce #1-5](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-5.png), wybieramy 2 ikonkę od lewej, który mówi nam o wyśrodkowaniu w pionie, po prawej opcje odnośnie ustawiania pionowego, Początek obszaru, Środek, Koniec) oraz ustawiam przy drugiej linii pomocniczej, zaś 4 linki od menu rozdzielam między sobą o 30 px i wyśrodkowuje w prawej części Header'a, powinno wyglądać to mniej więcej tak:

![DesignNaKartce #1-6](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-3.png)

Całość dodatkowo grupuję, Header -> Menu. Co widzę dalej? Dalej widzę posty oraz obok pasek z jakąś listą czy innymi elementami, do dzieła! Tworzę nową grupę `Article`, w której umieszczam grupy: `Header`, `Content`, `Footer`. W grupie Article zaznaczam sobie obszar który będzie moją główną częścią strony, u mnie jest to z początku `460 x 685 [px]`, z początku ponieważ będę mógł później dowolnie zmieniać szerokość i wysokość. W zaznaczonym obszarze dodaję wypełnienie pierwszoplanowe i nazywam warstwę ArticleBody (czyli ciało artykułu)  i w grupie Header, zaznaczam sobie od samej góry 70px i wypełniam je kolorem ArticleBody nazywając powstałą warstwę ArticleHeader, dodaję tekst `Article Header` w rozmiarze 22px i kolorze czarnym (#000000), wyśrodkowuje tekst względem warstwy ArticleHeader, pionowo i poziomo. Następnie w grupie Content wstawiam element, który będzie przechowywał grafikę, więc nazwałem go po prostu Image, zaznaczam 240px w dół od końca ArticleHeader i wypełniam zaznaczenie kolorem drugoplanowym, ciemniejszym, wstawiam tekst `Image` w kolorze białym (#ffffff) i wyśrodkowuje go względem warstwy Image, grupuję te 2 elementy. Wracając do grupy Conent, tworzę sobie 3 teksty które będą pełniły funkcję opisującą posta, data, kategoria, autor. Wstawiając odpowiednie ikonki, które można znaleźć [tutaj]({% post_url 2016-05-23-material-1 %}), rozmiar ikonek to 18 x 18 [px], grupuję teksty z ikonkami w grupy o nazwach funkcji czyli: `Date`, `Category`, `Author`. Całość znajduje się 20 px poniżej Image, pod ikonkami dodaję dowolny tekst w kolorze czarnym, u mnie Lorem ipsum. Pod tekstem tworzę przycisk akcji o nazwie `Read more`, umieszczając go w grupie o takiej samej nazwie, tworzę go przy pomocy narzędzia kształtu i zaokrąglonego prostokąta (zaokrąglenie 6px), tekst wyśrodkowuje względem przycisku. Opuszczam grupę Content i wchodzę do Footer, gdzie dodaję 2 ikonki i 2 teksty, informujące o ilości komentarzy oraz tagów dodanych do posta, całość znajduje się 20 px wyżej od końca ArticleBody. Całość powinna wyglądać mniej więcej tak.

![DesignNaKartce #1-7](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-6.png)

Jak widzimy nasz post jest dosyć wąski, więc możemy go po prostu rozszerzyć wybierając, zmieniając szerokość poszczególnych warstw i modyfikując nieco linie pomocnicze:

![DesignNaKartce #1-8](https://blogwpelni.files.wordpress.com/2016/05/projektowaniekomputer-7.png)

I tak oto stworzyliśmy nasz Szkic w programie, rzecz jasna jest to dopiero szkic artykułu i nagłówka strony, ale daje to już wgląd w dalsze działania, do czego zachęcam, ponieważ lekcja ta zajmuje już nieco miejsca, uważam że w tym miejscu ją zakończę! Prawdopodobnie dodam coś w formie Dodatku, Uzupełnienia odnośnie tego wpisu, gdzie wdrażam Pasek boczny z widget'ami oraz stopkę, ponieważ w następnej lekcji zajmiemy się już bezpośrednio gotowym produktem, doborem barw i detalami, bo najzwyczajniej nie wyrobię się z całością dzisiaj, a tymczasem jeśli artykuł Ci się podobał zostaw 'Lubię to!', zachęcam do komentowania i do następnej lekcji w Pełni! :>

---

Artykuł oraz grafiki w nim zawarte są moją własnością - **Furu.Art** - zakaz kopiowania treści zawartej w artykule, bo nogi z **** powyrywam!
