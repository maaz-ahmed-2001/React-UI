import {useSelector} from "react-redux"

function ServicesContent() {
    const {heading , content} = useSelector((state)=> state.app)
    return (
        <div className='content'>
            <h4>{heading}</h4>
            <p>{content}</p>
        </div>
    )
}

export default ServicesContent