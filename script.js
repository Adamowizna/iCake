function navigate(option) {
    if (option === 'zamawiam') {
        alert('Przechodzę do sekcji "Zamawiam słodkości"');
        // Dodaj kod do zmiany strony lub sekcji
    } else if (option === 'tworze') {
        alert('Przechodzę do sekcji "Tworzę słodkości"');
        // Dodaj kod do zmiany strony lub sekcji
    }
}
function navigate(option) {
    const mainScreen = document.querySelector('.container');
    const loginScreen = document.getElementById('login-screen');
    const registerScreen = document.getElementById('register-screen');

    if (option === 'zamawiam') {
        mainScreen.classList.add('hidden');
        loginScreen.classList.remove('hidden');
    } else if (option === 'tworze') {
        mainScreen.classList.add('hidden');
        registerScreen.classList.remove('hidden');
    }
}

function goBack() {
    const mainScreen = document.querySelector('.container');
    const loginScreen = document.getElementById('login-screen');
    const registerScreen = document.getElementById('register-screen');

    mainScreen.classList.remove('hidden');
    loginScreen.classList.add('hidden');
    registerScreen.classList.add('hidden');
}
function navigate(option) {
    const mainScreen = document.querySelector('.container');
    const orderScreen = document.getElementById('order-screen');

    if (option === 'zamawiam') {
        mainScreen.classList.add('hidden');
        orderScreen.classList.remove('hidden');
    }
}

function showRegister() {
    const orderScreen = document.getElementById('order-screen');
    const registerForm = document.getElementById('register-form');
    orderScreen.classList.add('hidden');
    registerForm.classList.remove('hidden');
}

function showLogin() {
    const orderScreen = document.getElementById('order-screen');
    const loginForm = document.getElementById('login-form');
    orderScreen.classList.add('hidden');
    loginForm.classList.remove('hidden');
}

function goBackToOrder() {
    const registerForm = document.getElementById('register-form');
    const loginForm = document.getElementById('login-form');
    const orderScreen = document.getElementById('order-screen');

    registerForm.classList.add('hidden');
    loginForm.classList.add('hidden');
    orderScreen.classList.remove('hidden');
}

function goBack() {
    const mainScreen = document.querySelector('.container');
    const orderScreen = document.getElementById('order-screen');

    orderScreen.classList.add('hidden');
    mainScreen.classList.remove('hidden');
}
function navigate(option) {
    const mainScreen = document.querySelector('.container');
    const orderScreen = document.getElementById('order-screen');
    const bakerScreen = document.getElementById('baker-screen');

    if (option === 'zamawiam') {
        mainScreen.classList.add('hidden');
        orderScreen.classList.remove('hidden');
    } else if (option === 'tworze') {
        mainScreen.classList.add('hidden');
        bakerScreen.classList.remove('hidden');
    }
}

function showBakerRegister() {
    const bakerScreen = document.getElementById('baker-screen');
    const bakerRegisterForm = document.getElementById('baker-register-form');
    bakerScreen.classList.add('hidden');
    bakerRegisterForm.classList.remove('hidden');
}

function showBakerLogin() {
    const bakerScreen = document.getElementById('baker-screen');
    const bakerLoginForm = document.getElementById('baker-login-form');
    bakerScreen.classList.add('hidden');
    bakerLoginForm.classList.remove('hidden');
}

function goBackToBakerScreen() {
    const bakerRegisterForm = document.getElementById('baker-register-form');
    const bakerLoginForm = document.getElementById('baker-login-form');
    const bakerScreen = document.getElementById('baker-screen');

    bakerRegisterForm.classList.add('hidden');
    bakerLoginForm.classList.add('hidden');
    bakerScreen.classList.remove('hidden');
}
function validatePassword(password) {
    const hasUpperCase = /[A-Z]/.test(password); // Sprawdza obecność dużej litery
    const hasMinLength = password.length >= 8; // Sprawdza długość hasła
    return hasUpperCase && hasMinLength;
}

document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        const passwordInput = form.querySelector('input[type="password"]');
        const password = passwordInput ? passwordInput.value : '';

        if (!validatePassword(password)) {
            e.preventDefault(); // Zatrzymuje przesyłanie formularza
            alert('Hasło musi mieć minimum 8 znaków i zawierać co najmniej 1 dużą literę.');
        }
    });
});
let bakers = [
    { name: "Sweet Delights", location: "Warsaw", distance: 1.2 },
    { name: "Cake Heaven", location: "Krakow", distance: 250 },
    { name: "Sugar Rush", location: "Gdansk", distance: 300 },
    { name: "Pastry Paradise", location: "Poznan", distance: 150 }
];

function filterBakers() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const filteredBakers = bakers.filter(baker =>
        baker.name.toLowerCase().includes(query) || 
        baker.location.toLowerCase().includes(query)
    );
    renderBakers(filteredBakers);
}

function renderBakers(list) {
    const bakerList = document.getElementById('baker-list');
    bakerList.innerHTML = ''; // Wyczyść listę
    list.forEach(baker => {
        const item = document.createElement('div');
        item.classList.add('baker-item');
        item.innerHTML = `
            <h3>${baker.name}</h3>
            <p>Miasto: ${baker.location}</p>
            <p>Odległość: ${baker.distance} km</p>
        `;
        bakerList.appendChild(item);
    });
}

function requestGeolocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                console.log("Twoja lokalizacja:", position.coords);
                // Tu można zaimplementować bardziej zaawansowaną obsługę geolokalizacji
            },
            () => {
                alert("Nie udało się uzyskać dostępu do geolokalizacji.");
            }
        );
    } else {
        alert("Twoja przeglądarka nie obsługuje geolokalizacji.");
    }
}

// Funkcja, która włącza widok klienta
function showClientDashboard() {
    document.querySelector('#client-dashboard').classList.remove('hidden');
    document.querySelector('#login-form').classList.add('hidden');
    renderBakers(bakers); // Renderuj cukiernie przy pierwszym wejściu
}

function goBackToLogin() {
    document.querySelector('#client-dashboard').classList.add('hidden');
    document.querySelector('#login-form').classList.remove('hidden');
}
