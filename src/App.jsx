import { DifferencesSection } from "./assets/components/DifferensesSection/DifferensesSection"
import { FeedbackSection } from "./assets/components/FeedbackSection/FeedbackSection"
import { Header } from "./assets/components/Header/Header"
import { ListSection } from "./assets/components/ListSection/ListSection"
import { useState } from 'react';
import { TabsSection } from "./assets/components/TabsSection/TabsSection";
import { EffectsSection } from "./assets/components/EffectsSection/EffectsSection";

export default function App() {

  const [tab, setTab] = useState('effect')
  
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
        {
          tab === 'effect' && <EffectsSection />
        }
      </main>
      </>
  )
}