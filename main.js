<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel = "stylesheet" href = "styles.css">
        <script defer src="main.js"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Cascadia+Code:ital,wght@0,200..700;1,200..700&display=swap" rel="stylesheet">

        <title>Web Dev Club</title>
    </head>
    <body>
        <header id = "mainHeader">
            <div id = "Logo">Web Dev Club</div>
            <nav>
                <a href = "index.html">Home</a>
                <a href = "aboutUs.html">About Us</a>
                <a href = "contact.html">Contact</a>
            </nav>
        </header>

        <main>
            <img id = "titleImg" class = "starterImg" src="https://files.123freevectors.com/wp-content/original/154304-bright-blue-background-vector-image.jpg">
            <article>
                <div id = "story1" class = "chunk">
                    <h2>Ever wanted to learn how to make websites? <p>Join us at New Trier's Web Dev Club to learn how to code, design, and create your very own website!</p></h2>
                    <img id = "storyImg" src="https://web.dev/static/images/learn-header.png">
                </div>
                <div id = "story2" class = "chunk">
                    <img id = "storyImg" src="https://images.businessnewsdaily.com/app/uploads/2022/04/04074130/teamwork_g-stockstudio_getty.jpg">
                    <h2>No previous experience required. <p>Learn how to use HTML and CSS or build websites with personalized website builders.</p></h2>
                </div>
                <div id = "story3" class = "chunk">
                    <h1>Interested in us making a website for you?</h1>
                    <p>Take this quick form to let us know!</p>
                    <div id ="buttonContainer">
                        <button type = "button" id = "formButton">Click here!</button>
                    </div>
                </div>
            </article>
            <div id = "filler" style="min-height: 1000px;"></div>
        </main>

        <footer>
            <div class = "footerSub">
                <a href="index.html">Home</a>
                <a href="aboutUs.html">About Us</a>
                <a href="contact.html">Contact Us</a>
            </div>
            <div class = "footerSub">
                <div>New Trier Township High School</div>
                <div>Thursdays 3:30-4:30</div>
                <div>Room 124 Winnetka Campus</div>
            </div>
        </footer>
    </body>
</html>
