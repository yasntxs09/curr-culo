import fotoPerfil from './fotodePerfil.jpg'
import './App.css'
function App() {
  return (
    <div>
     <header>
    <h1> Olá seja bem-vindo ao meu Curriculo Virtual</h1>
    <img src={fotoPerfil}></img>
    <h2>Yasmim Santana</h2>
      </header>

      <main>
        <section>
          <h2>Objetivo: Quero Adquerir  conhecimentos em Medicina Veterinária</h2>
        </section>
         <section>
         <h1> Dados para contato</h1>
         <h2>Yasmim Santana</h2>
         <p>44 99747-1893</p>
         <p>E-mail: yasmim.ana.araujo@escola.pr.gov.br</p>
         <p>Linkdin: xxxxxx</p>
         <p>GitHub: xxxxxx</p>
         </section>
       
       <section>
          <h1>Formação</h1>
          <div>
            <article>
              <h2>Ensino médio Profissionalizante em Desenvolvimentode Sistemas</h2>
              <p>Instituição: Colégio Santa Maria Goretti</p>
              <p>Ano de Conclusão: 2027</p>
            </article>
          </div>
       </section>
       <section>
        <h1>Experiencia Profissional</h1>
        <div>
          <article>
            <h2>empresa: </h2>
            <p>Função/cargo: </p>
            <p>Periodo: </p>
          </article>
        </div>
       </section>
       


      </main>

      <footer>
        <div>Desenvolvido por Yasmim Santana</div>
      </footer>
    </div>
  );
}

export default App;