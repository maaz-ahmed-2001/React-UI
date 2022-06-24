function InlineForm({placeholder,btn,textDark}) {
    return (
        <div className="inlineForm">
            <input type="tel"  onChange={() => { }} placeholder={placeholder} style={textDark?{border:'1px solid #E8E8E8'}:null}/>
            <button style={textDark ? {color:'#000'}:{color:'fff'}}>{btn}</button>
        </div>
    )
}

export default InlineForm