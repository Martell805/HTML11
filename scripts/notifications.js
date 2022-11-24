let note_menu = document.getElementsByClassName("note-menu")[0];
let note_list = document.getElementsByClassName("note-list")[0];
let note_counter = document.getElementsByClassName("note-counter")[0];
let counter = 0;

function addNotification(){
    counter++;

    let note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = '<p>Уведомление ' + counter + '</p>';

    note_list.appendChild(note);

    note_counter.innerHTML = "" + counter;
}

let interval = setInterval(addNotification,3000);

function onNoteMenuClick() {
    console.log("643636753656")
    clearInterval(interval);
    setTimeout(() => {interval = setInterval(addNotification,3000)}, 7000)
}

note_menu.onclick = onNoteMenuClick;
