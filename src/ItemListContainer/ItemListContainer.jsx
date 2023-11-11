// eslint-disable-next-line react/prop-types
const ItemListContainer = ( {greeting} ) => {
    const greetingStyles = {
        fontSize:'3rem',
        fontWeigth:'700',
        textAlign: 'center',
        color:'#283747'
    }
    return(
        <div style={greetingStyles}>
            {greeting}
        </div>
    )

}


export default ItemListContainer;