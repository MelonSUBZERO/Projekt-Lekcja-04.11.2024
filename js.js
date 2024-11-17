let spr = document.querySelector('#spr');
const popP = document.querySelector('.pop');
const negP = document.querySelector('.neg');
let inp = document.querySelector('#inp')
const img = document.createElement('img');
const nazwa = document.createElement('p');
const flaga = document.querySelector(".flaga")
const check = document.querySelector(".check")
nazwa.classList.add('nazwa');
let kraj;
let neg = 0;
let pop = 0;
let gameHistory = [];
function Europa() {
    async function getData1() {
        const res = await fetch("https://restcountries.com/v3.1/region/europe");
        const data = await res.json();
        return data;
    }

    async function zgaduj() {
        let kraje = await getData1();
        kraj = kraje[Math.floor(Math.random() * kraje.length)];
        img.setAttribute('src', kraj.flags.png);
        flaga.appendChild(img);
        nazwa.innerHTML = kraj.name.common;
        flaga.appendChild(nazwa);
        popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
        negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
        img.setAttribute('alt', `flaga ${kraj.name.common}`);
    }

    zgaduj();

    function restart() {
        flaga.innerHTML = '';
        inp.remove();
        spr.remove();
        let newInp = document.createElement("input");
        newInp.setAttribute("type", "text");
        newInp.id = "inp";
        newInp.placeholder = "stolica";
        check.appendChild(newInp);
        let br = document.createElement("br");
        check.appendChild(br);
        let newBtn = document.createElement("button");
        newBtn.id = "spr";
        newBtn.innerHTML = "SPRAWDŹ";
        check.appendChild(newBtn);
        inp = newInp;
        spr = newBtn;
        spr.addEventListener('click', click);
        pop = 0;
        neg = 0;
        gameHistory = []; 
        updateHistory();
        zgaduj();
    }

    function click() {
        if (neg >= 5) {
            alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
            const btn = document.createElement("button");
            inp.style.visibility = "hidden";
            spr.style.visibility = "hidden";
            inp.remove();
            spr.remove();
            btn.innerHTML = "RESTART";
            check.appendChild(btn);
            btn.addEventListener('click', () => {
                btn.remove();
                restart();
            });
        } else {
            const userAnswer = inp.value.trim().toLowerCase();
            const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';

            if (userAnswer === correctCapital) {
                pop++;
                alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                inp.value = '';
                gameHistory.push({ flag: kraj.flags.png, correct: true });
            } else {
                alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                neg++;
                inp.value = '';
                gameHistory.push({ flag: kraj.flags.png, correct: false });
            }
            updateHistory(); 
            zgaduj(); 
        }
    }
    function updateHistory() {
        const historyDiv = document.querySelector("#history");
        historyDiv.innerHTML = '';
        gameHistory.forEach((game, index) => {
            const gameElem = document.createElement('div');
            const flagImg = document.createElement('img');
            flagImg.src = game.flag;
            flagImg.alt = 'flaga';
            flagImg.style.width = '60px';
            flagImg.style.height='20px'

            const resultIcon = document.createElement('span');
            resultIcon.innerHTML = game.correct ? '✔️' : '❌';
            resultIcon.style.fontSize = '20px';

            gameElem.appendChild(flagImg);
            gameElem.appendChild(resultIcon);
            historyDiv.appendChild(gameElem);
        });
    }

    spr.addEventListener('click', click);
}
function Azja(){
    async function getData1() {
                    const res = await fetch("https://restcountries.com/v3.1/region/asia");
                    const data = await res.json();
                    return data;
                }
    
                async function zgaduj() {
                    let kraje = await getData1();
                    kraj = kraje[Math.floor(Math.random() * kraje.length)];
                    img.setAttribute('src', kraj.flags.png);
                    flaga.appendChild(img);
                    nazwa.innerHTML = kraj.name.common;
                    flaga.appendChild(nazwa);
                    popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                    negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                    img.setAttribute('alt', `flaga ${kraj.name.common}`);
                }
    
                zgaduj();
    
                function restart() {
                    flaga.innerHTML = '';
                    inp.remove();
                    spr.remove();
                    let newInp = document.createElement("input");
                    newInp.setAttribute("type", "text");
                    newInp.id = "inp";
                    newInp.placeholder = "stolica";
                    check.appendChild(newInp);
                    let br = document.createElement("br");
                    check.appendChild(br);
                    let newBtn = document.createElement("button");
                    newBtn.id = "spr";
                    newBtn.innerHTML = "SPRAWDŹ";
                    check.appendChild(newBtn);
                    inp = newInp;
                    spr = newBtn;
                    spr.addEventListener('click', click);
                    pop = 0;
                    neg = 0;
                    gameHistory = []; 
                    updateHistory();
                    zgaduj();
                }
    
                function click() {
                    if (neg >= 5) {
                        alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                        const btn = document.createElement("button");
                        inp.style.visibility = "hidden";
                        spr.style.visibility = "hidden";
                        inp.remove();
                        spr.remove();
                        btn.innerHTML = "RESTART";
                        check.appendChild(btn);
                        btn.addEventListener('click', () => {
                            btn.remove();
                            restart();
                        });
                    } else {
                        const userAnswer = inp.value.trim().toLowerCase();
                        const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
    
                        if (userAnswer === correctCapital) {
                            pop++;
                            alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: true });
                        } else {
                            alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                            neg++;
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: false });
                        }
                        updateHistory(); 
                        zgaduj(); 
                    }
                }
                function updateHistory() {
                    const historyDiv = document.querySelector("#history");
                    historyDiv.innerHTML = '';
                    gameHistory.forEach((game, index) => {
                        const gameElem = document.createElement('div');
                        const flagImg = document.createElement('img');
                        flagImg.src = game.flag;
                        flagImg.alt = 'flaga';
                        flagImg.style.width = '60px';
                        flagImg.style.height='20px'
    
                        const resultIcon = document.createElement('span');
                        resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                        resultIcon.style.fontSize = '20px';
    
                        gameElem.appendChild(flagImg);
                        gameElem.appendChild(resultIcon);
                        historyDiv.appendChild(gameElem);
                    });
                }
    
                spr.addEventListener('click', click);
}
function Afryka(){
    async function getData1() {
                    const res = await fetch("https://restcountries.com/v3.1/region/africa");
                    const data = await res.json();
                    return data;
                }
    
                async function zgaduj() {
                    let kraje = await getData1();
                    kraj = kraje[Math.floor(Math.random() * kraje.length)];
                    img.setAttribute('src', kraj.flags.png);
                    flaga.appendChild(img);
                    nazwa.innerHTML = kraj.name.common;
                    flaga.appendChild(nazwa);
                    popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                    negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                    img.setAttribute('alt', `flaga ${kraj.name.common}`);
                }
    
                zgaduj();
    
                function restart() {
                    flaga.innerHTML = '';
                    inp.remove();
                    spr.remove();
                    let newInp = document.createElement("input");
                    newInp.setAttribute("type", "text");
                    newInp.id = "inp";
                    newInp.placeholder = "stolica";
                    check.appendChild(newInp);
                    let br = document.createElement("br");
                    check.appendChild(br);
                    let newBtn = document.createElement("button");
                    newBtn.id = "spr";
                    newBtn.innerHTML = "SPRAWDŹ";
                    check.appendChild(newBtn);
                    inp = newInp;
                    spr = newBtn;
                    spr.addEventListener('click', click);
                    pop = 0;
                    neg = 0;
                    gameHistory = []; 
                    updateHistory();
                    zgaduj();
                }
    
                function click() {
                    if (neg >= 5) {
                        alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                        const btn = document.createElement("button");
                        inp.style.visibility = "hidden";
                        spr.style.visibility = "hidden";
                        inp.remove();
                        spr.remove();
                        btn.innerHTML = "RESTART";
                        check.appendChild(btn);
                        btn.addEventListener('click', () => {
                            btn.remove();
                            restart();
                        });
                    } else {
                        const userAnswer = inp.value.trim().toLowerCase();
                        const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
    
                        if (userAnswer === correctCapital) {
                            pop++;
                            alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: true });
                        } else {
                            alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                            neg++;
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: false });
                        }
                        updateHistory(); 
                        zgaduj(); 
                    }
                }
                function updateHistory() {
                    const historyDiv = document.querySelector("#history");
                    historyDiv.innerHTML = '';
                    gameHistory.forEach((game, index) => {
                        const gameElem = document.createElement('div');
                        const flagImg = document.createElement('img');
                        flagImg.src = game.flag;
                        flagImg.alt = 'flaga';
                        flagImg.style.width = '60px';
                        flagImg.style.height='20px'
    
                        const resultIcon = document.createElement('span');
                        resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                        resultIcon.style.fontSize = '20px';
    
                        gameElem.appendChild(flagImg);
                        gameElem.appendChild(resultIcon);
                        historyDiv.appendChild(gameElem);
                    });
                }
    
                spr.addEventListener('click', click);
}
function Australia(){
             async function getData1() {
                                const res = await fetch("https://restcountries.com/v3.1/region/oceania");
                                const data = await res.json();
                                return data;
                            }
                
                            async function zgaduj() {
                                let kraje = await getData1();
                                kraj = kraje[Math.floor(Math.random() * kraje.length)];
                                img.setAttribute('src', kraj.flags.png);
                                flaga.appendChild(img);
                                nazwa.innerHTML = kraj.name.common;
                                flaga.appendChild(nazwa);
                                popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                                negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                                img.setAttribute('alt', `flaga ${kraj.name.common}`);
                            }
                
                            zgaduj();
                
                            function restart() {
                                flaga.innerHTML = '';
                                inp.remove();
                                spr.remove();
                                let newInp = document.createElement("input");
                                newInp.setAttribute("type", "text");
                                newInp.id = "inp";
                                newInp.placeholder = "stolica";
                                check.appendChild(newInp);
                                let br = document.createElement("br");
                                check.appendChild(br);
                                let newBtn = document.createElement("button");
                                newBtn.id = "spr";
                                newBtn.innerHTML = "SPRAWDŹ";
                                check.appendChild(newBtn);
                                inp = newInp;
                                spr = newBtn;
                                spr.addEventListener('click', click);
                                pop = 0;
                                neg = 0;
                                gameHistory = []; 
                                updateHistory();
                                zgaduj();
                            }
                
                            function click() {
                                if (neg >= 5) {
                                    alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                                    const btn = document.createElement("button");
                                    inp.style.visibility = "hidden";
                                    spr.style.visibility = "hidden";
                                    inp.remove();
                                    spr.remove();
                                    btn.innerHTML = "RESTART";
                                    check.appendChild(btn);
                                    btn.addEventListener('click', () => {
                                        btn.remove();
                                        restart();
                                    });
                                } else {
                                    const userAnswer = inp.value.trim().toLowerCase();
                                    const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
                
                                    if (userAnswer === correctCapital) {
                                        pop++;
                                        alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                                        inp.value = '';
                                        gameHistory.push({ flag: kraj.flags.png, correct: true });
                                    } else {
                                        alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                                        neg++;
                                        inp.value = '';
                                        gameHistory.push({ flag: kraj.flags.png, correct: false });
                                    }
                                    updateHistory(); 
                                    zgaduj(); 
                                }
                            }
                            function updateHistory() {
                                const historyDiv = document.querySelector("#history");
                                historyDiv.innerHTML = '';
                                gameHistory.forEach((game, index) => {
                                    const gameElem = document.createElement('div');
                                    const flagImg = document.createElement('img');
                                    flagImg.src = game.flag;
                                    flagImg.alt = 'flaga';
                                    flagImg.style.width = '60px';
                                    flagImg.style.height='20px'
                
                                    const resultIcon = document.createElement('span');
                                    resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                                    resultIcon.style.fontSize = '20px';
                
                                    gameElem.appendChild(flagImg);
                                    gameElem.appendChild(resultIcon);
                                    historyDiv.appendChild(gameElem);
                                });
                            }
                
                            spr.addEventListener('click', click);
}
function Ekspert(){
                            async function getData1() {
                                            const res = await fetch("https://restcountries.com/v3.1/all");
                                            const data = await res.json();
                                            return data;
                                        }
                            
                                        async function zgaduj() {
                                            let kraje = await getData1();
                                            kraj = kraje[Math.floor(Math.random() * kraje.length)];
                                            img.setAttribute('src', kraj.flags.png);
                                            flaga.appendChild(img);
                                            nazwa.innerHTML = kraj.name.common;
                                            flaga.appendChild(nazwa);
                                            popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                                            negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                                            img.setAttribute('alt', `flaga ${kraj.name.common}`);
                                        }
                            
                                        zgaduj();
                            
                                        function restart() {
                                            flaga.innerHTML = '';
                                            inp.remove();
                                            spr.remove();
                                            let newInp = document.createElement("input");
                                            newInp.setAttribute("type", "text");
                                            newInp.id = "inp";
                                            newInp.placeholder = "stolica";
                                            check.appendChild(newInp);
                                            let br = document.createElement("br");
                                            check.appendChild(br);
                                            let newBtn = document.createElement("button");
                                            newBtn.id = "spr";
                                            newBtn.innerHTML = "SPRAWDŹ";
                                            check.appendChild(newBtn);
                                            inp = newInp;
                                            spr = newBtn;
                                            spr.addEventListener('click', click);
                                            pop = 0;
                                            neg = 0;
                                            gameHistory = []; 
                                            updateHistory();
                                            zgaduj();
                                        }
                            
                                        function click() {
                                            if (neg >= 5) {
                                                alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                                                const btn = document.createElement("button");
                                                inp.style.visibility = "hidden";
                                                spr.style.visibility = "hidden";
                                                inp.remove();
                                                spr.remove();
                                                btn.innerHTML = "RESTART";
                                                check.appendChild(btn);
                                                btn.addEventListener('click', () => {
                                                    btn.remove();
                                                    restart();
                                                });
                                            } else {
                                                const userAnswer = inp.value.trim().toLowerCase();
                                                const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
                            
                                                if (userAnswer === correctCapital) {
                                                    pop++;
                                                    alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                                                    inp.value = '';
                                                    gameHistory.push({ flag: kraj.flags.png, correct: true });
                                                } else {
                                                    alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                                                    neg++;
                                                    inp.value = '';
                                                    gameHistory.push({ flag: kraj.flags.png, correct: false });
                                                }
                                                updateHistory(); 
                                                zgaduj(); 
                                            }
                                        }
                                        function updateHistory() {
                                            const historyDiv = document.querySelector("#history");
                                            historyDiv.innerHTML = '';
                                            gameHistory.forEach((game, index) => {
                                                const gameElem = document.createElement('div');
                                                const flagImg = document.createElement('img');
                                                flagImg.src = game.flag;
                                                flagImg.alt = 'flaga';
                                                flagImg.style.width = '60px';
                                                flagImg.style.height='20px'
                            
                                                const resultIcon = document.createElement('span');
                                                resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                                                resultIcon.style.fontSize = '20px';
                            
                                                gameElem.appendChild(flagImg);
                                                gameElem.appendChild(resultIcon);
                                                historyDiv.appendChild(gameElem);
                                            });
                                        }
                            
                                        spr.addEventListener('click', click);
}
function Nameryka(){
    async function getData7() {
                    const res = await fetch("https://restcountries.com/v3.1/region/americas");
                    const data = await res.json();
                    return data;
                }
    
                async function zgaduj() {

                    let kraje = await getData7();
                    kraj = kraje[Math.floor(Math.random() * kraje.length)];
                    if(kraj.subregion == "North America" || kraj.subregion == "Caribbean"){
                    img.setAttribute('src', kraj.flags.png);
                    flaga.appendChild(img)
                    if(kraj.subregion == "North America" || kraj.subregion == "Caribbean")
                    nazwa.innerHTML = kraj.name.common;
                    flaga.appendChild(nazwa)
                    popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                    negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                    img.setAttribute('alt', `flaga ${kraj.name.common}`)
        }
        else{zgaduj()}
                }
    
                zgaduj();
    
                function restart() {
                    flaga.innerHTML = '';
                    inp.remove();
                    spr.remove();
                    let newInp = document.createElement("input");
                    newInp.setAttribute("type", "text");
                    newInp.id = "inp";
                    newInp.placeholder = "stolica";
                    check.appendChild(newInp);
                    let br = document.createElement("br");
                    check.appendChild(br);
                    let newBtn = document.createElement("button");
                    newBtn.id = "spr";
                    newBtn.innerHTML = "SPRAWDŹ";
                    check.appendChild(newBtn);
                    inp = newInp;
                    spr = newBtn;
                    spr.addEventListener('click', click);
                    pop = 0;
                    neg = 0;
                    gameHistory = []; 
                    updateHistory();
                    zgaduj();
                }
    
                function click() {
                    if (neg >= 5) {
                        alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                        const btn = document.createElement("button");
                        inp.style.visibility = "hidden";
                        spr.style.visibility = "hidden";
                        inp.remove();
                        spr.remove();
                        btn.innerHTML = "RESTART";
                        check.appendChild(btn);
                        btn.addEventListener('click', () => {
                            btn.remove();
                            restart();
                        });
                    } else {
                        const userAnswer = inp.value.trim().toLowerCase();
                        const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
    
                        if (userAnswer === correctCapital) {
                            pop++;
                            alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: true });
                        } else {
                            alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                            neg++;
                            inp.value = '';
                            gameHistory.push({ flag: kraj.flags.png, correct: false });
                        }
                        updateHistory(); 
                        zgaduj(); 
                    }
                }
                function updateHistory() {
                    const historyDiv = document.querySelector("#history");
                    historyDiv.innerHTML = '';
                    gameHistory.forEach((game, index) => {
                        const gameElem = document.createElement('div');
                        const flagImg = document.createElement('img');
                        flagImg.src = game.flag;
                        flagImg.alt = 'flaga';
                        flagImg.style.width = '60px';
                        flagImg.style.height='20px'
    
                        const resultIcon = document.createElement('span');
                        resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                        resultIcon.style.fontSize = '20px';
    
                        gameElem.appendChild(flagImg);
                        gameElem.appendChild(resultIcon);
                        historyDiv.appendChild(gameElem);
                    });
                }
    
                spr.addEventListener('click', click);
            }
function Sameryka(){
                async function getData7() {
                                const res = await fetch("https://restcountries.com/v3.1/region/americas");
                                const data = await res.json();
                                return data;
                            }
                
                            async function zgaduj() {

                                let kraje = await getData7();
                                kraj = kraje[Math.floor(Math.random() * kraje.length)];
                                if(kraj.subregion == "South America" || kraj.subregion == "Caribbean"){
                                img.setAttribute('src', kraj.flags.png);
                                flaga.appendChild(img)
                                if(kraj.subregion == "South America" || kraj.subregion == "Caribbean")
                                nazwa.innerHTML = kraj.name.common;
                                flaga.appendChild(nazwa)
                                popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
                                negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
                                img.setAttribute('alt', `flaga ${kraj.name.common}`)
                    }
                    else{zgaduj()}
                            }
                
                            zgaduj();
                
                            function restart() {
                                flaga.innerHTML = '';
                                inp.remove();
                                spr.remove();
                                let newInp = document.createElement("input");
                                newInp.setAttribute("type", "text");
                                newInp.id = "inp";
                                newInp.placeholder = "stolica";
                                check.appendChild(newInp);
                                let br = document.createElement("br");
                                check.appendChild(br);
                                let newBtn = document.createElement("button");
                                newBtn.id = "spr";
                                newBtn.innerHTML = "SPRAWDŹ";
                                check.appendChild(newBtn);
                                inp = newInp;
                                spr = newBtn;
                                spr.addEventListener('click', click);
                                pop = 0;
                                neg = 0;
                                gameHistory = []; 
                                updateHistory();
                                zgaduj();
                            }
                
                            function click() {
                                if (neg >= 5) {
                                    alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. Kliknij przycisk 'RESTART' aby zacząć od nowa`);
                                    const btn = document.createElement("button");
                                    inp.style.visibility = "hidden";
                                    spr.style.visibility = "hidden";
                                    inp.remove();
                                    spr.remove();
                                    btn.innerHTML = "RESTART";
                                    check.appendChild(btn);
                                    btn.addEventListener('click', () => {
                                        btn.remove();
                                        restart();
                                    });
                                } else {
                                    const userAnswer = inp.value.trim().toLowerCase();
                                    const correctCapital = kraj.capital ? kraj.capital[0].toLowerCase() : '';
                
                                    if (userAnswer === correctCapital) {
                                        pop++;
                                        alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
                                        inp.value = '';
                                        gameHistory.push({ flag: kraj.flags.png, correct: true });
                                    } else {
                                        alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
                                        neg++;
                                        inp.value = '';
                                        gameHistory.push({ flag: kraj.flags.png, correct: false });
                                    }
                                    updateHistory(); 
                                    zgaduj(); 
                                }
                            }
                            function updateHistory() {
                                const historyDiv = document.querySelector("#history");
                                historyDiv.innerHTML = '';
                                gameHistory.forEach((game, index) => {
                                    const gameElem = document.createElement('div');
                                    const flagImg = document.createElement('img');
                                    flagImg.src = game.flag;
                                    flagImg.alt = 'flaga';
                                    flagImg.style.width = '60px';
                                    flagImg.style.height='20px'
                
                                    const resultIcon = document.createElement('span');
                                    resultIcon.innerHTML = game.correct ? '✔️' : '❌';
                                    resultIcon.style.fontSize = '20px';
                
                                    gameElem.appendChild(flagImg);
                                    gameElem.appendChild(resultIcon);
                                    historyDiv.appendChild(gameElem);
                                });
                            }
                
                            spr.addEventListener('click', click);
                        }