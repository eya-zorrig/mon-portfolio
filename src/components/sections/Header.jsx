function Header () {
    return (
    <header style ={{
        display :'flex ' ,
        justifyContent : ' space - between ' ,
        padding : '20 px '
        }}>
        <h1 > Votre Nom </ h1 >
        <nav >
            <a href ="# about " > A propos </a >
            <a href ="# projects "> Projets </a >
            <a href ="# contact " > Contact </ a >
        </ nav >
    </ header >
    ) ;
}
export default Header ;