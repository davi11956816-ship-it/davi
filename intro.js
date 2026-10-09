// ==========================================
// INTRO CRIMINAL — DOSSIÊ JURÍDICO
// ==========================================

const intro = document.getElementById("intro-criminal");
const skip = document.getElementById("pular-intro");
const percent = document.getElementById("intro-percent");
const status = document.getElementById("intro-status");

if (intro && skip && percent && status) {
    let finalizado = false;
    const duracao = 5600;
    const inicio = Date.now();

    const mensagens = [
        [0, "INICIALIZANDO SISTEMA FORENSE..."],
        [20, "CARREGANDO ARQUIVOS DO CASO..."],
        [45, "ANALISANDO EVIDÊNCIAS..."],
        [70, "VERIFICANDO IDENTIFICAÇÃO..."],
        [90, "DOSSIÊ PRONTO PARA ACESSO..."]
    ];

    function fecharIntro() {
        if (finalizado) return;

        finalizado = true;
        intro.classList.add("saindo");
        document.body.classList.remove("intro-ativa");

        setTimeout(() => {
            intro.remove();
        }, 1300);
    }

    skip.addEventListener("click", fecharIntro);

    const temporizador = setInterval(() => {
        if (finalizado) {
            clearInterval(temporizador);
            return;
        }

        const progresso = Math.min(
            100,
            Math.floor(((Date.now() - inicio) / duracao) * 100)
        );

        percent.textContent =
            String(progresso).padStart(2, "0") + "%";

        for (const [limite, mensagem] of mensagens) {
            if (progresso >= limite) {
                status.textContent = mensagem;
            }
        }

        if (progresso >= 100) {
            clearInterval(temporizador);
            setTimeout(fecharIntro, 350);
        }
    }, 50);
}