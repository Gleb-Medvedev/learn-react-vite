import { DifferencesSection } from "./assets/components/DifferensesSection/DifferensesSection"
import { Header } from "./assets/components/Header/Header"
import { ListSection } from "./assets/components/ListSection/ListSection"

export default function App() {
  return (
    <div>
      <Header />
      <main>
        <ListSection/>

        <DifferencesSection></DifferencesSection>
      </main>
    </div>
  )
}