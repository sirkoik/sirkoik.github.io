import { ClientOnly } from 'vite-react-ssg/single-page';
import './App.css'
// import CactusScene from './components/CactusScene';
import PageLegacy from './components/PageLegacy';
import { lazy, Suspense } from 'react';

const CactusScene = lazy(() => import('./components/CactusScene'));

function App() {

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
          <PageLegacy />
        </div>
      </div>
    </>
  );
}

export default App;