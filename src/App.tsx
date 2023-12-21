import { Messages } from "./components/messages/container/Messages"
import { Form } from "./components/form/Form"


import "./App.css"
import { Header } from "./components/header/Header"
import { Flags } from "./components/flags/Flags"


function App() {

  return (
   <main>
      <Header />
      <section className="messagesBox">
          <Messages />
          <Form />
          <Flags />
      </section>
   </main>
  )
}

export default App
