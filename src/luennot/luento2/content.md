Luennon tavoite
===============

Antaa käsitys käännösmuisteista CAT-ohjelmien olennaisimpana komponenttina

Tutustutaan käännösmuistien rakenteeseen:
    - ajatus tietokannasta
    - ajatus tiedon siirtämisestä tietokannasta toiseen
        - vertaa: kirjasto, postimies, toinen kirjasto

Luennon kulku
=============

- Aloitetaan kääntämään kaikilla ohjelmilla yhtä samaa suomenkielistä lähdetekstiä omalle B-työkielelle.
- Koetetaan luoda käännösmuisti (MYÖHEMMIN käsiteltäessä muisteja tarkemmin voidaan koettaa *tuoda* käännösmuisti)


### Opastetaan Tradosin asennus

- [Kokeiluversion linkki](http://www.sdltrados.com/products/trados-studio/free-trial.html)

### Opastetaan WF asennus

#### WF-yleistietoja:


- Mitä eri versioita WordFast tarjoaa: [wordfast.net](https://www.wordfast.net/)

#### Asennus

1. [WF PRO:n Lataussivulle](http://www.wordfast.com/downloadpage)
    - Pro 3, koska siitä kokemusta ja toimii kaikilla alustoilla (n. 250 mb = kestää hetken)


### Opastetaan SmartCat-alkeet

#### SmartCat-yleistietoja

[Käyttöehdot](https://www.smartcat.ai/terms/)
[GDPR-jutut](https://www.smartcat.ai/privacy-policy/)
[wikipedia](https://en.wikipedia.org/wiki/SmartCAT)


>13. Your Content
>
>Under no circumstances we have any intellectual property rights to any Content
>you upload or otherwise use via the SMARTCAT PLATFORM.
>
>You acknowledge and agree that we may preserve the content and may also
>disclose the content if required to do so by law or in the good faith belief
>that such preservation or disclosure is reasonably necessary to: (a) comply
>with legal processes, applicable laws or government requests; (b) enforce this
>Agreement; (c) respond to claims that any content violates the rights of third
>parties; or (d) protect the rights, property, or personal safety of us and the
>public. You understand that the technical processing and transmission of the
>SMARTCAT PLATFORM, including your content, may involve (a) transmissions over
>various networks; and (b) changes to conform and adapt to technical
>requirements of connecting networks or devices.
>
>Your Content is encrypted as follows: SMARTCAT PLATFORM uses an HTTPS/TLS
>protocol to protect data in transit between your computer and our servers, and
>a 256-bit Advanced Encryption Standard (AES) to protect data at rest.


> For the avoidance of doubt, except for cases when it was approved in writing
by you and when you hire Suppliers and grants them right of access to a certain
Content, Smartcat confirms that such Content uploaded via the SMARTCAT PLATFORM
and/or created in the process of translation with the use of the SMARTCAT
PLATFORM is not transferred anywhere from your account, is not displayed or
offered for use to other users.
>
>For example:

>Location: We may collect and store information about your location if you
enable your computer or mobile device to send us location information. You may
be able to change the settings on your computer or mobile device to prevent it
from providing us with such information.

>Activity: We may collect and store information related to you and your use of
the SMARTCAT PLATFORM, such as your browser type, IP address, unique device
identifier, phone numbers and names of other Users that you communicate with
the SMARTCAT PLATFORM, requested URL, referring URL, browser language, pages
you view, and date and time of your visit.

>Cookies: We may use cookies, web beacons, local shared objects (sometimes
called “flash cookies”), and similar technology in connection with your use of
the SMARTCAT PLATFORM (“Cookies”). Cookies may have unique identifiers, and
reside, among other places, on your computer, in emails we send to you, and on
our web pages. Cookies may transmit information about you and your use of the
SMARTCAT PLATFORM, such as your browser type, search preferences, data relating
to advertisements that have been displayed to you or that you have clicked on,
and the date and time of your use. You can disable some (but not all) Cookies
in your device or browser settings, but doing so may affect your ability to use
the SMARTCAT PLATFORM. To learn how to manage privacy and storage settings for
local shared objects in particular, click here.

>Identity Verification. We may collect personal information to verify your
identity, including information from third party agencies.



[aes](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)

"At present, there is no known practical attack that would allow someone
without knowledge of the key to read data encrypted by AES when correctly
implemented. "

#### Asennus

- Korostetaan koko ajan: ei pakko kirjautua, ei pakko asentaa -- voi myös vain tyytyä katselemaan

1. [SMart CAT-kirjautumissivu](https://www.smartcat.ai/freelance/?uiCulture=en)
2. Sign in with Google / Facebook / LinkedIn / Proz.com
3. Select account type (Freelancer)

#### Käyttö

1. Create new project
    - advanced settings
        - Translation memory --> Add
        (kysyy sampleprojektia)
2. Klikkaa tiedostoa
    - SmartCat opastaa perustoiminnoissa
3. Käännä
    - Testaa oikeassa ylänurkassa olevaa Download-nappia

Huonoa, ehkä: käännösmuistin muokkaus pilvessä ei onnistu (?)


### Muut

- Luennoiva osuus käännösmuistien roolista
- Luennoiva osuus käännösmuistien taustalla olevasta tekniikasta
- Luennoiva osuus käännösmuistien rakenteesta
- Luennoiva osuus käännösmuisteihin liittyvästä terminologiasta
		- match
		    Osuma käännösmuistista. Käyttäjä voi määritellä asiakirjakohtaisesti, mikä lasketaan osumaksi, ts. kuinka 
		    lähellä muistista löytyvän lähdekielisen yksikön on oltava käännettävästä asiakirjasta löytyvää.
		    Yleensä tämä luku (joka ilmaistaan prosentteina) on erittäin korkea.
		- fuzzy match
            Muu kuin 100% osuma. Tämäkin on määriteltävissä. Segmentti
            käännösmuistissa, jossa on paljon samaa kuin
            jossakin käännettävän asiakirjan segmentissä.
		- 100% match
            Osuma, joka on täysin sama muistissa ja käännettävässä asiakirjassa. Vrt.
            kuitenkin Context match
		- Content match (CM)
            Osuma joka on
            * sama käännösmuistissa ja käännettävässä asiakirjassa ja 
            * jossa myös edeltävät segmentit (konteksti) vastaavat
- Harjoitus: http://hrmj.github.io/kaannostyopaja/tehtava1.html#3
- Esimerkkejä eri muistiformaateista: Trados ja WordFast

JOS jää liikaa aikaa
====================

Mennään mustikkaan (puolukkaan) katsomaan muutamia käytännön esimerkkejä mätseistä ja konkordanssihausta.


