import { ClientOnly } from 'vite-react-ssg/single-page';
import './App.css'
// import CactusScene from './components/CactusScene';
import PageLegacy from './components/PageLegacy';
import { lazy, Suspense, useState } from 'react';

const CactusScene = lazy(() => import('./components/CactusScene'));

function App() {
  const [showForeground, setShowForeground] = useState(true);

  const onSetForeground = () => {
    setShowForeground(prev => !prev);
  }

  return (
    <>
      <div className="cactusBackground">
        <ClientOnly>
          {
            () => {
              return (
                <Suspense fallback={null}>
                  <CactusScene />
                </Suspense>
              )
            }
          }
        </ClientOnly>
      </div>
      
      <div className="flexContainer">
        <div className="pageContents">
          <PageLegacy foregroundToggleFunction={onSetForeground} foregroundIsRendered={showForeground} />
        </div>
      </div>
    </>
  );
}

export default App;