window.addEventListener("DOMContentLoaded", function () {



    // ---------------------------------- Wrapper and common view of page
    
    var divWrapper = document.createElement("div");
    divWrapper.setAttribute("style", "width: 100%; height: 100%; margin: 0 auto;");
    document.body.appendChild(divWrapper);
    
    var divBlock = document.createElement("div");
    divBlock.setAttribute("style", "width: 900px; margin: 0 auto; display: flex; flex-direction: column; " +
        "background-color: #eee; height: 100vh;");
    divWrapper.appendChild(divBlock);
    
    var divH = document.createElement("h2");
    divH.setAttribute("style", "color: rgb(155, 190, 180); font-family: \"Orbitron\", sans-serif; font-size: 26px; " +
        "text-shadow: #fff 3px 3px 3px, #000 -1px -1px 2px; text-align: center; letter-spacing: 4px;");
    divH.innerHTML = "Virtual Kumamon Keyboard";
    divBlock.appendChild(divH);
    
    var newTextarea = document.createElement("textarea");
    newTextarea.setAttribute("class", "textarea");
    newTextarea.setAttribute("rows", "10");
    newTextarea.setAttribute("cols", "60");
    newTextarea.setAttribute("style", "width: 550px; margin: 0 auto; outline: none; border: 0.5px solid #eee;" +
        " border-radius: 10px; box-shadow: 6px 6px 6px 0 rgba(0, 0, 0, 0.3), inset 1px 1px 3px lightsteelblue, inset -1px -1px 5px lightsteelblue ; " +
        " padding: 10px 15px; font-family: \"Orbitron\", sans-serif; font-weight: 400; overflow: hidden; margin-bottom: 80px;");
    divBlock.appendChild(newTextarea);
    
    newTextarea.addEventListener("blur", () => {
        newTextarea.focus();
    });
    
    
    // ------------------------------------- Block with keyboard
    
    var main = document.createElement("div");
    var keysContainer = document.createElement("div");
    
    main.classList.add("keyboard");
    main.style.cssText = "margin: 0 auto; text-align: center; user-select: none;";
    keysContainer.classList.add("keyboard__keys");
    keysContainer.style.cssText = "text-align: center; background-color: rgb(245, 241, 241); user-select: none;" +
        "border-radius: 15px; margin-bottom: 40px; padding: 10px 10px; border: 2px solid rgba(186, 186, 186, 0.4);" +
        "box-shadow: 5px 9px 15px lightsteelblue, inset 3px 3px 2px white;";
    main.appendChild(keysContainer);
    divBlock.appendChild(main);
    
    
    
    // ---------------------------------- Keyboard constructor
    
    const [
           keyRussianLayout,
           keyEnglishLayout,
           keyCodes
           ] = [
            [ ["ё","Ё"], ["1","!"], ["2","\""], ["3","№"], ["4",";"], ["5","%"], ["6",":"], ["7","?"], ["8","*"], ["9","("], ["0",")"], ["-","_"], ["=","+"], ["Backspace","Backspace"],
            ["Tab","Tab"], ["й","Й"], ["ц","Ц"], ["у","У"], ["к","К"], ["е","Е"], ["н","Н"], ["г","Г"], ["ш","Ш"], ["щ","Щ"], ["з","З"], ["х","Х"], ["ъ","Ъ"], ["\\","/"], ["Del","Del"],
            ["Caps Lock","Caps Lock"], ["ф","Ф"], ["ы","Ы"], ["в","В"], ["а","А"], ["п","П"], ["р","Р"], ["о","О"], ["л","Л"], ["д","Д"], ["ж","Ж"], ["э","Э"], ["Enter","Enter"],
            ["Shift","Shift"], ["я","Я"], ["ч","Ч"], ["с","С"], ["м","М"], ["и","И"], ["т","Т"], ["ь","Ь"], ["б","Б"], ["ю","Ю"], [".",","], ["▲","▲"], ["ShiftR","ShiftR"],
            ["Ctrl","Ctrl"], ["Win","Win"], ["Alt","Alt"], ["Space","Space"], ["Alt", "Alt"], ["◄", "◄"], ["▼", "▼"], ["►","►"], ["Ctrl","Ctrl"] ],
    
            [ ["`","~"], ["1", "!"], ["2", "@"], ["3", "#"], ["4", "$"], ["5", "%"], ["6", "^"], ["7", "&"], ["8", "*"], ["9", "("], ["0", ")"], ["-", "_"], ["=", "+"], ["Backspace", "Backspace"],
            ["Tab", "Tab"], ["q", "Q"], ["w", "W"], ["e", "E"], ["r", "R"], ["t", "T"], ["y", "Y"], ["u", "U"], ["i", "I"], ["o", "O"], ["p", "P"], ["[", "{"], ["]", "}"], ["\\", "|"], ["Del", "Del"],
            ["Caps Lock", "Caps Lock"], ["a", "A"], ["s", "S"], ["d", "D"], ["f", "F"], ["g", "G"], ["h", "H"], ["j", "J"], ["k", "K"], ["l", "L"], [";", ":"], ["'", "\""], ["Enter", "Enter"],
            ["Shift", "Shift"], ["z", "Z"], ["x", "X"], ["c", "C"], ["v", "V"], ["b", "B"], ["n", "N"], ["m", "M"], [",", "<"], [".", ">"], ["/", "?"], ["▲", "▲"], ["Shift", "Shift"],
            ["Ctrl", "Ctrl"], ["Win", "Win"], ["Alt", "Alt"], ["Space", "Space"], ["Alt", "Alt"], ["◄", "◄"], ["▼", "▼"], ["►", "►"], ["Ctrl", "Ctrl"] ],
    
            [ "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace",
            "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete",
            "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter",
            "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight",
            "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight" ]
    ];
    
    for (let j = 0; j < keyCodes.length; j += 1) {
            let key = keyCodes[j];
             let el = document.createElement("button");
                el.setAttribute("type", "button");
                el.classList.add("btn");
                el.classList.add(key);
                el.style.cssText = "height: 42px; width: 40px; border-radius: 4px; border: none; color: #2d2d2d; " +
                    "font-family: \"Orbitron\", sans-serif; font-weight: 400; background-color: rgba(186, 186, 186, 0.4);" +
                    "outline: none; box-shadow: 3px 6px 2px rgb(155, 190, 180), 1px 1px 9px white, inset 1px 1px 2px white;" +
                    "cursor: pointer; font-size: 16px; -webkit-tap-highlight-color: transparent; position: relative; " +
                    "text-shadow: 1px 1px 1px white, black 1px 1px 1px; margin: 3px; display: inline-flex; align-items: center;" +
                    " justify-content: center; vertical-align: top;";
                keysContainer.appendChild(el);
        if (j===13 || j===28 || j===41 || j===54 ) { keysContainer.insertAdjacentHTML("beforeend", "<br>");}
    }
    
    function keyText(languageLayout, upperCase) {
        for (let j = 0; j < allButtons.length; j += 1) {
            allButtons[j].innerText = (languageLayout === "ru") ? keyRussianLayout[j][upperCase] : keyEnglishLayout[j][upperCase];
        }
    }
    var allButtons = document.querySelectorAll(".btn");
    
    // -------------------- css style (width) for big buttons
    
    for (let i = 0; i <allButtons.length ; i++) {
        let bigKey = allButtons[i];
        if ( bigKey.className.includes("Enter")
            || bigKey.className.includes("Backspace")
            || bigKey.className.includes("CapsLock")) {
            bigKey.style.width = "100px";
            bigKey.style.backgroundColor = "rgba(186, 186, 220, 0.4)";
        }
        if (bigKey.className.includes("Space")) {
            bigKey.style.width = "315px";
            bigKey.style.backgroundColor = "rgba(186, 186, 220, 0.4)";
        }
        if (bigKey.className.includes("Shift")
            || bigKey.className.includes("Backspace")) {
            bigKey.style.width = "110px";
            bigKey.style.backgroundColor = "rgba(186, 186, 220, 0.4)";
        }
        if (bigKey.className.includes("Tab")
            || bigKey.className.includes("ControlLeft")
            || bigKey.className.includes("ControlRight")) {
            bigKey.style.width = "75px";
            bigKey.style.backgroundColor = "rgba(186, 186, 220, 0.4)";
        }
        if (bigKey.className.includes("MetaLeft")
            || bigKey.className.includes("AltLeft")
            || bigKey.className.includes("Delete")
            || bigKey.className.includes("AltRight")) { 
            bigKey.style.backgroundColor = "rgba(186, 186, 220, 0.4)";
        }
    }
    
    
    
    
    // -------- Changing lang function

    let currentLang = (localStorage.lang === "ru") ? "ru" : "en";
    let shiftToUpperCase = 0;
    
    function changeLanguage() {
            currentLang = (currentLang === "ru") ? "en" : "ru";
            keyText(currentLang, shiftToUpperCase);
            localStorage.lang = currentLang;        // ----store in localStorage changes, which will be available after page refreshing
    }
    
        keyText(currentLang, 0);
    
    
    
    // -------------------------------------------------------- main print functions
           
    function printText(letter) { 
        newTextarea.setRangeText(letter, newTextarea.selectionStart, newTextarea.selectionEnd, "end"); 
    }
    
    function deleteText() { 
        newTextarea.setRangeText("", newTextarea.selectionStart, newTextarea.selectionEnd, "end"); 
    }
     
    
    
    
    // ------ key combination for changing languageLayout
        let alt = false;
        let shift = false;
    
    // ------------------------------------------ Keyboard event handler --------------------------
    
    document.body.addEventListener("keydown", (event) => {
        event.preventDefault();
        newTextarea.focus(); 
        let j = keyCodes.indexOf(event.code); 
    
        if (keyCodes.includes(event.code)) {
            document.querySelector(`.${event.code}`).style.boxShadow = "2px 2px 2px rgb(155, 190, 180), 1px 1px 1px white, inset 1px 1px 2px white";
            document.querySelector(`.${event.code}`).style.transform = "scale(0.92)";
            document.querySelector(`.${event.code}`).style.fontWeight = "bold";
            switch (event.code) {
                case "CapsLock":
                    btnCapsLock(); break;
                case "Backspace":
                    btnBackspace(); break;
                case "Delete":
                    btnDel(); break;
                case "Tab":
                    btnTab(); break;
                case "Enter":
                    btnEnter(); break;
                case "Space":
                    printText(" "); break;
                case "ArrowLeft":
                    leftArrow(); break;
                case "ArrowRight":
                    rightArrow(); break;
                case "AltLeft":
                    alt = true; break;
                case "ShiftLeft":
                    shift = true; break;
                case "ControlLeft":
                case "ControlRight":
                case "ShiftRight":
                case "MetaLeft":
                    break;
                default:
                    if (currentLang === "ru") {
                        printText(keyRussianLayout[j][shiftToUpperCase]); 
                    } else { printText(keyEnglishLayout[j][shiftToUpperCase]); }
                    j++;
            }
            if (alt === true && shift === true) {    // --changing language
                changeLanguage();
            }
            if (shift === true) {
                shiftToUpperCase = 1;       // ---draw upperCase Letters
                keyText(currentLang, shiftToUpperCase);
            }
        }
    });
    
    
    document.body.addEventListener("keyup", (event) => {
        if (keyCodes.includes(event.code)) {
                document.querySelector(`.${event.code}`).style.boxShadow = "3px 5px 2px rgb(155, 190, 180), 1px 1px 9px white, inset 1px 1px 2px white";
                document.querySelector(`.${event.code}`).style.transform = "scale(1)";
                document.querySelector(`.${event.code}`).style.fontWeight = "normal";
                switch (event.code) {
                    case "AltLeft":
                        alt = false; break;
                    case "ShiftLeft":
                        shift = false;
                        shiftToUpperCase = 0;
                        keyText(currentLang, shiftToUpperCase);
                        break;
                    default:
            }
        }
    });
    
    
    
    
    
    // ----------------------------------------------------- Mouse event handler ------------------------
    
    for (let i = 0; i < allButtons.length; i += 1) {
        allButtons[i].addEventListener("mousedown", (event) => {
            newTextarea.focus();
            if ( keyCodes.includes(event.target.classList[1]) ) {
                document.querySelector(`.${event.target.classList[1]}`).style.boxShadow = "2px 2px 2px rgb(155, 190, 180), 1px 1px 1px white, inset 1px 1px 2px white";
                document.querySelector(`.${event.target.classList[1]}`).style.transform = "scale(0.92)";
                document.querySelector(`.${event.target.classList[1]}`).style.fontWeight = "bold";
            } 
        });
        allButtons[i].addEventListener("mouseup", (event) => {
                document.querySelector(`.${event.target.classList[1]}`).style.boxShadow = "3px 5px 2px rgb(155, 190, 180), 1px 1px 9px white, inset 1px 1px 2px white";
                document.querySelector(`.${event.target.classList[1]}`).style.transform = "scale(1)";
                document.querySelector(`.${event.target.classList[1]}`).style.fontWeight = "normal";
                switch (event.target.innerText) {
                    case "Caps Lock":
                        btnCapsLock(); break;
                    case "Backspace":
                        btnBackspace(); break;
                    case "Del":
                        btnDel(); break;
                    case "Enter":
                        btnEnter(); break;
                    case "Space":
                        printText(" "); break;
                    case "◄":
                        leftArrow(); break;
                    case "►":
                        rightArrow(); break;
                    case "Tab":
                        btnTab(); break;
                    case "Ctrl":
                    case "Shift":
                    case "Alt":
                    case "Win":
                        break;
                    default:
                        printText(event.target.innerText);
                }
        });
    }
    
    
    // ---------------------------------------special button events
    
    let currentPosition = 0;

        function btnBackspace() {
            if (newTextarea.selectionStart !== newTextarea.selectionEnd) {
                deleteText();
                currentPosition = newTextarea.selectionEnd;
            } else { 
                newTextarea.setRangeText("", newTextarea.selectionStart-1, newTextarea.selectionEnd, "end"); 
            }
        }
    
        function btnDel() {
            if (newTextarea.selectionStart !== newTextarea.selectionEnd) {
                deleteText();
                currentPosition = newTextarea.selectionEnd;
            } else {
            newTextarea.setRangeText("", newTextarea.selectionStart, newTextarea.selectionEnd+1, "end"); }
        }
    
        function btnTab() { 
            newTextarea.setRangeText("   ", newTextarea.selectionStart, newTextarea.selectionEnd, "end"); 
        }
    
        function btnCapsLock() {
            shiftToUpperCase = +(!shiftToUpperCase);
            keyText(currentLang, shiftToUpperCase);
        }
    
        function btnEnter() {
            newTextarea.setRangeText("\n", newTextarea.selectionStart, newTextarea.selectionEnd, "end");
        }
    
    
    
    // --------------------------------------- arrows options
    
        function leftArrow() {
            currentPosition = newTextarea.selectionStart;
            if (currentPosition) {
                newTextarea.setSelectionRange(currentPosition - 1, currentPosition - 1);
            }
        }
    
        function rightArrow() {
            currentPosition = newTextarea.selectionStart;
            newTextarea.setSelectionRange(currentPosition + 1, currentPosition + 1);
        }
     


    // :D   
        const matrixText = ["I'm watching you....."];
            function text(){
                let line =0;
                let count = 0;
                let out = ""; 
                function type() {
                    let interval = setTimeout(() => {
                        out+= matrixText[line][count];
                        newTextarea.innerHTML = out + "|";
                        count++;
                        if(count >= matrixText[line].length){
                            count = 0;
                            line++;
                            if(line === matrixText.length){
                                clearTimeout(interval);
                                newTextarea.innerHTML = "";
                                return true;
                            }
                        }
                        type();
                    }, random(random(340*1.9)));
                }
                type();
            }
            function random(max) {
                return Math.floor(Math.random()*Math.floor(max));
            }
            text(); 
    });