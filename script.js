/*
Baris ini memastikan bahwa kode JavaScript kita akan berjalan hanya setelah seluruh dokumen HTML selesai dimuat.
Ini adalah praktik terbaik untuk menghindari error.
*/
document.addEventListener('DOMContentLoaded', function() {

    /*
    mengambil elemen <input> dengan ID todo-input dan menyimpannya dalam variabel inputElement.
    Ini memungkinkan kita untuk mengakses nilai yang diketik pengguna.
    */
    const inputElement = document.getElementById('todo-input');
    
    // mengambil tombol "Add"
    const addButton = document.getElementById('add-button');

    // mengambil daftar (<ul>) tempat semua tugas akan ditempatkan
    const todoList = document.getElementById('todo-list');

    // Function to add a new task
    function addTask() {

        /*
        Mengambil teks dari kotak input.
        Metode .trim() akan menghapus spasi kosong di awal atau akhir teks,
        mencegah pengguna menambahkan tugas kosong.
        */
        const taskText = inputElement.value.trim();

        // Pemeriksaan untuk memastikan pengguna tidak menambahkan tugas kosong
        if (taskText !== "") {
            // Create list item (li)
            const listItem = document.createElement('li');

            // Create task text span
            const taskSpan = document.createElement('span');
            taskSpan.textContent = taskText;
            listItem.appendChild(taskSpan);

            // Add 'click' event to toggle 'done' class
            taskSpan.addEventListener('click', function() {
                listItem.classList.toggle('done');
            });
            
            // Create delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.classList.add('delete-button');

            // Add 'click' event to delete button
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });

            // Append delete button to the list item
            listItem.appendChild(deleteButton);

            // Append the new task to the list
            todoList.appendChild(listItem);

            // Clear the input field
            inputElement.value = "";
        }
    }

    // Add task when the "Add" button is clicked
    addButton.addEventListener('click', addTask);

    // Add task when the "Enter" key is pressed in the input field
    inputElement.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

});
