import './App.css';

function App() {
return (
<div className="App">
<header className='cabecalho'>
<nav className='container navbar navbar-expand'>
<div className='logo'>
<span className='navbar-brand'>ViverBem+</span>
</div>
<ul className='navbar-nav ms-auto'>
<li className='nav-item'><a className='nav-link rosa' href="">Home</a></li>
<li className='nav-item'><a className='nav-link rosa' href="">Sobre nós</a></li>
<li className='nav-item'><a className='nav-link rosa' href="">Contato</a></li>
</ul>
</nav>
</header>
<main className='conteudo pt-5'>
<div className='container'>
<div className='row'>
<div className='col-10 artigos p-4'>
<h1>Artigos</h1>
<div className='produtos container'>
<div className='produto pb-3'>
<h4>Body Splash</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio quod mollitia officia laboriosam aut fugiat molestiae alias perspiciatis ipsum repellat, expedita recusandae, in, dignissimos reiciendis animi ullam. Quos, in.</p>
<button className='btn btn-warning me-2'>Favoritar</button>
<button className='btn btn-success'>Comprar</button>
</div>
<div className='produto pb-3'>
<h4>Desodorante</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odio quod mollitia officia laboriosam aut fugiat molestiae alias perspiciatis ipsum repellat, expedita recusandae, in, dignissimos reiciendis animi ullam. Quos, in.</p>
<button className='btn btn-warning me-2'>Favoritar</button>
<button className='btn btn-success'>Comprar</button>
</div>
</div>
</div>
<div className='col-2 perfurmaria'>
<h3>Perfurmaria</h3>
</div>
</div>
</div>
</main>
</div>
);
}

export default App;