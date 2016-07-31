---
layout: post
title: "Projektowanie na kartce? Z czym to się je? - Podstawy"
date: 2016-05-21 14:00
author: FuruArt
comments: true
category: Dla webdesigner'a
tags: [design, Dla Webdesignera, notepad, ołówek, pencil, projektowanie, sheet, sketch, szkic, web, wireframe]
image: "/uploads/images/projektowanieNaKartce.png"
---
### Większość stron dobrze przemyślanych pod względem wizualnym, które widzimy w internecie zostały pierwotnie skonstruowane na kartce, white-board'zie, tablicy kredowej lub nawet za pomocą żółtych karteczek samoprzylepnych. No dobrze, fajnie, tylko co z tego? A no dokładnie tyle, że każdy dobry projekt zaczyna się z dala od komputera! A sam proces Design'u wygląda mniej więcej jak zabawa klockami Lego, o czym za chwilę się przekonacie.

<!--more-->

Moje porównanie do zabawy klockami nie jest bez powodu, ponieważ aby tworzyć przemyślane strony WWW musimy układać odpowiednie sekcje (tak jak w Lego klocki) na kartce. Dzięki czemu wykreujemy coś co slang Designerów nazywa Wireframe'em, który jest niczym innym jak tylko szkieletem naszej strony, taka trochę mąka w chlebie czy mleko w serze (jeśli mówimy o prawdziwym serze, a nie produktach seropodobnych). A teraz jak wygląda przykładowy Wireframe?

![Projektowanie na kartce #0-1](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/q81/p720x720/13247701_1095687953824265_3243955340251241928_o.jpg)

Jak widać jest to najzwyczajniej w świecie szkic, w którym pomijamy jakiekolwiek detale. Istotą jest wiedzieć co chce się otrzymać i tak jak u mnie, można sobie rozpisać co dana sekcja będzie robić, ale to już bardziej ze względów developerskich. Dobrze, to co musimy zrobić aby zostać Szkieleciarzem? (Wireframe'owiec brzmi jakoś średnio)


* Kartka, najlepiej kropkowana lecz jeśli nie mamy kropkowanej może być jakakolwiek w kratkę, kropkowana jest dla czystej wygody tworzenia, jest to bardziej precyzyjne i odzwierciedla mniej więcej piksele, a jeśli nie kartka to np. white-board.
* Ołówek/Długopis/Mazak/Pióro/Kreda lub jakiekolwiek inne narzędzie do kreślenia, jak ktoś ma duże aspiracje może nawet cyrklem to robić, Gumka do ścierania (nie do mazania, ważne!)
* Pomysł, chęci no i rzecz jasna minimalną umiejętność rysowania linii, kółek lub prostokątów.

Skoro już wiadomo co będzie nam potrzebne do naszego pierwszego Szkieletu strony WWW, przystępujemy do pracy! Ale zaraz, zaraz, żeby budować coś z klocków, wymagane są jeszcze ów klocki. Zacznijmy od podstawy klockowej rodziny, czyli tak zwanego Kontenera (Container), będzie on głównym blokiem gromadzącym dane sekcje w sobie, oznaczamy go w ten sposób:

![Projektowanie na kartce #0-2](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13239415_1095688203824240_8283989596796657239_n.png?oh=7e7eeeba7397969baaecf05b6f6a2e58&amp;oe=57D5DA38)

Oprócz kontenera zawarłem element o szerokości całego dokumentu, czyli np. pasek z menu na górze strony lub stopka. Wewnątrz naszego 'Tatuśka' będziemy umieszczać Pudełka (Box'y), rzadziej Tabelki lecz nie miałem gdzie indziej ich wcisnąć:

![Projektowanie na kartce #0-3](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13254582_1095688643824196_2132074975117357677_n.png?oh=122f0aa3a7d5f66ae627b491d99ba5ec&amp;oe=57DE4A97)

Do naszego Pudełka będziemy pakować chociażby różne obrazki, grafiki, infografiki, które w 'języku' designer'a prezentują się w następujący sposób (im bardziej koślawo tym lepiej!), rzecz jasna jeśli obrazek jest na całą szerokość strony, rysujemy tak jak dowolny element na całość strony z symbolem obrazka:

![Projektowanie na kartce #0-4](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/13217100_1095688890490838_7419218477597869690_o.png)

Oprócz grafik przydałby się jakiś tekst, nagłówki, wpisy, odnośniki, listy i inne tego typu, występują pod postacią szlaczków i gryzmołów, nagłówek w celu odróżnienia zaczyna się wysokim maźnięciem do góry i dalej szlaczki, nawigacją mogą być np. listy wysuwane, wielopoziomowe (Dropdown-menu):

![Projektowanie na kartce #0-5](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/13246313_1095689017157492_533384767730753189_o.png)

Mamy obrazki, mamy teksty, no to może na dokładkę jakieś przyciski akcji? Proszę bardzo! Przyciski są zaokrąglonymi prostokątami z 'btn' w środku, zamiast 'btn' można wpisać nazwę akcji jaką ma wykonywać np. 'send'. A te strzałeczki, służą do wskazania treści przewijanej gestami, np. Guziki galerii interaktywnej, pokazu slajdów (Slider'y):

![Projektowanie na kartce #0-6](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13254146_1095689343824126_3919057959557241615_n.png?oh=af296e7141f7c37333a6a4cd664c8ace&amp;oe=579AC17B)

W sumie można by powiedzieć, że mamy już wszystko, jednakże dorzuciłbym do tej listy wszelakie ikonki utarte w internecie w celu określenia funkcji danego elementu, zegarek - pokazywanie daty publikacji posta, kalendarz - archiwum postów, ludzik - możliwość logowania, myszka - należy przewijać, aby coś się stało, kratka (hash) - tagi w poście, chmurka - komentarze, strzałka góra-dół - element będzie przesuwał się wraz z przesuwaniem strony (fixed):

![Projektowanie na kartce #0-7](https://scontent.fwaw3-1.fna.fbcdn.net/v/t1.0-9/13254064_1095689477157446_3960216173243312375_n.png?oh=16b35507ae3311c85cd2950314f218ae&amp;oe=57E35F5B)

Skoro poznaliśmy klocki, to jesteśmy w stanie stworzyć już jakiś szkielet! Budujemy dokładnie tak jak w przypadku klocków Lego. Granicą może być tylko i wyłącznie wasza wyobraźnia oraz sposób widzenia. Z ów składników można otrzymać np. coś takiego:

![Projektowanie na kartce #0-8](https://scontent.fwaw3-1.fna.fbcdn.net/t31.0-8/q85/p720x720/13220564_1095689750490752_8773304643814460874_o.jpg)

Jak widzicie nic trudnego stworzyć Szkielet strony, a później problemem nie będzie przerzucenie tego do Photoshop'a i stworzenie normalnego Layout'u! Co również będę starał się wam pokazać. Mam nadzieję, że spróbujecie wykonać własny Szkielet strony i ta lekcja wam się przyda, do czego zachęcam! Oczywiście, jeśli wpis wam się podobał, przeczytaliście go, skorzystaliście, zostawcie magiczne 'Lubię to!', aby lekcja dotarła do szerszej publiczności, komentarze jak zawsze mile widziane, a tymczasem do zobaczenia w Pełni! :)

---

Materiały zawarte w artykule oraz treści są moją własnością - **Furu.ART**, zakaz kopiowania treści lub grafik na własne fanpage, strony czy blogi - Bo nogi z **** powyrywam!
