function formatPhone() {
    var phoneInput = document.getElementById("phone");
    var phone = phoneInput.value.replace(/\D/g, "");

    if (phone.length > 3 && phone.length <= 6) {
        phone = "(" + phone.slice(0, 3) + ")-" + phone.slice(3);
    } else if (phone.length > 6 && phone.length <= 10) {
        phone = "(" + phone.slice(0, 3) + ")-" + phone.slice(3, 6) + "-" + phone.slice(6, 8) + "-" + phone.slice(8, 10);
    }

    phoneInput.value = phone;
}

function formatDob() {
    var dobInput = document.getElementById("dob");
    var dob = dobInput.value.replace(/\D/g, "");

    if (dob.length > 2 && dob.length <= 4) {
        dob = dob.slice(0, 2) + "." + dob.slice(2);
    } else if (dob.length > 4 && dob.length <= 8) {
        dob = dob.slice(0, 2) + "." + dob.slice(2, 4) + "." + dob.slice(4, 8);
    }

    dobInput.value = dob;
}

function validateForm() {
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var faculty = document.getElementById("faculty").value;
    var dob = document.getElementById("dob").value;
    var address = document.getElementById("address").value;
    var errorMessages = document.getElementById("errorMessages");
    errorMessages.innerHTML = "";

    var nameRegex = /^[А-Яа-яЁёA-Za-z]{2,}\s[А-Яа-яЁёA-Za-z]\.[А-Яа-яЁёA-Za-z]\.$/;
    var phoneRegex = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;
    var facultyRegex = /^[А-Яа-яЄєЇїІіҐґA-Za-z]{4}$/;
    var dobRegex = /^\d{2}\.\d{2}\.\d{4}$/;
    var addressRegex = /^м\.\s[А-Яа-яЁёA-Za-z]+$/;

    var isValid = true;

    if (!nameRegex.test(name)) {
        errorMessages.innerHTML += "<p>Неправильний формат ПІБ. Приклад: ТТТТТТ Т.Т.</p>";
        isValid = false;
    }

    if (!phoneRegex.test(phone)) {
        errorMessages.innerHTML += "<p>Неправильний формат телефону. Приклад: (ЧЧЧ)-ЧЧЧ-ЧЧ-ЧЧ</p>";
        isValid = false;
    }

    if (!facultyRegex.test(faculty)) {
        errorMessages.innerHTML += "<p>Неправильний формат факультету. Приклад: ТТТТ</p>";
        isValid = false;
    }

    if (!dobRegex.test(dob)) {
        errorMessages.innerHTML += "<p>Неправильний формат дати народження. Приклад: ЧЧ.ЧЧ.ЧЧЧЧ</p>";
        isValid = false;
    }

    if (!addressRegex.test(address)) {
        errorMessages.innerHTML += "<p>Неправильний формат адреси. Приклад: м. ЧЧЧЧЧЧ</p>";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("outputName").textContent = name;
        document.getElementById("outputPhone").textContent = phone;
        document.getElementById("outputFaculty").textContent = faculty;
        document.getElementById("outputDob").textContent = dob;
        document.getElementById("outputAddress").textContent = address;
    }
}

const targetNumber = 1;
const table = document.getElementById('myTable');
const colorPicker = document.getElementById('colorPicker');

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let number = 1;
for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');
    for (let j = 0; j < 6; j++) {
        const cell = document.createElement('td');
        cell.textContent = number;
        cell.dataset.number = number;

        cell.addEventListener('mouseover', () => {
            if (parseInt(cell.dataset.number) === targetNumber) {
                cell.style.backgroundColor = getRandomColor();
            }
        });

        cell.addEventListener('click', () => {
            if (parseInt(cell.dataset.number) === targetNumber) {
                cell.style.backgroundColor = colorPicker.value;
            }
        });

        cell.addEventListener('dblclick', () => {
            if (parseInt(cell.dataset.number) === targetNumber) {
                const row = cell.parentElement;
                Array.from(row.children).forEach(c => {
                    c.style.backgroundColor = getRandomColor();
                });
            }
        });

        row.appendChild(cell);
        number++;
    }
    table.appendChild(row);
}
