import BasicTransition from './components/BasicTransition'
import StylesTransition from './components/StylesTransition'
import SwitchTransitions from './components/SwitchTransition'
import TransitionGroups from './components/TransitionGroups'
import './main.css'

function App() {
  return (
    <div className="App">
      <BasicTransition />
      <StylesTransition />
      <SwitchTransitions />
      <TransitionGroups />
    </div>
  )
}

export default App
