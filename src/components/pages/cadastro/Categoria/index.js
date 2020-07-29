import React, {useState} from 'react';
import PageDefault from '../../../PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../FormField';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [valores, setValores] = useState(valoresIniciais);


  function setValor (chave, valor) {
    setValores({
      ...valores,
      [chave]: valor
    })
  }

  function handleChange(event) {
    const { getAttribute, value } = event.target;
    setValor(
      getAttribute('name'),
      value
    );
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {valores.nome}</h1>

        <form onSubmit={ (e) => {
          e.preventDefault();
          setCategorias([
            ...categorias,
            valores
          ]);

          setValores(valoresIniciais);

          }}>

          <FormField
            label='Nome da Categoria: '
            type={'text'}
            value={valores.nome}
            name={'nome'}
            onChange={handleChange}
          />

          <div>
            <label>
              Descrição: 
              <textarea
                type="text"
                value={valores.descricao}
                name='descricao'
                onChange={ handleChange }
              />
            </label>
          </div>

          <FormField
            label='Cor: '
            type={'color'}
            value={valores.cor}
            name={'descricao'}
            onChange={handleChange}
          />

          <button>
            Cadastrar
          </button>

        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return (
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
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