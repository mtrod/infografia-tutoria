"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const textBoto = (() => { 
        switch (document.documentElement.lang) {
            case 'ca' : return 'Baixa en PDF';
            case 'es' : return 'Descarga en PDF';
            case 'en' : return 'Download PDF';
            default : return 'PDF';
        }
    })();

    afegeixBoto = (() => { 
        document.body.querySelector('.headline').insertAdjacentHTML('beforeend', `
        <button class="download-link" onclick="window.print();">${textBoto}</button>
    `)
    })();


});