import { Container, Menu, MonthNote, Content, MonthRegister } from './styles';
import { Header } from '../../components/Header';
import { PiPencilLineDuotone } from 'react-icons/pi';
import { FaFilter } from 'react-icons/fa';
import { BiSearch } from 'react-icons/bi';
import { CreateText, Filter, Search } from './styles';
import { VeryHappy } from '../../components/Mood/styles';
import { FaRegFaceLaugh } from 'react-icons/fa6';
import { Note } from '../../components/Note';
import { useEffect, useState } from 'react';
import { Input } from '../../components/Input';
import { BiMessageSquareX } from 'react-icons/bi'
import { useLocation } from 'react-router-dom';
import { MessageSuccess } from '../../components/MessageSuccess/MessageSuccess';
import { FaRegFaceSadCry } from 'react-icons/fa6';
import { FaRegFaceSadTear } from 'react-icons/fa6';
import { FaRegFaceMeh } from 'react-icons/fa6';
import { FaRegFaceSmile } from 'react-icons/fa6';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function Home() {
  const location = useLocation();
  const mensagemTela = location.state && location.state.message;

  const MensagemLogin = localStorage.getItem('MensagemLogin');
  const NomeUsuario = localStorage.getItem('NomeUsuario');
  const token = localStorage.getItem('token');
  const [searchClick, setSearchClick] = useState(false)
  const [searchMes, setSearchMes] = useState(false)
  const [msgLogin, setMsgLogin] = useState('');
  const [registros, setRegistros] = useState([]);
  const [humor, setHumor] = useState([]);
  const [mediaHumor, setMediaHumor] = useState(0);
  const [notaDia, setNotaDia] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [numberMes, setNumberMes] = useState('');
  const [pesquisa, setPesquisa] = useState(false);

  const monthMap = {
    1: 'JAN',
    2: 'FEV',
    3: 'MAR',
    4: 'ABR',
    5: 'MAI',
    6: 'JUN',
    7: 'JUL',
    8: 'AGO',
    9: 'SET',
    10: 'OUT',
    11: 'NOV',
    12: 'DEZ',
  };

  function searchMesFiltro() {
    setSearchMes(!searchMes)
  };


  useEffect(() => {
    const soma = humor.reduce((acumulador, numero) => acumulador + numero, 0);
    const mediaCalculada = Math.round(soma / humor.length);

    setMediaHumor(mediaCalculada);

  }, [humor])

  useEffect(() => {
    if (!!mensagemTela) {
      toast.success(mensagemTela);
    }
  }, [mensagemTela]);

  function searchInput() {
    setSearchClick(true)
  }

  function search() {
    setPesquisa(true);
  }

  function closeInput() {
    setSearchClick(false);
    setPesquisa(false);
  }

  function handleMonthClick(mes) {
    setPesquisa(true);
    setNumberMes(mes);
  }

  useEffect(() => {
    getRegistros();
    getNotas();
    getUserInfo();
  }, [])

  function getUserInfo() {

    axios.get(`https://localhost:7250/api/Usuarios/${NomeUsuario}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {

        localStorage.setItem('NomeCompleto', response.data.nome);

      })
      .catch(error => {
        console.error('Houve um erro durante a solicitação:', error);
      });
  }

  function getNotas() {

    axios.get(`https://localhost:7250/api/NotaMensal`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const dataAtual = new Date();  //data de hj
        const notas = response.data;

        for (const nota of notas) {
          const dataNota = new Date(nota.data); // pega a nota e converte

          if (dataNota.toDateString() === dataAtual.toDateString()) {
            setNotaDia(nota.nota);
            break; // Se encontrar a nota do dia, encerra o loop.
          }
        }
      })
      .catch(error => {
        console.error('Houve um erro durante a solicitação:', error);
      });
  }

  function getRegistros() {

    axios.get(`https://localhost:7250/api/Registros/Username/${NomeUsuario}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then(response => {
        const registrosOrdenados = response.data.sort((a, b) => new Date(b.data) - new Date(a.data));

        // Defina os registros ordenados no estado ou variável que você está usando
        setRegistros(registrosOrdenados);

        const numerosHumor = registrosOrdenados.map(registro => registro.humor);

        setHumor(numerosHumor);


      })
      .catch(error => {
        console.error('Houve um erro durante a solicitação:', error);
      });
  }

  function enumHumor(numberHumor) {
    if (numberHumor == 0) {
      return "Seu humor: "
    }

    if (numberHumor == 5) {
      return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <h3>"Muito Triste"</h3>
        <FaRegFaceSadCry style={{ fontSize: '2em' }} />
      </div>
    }

    if (numberHumor == 4) {
      return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <h3>"Triste"</h3>
        <FaRegFaceSadTear style={{ fontSize: '2em' }} />
      </div>
    }

    if (numberHumor == 3) {
      return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <h3>"Nêutro"</h3>
        <FaRegFaceMeh style={{ fontSize: '2em' }} />
      </div>
    }

    if (numberHumor == 2) {
      return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <h3>"Feliz!"</h3>
        <FaRegFaceSmile style={{ fontSize: '2em' }} />
      </div>

    }

    if (numberHumor == 1) {
      return <div style={{ display: 'flex', width: '100%', justifyContent: 'center', flexDirection: 'column', alignItems: 'center', gap: 10 }}>
        <h3>"Muito Feliz!"</h3>
        <FaRegFaceLaugh style={{ fontSize: '2em' }} />
      </div>

    }


  };

  function handlePesquisa(e) {
    setSearchTerm(e.target.value)
  }




  return (

    <Container>
      <Header />

      <Menu>
        <CreateText to="/CreateNote">
          <PiPencilLineDuotone />
          <span>CRIAR TEXTO</span>
        </CreateText>

        <Filter>
          <FaFilter onClick={searchMesFiltro} />
          <span>FILTRAR</span>
        </Filter>

        <Search>
          <BiSearch onClick={searchInput} />
          <span>BUSCAR</span>
        </Search>

        <MonthRegister>
          <span>Humor do mês:</span>
          {enumHumor(mediaHumor)}

          <div style={{ display: 'flex', flexDirection: 'column', paddingTop: 50, paddingInline: 10 }}>
            <span>Registros realizados no mês:</span>
            <h1>{registros.length}</h1>
          </div>
        </MonthRegister>

      </Menu>

      <MonthNote>
        <div style={{ width: '20%' }}>
          <MessageSuccess key={msgLogin} msg={msgLogin} />
        </div>

        <strong> Nota do dia: </strong>
        <span>" {notaDia} "</span>
      </MonthNote>

      <Content>
        {searchMes && (
          <section >
            <div style={{ display: "flex", width: '100%', flexDirection: "row", alignItems:'center', justifyContent: 'space-evenly'}}>
              {Object.values(monthMap).map((month, index) => (
                <button
                  key={index}
                  style={{ color: 'black', borderRadius: 10, border: 0 }}
                  onClick={() => handleMonthClick(index+1)} // manda pra função o numero do mes
                >
                  {month}
                </button>
              ))}
            </div>
            <span>
              < BiMessageSquareX onClick={() => {setSearchMes(!searchMes)}}/>
            </span>
          </section>
        )}

        {searchClick && (
          <section>
            <Input
              placeholder="Faça sua pesquisa"
              type="text"
              icon={BiSearch}
              handleOnChange={handlePesquisa}
            />

            <div>
              <span><BiSearch onClick={search} /></span>
            </div>
            <span>
              < BiMessageSquareX onClick={closeInput} />
            </span>
          </section>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', overflowY: 'scroll' }}>
          {!!pesquisa ?
            registros
              .filter(registro => registro.texto.includes(searchTerm))
              .filter(registro => new Date(registro.data).getMonth() + 1 === numberMes)
              .map((registro, index) => (
                <Note
                  key={index}
                  day={registro.data.substring(8, 10)}
                  mes={monthMap[new Date(registro.data).getMonth() + 1]}
                  texto={registro.texto}
                  titulo={registro.titulo}
                  id={registro.id}
                />
              ))
            :
            registros.map((registro, index) => (
              <Note
                key={index}
                day={registro.data.substring(8, 10)}
                mes={monthMap[new Date(registro.data).getMonth() + 1]}
                texto={registro.texto}
                titulo={registro.titulo}
                id={registro.id}
              />
            ))}
        </div>

      </Content>

    </Container >
  )

}