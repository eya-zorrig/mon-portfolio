function Badge ({ children , color = '#1a3969 ' }) {
    return (
        < span style ={{
            background : color ,
            color : ' white ',
            padding : '4 px 14 px ' ,
            borderRadius : ' 50 px ' ,
            fontSize : '0.8 rem ',
            fontWeight : ' bold ' ,
            display : ' inline - block ' ,
            margin : '4 px '
            }} >
            { children }
        </ span >
    ) ;
 }
export default Badge ;