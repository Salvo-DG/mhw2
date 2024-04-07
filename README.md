# MiniHomework2: Javascript
> Proseguimento dell'idea progettuale iniziata nel primo homework (mhw1) con l'obiettivo di integrare Javascript.

## Introduzione
In questo minihomework, lo scopo è quello di perfezionare il primo homework (mhw1) con l'inserimento di un file Javascript che regoli il comportamento dinamico della webpage in risposta all'interazione con l'utente.
Si mantiene la scelta di replicare a scopi didattici la homepage del sito di GetYourGuide.

## Descrizione del progetto
Il minihomework2 può essere visto come il secondo step del progetto più ampio di realizzare un sito web gestendo le funzionalità principali (lato client e lato server).
Esso prevede il perfezionamento di quanto realizzato nel mini-homework1 attraverso l'integrazione di Javascript. Si richiede il rispetto di alcuni requisiti.

### Requisiti

* usare addEventListener() per gestire eventi nella pagina;
* usare document.createElement() per creare dinamicamente oggetti HTML a partire da contenuti definiti in JavaScript;
* modificare dinamicamente l’URL di un’immagine tramite l’attributo src;
* modificare dinamicamente la classe degli elementi agendo sulla proprietà classList;
* mostrare o nascondere dinamicamente parti della pagina assegnando o rimuovendo classi CSS che modificano la proprietà display;
* utilizzare attributi data-*.

## Utilizzo
Una volta aperto il file [mhw2.html](mhw2.html) con il browser Chrome, è possibile verificare il possesso dei suddetti requisiti ponendo particolare attenzione ai seguenti elementi della pagina web:
* Menù a comparsa: appare quando con il mouse si passa sopra l'icona "Profilo" (la funzione non è prevista per i dispositivi mobile).
* Barra di navigazione secondaria fixed: Quando l'header non è più visibile a causa dello scroll verso il basso dell'utente, appare una barra di navigazione secondaria fissata in alto che permette all'utente di poter cambiare categoria senza dover risalire. La barra scompare se l'header torna ad essere visibile.
* Funzionalità "Aggiungi ai preferiti", "Rimuovi dai preferiti": cliccando sull'icona a forma di cuore è possibile aggiungere un'attività ai preferiti, o se già ne fa parte, rimuoverla. Qui si utilizza la funzione ".createElement()" per suggerire all'utente cosa accade al click delle icone a forma di cuore.
* Implementazione del menù a tendina nella versione mobile: Allo scopo di ridurre le dimensioni del footer nella versione mobile, il menù è stato contratto ai soli titoli delle sezioni. Spetta all'utente cliccare sulla sezione a cui è interessato per espanderne le voci.
