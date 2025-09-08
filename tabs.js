function openTab(evt, tabId) {
    // Nascondi tutti i contenuti
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.add('d-none'));
    tabs.forEach(tab => tab.classList.remove('d-block', 'active-content'));

    // Rimuovi active da tutti i bottoni
    const links = document.querySelectorAll('.tab-link');
    links.forEach(link => link.classList.remove('active'));

    // Mostra il contenuto selezionato
    document.getElementById(tabId).classList.remove('d-none');
    document.getElementById(tabId).classList.add('d-block', 'active-content');

    // Aggiungi active al bottone cliccato
    evt.currentTarget.classList.add('active');
}