import React from "react";
import App from "./App";
import { connect } from "react-redux/es/exports";


const ContainerApp = ({error}) => {
    return(
        <App error={error} />
    );
};

const mapStateToProps = state => ({error: state.error});

export default connect(mapStateToProps, null)(ContainerApp) ;