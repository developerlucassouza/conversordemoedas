$(document).ready(function() {
    $('#converter').click(function() {
        let valor = $('#valor').val();
        let m1 = $('#moeda').val();
        let m2 = $('#para').val();

        let resultado;

        // Verificar se tem coisa digitada no numero
        if (valor <= 0) {
            alert('Digite um valor válido');
        } else {

            // Converter
            switch (m1) {

                // R$ REAL
                case 'BRL':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (1);
                            break;

                        case 'USD':
                            resultado = valor * (0.20);
                            break;

                        case 'CAD':
                            resultado = valor * (0.28);
                            break;

                        case 'AUD':
                            resultado = valor * (0.31);
                            break;

                        case 'EUR':
                            resultado = valor * (0.19);
                            break;

                        case 'GBP':
                            resultado = valor * (0.19);
                            break;

                        case 'JPY':
                            resultado = valor * (30.07);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // US$ Dólar Americano
                case 'USD':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (4.89);
                            break;

                        case 'USD':
                            resultado = valor * (1);
                            break;

                        case 'CAD':
                            resultado = valor * (1.36);
                            break;

                        case 'AUD':
                            resultado = valor * (1.51);
                            break;

                        case 'EUR':
                            resultado = valor * (0.91);
                            break;

                        case 'GBP':
                            resultado = valor * (0.79);
                            break;

                        case 'JPY':
                            resultado = valor * (147.20);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // C$ Dólar Canadense
                case 'CAD':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (3.60);
                            break;

                        case 'USD':
                            resultado = valor * (0.74);
                            break;

                        case 'CAD':
                            resultado = valor * (1);
                            break;

                        case 'AUD':
                            resultado = valor * (1.11);
                            break;

                        case 'EUR':
                            resultado = valor * (0.67);
                            break;

                        case 'GBP':
                            resultado = valor * (0.58);
                            break;

                        case 'JPY':
                            resultado = valor * (108.40);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // A$ Dólar Australiano
                case 'AUD':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (3.24);
                            break;

                        case 'USD':
                            resultado = valor * (0.66);
                            break;

                        case 'CAD':
                            resultado = valor * (0.90);
                            break;

                        case 'AUD':
                            resultado = valor * (1);
                            break;

                        case 'EUR':
                            resultado = valor * (0.60);
                            break;

                        case 'GBP':
                            resultado = valor * (0.52);
                            break;

                        case 'JPY':
                            resultado = valor * (97.55);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // € Euro
                case 'EUR':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (5.37);
                            break;

                        case 'USD':
                            resultado = valor * (1.10);
                            break;

                        case 'CAD':
                            resultado = valor * (1.49);
                            break;

                        case 'AUD':
                            resultado = valor * (1.66);
                            break;

                        case 'EUR':
                            resultado = valor * (1);
                            break;

                        case 'GBP':
                            resultado = valor * (0.86);
                            break;

                        case 'JPY':
                            resultado = valor * (161.74);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // £ Libra Esterlina
                case 'GBP':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (6.21);
                            break;

                        case 'USD':
                            resultado = valor * (1.27);
                            break;

                        case 'CAD':
                            resultado = valor * (1.73);
                            break;

                        case 'AUD':
                            resultado = valor * (1.92);
                            break;

                        case 'EUR':
                            resultado = valor * (1.16);
                            break;

                        case 'GBP':
                            resultado = valor * (1);
                            break;

                        case 'JPY':
                            resultado = valor * (187.18);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;





                // ¥ Iene
                case 'JPY':
                    switch (m2) {
                        case 'BRL':
                            resultado = valor * (0.033);
                            break;

                        case 'USD':
                            resultado = valor * (0.0068);
                            break;

                        case 'CAD':
                            resultado = valor * (0.0092);
                            break;

                        case 'AUD':
                            resultado = valor * (0.010);
                            break;

                        case 'EUR':
                            resultado = valor * (0.0062);
                            break;

                        case 'GBP':
                            resultado = valor * (0.0053);
                            break;

                        case 'JPY':
                            resultado = valor * (1);
                            break;

                        default:
                            alert('MOEDA INVÁLIDA');
                    }
                    break;
                    

                default:
                    alert('MOEDA INVÁLIDA');

            }
            
            resultado = resultado.toFixed(2);

            // Avaliar sinal do dinheiro
            switch (m2) {
                case 'BRL':
                    sinal = 'R$';
                    break;

                case 'USD':
                    sinal = 'US$';
                    break;

                case 'CAD':
                    sinal = 'C$';
                    break;

                case 'AUD':
                    sinal = 'A$';
                    break;

                case 'EUR':
                    sinal = '€';
                    break;

                case 'GBP':
                    sinal = '£';
                    break;

                case 'JPY':
                    sinal = '¥';
                    break;

                default:
                    alert('MOEDA INVÁLIDA');
                    break;
            }
            //let sinal = m2;

            $('#visor').html(`${sinal} ${resultado}`);
            
        }
        

        
    });
});