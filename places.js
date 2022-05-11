window.onload = () => {
    let places = staticLoadPlaces();
    renderPlaces(places);
};

function staticLoadPlaces() {
   return [

    
     

    {
     name: 'Dobrodošli! Naša aplikacija će Vas voditi kroz Tvrđavu i ispričati najzanimljivije priče. Sva mesta na Tvrđavi su obeležena ikonicama koje se povećavaju kako korisnik prilazi. Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada. Druga srednjevekovna srpska prestonica na obali Dunava bilo je Smederevo. Kada, posle smrti Stefana Lazarevića, despot Đurđe Branković nije mogao ostati u Beogradu koji su preuzeli Mađari, on je sagradio novu prestonicu u Smederevu. Mesto je izabrao što dalje od Turaka, a sa osloncem na Dunav i granicu Ugarske. Tu je ravnica te je sagrađen „vodeni grad", opkoljen Dunavom i Jezavom, a sa treće strane prokopan je širok rov sa vodom. ',
     h: 'Smederevska Tvrđava',
     logo: 'logo.png',
     width: "1",
     height: "1",
     location: {
         lat: 44.05504, 
         lng: 20.48758,
     }
  
 },
 {
    name: 'Smederevski grad bio je jedan od najvećih srednjovekovnih tvrđava u Evropi. Jezgro je predstavljao trougaoni Mali grad, u vrhu Velikoga, opet trougaonog grada. Ovaj veći deo sagrađen je odmah posle Malog grada, koji je završen 1430. godine. Mali grad je imao 6, a Veliki grad još 19 — ukupno 25 velikih četvrtastih kula. ',
    h: 'Gradska kapija',
    logo: 'logo.png',
    width: "1",
    height: "1",
    location: {
        lat: 44.05494, 
        lng: 20.48728,
    }
 
},
 {
    name: 'Prestona dvorana, sala magna audientia oslonjena na severni zid prema Dunavu, spada u najreprezentativnije građevine našeg srednjovekovnog graditeljstva. Na njoj su bifore - četiri velika dvodelna prozora sa pogledom na Dunav, isklesana u kamenu s gotskim i romanskim lukovima. Tu su bile despotove prostorije za stanovanje i sala za prijeme. U ovoj sali potpisan je čuveni trgovački ugovor između Venecije i Despotovine.',
    h: 'Prestona dvorana',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.05469, 
        lng: 20.48720,
    }
 
},

{
    name: 'Donžon kula je bila poslednja odstupnica i odbrana. U ovu kulu sa zidovima debelim preko 4 metra, povlačile su se istaknute ličnosti prilikom turskih napada. U dnu Donžon kule nalazi se kapija, jedan od nekoliko izlaza na reku ukoliko se tvrđava više ne bi mogla braniti, pa je jedino preostajala evakuacija važnih ličnosti i preostale posade. Takođe su bila ugrađena skrivena vrata koja su omogućavala prolaz prema Mađarskoj.',
    h: 'Donžon kula',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.05465, 
        lng: 20.48716,
    }
 
},
{
   name: 'Despotova kula smederevskog Malog grada ima opekama uzidan veliki natpis koji svedoči o godini izgradnje utvrđenja. Ova kula je zbog krsta ozidanog iznad natpisa u narodu još poznata kao „Krstata kula" ili kula „Krstača".Natpisi kao što je ovaj, su uopšte retki, i još se mogu naći samo na teritoriji koju je nekad obuhvatala Vizantija, a ovo je jedini primer na prostoru bivše Jugoslavije. U originalu tekst glasi:„V Hrista Boga blagoverni despot Gurg, gospodin Srblju i Pomorju zetskomu; zapovešću njegovom sazida se ovaj grad v leto 6938 (1430)" („Hristu Bogu blagoverni despot Đurađ, gospodin Srbljem i pomorju zetskom. Naredbom njegovom sazida se ovaj grad u godini 6938 (1430)"). Ovaj natpis impozantnih dimenzija - istorijski raritet - širok je 10,5 metara, dok je visina slova 35 cm.',
   h: 'Krstata kula',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.05473, 
       lng: 20.48705,
   }

},
 
{
    name: 'Prilikom zidanja Malog grada ili dvora despota Đurđa Brankovića, na kuli broj 5, odnosno Jerininoj kuli, koja je čuvala prolaz preko pokretnog mosta, preko kanala koji spaja dva dela grada napravljana je niša skoro 2 metara visine. U nju je bila uređena skulptura rimske boginje Veste, a za koju je običaj srpski narod verovao da predstavlja otelotvorenje despotice Jerine i odatle i naziv ove kule.',
    h: 'Jerinina kula',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.05489, 
        lng: 20.48747,
    }
 
},
{
    name: 'U Malom gradu je bio smešten dvor despota Đurđa sa rezidencijom za stanovanje i palatom za prijem. Izgrađen je 1428—1430. godine kao posebno utvrđeni vladarski dvor sa svih strana optočen vodom, i baš zbog toga se svrstava u tip vodenih utvrđenja, premda nema osnove u vodi. Mali grad ima donžon kulu, Despotov dvor i palatu, u centralnom delu kamena zidani bunar, a ulazilo se sa jugozapadne strane, kroz dvojni sistem kapija. Gradnjom je rukovodio Đorđe Paleolog Kantakuzin, brat despotine Jerine Branković, dok je ogromno kamenje donošeno iz nekadašnjih rimskih gradova Mons Aureus, a sakupljeni su i iz Viminacijuma. U proleće 1429. grčki i dubrovački radnici započeli su zidanje',
    h: 'Mali grad',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.05461, 
        lng: 20.48717,
    }
 
},

 

 
{
    name: 'Dobrodošli! Naša aplikacija će Vas voditi kroz Tvrđavu i ispričati najzanimljivije priče. Sva mesta na Tvrđavi su obeležena ikonicama koje se povećavaju kako korisnik prilazi. Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine. Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada. Druga srednjevekovna srpska prestonica na obali Dunava bilo je Smederevo. Kada, posle smrti Stefana Lazarevića, despot Đurđe Branković nije mogao ostati u Beogradu koji su preuzeli Mađari, on je sagradio novu prestonicu u Smederevu. Mesto je izabrao što dalje od Turaka, a sa osloncem na Dunav i granicu Ugarske. Tu je ravnica te je sagrađen „vodeni grad", opkoljen Dunavom i Jezavom, a sa treće strane prokopan je širok rov sa vodom. ',
    h: 'Smederevska Tvrđava',
    logo: 'logo.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.83664, 
        lng: 20.38884,
    }
 
},
{
   name: 'Smederevski grad bio je jedan od najvećih srednjovekovnih tvrđava u Evropi. Jezgro je predstavljao trougaoni Mali grad, u vrhu Velikoga, opet trougaonog grada. Ovaj veći deo sagrađen je odmah posle Malog grada, koji je završen 1430. godine. Mali grad je imao 6, a Veliki grad još 19 — ukupno 25 velikih četvrtastih kula. ',
   h: 'Gradska kapija',
   logo: 'logo.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.83707, 
       lng: 20.38939,
   }

},
{
   name: 'Prestona dvorana, sala magna audientia, oslonjena na severni zid prema Dunavu, spada u najreprezentativnije građevine našeg srednjovekovnog graditeljstva. Na njoj su bifore - četiri velika dvodelna prozora sa pogledom na Dunav, isklesana u kamenu s gotskim i romanskim lukovima. Tu su bile despotove prostorije za stanovanje i sala za prijeme. U ovoj sali potpisan je čuveni trgovački ugovor između Venecije i Despotovine.',
   h: 'Prestona dvorana',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.83685, 
       lng: 20.38918,
   }

},

{
   name: 'Donžon kula je bila poslednja odstupnica i odbrana. U ovu kulu sa zidovima debelim preko 4 metra, povlačile su se istaknute ličnosti prilikom turskih napada. U dnu Donžon kule nalazi se kapija, jedan od nekoliko izlaza na reku ukoliko se tvrđava više ne bi mogla braniti, pa je jedino preostajala evakuacija važnih ličnosti i preostale posade. Takođe su bila ugrađena skrivena vrata koja su omogućavala prolaz prema Mađarskoj.',
   h: 'Donžon kula',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.83667, 
       lng: 20.38918,
   }

},
{
  name: 'Despotova kula smederevskog Malog grada ima opekama uzidan veliki natpis koji svedoči o godini izgradnje utvrđenja. Ova kula je zbog krsta ozidanog iznad natpisa u narodu još poznata kao „Krstata kula" ili kula „Krstača".Natpisi kao što je ovaj, su uopšte retki, i još se mogu naći samo na teritoriji koju je nekad obuhvatala Vizantija, a ovo je jedini primer na prostoru bivše Jugoslavije. U originalu tekst glasi:„V Hrista Boga blagoverni despot Gurg, gospodin Srblju i Pomorju zetskomu; zapovešću njegovom sazida se ovaj grad v leto 6938 (1430)" („Hristu Bogu blagoverni despot Đurađ, gospodin Srbljem i pomorju zetskom. Naredbom njegovom sazida se ovaj grad u godini 6938 (1430)"). Ovaj natpis impozantnih dimenzija - istorijski raritet - širok je 10,5 metara, dok je visina slova 35 cm.',
  h: 'Krstata kula',
  logo: 'logo2.png',
  width: "0.5",
  height: "0.5",
  location: {
      lat: 44.83673, 
      lng: 20.38906,
  }

},

{
   name: 'Prilikom zidanja Malog grada ili dvora despota Đurđa Brankovića, na kuli broj 5, odnosno Jerininoj kuli, koja je čuvala prolaz preko pokretnog mosta, preko kanala koji spaja dva dela grada napravljana je niša skoro 2 metara visine. U nju je bila uređena skulptura rimske boginje Veste, a za koju je običaj srpski narod verovao da predstavlja otelotvorenje despotice Jerine i odatle i naziv ove kule.',
   h: 'Jerinina kula',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.83634, 
       lng: 20.38951,
   }

},






{
    name: 'Dobrodošli! Naša aplikacija će Vas voditi kroz Tvrđavu i ispričati najzanimljivije priče. Sva mesta na Tvrđavi su obeležena ikonicama koje se povećavaju kako korisnik prilazi. Smederevsku Tvrđavu, kao upravno, vojno, privredno, kulturno i crkveno sedište srpske Despotovine, podigao je Despot Đurađ Branković, sestrić despota Stefana Lazarevića. Sagrađena je u periodu od  1428-1439 godine.Svojim položajem na ušću reke Jezave u Dunav zauzima površinu od približno 11 hektara, ima oblik nepravilnog trougla i sastoji se iz dva dela - Velikog grada i Malog grada. Druga srednjevekovna srpska prestonica na obali Dunava bilo je Smederevo. Kada, posle smrti Stefana Lazarevića, despot Đurđe Branković nije mogao ostati u Beogradu koji su preuzeli Mađari, on je sagradio novu prestonicu u Smederevu. Mesto je izabrao što dalje od Turaka, a sa osloncem na Dunav i granicu Ugarske. Tu je ravnica te je sagrađen „vodeni grad", opkoljen Dunavom i Jezavom, a sa treće strane prokopan je širok rov sa vodom. ',
    h: 'Smederevska Tvrđava',
    logo: 'logo.png',
    width: "1",
    height: "1",
    location: {
        lat: 44.66837, 
        lng: 20.92717,
    }
 
},
{
   name: 'U blizini je postojalo pristanište za lađe. Smederevski grad bio je jedan od najvećih srednjovekovnih tvrđava u Evropi. Jezgro je predstavljao trougaoni Mali grad, u vrhu Velikoga, opet trougaonog grada. Ovaj veći deo sagrađen je odmah posle Malog grada, koji je završen 1430. godine. Mali grad je imao 6, a Veliki grad još 19 — ukupno 25 velikih četvrtastih kula. ',
   h: 'Kapija za lađe',
   logo: 'logo2.png',
   width: "1",
   height: "1",
   location: {
       lat: 44.66917, 
       lng: 20.92503,
   }

},
{
   name: 'Prestona dvorana, sala magna audientia, oslonjena na severni zid prema Dunavu, spada u najreprezentativnije građevine našeg srednjovekovnog graditeljstva. Na njoj su bifore - četiri velika dvodelna prozora sa pogledom na Dunav, isklesana u kamenu s gotskim i romanskim lukovima. Tu su bile despotove prostorije za stanovanje i sala za prijeme. U ovoj sali potpisan je čuveni trgovački ugovor između Venecije i Despotovine.',
   h: 'Prestona dvorana',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.67137, 
       lng: 20.92896,
   }

},

{
   name: 'Donžon kula je bila poslednja odstupnica i odbrana. U ovu kulu sa zidovima debelim preko 4 metra, povlačile su se istaknute ličnosti prilikom turskih napada. U dnu Donžon kule nalazi se kapija, jedan od nekoliko izlaza na reku ukoliko se tvrđava više ne bi mogla braniti, pa je jedino preostajala evakuacija važnih ličnosti i preostale posade. Takođe su bila ugrađena skrivena vrata koja su omogućavala prolaz prema Mađarskoj.',
   h: 'Donžon kula',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.67144, 
       lng: 20.92922,
   }

},
{
  name: 'Despotova kula smederevskog Malog grada ima opekama uzidan veliki natpis koji svedoči o godini izgradnje utvrđenja. Ova kula je zbog krsta ozidanog iznad natpisa u narodu još poznata kao „Krstata kula" ili kula „Krstača".Natpisi kao što je ovaj, su uopšte retki, i još se mogu naći samo na teritoriji koju je nekad obuhvatala Vizantija, a ovo je jedini primer na prostoru bivše Jugoslavije. U originalu tekst glasi:„V Hrista Boga blagoverni despot Gurg, gospodin Srblju i Pomorju zetskomu; zapovešću njegovom sazida se ovaj grad v leto 6938 (1430)" („Hristu Bogu blagoverni despot Đurađ, gospodin Srbljem i pomorju zetskom. Naredbom njegovom sazida se ovaj grad u godini 6938 (1430)"). Ovaj natpis impozantnih dimenzija - istorijski raritet - širok je 10,5 metara, dok je visina slova 35 cm.',
  h: 'Krstata kula',
  logo: 'logo2.png',
  width: "0.5",
  height: "0.5",
  location: {
      lat: 44.67100, 
      lng: 20.92919,
  }

},

{
   name: 'Prilikom zidanja Malog grada ili dvora despota Đurđa Brankovića, na kuli broj 5, odnosno Jerininoj kuli, koja je čuvala prolaz preko pokretnog mosta, preko kanala koji spaja dva dela grada napravljana je niša skoro 2 metara visine. U nju je bila uređena skulptura rimske boginje Veste, a za koju je običaj srpski narod verovao da predstavlja otelotvorenje despotice Jerine i odatle i naziv ove kule.',
   h: 'Jerinina kula',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.67115, 
       lng: 20.92866,
   }

},
{
   name: 'U Malom gradu je bio smešten dvor despota Đurđa sa rezidencijom za stanovanje i palatom za prijem. Izgrađen je 1428—1430. godine kao posebno utvrđeni vladarski dvor sa svih strana optočen vodom, i baš zbog toga se svrstava u tip vodenih utvrđenja, premda nema osnove u vodi. Mali grad ima donžon kulu, Despotov dvor i palatu, u centralnom delu kamena zidani bunar, a ulazilo se sa jugozapadne strane, kroz dvojni sistem kapija. Gradnjom je rukovodio Đorđe Paleolog Kantakuzin, brat despotine Jerine Branković, dok je ogromno kamenje donošeno iz nekadašnjih rimskih gradova Mons Aureus, a sakupljeni su i iz Viminacijuma. U proleće 1429. grčki i dubrovački radnici započeli su zidanje',
   h: 'Mali grad',
   logo: 'logo2.png',
   width: "0.5",
   height: "0.5",
   location: {
       lat: 44.67110, 
       lng: 20.92825,
   }

},
{
    name: 'Prva, a moguća i druga graditeljska faza po svemu sudeći pripadaju vremenu pre 1428. godine, odnosno pre izgradnje Smederevske tvrđave. Otkriveni ostaci crkve se često poistovećuju sa Blagoveštenjskom crkvom koja se pominje u sačuvanim opisima prenosa moštiju Sv. Luke iz Rogosa u Smederevu 1453. godine. Međutim, ostaci Blagoveštenske crkve još uvek nisu otkriveni. Tokom arheoloških istraživanja Sakralnog kompleksa izvedenih od 1981. do 1986. godine i tokom 2012. godine, pored arhitektonskih ostataka, otkriven je i veliki broj grobova, među kojima se izdvaja skelet starije ženske osobe u severnom paraklisu, otkriven 2012. godine, sa parom zlatnih naušnica, bogato ukrašenih simbola vizantijske carske porodice Paleologa (monogram PALG i dvoglavi orao)',
    h: 'Ostaci crkve',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.66848, 
        lng: 20.92964,
    }
 
 },
 {
    name: 'Jedna od poslednje izgrađenih kula je i kula sa turskim natpisom. Poslednja faza u razvoju Smederevske tvrđave odigrala se 1480. godine, posle bitke na Godominskom polju 1476. godine. Tokom nje su Osmanlije od materijala dobijenog rušenja nekadašnje despotove crkve Blagoveštenja u Velikom gradu, podigli nisku artiljerijsku kulu na ušću Jezave u Dunav. Uz pomoć materijala sa druge strane podignute su još dve takve kule u temenima trougaone osnove tvrđave i na kraju još jedna niska artiljerijska kula koja je predstavljala ulaznu gradsku kulu, koja je nestala u eksploziji municije 1941. godine.',
    h: 'Kula sa turskim natpisom',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.66794, 
        lng: 20.93047,
    }
 
 },
 {
    name: 'Poslednja faza u razvoju Smederevske tvrđave odigrala se 1480. godine, posle bitke na Godominskom polju 1476. godine. Tokom nje su Osmanlije od materijala dobijenog rušenja nekadašnje despotove crkve Blagoveštenja u Velikom gradu, podigli nisku artiljerijsku kulu na ušću Jezave u Dunav. Uz pomoć materijala sa druge strane podignute su još dve takve kule u temenima trougaone osnove tvrđave i na kraju još jedna niska artiljerijska kula koja je predstavljala ulaznu gradsku kulu, koja je nestala u eksploziji municije 1941. godine.',
    h: 'Barjak kula',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.66834, 
        lng: 20.92364,
    }
 
 },
 
 {
    name: 'Ovakav tip kula je služio Osmanlijama da bolje zaštite tvrđavu od mogućih napada preko Dunava. Poslednja faza u razvoju Smederevske tvrđave odigrala se 1480. godine, posle bitke na Godominskom polju 1476. godine. Tokom nje su Osmanlije od materijala dobijenog rušenja nekadašnje despotove crkve Blagoveštenja u Velikom gradu, podigli nisku artiljerijsku kulu na ušću Jezave u Dunav.',
    h: 'Vodena kula',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.67178, 
        lng: 20.92958,
    }
 
 },
 {
    name: 'Tursko javno kupatilo ( Firuz agin hamam) sagradio je u periodu između 1485. i 1490. godine, glavni rizničar blagajne sultana Bajazita II - Firuz aga, koji je kao zadužbinar podigao veliki broj raznovrsnih građevina širom Osmanskog carstva, od kojih je opstala samo jedna džamija u Istanbulu na At mejdanu. Hamam je srušen posle 1867. godine, a značajno je oštećen tokom savezničkih bombardovanja Smedereva 1944. godine. Prilikom izgradnje korišćen je i građevinski materijal sa porušene mitropolije. Blagoveštenjske crkve, o čemu svedoče kameni blokovi sa očuvanim delovima fresaka, otkriveni prilikom sondažnih arheoloških istraživanja 1986-1987. godine',
    h: 'Tursko javno kupatilo',
    logo: 'logo2.png',
    width: "0.5",
    height: "0.5",
    location: {
        lat: 44.67023, 
        lng: 20.92741,
    }
 
 },
   ];
}

function renderPlaces(places) {
   let scene = document.querySelector('a-scene');

   places.forEach((place) => {
       let latitude = place.location.lat;
       let longitude = place.location.lng;
       let name2 = place.name;
       let logo = place.logo;
       let wdt = place.width;
       let hg = place.height;
       let bt = place.h;


       

       const model = document.createElement('a-image');
                   model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
                   model.setAttribute('name', name2);
                   model.setAttribute('src', logo);
                   model.setAttribute('width', wdt); 
                   model.setAttribute('height', hg); 
                   model.setAttribute('look-at', '[gps-camera]');



                   // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
                   model.setAttribute('scale', '2, 2');
                   model.setAttribute('position', '0, 0, 0');
            
                  
                   
       model.addEventListener('loaded', () => {
           window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))
       });
      
    
       
       const clickListener = function(ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');
        
        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        //const distanceMsg = document.querySelector('[gps-entity-place]').getAttribute('distanceMsg');


        if (el && el === ev.target) {

    
            
            //const msg = document.createElement('p');
            const container = document.createElement('div');
            const container3 = document.createElement('div');
            const container2 = document.createElement('h5');
            const label = document.createElement('p');

            const btn = document.createElement('button');
            //const link = document.createElement('a');
           // const btn1 = document.createElement('button');
            container.setAttribute('id', 'place-label');
            //link.setAttribute('href', place.link2);
            label.innerText = name;
            container2.innerText = bt;

           //msg.innerText = distanceMsg;
            btn.innerText = 'Close';
            container.setAttribute('class', 'card text-white text center z-index-n1 position-relative mb-3');
            container3.setAttribute('class', 'card-body z-index-1 position-absolute');
            container2.setAttribute('class', 'card-title');
            label.setAttribute('class', 'card-text');
            btn.setAttribute('class', 'btn btn-light btn-sm');
            

            //link.innerText = 'Zavrtite tocak';
           // btn1.innerText = 'Play';
            container.appendChild(container3);
            container.appendChild(container2);
            container.appendChild(label);
            container.appendChild(btn);
            //container.appendChild(msg);
            //container.appendChild(link);
            //container.appendChild(btn1);
            document.body.appendChild(container);



           // btn1.addEventListener("click", function() {
             //   let play = new SpeechSynthesisUtterance();
              // play.text = name;
              // window.speechSynthesis.speak(play);
              //});

            btn.addEventListener("click", function() {
                container.parentElement.removeChild(container);
              });

           // setTimeout(() => {
             //   container.parentElement.removeChild(container);
            //}, 1500);
        }
    };

    model.addEventListener('click', clickListener);
       scene.appendChild(model);
   });
   
}