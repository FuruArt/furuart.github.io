---
layout: post
title: "Grid system - czyli jak siatka zmieniła podejście do mobilnej technologii"
date: 2016-05-31 16:00
author: FuruArt
comments: true
categories: [Dla webdeveloper'a, Dla webdesigner'a]
tags: [ninesix, calc, code, css, design, development, Dla Webdesignera, Dla Webdevelopera, front-end, grid, gs, html, math, obliczenia, perfect, responsive, rwd, scale, siatka, system]
image: "/uploads/images/grid.png"
---
### Dzisiaj zajmiemy się niewielkim narzędziem, które zrewolucjonizowało (trudny wyraz, musiałem sobie przeliterować) dzisiejsze strony internetowe, aplikacje oraz przede wszystkim możliwość rozwinięcia Responsive Web design'u!

<!--more-->

Grid system - (tutaj powinna pojawić się mądra definicja z wikipedii.org, jednakże znalazłem jedynie informację o tym, że [GRID](https://pl.wikipedia.org/wiki/GRID_(medycyna)) było pierwotną nazwą dla choroby AIDS zaproponowaną w 1982 roku, czyli ja zajmę się definicją) 

> Siatka używana w projektowaniu oraz kodowaniu, umożliwiająca idealne rozłożenie elementów, tak aby na każdym urządzeniu strona prezentowała się dobrze, odstępy między sekcjami były równe, po prostu żeby wszystko było perfekcyjnie. 

Siatka powiadacie... ![Grid #0-1](http://www.solexogrodzenia.pl/produkty/3/images/products/53_182.jpg)

Taka? Nie do końca... `Siatka`, czyli obszar składający się nieskończenie długich prostokątów o określonej szerokości, odsunięte od siebie o prostokąty o określonej, dużo mniejszej szerokości, a całość zamknięta jest w szerokości maksymalnej `960` (słownie dziewięćset sześćdziesiąt) pikseli. Z grubsza tak to właśnie wygląda:

![Grid #0-2](https://blogwpelni.files.wordpress.com/2016/05/grid1.png)

No dobrze, ale jakie szerokości mają poszczególne prostokąty, czemu `960 pikseli`? Szerokość jednej kolumny, bo ów prostokąty nazywamy kolumnami mają 80 pikseli, czemu 80? Prosta i szybka matematyka:

```javascript
var width = 80;
var grid = 960;
var count = grid/width;

document.write(grid/count);
```

Co w końcowym rozrachunku daje nam odpowiedź, że `960 pikseli` podzielone przez `80 pikseli` daje liczbę `12` (piksele się skracają ze sobą [px/px]). Czyli jesteśmy w stanie wywnioskować że możemy utworzyć 12 kolumn, aby grid miał pełną szerokość. Jednakże, nie damy mu pełnych 80 pikseli, ponieważ nie byłoby miejsca na odstępy między kolumnami, wobec czego odejmujemy `20 pikseli` od `80 pikseli`, otrzymujemy w ten sposób `60 pikseli`. Dzięki czemu nasz Grid będzie wyglądał w następujący sposób:

![Grid #0-3](https://blogwpelni.files.wordpress.com/2016/05/grid2.png)

Powodując, że obszar naszego działania to `940 pikseli`. Tylko w ten sposób jesteśmy w stanie mieć `12 kolumn` po `20 pikseli` odstępu między nimi, no dobrze ale po co ten cały zachód i te złożone obliczenia? `960 pikseli` mieści się w obszarze `1024x768 px`, które jest uważane za standard rozdzielczości, jaką spełnia każdy monitor przeciętnego użytkownika internetu. Chwaląc się, powiem że `960` jest podzielne przez 2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 24, 30, 32, 40, 48, 60, 64, 80, 96, 120, 160, 192, 240, 320 oraz 480, co daje perfekcyjne rozłożenie pikseli na ekranie. Dobrze, to wytłumaczyłem już skąd pomysł na `Grid` (Grid to po angielsku siatka), jak wymyślono jej idealne wymiary oraz do czego służy, czas na powiedzenie: A na kij mi to w developerce? No właśnie i tutaj `Responsive Webdesign` przychodzi z wyjaśnieniami, ponieważ nie ma lepszego sposobu na skalowanie strony na różnych urządzeniach niż właśnie użycie perfekcyjnie odmierzonej siatki, która dostosowuje się sama do ekranu. Ale my tu pitu pitu, a przydałoby się pokazać jak to wygląda w praniu, no to do roboty! Odpalamy nasze środowisko pracy, tworzymy jakikolwiek dokument html i css lub dla ambitniejszych gulp'ujemy sobie Jade'a i Sass'a:

```html
<!DOCTYPE html>
<html lang="pl">
<head>
  <meta charset="UTF-8">
  <title>Grid system</title>
  <link rel="stylesheet" href="css/main.css">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>12</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-11">
        <h1>11</h1>
      </div>
      <div class="col-1">
        <h1>1    </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-10">
        <h1>10</h1>
      </div>
      <div class="col-2">
        <h1>2</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-9">
        <h1>9</h1>
      </div>
      <div class="col-3">
        <h1>3</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-8">
        <h1>8</h1>
      </div>
      <div class="col-4">
        <h1>4</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-7">
        <h1>7</h1>
      </div>
      <div class="col-5">
        <h1>5</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-6">
        <h1>6</h1>
      </div>
      <div class="col-6">
        <h1>6</h1>
      </div>
    </div>
    <div class="row">  
      <div class="col-5">
        <h1>5</h1>
      </div>
      <div class="col-7">
        <h1>7</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-4">
        <h1>4</h1>
      </div>
      <div class="col-8">
        <h1>8</h1>
      </div>
    </div>
    <div class="row">  
      <div class="col-3">
        <h1>3</h1>
      </div>
      <div class="col-9">
        <h1>9</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-2">
        <h1>2</h1>
      </div>
      <div class="col-10">
        <h1>10</h1>
      </div>
    </div>
    <div class="row">   
      <div class="col-1">
        <h1> 1</h1>
      </div>
      <div class="col-11">
        <h1>11</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>12</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-3">
        <h1>1</h1>
      </div>
      <div class="col-3">
        <h1>2</h1>
      </div>
      <div class="col-3">
        <h1>3</h1>
      </div>
      <div class="col-3">
        <h1>4</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-4">
        <h1>1</h1>
      </div>
      <div class="col-4">
        <h1>2</h1>
      </div>
      <div class="col-4">
        <h1>3</h1>
      </div>
    </div>
  </div>
</body>
</html>
```

```css
* {
  box-sizing: border-box;
  font-family: sans-serif; }

.container {
  max-width: 960px;
  margin: 0 auto;
  padding: 0; }

.row {
  margin: 0;
  padding: 0; }
  .row::after {
    content: '';
    clear: both;
    display: block; }

[class*='col-'] {
  float: left;
  border: 1px solid orange;
  color: #111;
  text-align: center;
  vertical-align: center; }

.col-1 {
  width: calc(8.33%*1); }

.col-2 {
  width: calc(8.33%*2); }

.col-3 {
  width: calc(8.33%*3); }

.col-4 {
  width: calc(8.33%*4); }

.col-5 {
  width: calc(8.33%*5); }

.col-6 {
  width: calc(8.33%*6); }

.col-7 {
  width: calc(8.33%*7); }

.col-8 {
  width: calc(8.33%*8); }

.col-9 {
  width: calc(8.33%*9); }

.col-10 {
  width: calc(8.33%*10); }

.col-11 {
  width: calc(8.33%*11); }

.col-12 {
  width: calc(8.33%*12); }
```

Dzięki czemu powinniśmy otrzymać coś takiego:

![Grid #0-4](https://blogwpelni.files.wordpress.com/2016/05/grid3.png)

I teraz jeśli zaczniemy zmniejszać okno przeglądarki w poziomie, powinniśmy otrzymać:

![Grid #0-5](https://blogwpelni.files.wordpress.com/2016/05/grid4.png)

Co oznacza mniej więcej tyle, że nasz grid jest responsywny ponieważ skaluje się wraz z szerokością ekranu. Szerokość `8.33%`, wzięła się z podzielenia `100%` przez `12`, dokładniej na temat powyższego kodu, będę mówił podczas następnej lekcji z Gulp'a, gdzie będziemy już tworzyć responsywną stronę WWW. Pliki z dzisiejszej lekcji znajdą się również na [Github'ie](https://github.com/FuruArt/GulpowanieZFuru). Grid pozwala nam na szybkie ustawienie elementów, które będą się perfekcyjne skalować wraz z ekranem.

Jeśli chodzi o temat samego Grid'u to myślę, że na tą lekcję wystarczy, nauczyliśmy się czym jest Grid, jak pomaga w życiu web designer'a oraz web developer'a, jakie niesie korzyści oraz jak go stworzyć w html i css, tymczasem jak zawsze jeśli podobał Ci się ten artykuł, zaciekawił Cię temat siatki, spróbowałeś zrobić własną siatkę wedle mojego kodu lub po prostu chcesz docenić moje publikacje zostaw 'Lubię to!', skomentuj, udostępnij, a na pewno będę Ci za to wdzięczny, do następnej lekcji w Pełni :>

---

Artykuł oraz grafiki w nim zawarte są moją własnością - **Furu.Art** - zakaz kopiowania treści na inne blogi, fanpage czy strony - bo nogi z **** powyrywam!
