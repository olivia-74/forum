import React from 'react';

const SplitScreen = () => {
  const splitScreenStyle = {
    display: 'flex',
    height: '100vh', // Altura da tela inteira
    paddingTop: '50px', // Distância do header
    paddingBottom: '50px', // Distância do footer
    gap: '30px', // Espaçamento horizontal entre os painéis
  };

  const panelStyle = {
    flex: '1', // Ocupa metade da tela (50%)
    width: '10%', // Largura de cada painel será 50%
    backgroundColor: 'white', // Cor de fundo cinza
    display: 'flex',
    justifyContent: 'center', // Centraliza o conteúdo horizontalmente
    alignItems: 'center', // Centraliza o conteúdo verticalmente
    flexDirection: 'column', // Organiza os elementos em coluna
    padding: '50px', // Espaçamento interno reduzido para dar um espaçamento menor ao conteúdo
    borderRadius: '48px', // Bordas arredondadas
  };

  const entrarStyle = {
    fontSize: '45px', // Tamanho da fonte maior
    fontFamily: 'Arial, sans-serif', // Fonte para "Entrar"
    fontWeight: 'bold', // Negrito
    marginBottom: '10px', // Espaçamento inferior
    color: '#182779'
  };

  const emailStyle = {
    fontSize: '18px', // Tamanho da fonte menor
    fontFamily: 'Verdana, sans-serif', // Fonte para "E-mail ou Usuário"
    marginBottom: '20px', // Espaçamento inferior reduzido
    borderRadius: '3px', // Bordas arredondadas
  };

  const entrarDebaixo = {
    fontSize: '18px', // Tamanho da fonte menor
    fontFamily: 'Verdana, sans-serif', // Fonte para "E-mail ou Usuário"
    marginBottom: '20px', // Espaçamento inferior reduzido
    backgroundColor: '#0B66C2',
    borderRadius: '3px', // Bordas arredondadas
    color: 'white',
    padding: '5px', // Espaçamento interno para o texto
    width: '50%', // Largura preenchendo todo o espaço
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const rectangleStyle = {
    width: '150px', // Largura maior para a barra "ex. daniel"
    height: '40px',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };


  const textInsideRectangleStyle = {
    fontSize: '14px',
    fontFamily: 'Helvetica, sans-serif', // Fonte para o texto dentro do retângulo
    border: '2px solid grey', // Borda azul
    borderRadius: '5px', // Bordas arredondadas
    padding: '5px', // Espaçamento interno para o texto
    width: '100%', // Largura preenchendo todo   o espaço
    
  };

  // Criando o rightPanelStyle, utilizando o mesmo estilo do panelStyle
  const rightPanelStyle = { ...panelStyle };

  return (
    <div style={splitScreenStyle}>
      {/* Painel ESQUERDO */}
      <div style={panelStyle}>
        <div style={entrarStyle}>Entrar</div>
        <div style={emailStyle}>E-mail ou Usuário</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={rectangleStyle}>
            <div style={textInsideRectangleStyle}>Ex.: Daniel</div>
          </div>
          <div style={rectangleStyle}>
            <div style={textInsideRectangleStyle}>*******</div>
          </div>
        </div>
        <div style={entrarDebaixo}>Entrar</div>
      </div>

      {/* Painel DIREITO */}
      <div style={rightPanelStyle}>
        <div style={entrarStyle}>Criar nova conta</div>
        <div style={emailStyle}>Nome de Usuário</div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={rectangleStyle}>
            <div style={textInsideRectangleStyle}>Nome de Usuário</div>
          </div>
          <div style={rectangleStyle}>
            <div style={textInsideRectangleStyle}>E-mail</div>
          </div>
          <div style={rectangleStyle}>
            <div style={textInsideRectangleStyle}>Senha</div>
          </div>
        </div>
        <div style={entrarDebaixo}>Entrar</div>
      </div>
    </div>
  );
};

export default SplitScreen;
