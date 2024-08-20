const listaDeNotas = [];

function calcularMedia(listaDeNotas) {
  let media;
  for (let i = 0; i < 4; i++) {
    debugger;
    for (let j = 0; j < 4; j++) {
      listaDeNotas[j] = Number(prompt(`Digite a ${j + 1}º nota`));
      if (listaDeNotas[j] > 10) {
        alert("Um numero foi digitado incorretamente, tente novamente");
      }
    }
    media =
      (listaDeNotas[i] +
        listaDeNotas[i + 1] +
        listaDeNotas[i + 2] +
        listaDeNotas[i + 3]) /
      4;

    if (media >= 6 && media <= 10) {
      return alert(`Você passou de ano com a media: ${media}`);
    }

    if (media >= 4 && media < 6) {
      return alert(`Você ficou de recuperacão com a media: ${media}`);
    }

    if (media < 4) {
      return alert(`Você repetiu de ano com a media: ${media}`);
    }

    if (media > 10) {
      return alert("A media calculada é muito alta, tente novamente");
    }

    return alert("Media invalida");
  }
  return alert(`A media da sua nota é: ${media}`);
}

//calcularMedia(listaDeNotas)//
