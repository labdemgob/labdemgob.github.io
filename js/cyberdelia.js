(function ($, app, cyberdelia) {

    console.log('Hi cyber-space traveller. Maybe you want to see our cyberdelia.menu().');

    var printMenu = function () {
        var lines = [
            "Are you looking for a job?",
            " 1) Yes... and I'm the ninja unicorn you are looking for",
            "",
            "Nope, I was...",
            " 2) ... just curious",
            " 3) ... trying to hack into your system",
            "---",
            "Try cyberdelia.menu(option)"
        ];
        console.log(lines.join("\n"));
    };

    cyberdelia.menu = function (opt) {

        if (opt) {
            switch (opt) {
                case 1:
                    console.log('Interesting. Please tell us more jobs@thenextweb.com')
                    break;
                case 2:
                    console.log("Nice! Aren't you curious about this https://youtu.be/dQw4w9WgXcQ ?")
                    break;
                case 3:
                    console.log('Well... enjoy! http://hackertyper.com/')
                    break;
                default:
                    console.log('Meeeeh');
            }
        }
        else {
            printMenu();
        }

    };

}($, app, cyberdelia));
