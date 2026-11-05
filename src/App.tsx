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
      <button onClick={onSetForeground} style={{position:'absolute', zIndex: '10'}}>Set</button>
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
      {showForeground &&
        <div className="flexContainer">
          <div className="pageContents">
            <PageLegacy />
          </div>
        </div>
      }
    </>
  );
}

export default App;