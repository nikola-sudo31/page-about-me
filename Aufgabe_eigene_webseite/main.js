document.addEventListener('DOMContentLoaded', () => {
    // Initially show 'info' content
    showPage('info');
    updateLanguage();
});

let currentLanguage = 'de';

function showPage(page) {
    const content = document.getElementById('content');

    // Add the fade-out class to the current content
    content.classList.add('fade-out');

    // After the fade-out animation, change the content and slide it in
    setTimeout(() => {
        let htmlContent = '';

        if (currentLanguage === 'de') {
            switch(page) {
                case 'info':
                    htmlContent = `
                        <div class="container">
                            <h3>Information</h3>
                            <p>Vorname: Nikola</p>
                            <p>Nachname: Jergovic</p>
                            <p>Familie: 2 Geschwister, Eltern</p>
                            <p>Ort,PLZ: Opfikon,8152</p>
                            <p>Wohnort: Glattpark</p>
                            <img src="https://banner2.cleanpng.com/20180421/tte/ave3i4fbc.webp">
                        </div>
                    `;
                    break;
                case 'warning':
                    htmlContent = `
                        <div class="container">
                            <h3>Kontakdaten</h3>
                           <p>  Nummer: +41 76 305 74 00</p>
                            <p> Email: nikola.jergovic@gmail.com </p>
                            <p> Schulemail: nikola.jergovic@sus-opfikon.ch
                            <img src="https://www.kibar.com/-/media/images/pages/info/bize-ulasin-banner.jpg?h=448&la=de-DE&w=1366&hash=41A5451BAC927F4417E74B599041417254AB6835"
                            </div>
                    `;
                    break;
                case 'success':
                    htmlContent = `
                        <div class="container">
                            <h3>Erfolg</h3>
                            <p>Ich habe schon viele Turniere und Meisterschaften, im Fussball gewonnen.</p>
                            <p>Dank meinem Sport, bin ich Teamfähig, weil man das dort im Fussball lernt.</p>
                            <img src="https://static.vecteezy.com/ti/gratis-vektor/p1/20714494-geschaftsmann-halt-flagge-auf-oben-von-berg-symbol-leistung-fuhrung-geschaft-werdegang-und-erfolg-konzept-vektor.jpg"
                            </div>
                    `;
                    break;
                case 'danger':
                    htmlContent = `
                        <div class="container">
                            <h3>Hobbies</h3>
                            <p>Ich spiele gerne Fussball.</p>
                            <p>Ich schwimme gerne, fahre gerne Fahrrad, programmiere gerne und spiele gerne Volleyball im Sommer.</p>
                        </div>
                        <img src="https://assets.goal.com/images/v3/blt4af919f965d04df1/6c762af3969c53e9ce5018c338c9862fb1a2ab8d.jpg?auto=webp&format=pjpg&width=3840&quality=60">
                    `;
                    break;
            }         
        } else {
            switch(page) {
                case 'info':
                    htmlContent = `
                        <div class="container">
                            <h3>About Me</h3>
                            <p>First Name: Nikola</p>
                            <p>Last Name: Jergovic</p>
                            <p>Family: 2 siblings, parents</p>
                            <p>Location, ZIP: Opfikon, 8152</p>
                            <p>Residence: Glattpark</p>
                        </div>
                        <img src="https://banner2.cleanpng.com/20180421/tte/ave3i4fbc.webp">
                    `;
                    break;
                case 'warning':
                    htmlContent = `
                        <div class="container">
                            <h3>Contact Details</h3>
                            <p>Number: +41 76 305 74 00</p>
                            <p>Email: nikola.jergovic@gmail.com</p> 
                            <p>School email: nikola.jergovic@sus-opfikon.ch</p>
                            <img src="https://www.kibar.com/-/media/images/pages/info/bize-ulasin-banner.jpg?h=448&la=de-DE&w=1366&hash=41A5451BAC927F4417E74B599041417254AB6835"
                            </div>
                    `;
                    break;
                case 'success':
                    htmlContent = `
                        <div class="container">
                            <h3>Success</h3>
                            <p>I have won many tournaments and championships in football.</p>
                            <p>Thanks to my sport, I'm able to play in a team because that's what you learn in football.</p>
                            <img src="https://static.vecteezy.com/ti/gratis-vektor/p1/20714494-geschaftsmann-halt-flagge-auf-oben-von-berg-symbol-leistung-fuhrung-geschaft-werdegang-und-erfolg-konzept-vektor.jpg"
                            </div>
                    `;
                    break;
                case 'danger':
                    htmlContent = `
                        <div class="container">
                            <h3>Hobbys</h3>
                            <p>I like playing football.</p>
                            <p>I like swimming, cycling, programming and playing volleyball in the summer.</p>
                        </div>
                        <img src="https://assets.goal.com/images/v3/blt4af919f965d04df1/6c762af3969c53e9ce5018c338c9862fb1a2ab8d.jpg?auto=webp&format=pjpg&width=3840&quality=60">
                    `;
                    break;
            }
        }

        content.innerHTML = htmlContent;

        // Remove fade-out and add slide-in class
        content.classList.remove('fade-out');
        content.classList.add('slide-in');
    }, 500); // Match this duration to the fade-out animation duration
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'de' ? 'en' : 'de';
    updateLanguage();
    showPage('info'); // Update the content to the new language
}

function updateLanguage() {
    const buttons = document.querySelectorAll('.navbar .btn');
    const langSwitchButton = document.querySelector('.navbar button:last-child');

    if (currentLanguage === 'de') {
        buttons[0].innerText = 'Information';
        buttons[1].innerText = 'Kontaktdaten';
        buttons[2].innerText = 'Erfolg';
        buttons[3].innerText = 'Hobbies';
        langSwitchButton.innerText = 'Über mich';
    } else {
        buttons[0].innerText = 'Info';
        buttons[1].innerText = 'Contact Details';
        buttons[2].innerText = 'Success';
        buttons[3].innerText = 'Hobbys';
        langSwitchButton.innerText = 'About Me';
    }
}

