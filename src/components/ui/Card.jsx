function Card ({ title , description , image , children }) {
    return (
        < div style ={{
            background : ' white ' ,
            borderRadius : '12 px ',
            padding : '20 px ' ,
            boxShadow : '0 4 px 12 px rgba (0 ,0 ,0 ,0.08) ',
            border : '1 px solid #e5e7eb ' ,
            maxWidth : '300 px '
            }} >
            { image && < img src ={ image } alt ={ title } / >}
            <h3 >{ title } </ h3 >
            <p >{ description } </p >
            { children }
        </ div >
    ) ; 
    }

export default Card ;  