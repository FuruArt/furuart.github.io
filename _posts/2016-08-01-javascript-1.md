---
layout: post
title: "[#1] Javascript - DOM - jak paczy Javascript?"
date: 2016-08-01 16:00
author: FuruArt
comments: true
category: Dla webdeveloper'a
tags: [javascript, js, script, developer, webdeveloper, front-end, kodowanie, skryptowanie, skrypt, dom, model, hierarchia, drzewo, window]
image: "/uploads/images/js.png"
---
### Czym byłby Javascript, bez modelu DOM! Tym samym co but bez nogi (owszem, butem można równie dobrze rzucać), czyli dzisiaj odpowiemy sobie na nurtujące starożytnych Greków pytanie - jak widzi Javascript? (wątpię, aby to było ich najważniejsze pytanie) oraz czym właściwie Javascript jest?

<!--more-->

Javascript, coś co na początku swojej nazwy ma inny bardzo przyjazny programistom język programowania [Java](http://s2.quickmeme.com/img/78/78601dd88731759e725a36e10f3d8632a494d69a583cd5dfc04c384176e29399.jpg) oraz w drugim członie `script`, czy to oznacza że `Javascript`( Dżawaskript ) jest po prostu `Javą` dla przeglądarek? Odpowiedź definitywnie brzmi: `NIE` i całe szczęście, gdyby Javascript był wyłącznie Javą dla przeglądarek, mówiąc kolokwialnie mielibyśmy przesrane. Dlaczego? Spójrzmy na trywialne `Hello world!` napisane w Javie:

```java 
public class HelloWorld {

    public static void main(String[] args) {
        // Prints "Hello, World" to the terminal window.
        System.out.println("Hello, World");
    }

}
```

A teraz w Javascript: 

```javascript
document.write("Hello world!");
```

Chwała Javascriptowi. Dobrze, ale nie mieliśmy się skupiać nad tym czym jest Java, a czym Javascript, dodałem to jako ciekawostkę, ponieważ skoro z przodu ma `java` to nie znaczy że ma jakiś głębszy związek z danym językiem programowania. Tyle słowem wyjaśnienia, a teraz przejdźmy do podstawowego pytania: `Czym właściwie Javascript jest?` 

> JavaScript is the programming language of HTML and the Web.
> Programming makes computers do what you want them to do.
> JavaScript is easy to learn.
~ W3Schools.com 

Czyli dowiedzieliśmy się tyle, że `Javascript` jest językiem programowania dla `HTML` oraz `Sieci` (internetu...). Że programowanie sprawia, iż komputery robią to czego chcesz (genialne!), a także `Javascript` jest łatwy do nauki. Z dwoma zdaniami się zgodzę, jest językiem programowania oraz jest łatwy do nauki. Z tym że komputery robią to czego chcę, nie jest prawdą i nie ma sensu, no bo napiszę skrypt w JS, aby mój laptop robił mi codziennie o 10 tosta z masłem, gdy tylko włączę komputer (nie da się, nie próbujcie) - wątpię aby zrozumiał polecenie: `makeToast(10, chrupiący, masło);` `Javascript` jest językiem `skryptowym` (programowania, ponieważ zawiera operatory i wszystkie elementy cechujące go jako język programowania), rozszerzającym możliwości statycznych dokumentów `HTML` o dynamiczne elementy, przykładowo formularz obliczający cenę z `VAT` lub mobilną nawigację, czy interaktywny toster (coś mnie dzisiaj wzięło na grzanki...), może pracować w czasie rzeczywistym czyli tak zwanym synchronicznym albo asynchronicznym, lecz ten drugi wariant gwarantuje rozszerzenie JS, czyli `Ajax` (EjDżeks) (nie, nie ten płyn) tylko `Asynchronous JavaScript and XML`, ale tym nie będziemy sobie teraz głowy zaprzątać. Czyli dochodzi nam kolejna właśność JS, jest `rozszerzalny`, z czego rozszerzenia stają się osobnymi językami skryptowania, tak jak np. jQuery, JSON, AJAX. Co jeszcze warto wiedzieć o Javascript? Ma cholernie długą składnię... Co nie jest niczym dobrym, a także w przeciwieństwie do HTML czy CSS, zwraca uwagę na różnicę między `" "`, a `' '`. Dobrze, skoro dowiedzieliśmy się czym `Javascript` jest:

![JS #1-1](http://m.memegen.com/bvnpsq.jpg)

Odpowiedzmy sobie teraz na pytanie zawarte w nagłówku, jak Javascript patrzy? Ale zaraz, zaraz, o czym ja pierniczę jak potrzaskany, przecież to jest tylko jakiś tam sobie język programowania, nie ma przecież oczu, więc jak może patrzeć?! Spieszę z wyjaśnieniami nim zostanę zlinczowany i wytarzany w smole i pierzu, otóż Javascript patrzy na elementy zawarte na stronie (czyli w dokumencie HTML) hierarchicznie, rozróżnia który element w HTML jest pierwszy, a który ostatni, tutaj przyda się wprowadzenie podstawowych pojęć, których sprytnie udało mi się uniknąć podczas zabawy w `Sass`, mianowicie:

* Drzewo obiektowe
* Rodzic 
* Dziecko
* Element 
* Identyfikator
* Klasa

A co to za pojęcia i czemu tutaj się znalazły? Ponieważ należą do Modelu Obiektowego zwanego DOM, hola hola! Co to jest `model obiektowy`?! Coś co robiliśmy nie świadomie pisząc naszą stronę w JADE oraz HTML, czyli układ powiązanych ze sobą danymi relacjami elementów. `DOM` czyli `Document Object Model` - Model obiektowy dokumentu, to właśnie nasze strony w HTML, z rozbiciem wszystkiego na czynniki pierwsze: 

![JS #1-2](https://s19.postimg.org/63eemvzkz/js_dom.png)

To co widzicie na obrazku to właśnie `Drzewo obiektowe` (Object Tree), co na nim widzimy? `Rodzica` o nazwie dokument, który zawiera w sobie innego `Rodzica` o nazwie `HTML`, który jest jednocześnie dzieckiem dla `Dokument`, zaś w `HTML` znajdują się `dzieci`, o nazwie `Head` oraz `Body`, które są rodzicami dla `Title` oraz `H1`, które zawierają w sobie `tekst`. Zawiłe i pokręcone jak relacje rodzinne, owszem, bo takie mają być. Tylko na wafel mi to? No właśnie, podczas pisania skryptów przecież nie będziemy rysować sobie drzewka, żeby wiedzieć że `<html>` zawiera w sobie `<head>`... Więc po co to? Żeby pokazać, iż Javascript działa i operuje na elementach zawartych w hierarchicznym układzie przypominającego drzewo, gdzie istotne jest rozróżnianie tego co zawiera się w danym elemencie, ponieważ typowe polecenie w JS do odnajdywania danego elementu w DOM, czyli: `document.getElementByID()`, korzysta z tego że rozgląda się w obszarze: Document, poszukuje elementu o danym Identyfikatorze, czyli ID. DOM jest oczami Javascriptu, ułatwiając precyzyjne wyszukiwanie elementów na stronie oraz dodawania im danych własności czy funkcji.

Lecz Javascript, mógłby nazywać się w tym wypadku np. SuperHTML albo UltraHTML, więc co sprawia dodatkowo że jest to Javascript? Kolejny model obiektowy, związany bezpośrednio z przeglądarką, czyli sferą do której zwykły HTML nie dociera. Powiedzcie mi, czy jesteście w stanie sprawdzić przy pomocy zwykłego HTML, na jakiej wysokości znajduje się element w oknie przeglądarki gdy użytkownik zescrolluje do danego momentu? Lub czy jesteście w stanie podać mi szerokość elementu w którym treść zmienia się cyklicznie? Dla tych co potrafią biję pokłony, a dla tych co są realistami odpowiem że Javascript posiada drugi model obiektowy o nazwie `BOM` (szczerze, wcześniej nie rozróżniałem tego jako nowa nazwa, był to po prostu DOM i elementy przeglądarki...) czyli `Browser Object Model`, Model obiektowy przeglądarki. Tylko co nam to daje? Daje nam to możliwość operowania na właśnościach przeglądarki takich jak:

* Window - okno przeglądarki
* Screen - ekran przeglądarki
* Location - lokalizacja przeglądarki
* History - historia przeglądarki (tak świntuszki, zgadza się :>)
* Navigator - nawigacja przeglądarki
* Popup Alert - wyskakujące okienka
* Timing - czas w przeglądarce
* Cookies - ciasteczka (omnomnomnom)

Dzięki `BOM` nasz Javascript może pobierać dane z aktualnie otwartego okna przeglądarki, zbierać informacje na temat wyświetlanych elementów, wpływać na lokalizację w przeglądarce (np. Google Maps), modyfikować historię (tworząc np. archiwum), wskazywać punkt docelowy (również Google Maps), zarządzać wyskakującymi okienkami i informacjami w nich zawartymi, ingerować w czas przeglądarki (o danej godzinie ma zostać wykonany dany skrypt, wyświetlona godzina itp.) oraz Ciasteczka czyli pamięć do pewnych zapytań w przeglądarce. No jeśli wasz HTML potrafi takie cuda to klaszczę czołem :> 

Podsumowując mocno teoretyczny wstęp do JavaScriptu dowiedzieliśmy się czym `Javascript` jest, budując własną definicję, jak patrzy na elementy zawarte w przeglądarce czyli `model DOM`, a także pojęcia z nim związane oraz ukazaliśmy prawdziwą potęgę `Javascriptu` czyli `model BOM` zezwalający na operacje związane z przeglądarką. W kolejnej lekcji zajmiemy się już pierwszymi przykładami i odpalimy nasze środowiska pracy, a tymczasem jak zawsze (lecz po dłuższej nieobecności), jeśli podobał Ci się ten artykuł, zachęciłem Cię do nauki Javascript'u, zrobiłem Ci ochoty na Tosta lub chcesz docenić moją pracę to zostaw 'Lubię to!` na Facebook'u, skomentuj, udostępnij, a będę Ci wdzięczny. Do następnej lekcji w Pełni :>

---

Artykuł oraz grafiki w nim zawarte są moją własnością - **Furu.Art** - zakaz kopiowania treści na inne blogi, fanpage czy strony, bo nogi z **** powyrywam!