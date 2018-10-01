Luento 4
========

Kulku: tarkka
-------------

0. Mitä on xml? Mitä ovat tägit -> Lähde liikkeelle TAULULTA ilman valkokangasta TAI EIPÄSS
    - KUN SIIS Kaikki avatkoon muistion eteensä omalle näytölle
        - Ajatellaan, että meillä on jokin simppeli teksti.
    - Tägeihin törmätään yhtenään
    - Ajatelkaa seuraavaaa tekstiä. Mitä, jos me haluttaisiin ruveta *merkkaamaan* tähän teksitiin jotakin?
        Yliopisto on edelleen erittäin aktiivisen tietojenkalastelun kohteena ja
        kalasteluviestejä tulee nyt lähes päivittäin. Kaikista viesteistä ei tiedoteta
        erikseen, joten suhtauduthan varoen kaikkiin epäilyttävän oloisiin viesteihin
        ja vältä avaamasta arveluttavia linkkejä. Jos et ole täysin varma linkin
        lähettäjästä, kirjaudu sähköisiin palveluihin yliopiston sivuilla olevien
        linkkien kautta. Jos haluat tarkastella millaisia viestit voivat olla, löydät
        kalastelunäytteitä tietohallinnon intrasivuilta. Viestit kannattaa tuhota. Jos
        klikkasit linkkiä ja kirjauduit linkistä avautuvalle sivulle, vaihda salasanasi
        välittömästi! Voit vaihtaa salasanan NettiKatti-palvelussa nettikatti.uta.fi,
        osoitteessa salasana.uta.fi tai käymällä IT Helpdeskissä. Jos salasanan vaihto
        ei onnistu, ota IT Helpdeskiin yhteyttä puhelimitse. Tietohallinto ei
        milloinkaan kysy käyttäjien salasanoja. Lue lisää tietojenkalastelusta IT
        Helpdesk -sivustolta.
    - Kursivointi tms.: Tämä vielä onnistuu näin
    - Entäs sitten vaikka, että osa a tärkeää, osa b, turhaa? Tai a=suomea, b = ruotsia
    - Tai a ja p = segmenttejä / kappaleita
    - "tunniste": tapa erottaa jokin elementti
    - näin toimivat tägit ja suosituin merkkauskieli lienee xml.
    - törmätään tällä luennolla näihin kahdesta näkökulmasta ja jatkossa vielä vähän enemmän.
    - Otetaan ensin muistutuksena viime kerrasta tmx:n käsite. *Kuka muistaa, mikä tmx on?*
1. Lyhyt luentokalvosarja tmx:istä
2. Jokainen saa kokeilla itse tmx:n tuomista päämuistiin:
    - avataan viime kerrasta jokin muisti ja lisätään siihen ubuntu-muisti
3. Pieni pätkä lisää esityksestä
    - muistien yhdistäminen?
    - MITÄ muisteja harjoituksessa yhdisteltäisiin? hmm...  Yksi kieli riittänee..
4. Ladataan Zanettin Moodlesta ja tutkitaan yhdessä Word-tiedostoa: mitä muotoiluja ja mitä eri tyyppisiä elementtejä sisältää?
    - ladataan myös xml ja katsotaan, miten tämä kaikki on koodattu
5. Suljetaan Zanettin Wordistä ja avataan Tradosissa.
    - lähdetään liikkeelle sentence-baced-segmentointisäännöistä
    - tutkitaan tekstin muotoilutasoja täältä käsin
    - avataan esikatselu
    - tutkitaan ensin vähän yhdesssä ja sitten pyyydetään kaikkia kokeilemaan ja testailemaan itse
6. Suljetaan koko projekti ja itse asiassa poistetaan se
7. Tehdään projekti uudestaan niin, että muokataan vähän segmentoimissääntöjä
    - jos tallensi äsken jotain muistiin, niin nyt pitäisi luoda uusi muisti
    - muokataan muistia niin, että se ymmärtää lähdeviitteitä ja et al -lyhenteen.
    - HUOM! tämä tarkoittaa, että lisätään colon-sääntöön "after break" -kohtaan
    regex: `\s+[^\d]\+`
8. (Riippuen ajasta) Tehdään vielä kerran uusi projekti niin, että käytetään paragraph-based-metodia
9. Aletaan kääntämään Ubuntu-projektia (Ehkä toivottavaa, että tämä jäisi ensi kerralle)


Kulku: sketch
-----

- Viime kerrasta jäi: miten siirrellään muisteja käyttäjän välillä?
    - otetaan lyhyt harjoitus: TÄLLÄ kertaa testataan muistin TUOMISTA tmx-tiedostosta
        - ladataan itse asiassa koko ubuntu-muisti tmx:nä
    - samalla testataan myös viemistä
ALOITETAAN itse asiassa koko tunti lataamalla huolellisesti valittuun kansioon Moodlesta oman B-työkielen mukainen Ubuntu-muisti
- Nyt ruvetaan tutustumaan itse käännöseditoriin
    - liikkeelle lähdetään Tradosin kannalta mukavimmista ja tavallisimmista tiedostoista: Word-tiedostoista
        - Tradosin historia: niin kuin WordFast, oli alun perin word-makro
        - mitä tarkoitetaan, kun puhutaan Word-tiedostoista? (rtf, doc, docx)
    - Kikkaillaan ensin tyhjällä tiedostolla ja katsellaan, mitä eri segmentointimahdollisuuksia on
        - zanettin...
    - otetaan käännettävä teksti, liitetään muisti ja aletaan oikeasti kääntää


- Projektimuistin käsite?
