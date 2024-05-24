function contar() {
    var inicio = Number(document.getElementById('inicio').value);
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var contagem = document.querySelector('#contagem');
    var lista = [];
    var mostrar = document.createElement('p');
    var c = 0;
    var each = 0;
    var emojiCode = '1F449';
    var emoji = String.fromCodePoint(parseInt(emojiCode, 16));
    if (fim < inicio) {
        alert('Ops! Seu fim está maior do que o início!');
    } else if (inicio == 0) {
        contagem.textContent = `Impossível contar!`
    } else {
        if (passo == 0) {
            alert('Ops! Seu passo está como 0, definindo para passo 1.');
            passo = 1;
            for (inicio; inicio <= fim; inicio += passo) {
                c += 1;
                if (c == 1) {
                    contagem.textContent = null;
                }
                lista.push(inicio)
            }
            lista.forEach(numero => {
                each += 1
                contagem.textContent += `${numero} ${emoji}`
                if (each == lista.length) {
                    contagem.textContent += `FIM 🏳️`
                }
            });
            
        } else if (passo > 0) {
            
            for (inicio; inicio <= fim; inicio += passo) {
                c += 1;
                if (c == 1) {
                    contagem.textContent = null;
                }
                lista.push(inicio)
            }
            lista.forEach(numero => {
                each += 1
                contagem.textContent += `${numero} ${emoji}`
                if (each == lista.length) {
                    contagem.textContent += `FIM 🏳️`
                }
            });

        } else {
            passo *= -1;
            for (fim; fim >= inicio; fim -= passo) {
                c += 1;
                if (c == 1) {
                    contagem.textContent = null;
                }
                lista.push(fim)
            }
            lista.forEach(numero => {
                each += 1
                contagem.textContent += `${numero} ${emoji}`
                if (each == lista.length) {
                    contagem.textContent += `FIM 🏳️`
                }
            });
            }
        }
}

