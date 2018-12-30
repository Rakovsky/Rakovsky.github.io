import React from 'react'
import Header from './Header'
import NamePage from './NamePage'
import TimelinePage from './TimelinePage'

class App extends React.Component {
    render() {
        return(
            <section class='container'>
                <NamePage />
                <Header />
                <TimelinePage />
            </section>
        )
    }
}

export default App