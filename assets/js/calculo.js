/*Calculado ìndice de Massa Corporal*/

function limparFormulario() {
    document.getElementById("imcForm").reset();
}

function somenteNumeros(event) {
    var charCode = event.charCode ? event.charCode : event.keyCode;
    if (charCode != 8 && charCode != 9) {
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

function calcularIMC() {
    const nome = document.getElementById("nome").value;
    const sexo = document.getElementById("sexo").value;
    const idade = parseInt(document.getElementById("idade").value);
    const alturaInput = document.getElementById("altura").value;
    const altura = parseFloat(alturaInput.replace(",", ".")); 
    const pesoInput = document.getElementById("peso").value;
    const peso = parseFloat(pesoInput.replace(",", "."));
    const sim = document.getElementById("sim").checked;
    const imcDesejavel = calcularIMCDesejavel(idade);
    const imc = peso / (altura * altura);

    if (nome === "" || sexo === "" || isNaN(idade) || idade <= 0 || isNaN(altura) || isNaN(peso) || !sim) {
        alert("Por favor, preencha todos os campos obrigatórios e confirme seus dados.");
        return;
    }

    if (isNaN(idade) || isNaN(altura) || isNaN(peso) || altura <= 0) {
        alert("Por favor, digite valores válidos para idade, altura e peso.");
        return;
    }

    function calcularCategoria(idade) {
        if (idade < 12) {
            return "Infantil";
        } else if (idade >= 12 && idade <= 20) {
            return "Juvenil";
        } else if (idade >= 21 && idade <= 65) {
            return "Adulto";
        } else {
            return "Idoso";
        }
    }

    function calcularIMCDesejavel(idade) {
        if (idade < 12) {
            return 18.5;
        } else if (idade >= 12 && idade <= 20) {
            return 22;
        } else if (idade >= 21 && idade <= 65) {
            return 24;
        } else {
            return 24;
        }
    }

    function calcularRisco(imc) {
        if (imc < 20) {
            return "Abaixo do Peso: Muitas complicações de saúde como doenças pulmonares e cardiovasculares podem estar associadas ao baixo peso.";
        } else if (imc >= 20 && imc < 24.9) {
            return "Peso Normal: Seu peso está ideal para suas referências.";
        } else if (imc >= 25 && imc < 29.9) {
            return "Sobrepeso: Aumento de peso apresenta risco moderado para outras doenças crônicas e cardiovasculares.";
        } else if (imc >= 30 && imc <= 34.9) {
            return "Obesidade Grau 1: Quem tem obesidade vai estar mais exposto a doenças graves e ao risco de mortalidade.";
        } else {
            return "Obesidade Grau 2: O obeso mórbido vive menos, tem alto risco de mortalidade geral por diversas causas.";
        }
    }

    function calcularRecomendacao(imc) {
        if (imc < 20) {
            return "Inclua carboidratos simples em sua dieta, além de proteínas indispensáveis para ganho de massa magra. Procure um profissional.";
        } else if (imc >= 20 && imc < 25) {
            return "Mantenha uma dieta saudável e faça seus exames periódicos.";
        } else if (imc >= 25 && imc < 30) {
            return "Adote um tratamento baseado em dieta balanceada, exercício físico e medicação. A ajuda de um profissional pode ser interessante.";
        } else if (imc >= 30 && imc <= 35) {
            return "Adote uma dieta alimentar rigorosa, com a acompanhamento de um nutricionista e um médico especialista (endócrino).";
        } else {
            return "Procure com urgência o acompanhamento de um nutricionista para realizar reeducação alimentar, um psicólogo e um médico especialista (endócrino).";
        }
    }

    const categoria = calcularCategoria(idade);
    const risco = calcularRisco(imc);
    const recomendacao = calcularRecomendacao(imc);

    console.log("Nome: " + nome);
    console.log("Sexo: " + sexo);
    console.log("Idade: " + idade);
    console.log("IMC: " + imc.toFixed(2));
    console.log("Altura:" + altura);
    console.log("Peso:" + peso);
    console.log("Categoria: " + categoria);
    console.log("IMC Desejável: " + imcDesejavel.toFixed(2));
    console.log("Risco: " + risco);
    console.log("Recomendação: " + recomendacao);

    document.getElementById("imcForm").submit();


    localStorage.setItem("nome", nome);
    localStorage.setItem("sexo", sexo);
    localStorage.setItem("idade", idade);
    localStorage.setItem("altura",altura);
    localStorage.setItem("peso",peso);
    localStorage.setItem("imc", imc.toFixed(2));
    localStorage.setItem("categoria", categoria);
    localStorage.setItem("imcDesejavel", imcDesejavel);
    localStorage.setItem("risco", risco);
    localStorage.setItem("recomendacao", recomendacao);

    window.location.href = "/assets/html/resultado.html";
}

