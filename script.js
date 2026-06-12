document.addEventListener('DOMContentLoaded', () => {
    
    const btnCalcular = document.getElementById('btn-calcular');
    const inputHectares = document.getElementById('hectares');
    const divResultado = document.getElementById('resultado');
    const txtLitrosPoupados = document.getElementById('litros-poupados');

    btnCalcular.addEventListener('click', () => {
        const hectares = parseFloat(inputHectares.value);

        // Validação simples se o número digitado é válido
        if (isNaN(hectares) || hectares <= 0) {
            alert('Por favor, insira um número válido de hectares.');
            return;
        }

        // Regra de negócio fictícia: Cada hectare com irrigação inteligente economiza 15.000 litros de água por safra
        const litrosEconomizadosPorHectare = 15000;
        const totalEconomizado = hectares * litrosEconomizadosPorHectare;

        // Formata o número para o padrão brasileiro (Ex: 150.000)
        const totalFormatado = totalEconomizado.toLocaleString('pt-BR');

        // Atualiza a interface e exibe o resultado
        txtLitrosPoupados.textContent = `${totalFormatado} Litros`;
        divResultado.classList.remove('hidden');
    });
});
