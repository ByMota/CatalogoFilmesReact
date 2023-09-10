import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
    <nav className='mt-0 w-full p-4 flex items-center justify-around bg-header-bg'>
      <h1><NavLink className="text-4xl hover:text-hover" to='/'>Movies</NavLink></h1>
      <ul className='flex gap-6'>
        <li><NavLink className="hover:text-hover" to='/'>Home</NavLink></li>
        <li><NavLink className="hover:text-hover" to='/movie/1'>Filmes</NavLink></li>
      </ul>
      <form action="">
        <input className='bg-header-bg text-white p-2 rounded-xl border border-[#F9ED33]' type="text" placeholder='Digite o filme...'/>
        <button type="submit">pesquisar</button>
      </form>
    </nav>
    </>
    );
}

export default Header;