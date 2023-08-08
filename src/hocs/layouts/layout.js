import { connect } from "react-redux"; //Basicamente con connect se realiza la conexion con el store de redux y brnda la funciionalidad para el intercambio de estados

function Layout({ children }) {
  return <div>{children}</div>;
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Layout);

/*El mapStateToProps y mapDispatchToPropsse ocupa de su 
tienda Redux statey dispatch, respectivamente. statey 
dispatchse proporcionará a sus funciones mapStateToPropso 
mapDispatchToPropscomo el primer argumento.*/
