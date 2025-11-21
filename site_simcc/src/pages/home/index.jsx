import './style.css'

function Home() {

  return (

    <>

    <div className='esquerda'>
      <h1>e pra ter algo Aqui</h1>
    </div>

    <div className='Centro'>
      <h1 className='titulo'>Vitrine SIMCC</h1>
    </div>

    <p className='introducao'>Bem-vindo à Vitrine Tecnológica da UFRB! Aqui, o conhecimento transcende as fronteiras teóricas e se materializa em soluções tecnológicas de impacto,
        alinhadas aos princípios da inovação para transformação social. Nossa vitrine reúne invenções de ponta, desenvolvidas por uma comunidade acadêmica vibrante
        — composta por professores-pesquisadores e estudantes da Universidade Federal do Recôncavo da Bahia (UFRB) — que atua como protagonista na vanguarda do desenvolvimento tecnológico nacional.
        Cada projeto reflete um compromisso com a excelência científica e a aplicação prática, direcionando esforços para desafios do território e globais.
        Conecte-se com o ecossistema de inovação da UFRB: inspire-se com nossas iniciativas,
        descubra oportunidades de negócios com base em produtos inovadores passíveis de transferência tecnológica .
        Vamos juntos moldar um futuro tecnológico mais inclusivo, sustentável e resiliente.</p>

    <div className='botoes'>
        <button className='imagem' type='button'>Patentes</button>
        <button className='imagem' type='button'>Marcas</button>
        <button className='imagem' type='button'>Desenhos industriais</button>
        <button className='imagem' type='button'>Softwares</button>
        <button className='imagem' type='button'>Topografia de Circuitos</button>
        <button className='imagem' type='button'>Indicações Geográficas</button>
    </div>

    </>
  )
}

export default Home
