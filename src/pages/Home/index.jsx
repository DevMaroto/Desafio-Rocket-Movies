import { FiPlus } from 'react-icons/fi'
import { Container, Content, NewMovie} from './styles';
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header';
import { Mymovies } from '../../components/Mymovies';

export function Home(){
  return(
    <Container>
      <Header />
      <header>
        <h1>Meus Filmes</h1>
        <NewMovie to="/new">
          <FiPlus/>Adicionar Filme
        </NewMovie>
      </header>
      <main>
        <Content>
          <Link to="/review/1">
          <Mymovies data={{
            title: 'Spider-Man: Into the Spider-Verse',
            grade: '5',
            description: `Miles Morales está de volta para o próximo capítulo da saga vencedora do Oscar®. Depois de se reunir com Gwen Stacy, o amigão da vizinhança e protetor em tempo integral do Brooklyn é catapultado através do Multiverso, onde ele encontra um time de Pessoas-Aranha que precisam proteger a própria existência. Quando os heróis não conseguem se unir para lidar com uma nova ameaça, Miles se vê dividido e precisa redefinir o que significa ser um herói para que ele consiga salvar as pessoas que mais ama.`,
            tags: [
              {id: '1', name:'Animação'},
              {id: '2', name:'Ação'},
              {id: '3', name:'Aventura'},
              {id: '4', name:'Teen'},

          ]
          }}
          /></Link>
          <Mymovies data={{
            title: 'Dragon Ball Super: Broly',
            grade: '5',
            description: `Essa é a história de um novo Saiyajin. A Terra está em paz após o Torneio do Poder. Percebendo que o universo ainda tem muitas pessoas poderosas, Goku passa todos os seus dias treinando para atingir níveis ainda mais altos. Então um dia, Goku e Vegeta são confrontados por um Saiyajin chamado Broly, que eles nunca viram antes. Os Saiyajins deveriam ter sido praticamente extintos com a destruição do planeta Vegeta, então o que esse está fazendo na Terra? O encontro entre esses três Saiyajins, que seguiram caminhos completamente diferentes, termina em uma batalha estupenda, com até o Freeza (de volta do Inferno) entrando na história”`,
            tags: [
              {id: '1', name:'Anime'},
              {id: '2', name:'Artes Marciais'},
              {id: '3', name:'Fantasia'},
              {id: '4', name:'Ação'},
              {id: '5', name:'Aventura'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Aquaman',
            grade: '3',
            description: `Atlanna (Nicole Kidman), princesa da lendária Atlântida, foi salva por um faroleiro. Do romance entre eles nasceu uma criança com poderes especiais. Meio homem e meio atlante Arthur Curry (Jason Momoa) não liga para suas origens e prefere viver entre os mortais. Só que seu meio irmão atlante Orm (Patrick Wilson) deseja reinar absoluto e com um propósito maléfico para a humanidade. Agora, Arthur precisa se convencer de sua importância como legítimo herdeiro do reino submarino e de sua capacidade de encontrar e dominar um poderoso tridente. Chegou a hora de Aquaman assumir seus super poderes para os dois mundos e enfrentar seus inimigos.`,
            tags: [
              {id: '1', name:'Aventura'},
              {id: '2', name:'Ação'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'John Wick: Baba Yaga',
            grade: '5',
            description: `O assassino profissional retorna às telas para John Wick 4: Baba Yaga. O assassino profissional John Wick (Keanu Reeves) agora virou metade do submundo contra ele com sua vingança, que agora está entrando em sua quarta rodada em Nova York, Berlim, Paris e Osaka. Sua equipe, composta por Bowery King (Laurence Fishburne), o gerente do hotel Winston (Ian McShane) e o concierge Charon (Lance Reddick) do lendário hotel assassino Continental, novamente fazem parte da festa. No entanto, as chances de escapar desta vez parecem quase impossíveis, pois o maior inimigo está surgindo. O implacável chefe do submundo Marquis de Gramont (Bill Skarsgård), que tem alianças inteiras atrás dele, representa a maior e sanguinária ameaça até hoje. Mas seus capangas também são durões, incluindo Shimazu (Hiroyuki Sanada) e Killa (Scott Adkins) localizados. Felizmente, existem velhos aliados como Caine (Donnie Yen) que correm para ajudar Wick. Não há caminho de volta, só um sobrevive.`,
            tags: [
              {id: '1', name:'Aventura'},
              {id: '2', name:'Drama'},
              {id: '3', name:'Ação'},
              {id: '4', name:'Suspense'},
              {id: '5', name:'Misterio'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Super Mario Bros. O Filme',
            grade: '3',
            description: `Mario é um filme baseado na série de video games, Super Mario Bros, da Nintendo. Em Super Mario Bros. - O Filme, Mario (Chris Pratt) é um encanador qualquer no bairro de Brooklyn junto com seu irmão Luigi (Charlie Day). Um dia, Mario e Luigi vão para no reino dos cogumelos, governado pela Princesa Peach (Anya Taylor-Joy), mas ameaçado pelo rei dos Koopas, Bowser (Jack Black), que vai fazer de tudo para conseguir reinar todos os lugares. É então quando Luigi é raptado por Bowser e o usa para procurar Mario, o único capaz de deter o Koopa e reestabelecer a paz. Mario terá que aprender como viver nesse novo reino perigoso, passando por vários biomas, aprender a dirigir carros, utilizar itens que o fazem soltar bolas de fogo das mãos, virar um animal e andar em plataformas nada confiáveis. Também estará acompanhados de amigos, como Toad (Keegan-Michael Key) e Donkey Kong (Seth Rogan).`,
            tags: [
              {id: '1', name:'Ação'},
              {id: '2', name:'Animação'},
              {id: '3', name:'Comedia'},
              {id: '4', name:'Fantasia'},
              {id: '5', name:'Drama'},
              {id: '5', name:'Aventura'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Bird Box',
            grade: '3',
            description: `Em Bird Box, Malorie (Sandra Bullock) e seus filhos estão em um mundo pós-apocalíptico e precisam chegar em um refúgio para escapar do Problema, criaturas que ao serem vistas fazem pessoas se tornarem extremamente violentas. De olhos vendados para não serem afetados, a família segue o curso de um rio para chegar à segurança.`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Drama'},
              {id: '3', name:'Suspense'},
              {id: '4', name:'Misterio'},
              {id: '5', name:'Aventura'},
              {id: '6', name:'Thriller'},
          ]
          }}
          />
          <Mymovies data={{
            title: 'Maze Runner - Run or Die',
            grade: '2',
            description: `Em um mundo pós-apocalíptico, o jovem Thomas (Dylan O'Brien) é abandonado em uma comunidade isolada formada por garotos após toda sua memória ter sido apagada. Logo ele se vê preso em um labirinto, onde será preciso unir forças com outros jovens para que consiga escapar.`,
            tags: [
              {id: '1', name:'Ficção Científica'},
              {id: '2', name:'Thriller'},
              {id: '3', name:'Aventura'},
              {id: '4', name:'Ação'},
              {id: '5', name:'Suspense'},
              {id: '6', name:'Teen'},
              {id: '7', name:'Misterio'},
          ]
          }}
          />
        </Content>
      </main>
    </Container>
  )
}