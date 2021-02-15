// Uppgift 5A. Skriv JavaScript expanderar en sektion vid klick på
//            sektionens button. För att expandera en sektion kan du
//            lägga till klassen 'open' på button.
//            Klick på en öppen sektion ska stänga den.
//            För att få full poäng måste du använda event delegation.

// Lösningsförslag #1
// const buttons = document.querySelectorAll('button');

// function buttonClicked(event) {
//     const button = event.target;
//     const isOpen = button.classList.contains('open');
//     if (isOpen) {
//         button.classList.remove('open');
//     } else {
//         button.classList.add('open');
//     }
// }

// for (const button of buttons) {
//     // button.onclick = buttonClicked;
//     button.addEventListener('click', buttonClicked);
// }

// Lösningsförslag #2 (med event delegation)
const sections = document.querySelector('.sections');

sections.addEventListener('click', (e) => {
    const button = e.target;
    const isOpen = button.classList.contains('open');
    if (isOpen) {
        button.classList.remove('open');
    } else {
        button.classList.add('open');
    }
})
