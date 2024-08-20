document.addEventListener("DOMContentLoaded", () => {
  let tela = document.getElementById("input-tela-exibicao");
  let operador = "";
  let primeiroNumero = "";
  let segundoNumero = "";

  //função para manipular os numeros
  function handleNumbers(numero) {
    //vou usar primeiro e segundo numero aqui
    if (operador === "") {
      primeiroNumero += numero;
      handleScreen(primeiroNumero);
    } else {
      segundoNumero += numero;
      handleScreen(segundoNumero);
    }
  }
  //função para manipular os operadores
  function handleOperators(op) {
    //vou usar o operador aqui
    if (primeiroNumero === "") return;
    operador = op;
  }
  //função para manipular o apagar
  function handleClear() {
    if (operador === "") {
      primeiroNumero = primeiroNumero.slice(0, -1);
      handleScreen(primeiroNumero || "0");
    } else {
      segundoNumero = segundoNumero.slice(0, -1);
      handleScreen(segundoNumero || "0");
    }
  }
  //função para manipular o "C"
  function handleReset() {
    primeiroNumero = "";
    segundoNumero = "";
    operador = "";
    handleScreen("0");
  }
  //função par manipular o resultado
  function handleResult() {
    if (primeiroNumero === "" || segundoNumero === "" || operador === "")
      return;
    let resultado;
    switch (operador) {
      case "+":
        resultado = Number(primeiroNumero) + Number(segundoNumero);
        break;
      case "-":
        resultado = Number(primeiroNumero) - Number(segundoNumero);
        break;
      case "*":
        resultado = Number(primeiroNumero) * Number(segundoNumero);
        break;
      case "/":
        resultado = Number(primeiroNumero) / Number(segundoNumero);
        break;
      default:
        return;
    }
    handleScreen(resultado);
    primeiroNumero = resultado.toString();
    segundoNumero = "";
    operador = "";
  }

  function handleScreen(botao) {
    tela.value = botao;
  }

  // function handleVirgula(virgula) {
  //   let pontuacaoSubstituida = virgula.replace(",", ".");
  //   primeiroNumero += pontuacaoSubstituida + "0";
  //   // debugger;
  //   handleScreen(primeiroNumero);
  // }
  function handleCE() {
    segundoNumero = "";
    handleScreen("0");
  }

  function handlePercentage() {
    if (operador === "*" || operador === "/") {
      segundoNumero = Number(segundoNumero) / 100;
    } else {
      segundoNumero = (Number(segundoNumero) / 100) * primeiroNumero;
    }

    segundoNumero = segundoNumero.toFixed(2).toString();
    handleScreen(segundoNumero);
  }

  let botoes = document.querySelectorAll("button");
  botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
      let valor = botao.textContent;
      if (valor >= 0 && valor <= 9) {
        //aqui eu vou chamar uma função para lidar com esses numeros
        return handleNumbers(valor);
      }

      if (["+", "-", "*", "/"].includes(valor)) {
        //aqui eu vou chamar uma função para ldiar com os elementos
        return handleOperators(valor);
      }
      if (valor === "Apagar") {
        //aqui vou criar uma função de apagar apenas um numero
        return handleClear(valor);
      }
      if (valor === "C") {
        //aqui vou criar uma função para apagar todos os numeros
        return handleReset();
      }
      if (valor === "=") {
        //aqui vou criar uma função para exibir o resultado
        return handleResult();
      }
      if (valor === "CE") {
        return handleCE();
      }
      if (valor === "%") {
        return handlePercentage();
      }

      if (valor === ",") {
        return handleVirgula(valor);
      }
    });
  });
});
