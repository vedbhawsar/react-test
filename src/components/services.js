import React, { Component } from 'react';
import {withStyles , makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import fetchServicesAction  from '../redux/actions/service';
//import {fetchProvidersSearch} from '../redux/actions/provider';
import {getServicesError, getServices, getServicesPending} from '../redux/reducers/service';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const useStyles = ((theme) => ({
  root: {
    width: '100%',    
    backgroundColor: theme.palette.background.paper,
  },
}));

class ServicesView extends Component {
 
    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: -1,
            selectedValue:""
        }        
    }

    componentWillMount() {
        const {fetchServices} = this.props;
        fetchServices();
    }


    render() {
        const { classes,fetchServices,services,serror, spending } = this.props;
        //console.log(this.props);
        const handleListItemClick = (event, service, index) => {
            this.setState({selectedIndex:index,selectedValue:service})
            fetchServices(service);
        };
        return (
        <div className={classes.root}>
            <List component="nav" aria-label="services list" >
                <ListItem
                    button
                    key="-1"
                    selected={this.state.selectedIndex === -1}
                    onClick={(event) => handleListItemClick(event, "", -1)}
                    >
                    <ListItemText primary="All" />
                    </ListItem>  
                {services && services.map((service,index) => (
                    <ListItem
                    button
                    key={index}
                    selected={this.state.selectedIndex === index}
                    onClick={(event) => handleListItemClick(event, service.attributes.name, index)}
                    >
                    <ListItemText primary={service.attributes.name} />
                    </ListItem>                
                ))}
            </List>            
        </div>
        )
    }
}

const mapStateToProps = state => ({
    serror: getServicesError(state),
    services: getServices(state),
    spending: getServicesPending(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchServices: fetchServicesAction
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(useStyles)(ServicesView));