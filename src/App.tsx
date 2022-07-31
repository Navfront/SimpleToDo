import { StyledContainer } from './components/layers/container/styled'
import Main from './components/pages/main/main'

function App () {
  const isLogined = false
  return (
    <>
      <header>
        <StyledContainer>
        <nav>
          <a>Logo</a>

        </nav>
        <section >
          {isLogined
            ? <h2>Hello UserName!</h2>
            : <div>
              <button type="button">Register</button>

              <button type="button">Login</button>
            </div>
          }
          </section>
          </StyledContainer>
      </header>
<Main/>
    </>
  )
}

export default App
