import './styles/global.css';
import './styles/theme.css';

import { Container } from './components/Container';
import { Logo } from './components/Logo';
import {Menu} from './components/Menu';
import { CountDown } from './components/CountDown';
import { DefaultInput } from './components/DefaultInput';

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
                Ciclos
              </div>
              <div className='formRow'>
                 0 0 0 0 0 0 
              </div>
              <div className='formRow'>
                <button type="submit">Create</button>
              </div>
          </form>
      </Container>

    </>
  )
}

export default App
