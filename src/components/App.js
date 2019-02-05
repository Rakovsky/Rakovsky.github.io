import React from 'react'
import Header from './Header'
import NamePage from './NamePage'
import Content from './Content'

class App extends React.Component {
    render() {
        return(
            <section className='container'>
                <NamePage />
                <Header />
                <Content />
            </section>
        )
    }
}

export default App