---
layout: post
title: "Po jakiemu gada współczesny webdeveloper?"
date: 2016-05-22 14:00
author: FuruArt
comments: true
category: Dla webdeveloper'a
tags: [code, css, Dla Webdevelopera, front-end, html, jade, leniwy, performance, preprocesor, sass, webdeveloper, webmaster]
---
### Języki programowania to sprawa powszechna, mówi się o nich ciągle i nie jest to żadną tajemnicą, czy ktoś jest znawcą C++, C#, Python'a czy Javy, ale jakim dialektem porozumiewa się Webdeveloper w dzisiejszych czasach? Mówię tutaj oczywiście o Webdeveloperze, który zajmuje się wierzchnią częścią stron WWW (Front-end developer), na to pytanie postaram się odpowiedzieć niżej.

<!--more-->

Nowoczesny front-end'owiec posługuje się wszystkimi językami skracającymi czas pracy przy kodzie do minimum, jak pisałem wcześniej we wpisie o Gulp'ie developerzy są leniwi, zazwyczaj staram się osiągać bardzo dużo robiąc przy tym całkiem niewiele! Więc Webdeveloper korzysta ze wszystkich dialektów, które posiadają swój preprocesor (możliwe jest kompilowanie i przekazywanie do strony gotowych plików domyślnych) dzięki nim jesteśmy w stanie rozszerzać fundamentalne języki kodowania o zaawansowane funkcje znane z języków programowania! No dobrze, ale tak po ogólnikach to my możemy biadolić i długie godziny! Czas na konkrety!

Leniwy Developer (czytaj Furu), zamienia fundamentalny i standardowy język kodowania HTML(Hypertext Markup Language) na JADE, który chyba nie ma jakiegoś specjalnego rozwinięcia skrótu. A czym się JADE charakteryzuje i wybija na tle poczciwego HTML'a?

![DeveloperLanguage #0-1](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/13247863_1096271317099262_3925155763292011591_o.jpg)

Jak widać JADE omija kompletnie znaczniki zamykające znane ze standardu HTML, bo w sumie dlaczego nie? W ten sposób nie muszę martwić się o to czy nie zapomniałem gdzieś zakończyć daną sekcję, JADE automatycznie rozpoznaje gdzie zaczyna się nowy element, a gdzie poprzedni kończy co znacznie przyspiesza tworzenie, stanowiąc niejako główny priorytet dla nowoczesnego webdeveloper'a. Bo jednak jest różnica, między tym:

![DeveloperLanguage #0-2](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13245344_1096271567099237_8855838556292295556_n.jpg?oh=48b92f1cae34d9856b73708495b26d69&amp;oe=57D9B8F5)

A tym:

![DeveloperLangauge #0-3](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13256036_1096273213765739_3709020799767216504_n.jpg?oh=a1ff344512e0feb94e8e5672077faa46&amp;oe=57E0D1EE)

Niby liczbowo nie wygląda jakoś powalająco, acz podczas samego procesu kodowania czas skraca się bardzo znacząco. Dobrze, ale czy to wszystko co daje JADE? Omijanie znaczników i uproszczenie zapisu? Otóż nie, posiada on również możliwości znane z JavaScript'u, które można implementować bezpośrednio do kodu strony, przykładowe wykorzystanie:

![DeveloperLanguage #0-4](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/13268026_1096273587099035_373288946758729336_o.jpg)

Czyli jesteśmy w stanie dodawać pętle warunkowe (if, ifelse, else), importować dowolną sekcję kodu utworzoną osobno, np. Nagłówek strony, Logo w formacie wektorowym, tworzyć zmienne do przechowywania danych czy importować stopkę, która czai się np. pięćdziesiąt folderów w głębinach folderu nadrzędnego, bo dlaczego nie? Mniej więcej to umożliwia Jade, lecz to tylko sam język elementów wyświetlanych na stronie. Teraz przyszła kolej na ulepszonego CSS'a czyli SASS!

![DeveloperLanguage #0-5](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13254550_1096280423765018_8753534399608225232_n.png?oh=fb1917690dd53af2059a858257f65ef5&amp;oe=57CBE2C8)

Wszystko za co ja jako developer ubóstwiam Sass'a to przede wszystkim tworzenie zmiennych, którymi mogę przechowywać w wygodny sposób np. wartości kolorów i wywoływać je za pomocą `$nazwaZmiennej`, tak zwane `@Mixins`, czyli predefiniowane funkcje, które możemy na bieżąco dowolnie zmieniać, zawierają one zmienne, czyli możemy zapisać transition dla wszystkich przeglądarek jako:

```sass
@mixin transition($element, $time, $effect) {
-webkit-transition: $element, $time, $effect;
-moz-transition: $element, $time, $effect;
-o-transition: $element, $time, $effect;
-ms-transition: $element, $time, $effect;
transition: $element, $time, $effect;
}
```

Zaś gdy będziemy chcieli wykorzystać naszą funkcję w kodzie, wpiszemy: `@include transition(background-color, .4s, ease-in-out);` i w ten sposób wywołamy transition dla wszystkich przeglądarek co niesamowicie upraszcza tworzenie kodu, oczywiście jest to jeden z bardziej błahych przykładów, ponieważ możemy dzięki `@mixin` stworzyć bardzo złożone sekcje kodu, np. system `grid` (o którym będzie kiedy indziej). W głównej mierze to najważniejsze elementy, za które uważam że ciężko jest mi się obejść bez korzystania z Sass'a - jest po prostu wygodny!

![DeveloperLangauge #0-6](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13260266_1096281483764912_2155949737886732988_n.jpg?oh=ea35cb4b84996122dc3dd33433900df3&amp;oe=579F23DF)

Mniej więcej czysto teoretycznie byłoby na tyle, ponieważ nie chcę tutaj wprowadzać bezpośrednio całego procesu ustawiania folderu pod kompilowanie Jade i Sass, tym zajmę się w innej lekcji połączonej z nauką Gulp'a, tak aby nie musieć trzymać otwartych kilku konsol do każdego języka preprocesorowego. Rzecz jasna do języka Developera leniucha należy jQuery, które jest po prostu nieodzowne podczas pracy nad Front-end'owymi elementami takimi jak slider'y czy galerie. A póki co to byłoby na tyle, jeśli spodobał Ci się ten artykuł, zachęciłem Cię do zgłębienia tego tematu szerzej, czy po prostu podoba Ci się to w jaki sposób piszę, zostaw 'Lubię to!' to bardzo motywuje do dalszych działań, dodatkowo zachęcam do komentowania lub udostępniania! Trzymajcie się w Pełni, do następnej lekcji :)

---

Część grafik oraz treść artykułu są moją własnością - **Furu.ART**, zakaz kopiowania treści lub grafik na własne fan-page, strony czy blogi - Bo nogi z **** powyrywam!
