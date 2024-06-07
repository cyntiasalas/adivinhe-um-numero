const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativasRestantes = 10;

const feedbackElement = document.getElementById('feedback');
const tentativasRestantesElement = document.getElementById('tentativas-restantes');

const form = document.getElementById('form-chute');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    const chute = parseInt(document.getElementById('chute').value);

    if (chute === numeroSecreto) {
        feedbackElement.textContent = 'Parabéns! Você acertou o número em ' + (10 - tentativasRestantes) + ' tentativas!';
        tentativasRestantesElement.textContent = '';
        form.disabled = true;
    } else if (tentativasRestantes > 1) {
        if (chute < numeroSecreto) {
            feedbackElement.textContent = 'O número secreto é **maior** que o seu palpite.';
        } else {
            feedbackElement.textContent = 'O número secreto é **menor** que o seu palpite.';
        }

        tentativasRestantes--;
        tentativasRestantesElement.textContent = `Tentativas restantes: ${tentativasRestantes}`;
    } else {
        feedbackElement.textContent = 'Você não conseguiu adivinhar o número. O número secreto era ' + numeroSecreto + '.';
        tentativasRestantesElement.textContent = '';
        form.disabled = true;
    }
});