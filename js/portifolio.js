const setas = document.querySelectorAll(".accordion .seta");

setas.forEach((setas) => {

    setas.parentElement.addEventListener('click', () => {

        let secao;
        secao = setas.parentElement.parentElement;

        if(setas.parentElement.parentElement.classList.contains("aberta") == true){

            return secao.classList.remove("aberta");

        }

        secao.classList.add("aberta");

    });

});