const spr = document.querySelector('#spr');
const popP = document.querySelector('.pop');
const negP = document.querySelector('.neg');
const inp = document.querySelector('#inp')
const img = document.createElement('img');
const nazwa = document.createElement('p');
const flaga = document.querySelector(".flaga")
const check = document.querySelector(".check")
nazwa.classList.add('nazwa');
let kraj;
let neg = 0;
let pop = 0;
async function getData(){
    const res = await fetch("https://restcountries.com/v3.1/region/europe")
    const data = await res.json()
    return data
}
    async function zgaduj() {
        let kraje = await getData();
        kraj = kraje[Math.floor(Math.random() * kraje.length)];
        img.setAttribute('src', kraj.flags.png);
        flaga.appendChild(img)
        nazwa.innerHTML = kraj.name.common;
        flaga.appendChild(nazwa)
        popP.innerHTML = `poprawne: <strong>${pop}</strong>`;
        negP.innerHTML = `niepoprawne: <strong>${neg}</strong>`;
    }
    spr.addEventListener('click', () => {
        if(neg >= 5){
            alert(`Przegrałeś! Finalny wynik: ${pop} poprawnych odpowiedzi. 
                Kliknij przycisk 'RESTART' aby zacząć od nowa`)
                const btn = document.createElement("button")
                inp.style.visibility = "hidden"
                spr.style.visibility="hidden"
                inp.remove()
                spr.remove()
                btn.innerHTML = "RESTART"
                check.appendChild(btn)
                btn.addEventListener('click', ()=>{
                    btn.remove()
                    let inp = document.createElement("input")
                    inp.setAttribute('type', 'text')
                    inp.id = "inp"
                    let but = document.createElement("button")
                    but.id="spr"
                    let br = document.createElement("br")
                    check.appendChild(inp)
                    check.appendChild(br)
                    check.appendChild(but)
                    inp.placeholder = "stolica"
                    but.innerHTML = "SPRAWDŹ"
                    pop = 0
                    neg = 0
                    zgaduj()
                })
        }
        else{
        if (inp.value == kraj.capital[0]) {
            pop++;
            alert(`Podałeś poprawną stolicę ${kraj.name.common}`);
            inp.value = '';
            zgaduj();
        } else {
            alert(`Podałeś niepoprawną stolicę ${kraj.name.common}`);
            neg++;
            inp.value = '';
            zgaduj();
        }
    }
    })
    
        
    