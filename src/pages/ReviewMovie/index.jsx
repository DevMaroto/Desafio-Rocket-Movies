import { AiOutlineArrowLeft } from 'react-icons/ai'
import { BiTimer } from 'react-icons/bi'
import { Container, Content } from './styles'
import { Link } from 'react-router-dom'

import { Header } from '../../components/Header'
import { ButtonText } from '../../components/ButtonText'
import { Rating } from '../../components/Rating'
import { Tag } from '../../components/Tag'

export function ReviewMovie(){
  return(
    <Container>
      <Header />
      <main>
        <Content>
          <Link to="/"><ButtonText icon={AiOutlineArrowLeft} title="Voltar" /></Link>
          <div className='movies'>
            <h1>Spider-Man: Into the Spider-Verse</h1>
            <Rating grade="5" isBigSize />
          </div>
          <div className='perfil'>
            <img src="https://github.com/DevMaroto.png" alt="Foto do usuário" />
            <span>Por DevMaroto</span>
            <BiTimer />
            <span>03/03/24 às 18:38</span>
          </div>
          <div className='tags'>
            <Tag title="Animação" />
            <Tag title="Ação" />
            <Tag title="Aventura" />
            <Tag title="Teen" />
          </div>
          <div className='description'>
            <p>
              Miles Morales está de volta para o próximo capítulo da saga vencedora do Oscar®. Depois de se reunir com Gwen Stacy, o amigão da vizinhança e protetor em tempo integral do Brooklyn é catapultado através do Multiverso, onde ele encontra um time de Pessoas-Aranha que precisam proteger a própria existência. Quando os heróis não conseguem se unir para lidar com uma nova ameaça, Miles se vê dividido e precisa redefinir o que significa ser um herói para que ele consiga salvar as pessoas que mais ama.
            </p>
          </div>
        </Content>
      </main>
    </Container>
  )
}