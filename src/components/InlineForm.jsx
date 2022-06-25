function InlineForm({placeholder,btn,type}) {
    return (
        <div className="inlineForm">
            <input type={type} onChange={(e) => { }} placeholder={placeholder}/>
            <button>{btn}</button>
        </div>
    )
}

export default InlineForm