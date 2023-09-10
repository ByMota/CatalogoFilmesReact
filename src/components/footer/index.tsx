import tmdbLogo from '../../assets/tmdb_logo.svg'

function Footer(){
  return(
    <footer className="fixed bottom-0  w-full p-4 bg-footer-bg flex justify-evenly ">
      <section className="">
        <h3 className="text-white">Contato:</h3>
        <ul>
          <li><a className="" href="https://github.com/ByMota">GitHub</a></li>
          <li><a className="" href="https://www.linkedin.com/in/vinicius-c-97b1981b0/">Linkedin</a></li>
          <li><a className="" href="https://bymota.github.io/DevLinks/">DevLink</a></li>
        </ul>
      </section>
      <section className="text-white">
        <h3>Agradecimento:</h3>
        <a href="https://www.themoviedb.org/"><img className="w-20" src={tmdbLogo} alt="Logo TMDB" /></a>
        
      </section>
    </footer>
  )
}

export default Footer;