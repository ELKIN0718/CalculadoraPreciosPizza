let size = "";
let nusab = 0;
let lista = [];
let tope = 0;
let suma = 0;
let precio = 0;





function tamano(x, id){
    size = x;
    console.log(size);

    document.getElementById('tamano').classList.remove('visible'); 
    document.getElementById('numsab').classList.add('visible'); 
  
    
};

function numsab(x){
    nusab = x;

    document.getElementById('numsab').classList.remove('visible'); 
    document.getElementById('sab').classList.add('visible');
    
};

function elegirsabores(x){
    if(tope<nusab){
        lista.push(x);
        tope++;
    asignarTextoElemento(lista,'#saborcitos');
    };
    
};

function cambio(){
    document.getElementById('sab').classList.remove('visible'); 
    document.getElementById('precio').classList.add('visible');

    for(let i = 0; i<lista.length; i++){
        if(size === 's'){
            if(lista[i] === 'Jamon'){suma = suma + 15000};
            if(lista[i] === 'Hawaiana'){suma = suma + 16000};
            if(lista[i] === 'PyChamp'){suma = suma + 18000};
            if(lista[i] === 'PyVeg'){suma = suma + 18000};
            if(lista[i] === 'Salami'){suma = suma + 20000};
            if(lista[i] === 'Peperoni'){suma = suma + 20000};
            if(lista[i] === 'Choributi'){suma = suma + 18000};
            if(lista[i] === 'Vegetariana'){suma = suma + 18000};
            if(lista[i] === 'Revolcon'){suma = suma + 22000};
            if(lista[i] === 'TyMaiz'){suma = suma + 20000};
            if(lista[i] === 'Ranchera'){suma = suma + 22000};
            if(lista[i] === 'Mexicana'){suma = suma + 22000};
        }else if(size === 'm'){
            if(lista[i] === 'Jamon'){suma = suma + 30000};
            if(lista[i] === 'Hawaiana'){suma = suma + 33000};
            if(lista[i] === 'PyChamp'){suma = suma + 38000};
            if(lista[i] === 'PyVeg'){suma = suma + 38000};
            if(lista[i] === 'Salami'){suma = suma + 38000};
            if(lista[i] === 'Peperoni'){suma = suma + 38000};
            if(lista[i] === 'Choributi'){suma = suma + 37000};
            if(lista[i] === 'Vegetariana'){suma = suma + 38000};
            if(lista[i] === 'Revolcon'){suma = suma + 44000};
            if(lista[i] === 'TyMaiz'){suma = suma + 38000};
            if(lista[i] === 'Ranchera'){suma = suma + 42000};
            if(lista[i] === 'Mexicana'){suma = suma + 42000};
        }else if(size === 'f'){
            if(lista[i] === 'Jamon'){suma = suma + 40000};
            if(lista[i] === 'Hawaiana'){suma = suma + 43000};
            if(lista[i] === 'PyChamp'){suma = suma + 48000};
            if(lista[i] === 'PyVeg'){suma = suma + 50000};
            if(lista[i] === 'Salami'){suma = suma + 48000};
            if(lista[i] === 'Peperoni'){suma = suma + 48000};
            if(lista[i] === 'Choributi'){suma = suma + 47000};
            if(lista[i] === 'Vegetariana'){suma = suma + 50000};
            if(lista[i] === 'Revolcon'){suma = suma + 58000};
            if(lista[i] === 'TyMaiz'){suma = suma + 48000};
            if(lista[i] === 'Ranchera'){suma = suma + 54000};
            if(lista[i] === 'Mexicana'){suma = suma + 58000};
        }else{
            asignarTextoElemento("Error", "#texto");
        }
    }

    if(nusab === 1){ precio = suma /1 };
    if(nusab === 2){ precio = suma /2 };
    if(nusab === 3){ precio = suma /3 };
    if(nusab === 4){ precio = suma /4 };
    precio = redondearMil(precio);
    asignarTextoElemento(lista, "#saba");
    asignarTextoElemento(precio, "#texto");
};


function redondearMil(numero) {
  return Math.ceil(numero / 1000) * 1000;
}

function asignarTextoElemento(texto, elemento){
    let a = document.querySelector(elemento);
    a.innerHTML = texto;
    return;
};  
 /* let pantallas = document.querySelectorAll('.pantalla');
     for (let i = 0; i < pantallas.length; i++) {
         pantallas[i].classList.remove('visible'); // Oculta cada una
    }; */