document.addEventListener('DOMContentLoaded', function() {
    // Garante que apenas uma checkbox seja selecionada
    const checkboxes = document.querySelectorAll('input[name="operador"]');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                checkboxes.forEach(cb => {
                    if (cb !== this) cb.checked = false;
                });
            }
        });
    });

    // Função para calcular
    window.calcular = function() {
        // Prevenir o comportamento padrão do formulário
        event.preventDefault();
        
        // Obter os valores dos inputs
        const val1 = parseFloat(document.getElementById('val1').value);
        const val2 = parseFloat(document.getElementById('val2').value);
        const resultadoInput = document.getElementById('resultado');
        
        // Verificar se os valores são números válidos
        if (isNaN(val1) || isNaN(val2)) {
            resultadoInput.value = "Insira valores válidos";
            return;
        }
        
        // Obter a operação selecionada
        const operadorSelecionado = document.querySelector('input[name="operador"]:checked');
        
        if (!operadorSelecionado) {
            resultadoInput.value = "Selecione uma operação";
            return;
        }
        
        const operador = operadorSelecionado.value;
        let resultado;
        
        // Realizar o cálculo com base no operador
        switch (operador) {
            case '+':
                resultado = val1 + val2;
                break;
            case '-':
                resultado = val1 - val2;
                break;
            case '*':
                resultado = val1 * val2;
                break;
            case '/':
                if (val2 === 0) {
                    resultadoInput.value = "Divisão por zero!";
                    return;
                }
                resultado = val1 / val2;
                break;
            default:
                resultado = "Operação inválida";
        }
        
        // Exibir o resultado
        resultadoInput.value = resultado;
    };
});
