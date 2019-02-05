import React from 'react'
import Me from '../images/me.jpeg'

console.log(Me)

function Content() {
    return (
        <div className='content'>
            *<div className='imageBox' /*style={{ width: 50, height: 50 }}*/>
                {/*<img src={Me} alt={'me'} style={{ width: 1000, height: 250 }}/>*/}
            </div>
            <div className='textBox'>
                <h3> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sagittis feugiat facilisis. Donec tristique dignissim finibus. Nulla venenatis lacus ligula, a facilisis nunc porta eu. Aliquam quis mollis urna. Maecenas faucibus urna in eros facilisis, quis dignissim augue aliquam. Vivamus et justo bibendum, vulputate odio rutrum, tempor mi. In laoreet commodo porttitor. Nulla vulputate, mauris et interdum imperdiet, magna mi pharetra odio, at ullamcorper purus risus nec ex. Sed gravida ultricies laoreet. Phasellus vel nisi metus. Vestibulum felis nunc, convallis vel vehicula eget, dapibus nec nisl. Nulla blandit felis leo, tempor dignissim massa tristique viverra. Sed molestie neque quis auctor pharetra. Aliquam tortor eros, sodales ac nibh eget, facilisis pulvinar erat. In non pulvinar dolor. </h3>
            </div>
        </div>
    )
}

export default Content