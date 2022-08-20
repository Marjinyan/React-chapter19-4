import React, {Suspense} from 'react'
const People = React.lazy(() => import('./components/People'))

function App() {
  return <Suspense fallback={<h1>Loading data... please wait</h1>}>
    <People/>
  </Suspense>
}
export default App;
