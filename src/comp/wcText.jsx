import "../css/wcText.css"





export default function WcText(){
    return(<>
    <div className="wcParent">
       <p className="wcTxt"><span style={{fontFamily:"fantasy",color:"palegoldenrod"}}>WE GIVE YOU</span>
        <br/>
        <span className="wcTxtSpanSecure"><span className="wcTxtSpan">S</span>ECURE </span> 
        <br/>
        <span className="wcTxtSpanTrading"><span className="wcTxtSpan">T</span>RADING</span>
        <br/>
        <span className="wcTxtSpanSolutions"><span className="wcTxtSpan">S</span>OLUTIONS</span>
        </p>
    </div>
    </>)
}