var setBtnCarrito = () => {
    let btn = document.getElementById('carrito');
    btn.style.cursor = 'pointer';
    btn.addEventListener('click', (e) => {
        console.log(e);
        // window.location = './carrito';
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    });
};

var setBtnVolver = () => {
    let btn = document.getElementById('btnVolver');
    if (btn == undefined) return false;
    btn.addEventListener('click', (e) => {
        window.history.back();
    });
};

var setLinkRegistro = () => {
    let link = document.getElementById('linkRegistro');
    link.addEventListener('click', (e) => {
        window.location = './register.html';
    });
};

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function loadPage(href) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", href, false);
    xmlhttp.send();
    return xmlhttp.responseText;
};

/**
 * Esto valida un formulario
 * @param {*} event Evento que se recibe
 * @returns no devuelve nada, en caso de fallo, solo false
 */
const validarFormulario = (event) => {

    event.preventDefault();

    const firstname = document.querySelector("#firstname");
    const lastname = document.querySelector("#lastname");
    const email = document.querySelector("#email");
    const password = document.querySelector("#password");


    let validation = true;

    if (firstname.value.trim() === "") {
        document.querySelector("#error-firstname").textContent = "Debe completar el campo Nombre";
        firstname.classList.add("error");
        validation = false;
    }
    if (lastname.value.trim() === "") {
        document.querySelector("#error-lastname").textContent = "Debe completar el campo apellido";
        lastname.classList.add("error");
        validation = false;
    }
    if (email.value.trim() === "") {
        document.querySelector("#error-email").textContent = 'Debe completar el campo Email';
        email.classList.add('error')
        validation = false;
    }
    if (password.value.trim() === "") {
        document.querySelector("#error-password").textContent = 'Debe completar el campo contraseña';
        password.classList.add('error');
        validation = false;

    } else if (password.value.length < 6 || password.value.length > 12) {
        document.querySelector("#error-password").textContent = "La contraseña debe contener entre 6 y 12 caracteres";
        password.classList.add("error");
        validation = false;
    }

    if (validation) { formRegister.submit() }
    else { return false; }

}
var initRegisterPage = () => {
    const formRegister = document.querySelector("#formRegister");
    formRegister.addEventListener("submit", validarFormulario);
};
var initIndexPage = () => {
    let header = loadPage('header.html');
    console.log(header);
    document.body.innerHTML = header + document.body.innerHTML;
    setBtnCarrito();
    setLinkRegistro();
};
var initAllPages = () => {
    setBtnVolver(); // veulve 
    // traer el header y el menu

};

window.addEventListener('load', function () {
    let current = window.location.pathname;
    initAllPages();
    switch (current) {
        case '/register.html': initRegisterPage();
            break;
        case '/index2.html': initIndexPage();
            break;
    }
});




