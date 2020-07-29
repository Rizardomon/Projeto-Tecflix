import React, {useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState(['Teste']);
  const [nomeDaCategoria, setNomeDaCategoria] = useState('Insira a Categoria');

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

        <form onSubmit={ (e) => {
          e.preventDefault();
          setCategorias([
            ...categorias,
            nomeDaCategoria
          ])
          } }>

          <label>
            Nome da Categoria:
            <input
              type="text"
              placeholder={nomeDaCategoria}
              onChange={ (e) => {
              setNomeDaCategoria(e.target.value);
              } }
            />
          </label>

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={categoria}>
                {categoria}
              </li>
            );
          })}
        </ul>

        <Link to='/'>
          Ir para home
        </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;