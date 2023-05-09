// => EX 1:
// import logo from './logo.svg';
// import './App.css';
// function App() {
//     const olaMundo = () => {
//         alert('Olá, Mundo!');
//     };
//     const nome = 'Amanda';
//     return (
//         <div>
//             <button onClick={olaMundo} className="meu-nome">
//                 Clica em mim, {nome}
//             </button>
//         </div>
//     );
// }
// export default App;

// FIXAÇÃO:
import './App.css';
import logo from './img/logo.png';

const onClickBotao = () => {
    alert('Botão foi clicado!');
};
function App() {
    return (
        <div class="container">
            <h1>Aprenda React na Labenu!</h1>
            <div>
                <div>
                    <img className="Logo" src={logo} alt="logo" />
                </div>
                <div>
                    <a href="https://labenu.com.br">Site da Labenu</a>
                </div>
                <div>
                    <button onClick={onClickBotao}> Clique aqui! </button>
                </div>
            </div>
        </div>
    );
}
export default App;
