Luennon tavoite
===============

Antaa käsitys käännösmuisteista CAT-ohjelmien olennaisimpana komponenttina

Tutustutaan käännösmuistien rakenteeseen:
    - ajatus tietokannasta
    - ajatus tiedon siirtämisestä tietokannasta toiseen
        - vertaa: kirjasto, postimies, toinen kirjasto

Luennon kulku
=============

- Opastetaan Tradosin / WordFastin asennus
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


