# Mozilla Italia

## Come si usa

- Scaricare il repo in locale con git
- Navigare nella cartella del progetto (cd project/folder/mozilla.github.org)
- Scaricare le dipendenze node.js `npm install`
- Avvia il task runner con il comando `gulp`

## Task disponibili

Il task di default gulp automatizza tutto il processo di minificazione, compatibilizzazione (ie 8) e rinomina dei file css oltre a servire un webserver node in localhost con livereload della pagina ad ogni modifica di file css, html o js.
I task disponibili al di fuori del task default al momento sono:

`gulp minify-css` e `gulp live-reload` rispettivamente servono a minificare i file css e a ricaricare la sessione del browser ad ogni modifica.

## Miglioramenti futuri previsti

Aggiungere un task per la minificazione dei file JavaScript.
Aggiungere un task per la concatenazione dei file CSS.
Aggiungere un auto-prefixer per i file CSS.

## Come collaborare

Per le segnalazioni di bug o per feature request è sempre meglio aprire una issue qui su GitHub mentre per contribuire al codice la cosa migliore è creare un fork del repository e, una volta sviluppata la patch o la miglioria, creare una pull request.
