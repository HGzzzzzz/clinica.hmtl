document.getElementById('btnWhatsApp').addEventListener('click', function() {
        // Coletar dados
        const nome = document.getElementById('nome').value.trim();
        let telefone = document.getElementById('telefone').value.trim();
        const mensagem = document.getElementById('mensagem').value.trim();

        // Validações básicas
        if (!nome || !telefone || !mensagem) {
            alert('Por favor, preencha todos os campos obrigatórios!');
            return;
        }

        // Formatar telefone
        telefone = telefone.replace(/\D/g, '');
        telefone = telefone.replace(/^0+/, '').replace(/^55/, '');

        if (telefone.length < 10 || telefone.length > 11) {
            alert('Número inválido! Digite DDD + número (ex: 11987654321)');
            return;
        }

        // Criar mensagem
        const texto = `*Mensagem de ${nome}:*\n${mensagem}\n\n*Contato:* ${telefone}`;
        
        // Codificar para URL
        const textoCodificado = encodeURIComponent(texto);
        
        // Gerar link (COM NÚMERO DA CLÍNICA - substitua 11999999999 pelo número real)
        const link = `https://wa.me/5511993687771?text=${textoCodificado}`;
        
        // Abrir
        window.open(link, '_blank');
    });
