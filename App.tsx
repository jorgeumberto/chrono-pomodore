import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import {Menu} from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';
import { Cycles } from './components/Cycles';
import { DefaultButton } from './components/DefaultButton';
import { PlayCircleIcon, StopCircleIcon } from 'lucide-react';
import { Footer } from './components/Footer';

function App() {

  return (
    <>

      <Container>
          <Logo/>
      </Container>

      <Container>
          <Menu/>
      </Container>

        <Container>
          <CountDown/>
      </Container>

      <Container>
          <form className='form'>
              <div className='formRow'>
                <DefaultInput 
                  id="meuInput" 
                  type="text" 
                  labelText="Task Name"  
                  placeholder="Enter task name"                
                  />
              </div>
              <div className='formRow'>
                Lorem ipsum dolor sit amet.
              </div>
              <div className='formRow'>
                <Cycles/>
              </div>
              <div className='formRow'>
                <DefaultButton 
                  icon={<PlayCircleIcon />}
                  color='green'
                />
                <DefaultButton 
                  icon={<StopCircleIcon />}
                  color='red'
                />
              </div>
          </form>
      </Container>

      <Container>
          <Footer/>
      </Container>

    </>
  )
}

export default App
