---
layout: post
title: "[#3] Javascript - Jak utrudniać sobie życie - czyli o potwornie długiej składni"
date: 2016-08-10 14:00:00 +0100
author: FuruArt
comments: true
category: Dla webdeveloper'a
tags: [javascript, js, script, developer, webdeveloper, front-end, kodowanie, skryptowanie, skrypt, dom, model, hierarchia, drzewo, window, składnia, syntax, error, problem, long, camelCase, jquery]
image: "/uploads/images/js.png"
---
### Tak samo jako wielbię Javascript za jego rozszerzalność, możliwości, masę udogodnień, sterowanie i pobieranie danych, tak samo nienawidzę go za diabelską składnię z piekła rodem, który nie raz i nie dwa spędziła mi sen z oczu, bo gdzieś zgubiłem średnik lub co gorsza APOSTROF!

<!--more-->

![JS #2-1](http://classic.splurd.com/comics/images/1337794967.jpg)

Dokładnie tak! Pamiętam czasy kiedy wykonywałem zlecenie i przy pomocy `Javascript` potrzebowałem zrobić dynamicznie zjeżdżają w dół nawigację po zescrollowaniu w dół i inne tego typu bajery, skrypt napisałem w około 15 minut, zapisuję, nie działa. Oho! Pewnie jakąś klasę czy identyfikator źle wpisałem i jest błąd, przeglądam kod, patrzę na nazwy w `index`, wszystko się zgadza. Kurde, coś innego musi być nie tak, więc przeleciałem szybko w sieci co jest nie tak w składni, coś źle napisałem? No nie, jest OK, no to co to może być? Mija 30 minut, widzę przedostatnią linijkę kodu z brakującym średnikiem `;`, wtedy wszystko stało się jasne! Cholerne średniki, zawsze uwalą kod, gdy człowiekowi coś za dobrze wychodzi. No dobrze, przykład z autopsji już był, to teraz czas na jakieś bardziej praktyczne przykłady do której żywię urazę. Odpalamy nasze środowisko pracy, bo będziecie walczyć ze średnikami razem ze mną. 

Mam pomysł, wyrzućmy wszystko co wcześniej napisaliśmy w `functions.js`! Czemu? Bo taką mam wizję. Gdy nasz plik świeci pustkami, to możemy przy okazji wyczyścić `index.html` z elementów magicznych. Przy okazji nauczymy się też czegoś nowego w `JS`! Co chcemy zrobić? Na pewno utworzyć jakąś funkcję! Która będzie robić coś, póki co prymitywnego, czyli jakieś obliczenia, wartości i tym podobne. Chociaż nie, wiecie co, chrzanić! Zrobimy coś bardziej skomplikowanego, chciałem wrzucić pętle warunkowe i tym podobne jako osobną lekcję, ale jako że lubię łamać schematy, to wyjdźmy za listę artykułów i wrzućmy do kociołka `if`, `else`, `else if` tutaj, a co! Chcemy zrobić funkcję, która będzie sprawdzać formularz kontaktowy, czy wszystkie pola są wypełnione, czy się wszystko zgadza, będzie to na pewno bardziej praktyczny przykład niż `Licz deltę`, którym mnie katowano w szkole. Dobrze, to pierw nazwijmy sobie naszą funkcję:

```javascript
function validateForm() {
  
}
```

oraz zmodyfikujemy nasz `index`:

```html
  <div class="content">
    <form action="index.html" name="form" onsubmit="return validateForm()">
      <input type="text" name="name" placeholder="Your name...">
      <input type="mail" name="mail" placeholder="Your email...">
      <input type="text" name="subject" placeholder="Your subject of message...">
      <textarea name="textarea" placeholder="Type what you need..."></textarea>
      <button type="submit">Send</button>
    </form>
  </div>
```

no i delikatnie ostylować:

```scss
form {

  input, textarea {
    display: block;
    width: 50%;
    margin-bottom: 40px;
    padding: 15px;
  }

  textarea { max-height: 240px; min-height: 190px; }

  button { padding: 15px; width: 30%; background: chocolate; }

}
```

Nie ma tutaj co omawiać, przystępujemy do obmyślenia co chcemy, aby się działo w naszym skrypcie - taka mapa myśli:

* Skrypt ma być wywołany podczas wysłania formularza
* Skrypt ma sprawdzać czy pole "name", "mail", "subject", "textarea" nie są puste
* Skrypt ma sprawdzać czy pole "mail" zawiera symbol "@" czyli "At"
* Skrypt ma sprawdzać czy pole "name", "mail", "subject", "textarea" nie jest za krótkie 

Mniej więcej tyle. Teraz musimy to odpowiednio przechwycić i wykonać! Do tego przyda nam się znajomość składni i poleceń związanych z pobieraniem danych z formularza, co JS oczywiście potrafi:

```javascript
function validateForm() {
  var formArray = new Array("name", "mail", "subject", "textarea");
  
  var getName = document.forms["form"][formArray[0]].value,
      getMail = document.forms["form"][formArray[1]].value,
      getSubject = document.forms["form"][formArray[2]].value,
      getTextarea = document.forms["form"][formArray[3]].value;

}
```

Utworzyliśmy nowy szereg w którym zawarliśmy nazwy użyte w poszczególnych polach formularza. Poniżej utworzyliśmy 4 zmienne, których zadaniem jest pobieranie danych, dlatego na początku zawierają frazę `get`, abym nie pomylił za x miesięcy później co robi `getName`, wiem na pewno że pobiera dane wpisane w polu o nazwie `name`, wykorzystuję do tego polecenie: `document.forms`, gdzie jesteśmy już w stanie stwierdzić, że JS dzięki DOM, poszukuje `formularzy`, w dalszej części wskazujemy nazwę naszego formularza w `["nazwaFormularza"]` i wskazujemy `input` który nas interesuje w tym przypadku `input name`, zaś na końcu pobieramy wartość poleceniem `.value`. Teraz przyszła pora na dalsze operacje, czyli użyjemy pętli warunkowej do sprawdzania poszczególnych pól:

```javascript
function validateForm() {
  var formArray = ["name", "mail", "subject", "textarea"];
  
  var getName = document.forms["form"][formArray[0]].value,
      getMail = document.forms["form"][formArray[1]].value,
      getSubject = document.forms["form"][formArray[2]].value,
      getTextarea = document.forms["form"][formArray[3]].value;

  if (getName == null || getName == "" ) {
    document.getElementById("alert").innerHTML="Pole " + formArray[0] + " nie może być puste!";
    return false;
  }

}
```

Dodatkowo dodajmy sobie w `index` element, który będzie nas informował gdy występuje błąd w formularzu, czyli `alert`:

```html 
<div class="content">
  <div id="alert" class="alert"></div>
  <form action="/" name="form" onsubmit="return validateForm()">

    <input type="text" name="name" placeholder="Your name...">
    <input type="mail" name="mail" placeholder="Your email...">
    <input type="text" name="subject" placeholder="Your subject of message...">
    <textarea name="textarea" placeholder="Type what you need..."></textarea>
    <button type="submit">Send</button>

  </form>
</div>
```

ostylujmy:

```scss
.alert {
  width: 50%;
  text-align: center;
  background: darkred;
  height: 40px;
  line-height: 40px;
  color: #fff;
  margin-bottom: 40px;
}
```

A teraz co to jest `Pętla warunkowa` o tajemniczej nazwie `if`? Pętla warunkowa, czyli coś ma zostać wykonane `jeśli` zachodzi dany warunek, jeśli dwa elementy są sobie równe, różne, większe od siebie lub mniejsze od siebie oraz czy dany warunek ma zostać sprawdzony wraz z innym warunkiem czy też nie. Tak, wiem mętlik i nic interesującego, więc teraz praktycznie to pokażę, bo niestety trzeba... Opiszę przy okazji `Stany`:

Operatory porównania: 

* `==` równy sobie (ang. equal to)
* `===` równy sobie I równy typem danych, czyli musi zgadzać się wartość oraz typ danych, jeśli porównamy dwie zmienne, gdzie jedna będzie miała wartość 8, a druga "8", otrzymamy wynik sprzeczny ponieważ nie są jednakowego typu
*  `!=` nie równy sobie (ang. not equal)
* `!==` nie równy sobie LUB nie równy typem danych, tak jak powyżej, z tą różnicą że tutaj występuje LUB, czyli jeśli jest nie równy sobie to otrzymamy wynik prawdziwy, zaś jeśli będzie różnego typu a tej samej wartości, otrzymamy wynik prawdziwy
* `>` większy od (ang. greater than)
* `<` mniejszy od (ang. less than)
* `>=` większy lub równy
* `<=` mniejszy lub równy 

Operatory logiczne: 

* `&&` - operator AND, czyli I, jeśli jeden i drugi warunek jest spełniony, otrzymamy wynik prawidłowy np. x = 5, y = 6, (x < 6 && y > 7) 
* `||` - operator OR, czyli LUB, czyli jeśli jeden warunek jest spełniony to otrzymamy wynik prawidłowy, jeśli drugi warunek nie jest spełniony
* `!` - operator NOT, czyli NIE, czyli jeśli jeden warunek jest sprzeczny, to otrzymamy wynik prawidłowy

A teraz do czego te diabelstwa stosujemy? Jak już mogliście zobaczyć wyżej, w pętlach warunkowych oraz po prostu w pętlach, umożliwiają one sprawdzanie określonych warunków i zachodzących operacji logicznych. Uff. Teraz zajrzymy co dzieje się u nas. `Jeśli` pobrana wartość z formularza jest równa `null`, czyli pustym danym LUB równa się łańcuchowi znaków o zerowej długości (`string`) to ma się wyświetlić tekst w naszym polu `alert`, którego pobieramy identyfikator. Zapiszmy i sprawdźmy co się stanie!

![JS #3-2](http://image.prntscr.com/image/c736e3b9cb6f426abfcb646bf68e8581.png)

Jak widać wszystko pięknie działa! Ale coś mi się tutaj nie podoba, bo czemu domyślnie alert ma być widoczny? Coś tutaj zamieszamy, żeby `alert` pokazywał się wyłącznie gdy pola będą puste, pierw dodajmy do naszego `main.scss` jedną linijkę dla `.alert`:

```scss
.alert {
  width: 50%;
  text-align: center;
  background: darkred;
  height: 40px;
  line-height: 40px;
  color: #fff;
  margin-bottom: 40px;
  display: none;
}
```

Ponieważ domyślnie `alert` ma być niewidoczny. Teraz w JS, sprawimy że nasz `alert` po sprawdzeniu warunku zostanie wyświetlony:

```javascript
function validateForm() {
  var formArray = ["name", "mail", "subject", "textarea"];
  
  var getName = document.forms["form"][formArray[0]].value,
      getMail = document.forms["form"][formArray[1]].value,
      getSubject = document.forms["form"][formArray[2]].value,
      getTextarea = document.forms["form"][formArray[3]].value;

  if (getName == null || getName == "") {
    document.getElementById("alert").style.display="block";
    document.getElementById("alert").innerHTML="Pole " + formArray[0] + " nie może być puste!";
    return false;
  }
}
```

Nowym poleceniem (metodą) jest tutaj: `style`, które odpowiada za kontrolowanie CSS, czyli wpisujemy `.style.własność w CSS = " wartość ";`, dzięki czemu nasz element `alert` zostanie wyświetlony w momencie sprawdzenia warunku. Oczywiście mogę zrobić jeszcze potworniejszą składnię, po prostu wrzucając .style linijkę niżej, ale oszczędzę sobie tego, bo za moment będziemy musieli dodać pozostałe pola, czyli nasz warunek wydłuży się koszmarnie:

```javascript
function validateForm() {
  var formArray = ["name", "mail", "subject", "textarea"];
  
  var getName = document.forms["form"][formArray[0]].value,
      getMail = document.forms["form"][formArray[1]].value,
      getSubject = document.forms["form"][formArray[2]].value,
      getTextarea = document.forms["form"][formArray[3]].value;

  if (getName == null || getName == "" || getMail == null || getMail == "" || getSubject == null || getSubject == "" || getTextarea == null || getTextarea == "") {
    document.getElementById("alert").style.display="block";
    document.getElementById("alert").innerHTML="Pola " + formArray[0] + " " + formArray[1] + " " + formArray[2] + " " + formArray[3] + " nie może być puste!";
    return false;
  }
}
```

Ależ milusio to wygląda! Fiu fiu! Dlatego właśnie nienawidzę składni w JS... Bo całość staje się przeraźliwie skomplikowana, zawiła i długa. Mam dla was dobrą wiadomość, teraz należało by wstawić kolejne warunki związane z tym, jeśli nie zostało wypełnione jedno z pól formularza... Ewentualnie, dodawać alerty do każdego z pól. Ale nie będziemy sobie teraz tym gitary zawracać, niestety, skupimy się nad pozostałymi warunkami jakie ma spełniać nasz Walidator (bo taką ładną nazwę noszą tego typu skrypty) już w następnej lekcji, ponieważ będzie to wymagało zastosowania jQuery, a przynajmniej ułatwi znacząco pracę! 

Nauczyliśmy się przeklętej składni Javascriptu, o tym na co należy zwracać uwagę oraz nadprogramowo poznaliśmy operatory porównania i logiczne, a także pętle warunkową `if`, jak zawsze: if(podobałCiSięArtykuł == true) { zostaw `Lubię to!`, skomentuj, udostępnij; return true; }, a tymczasem do nastepnej lekcji w Pełni :>

---

Artykuł jest moją własnością - **FuruArt** - zakaz kopiowania treści na inne blogi, fanpage czy strony bo nogi z **** powyrywam!
