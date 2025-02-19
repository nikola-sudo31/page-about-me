In diesem HTML, CSS & JavaScript Projekt kannst du deine eigene erste Webseite entwickeln.

In dem Dokument "styles.css" befinden sich schon fertige CSS-Klassen welche du frei benutzen kannst für dein Projekt.

styles.css CSS-Klassen beschreibung: 

    navbar -> mit dieser CSS-Klasse kannst du deine eigene Navigations Leiste erstellen
        right -> mit dieser CSS-Klasse kannst du ein bestimmten Text rechts zentrienen wenn es innerhalb der "navbar"-Klasse ist.
        active -> mit dieser CSS-Klasse kannst du ein bestimmten Text grün färben wenn es innerhalb der "navbar"-Klasse ist.
        
        Damit die navbar richtig funktioniert kannst du diese wie im folgenden Beispiel einfügen: 
            <div class="navbar"> 
                <ul>
                    <li><a class="active" href="#home">Home</a></li>
                    <li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li class="right"><a href="#about">About</a></li>
                </ul>
            </div>

    footer -> mit dieser CSS-Klasse kannst du einen eigenen footer erstellen.

    btn -> mit dieser CSS-Klasse kannst du deinen eigenen Button stylen.
        Hier noch die farben für den button: 
            - success
            - info
            - warning
            - danger
            - default
        Damit die Button-Klasse richtig funktioniert kannst du diese wie im folgenden Beispiel einfügen: <button class="btn success">Success Button!</button>

    card -> mit dieser CSS-Klasse kannst du eine Karte erstellen.
        Beispiele zur anwendung der Klasse: 
            <div class="card">
                <img src="bild.jpg" alt="Avatar">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architekt & Ingenieur</p>
                </div>
            </div>
        In diesem Beispiel definiert die "container" Klasse einen kleinen Bereich unterhalb des Bildes für einen Text.
        Du kannst die Klasse auch folgendermasse benutzten ohne text sondern nur mit einem Bild: 
            <div class="card">
                <img src="bild.jpg" alt="Avatar">
            </div>
        Du kannst auch nur einen Text einfügen ohne Bild: 
            <div class="card">
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architekt & Ingenieur</p>
                </div>
            </div>