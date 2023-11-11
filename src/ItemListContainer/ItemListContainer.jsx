// eslint-disable-next-line react/prop-types
const ItemListContainer = ( {greeting} ) => {
    // eslint-disable-next-line no-unused-vars
    const greetingStyles = {
        fontSize:'3rem',
        fontWeigth:'700',
        textAlign: 'center',
        color:'#f4f4f4'
    }
    return(
        <div>
            {greeting}
        </div>
    )

}


export default ItemListContainer;