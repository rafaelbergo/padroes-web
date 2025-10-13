document.addEventListener("DOMContentLoaded", function () {
    const formulario = document.getElementById("formulario-musical");
    
    formulario.addEventListener("submit", function(event) {
        event.preventDefault();
        if (validarFormulario()) {
            alert("Formulário enviado com sucesso!");
        }
    });

    function validarFormulario() {
        let valido = true;
        const nome = document.getElementById("nome");
        const email = document.getElementById("email");
        const telefone = document.getElementById("telefone");
        const artistas = document.getElementById("artistas");
        const albuns = document.querySelectorAll("input[name='albuns']:checked");
        const estilos = document.querySelectorAll("input[name='estilos']:checked");

        // Validação do nome
        if (nome.value.trim() === "") {
            alert("O campo Nome é obrigatório.");
            valido = false;
        }

        // Validação do e-mail
        if (!email.value.includes('@')) {
            alert("Por favor, insira um e-mail válido.");
            valido = false;
        }

        // Validação do telefone
        const telefoneRegex = /\([0-9]{2}\) [0-9]{4}-[0-9]{4}/;
        if (!telefoneRegex.test(telefone.value)) {
            alert("O telefone deve seguir o formato (XX) XXXX-XXXX.");
            valido = false;
        }

        // Validação dos artistas
        if (artistas.value.trim() === "") {
            alert("Por favor, insira ao menos um artista.");
            valido = false;
        }

        // Validação dos estilos musicais
        if (estilos.length === 0) {
            alert("Por favor, selecione ao menos um estilo musical.");
            valido = false;
        }

        return valido;
    }

    // Limita a seleção de álbuns a no máximo 3 itens
    const albumCheckboxes = document.querySelectorAll('input[name="albuns"]');
    albumCheckboxes.forEach(function(checkbox) {
        checkbox.addEventListener('change', function() {
            const checked = Array.from(albumCheckboxes).filter(cb => cb.checked);
            if (checked.length > 3) {
                this.checked = false;
                alert('Selecione no máximo 3 álbuns preferidos.');
            }
        });
    });
});
