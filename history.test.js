const saveText = require('./history');
const historyShow = require('./history');

describe('Testa a funcionalidade de history, e suas funções internas', () => {

  it('Verifica se saveText é uma função', () => {
    expect(typeof saveText).toBe('function');
  });

  it('Verifica se ao chamar a função saveText, o localStorage é chamado com a função setItem', () => {
    const result = saveText();
    expect(localStorage.setItem).toBeCalled();
  });

  it('Verifica se historyShow é uma função', () => {
    expect(typeof historyShow).toBe('function');
  });



});