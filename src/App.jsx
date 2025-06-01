
import { Container } from "@mui/material"
import { NoticeProvider } from "./context/NoticeProvider"
import Header from "./components/Header/Header"


function App() {
  return (
    <NoticeProvider>
      <Container>
        <Header />

      </Container>
    </NoticeProvider>
  )
}

export default App
