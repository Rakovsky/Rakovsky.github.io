import React from 'react'
import { debounce } from 'debounce'

class Header extends React.Component {

    state = {
        isSticky: ''
    }

    debouncedScroll = debounce(() => this.onScroll(), 500)

    componentDidMount() {
        window.addEventListener('scroll', this.debouncedScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.debouncedScroll)
    }

    onScroll = () => {
        const { pageYOffset } = window;
        const isSticky = pageYOffset >= 500;

        this.setState({
        isSticky,
        });
    }

    render() {
        return(
            <div class='headerContainer'>
                <p class='headerItem'> Test </p>
                <p class='headerItem'> Test </p>
                <p class='headerItem'> Test </p>
            </div>
        )
    }
}

export default Header