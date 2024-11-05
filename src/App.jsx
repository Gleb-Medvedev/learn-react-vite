import { DifferencesSection } from "./assets/components/DifferensesSection/DifferensesSection"
import { FeedbackSection } from "./assets/components/FeedbackSection/FeedbackSection"
import { Header } from "./assets/components/Header/Header"
import { ListSection } from "./assets/components/ListSection/ListSection"
import { useState } from 'react';
import { TabsSection } from "./assets/components/TabsSection/TabsSection";

export default function App() {

  const [tab, setTab] = useState('feedback')
  
  return (
    <>
      <Header/>
      <main>
          <TabsSection current={tab} transferProp={(text) => setTab(text)}/>
         {
          tab === 'main' &&
          <>
            <ListSection />
            <DifferencesSection />
          </>
        }
        {
          tab === 'feedback' && <FeedbackSection />
        }
        {/* <ListSection />
        <DifferencesSection />
        <FeedbackSection /> */}
      </main>
      </>
  )
}