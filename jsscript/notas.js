//Sistema de Notas

document.addEventListener('DOMContentLoaded', function() {
    const noteContent = document.getElementById('noteContent');
    const createNoteButton = document.getElementById('createNote');
    const saveNoteButton = document.getElementById('saveNote');
    const deleteNoteButton = document.getElementById('deleteNote');
    const notesList = document.getElementById('notesList');

    let currentNoteId = null;

    function loadNotes() {
        const notes = JSON.parse(localStorage.getItem('notes')) || [];
        notesList.innerHTML = '';
        notes.forEach((note, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${note}
                <button onclick="deleteNote(${index})">Editar</button>
            `;
            li.onclick = () => loadNoteForEditing(index, note);
            notesList.appendChild(li);
        });
    }

    function loadNoteForEditing(index, content) {
        currentNoteId = index;
        noteContent.value = content;
        saveNoteButton.style.display = 'inline-block';
        deleteNoteButton.style.display = 'inline-block';
    }

    function saveNote() {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        if (currentNoteId === null) {
            notes.push(noteContent.value);
        } else {
            notes[currentNoteId] = noteContent.value;
        }
        localStorage.setItem('notes', JSON.stringify(notes));
        noteContent.value = '';
        currentNoteId = null;
        saveNoteButton.style.display = 'none';
        deleteNoteButton.style.display = 'none';
        loadNotes();
    }

    function deleteNote(index) {
        let notes = JSON.parse(localStorage.getItem('notes')) || [];
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
        loadNotes();
        noteContent.value = '';
        saveNoteButton.style.display = 'none';
        deleteNoteButton.style.display = 'none';
        currentNoteId = null;
    }

    createNoteButton.addEventListener('click', () => {
        currentNoteId = null;
        noteContent.value = '';
        saveNoteButton.style.display = 'inline-block';
        deleteNoteButton.style.display = 'none';
    });

    saveNoteButton.addEventListener('click', saveNote);
    deleteNoteButton.addEventListener('click', () => deleteNote(currentNoteId));

    loadNotes();
});
