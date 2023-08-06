import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#182779', // Cor azul
    color: 'white', // Texto em branco para melhor legibilidade
    padding: '20px', // Espaçamento interno para dar um espaçamento ao conteúdo
    textAlign: 'center', // Centralizar o conteúdo
    position: 'fixed', // Para manter o footer fixado na parte inferior da página
    left: 0,
    bottom: 0,
    width: '100%', // Ocupar a largura total da página
  };

  return (
    <footer style={footerStyle}>
      desgraça
    </footer>
  );
};

export default Footer;
