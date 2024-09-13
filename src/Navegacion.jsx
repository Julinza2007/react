function Navegacion() {
const links = [
    {url: 'https://julinza2007.github.io/biograf-a/', text: 'Mi biografía'}, 
    {url: 'https://julinza2007.github.io/SAO/', text: 'Página SAO'}, 
    {url: 'https://julinza2007.github.io/julinza/', text:'Pagina PESSI'}
];

const link = links.map(l => (
   <li>
   <a href= {l.url}>{l.text}</a>
   </li>
   ));

return(

<nav className="nav">
    <ul className="ul">
        {link}
    </ul>
</nav>

)
}

export default Navegacion

