//Exemplo TypeScript
//Esse programa simula, usando o Observer, um sistema de notificações do clima. 
// Dados climáticos
type DadosClimaticos = {
  temperatura: number;
  condicao: string;
};

// Interface do Observador
interface Observador {
  atualizar(dados: DadosClimaticos): void;
}

// Classe Sujeito
class EstacaoMeteorologica {
  private observadores: Observador[] = [];

  adicionarObservador(observador: Observador): void {
    this.observadores.push(observador);
  }

  notificarObservadores(dados: DadosClimaticos): void {
    this.observadores.forEach((observador) => observador.atualizar(dados));
  }
}

// Observadores concretos
class AplicativoMovel implements Observador {
  atualizar(dados: DadosClimaticos): void {
    console.log(`[AplicativoMovel] Clima: ${dados.condicao}, ${dados.temperatura}°C`);
  }
}

class DisplayRua implements Observador {
  atualizar(dados: DadosClimaticos): void {
    console.log(`[DisplayRua] Clima Atual: ${dados.condicao}, ${dados.temperatura}°C`);
  }
}

// Demonstração
const estacao = new EstacaoMeteorologica();
const app = new AplicativoMovel();
const display = new DisplayRua();

estacao.adicionarObservador(app);
estacao.adicionarObservador(display);

// Simulando atualização climática
estacao.notificarObservadores({ temperatura: 30, condicao: 'Ensolarado' });
estacao.notificarObservadores({ temperatura: 20, condicao: 'Chuvoso' });


//Saída do código esperada: 
// [AplicativoMovel] Clima: Ensolarado, 30°C [DisplayRua] Clima Atual: Ensolarado, 30°C [AplicativoMovel] Clima: Chuvoso, 20°C [DisplayRua] Clima Atual: Chuvoso, 20°C
