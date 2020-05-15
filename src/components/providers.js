import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProvidersAction from '../redux/actions/provider';
import {getProvidersError, getProviders, getProvidersPending, getSearchText} from '../redux/reducers/provider';

const useStyles = ((theme) => ({
    root: {
      width: '100%',      
      backgroundColor: theme.palette.background.paper,
    },
    inline: {
      display: 'inline',
    },
}));
  
class ProvidersView extends Component {
    
    constructor(props) {
      super(props);

      this.state = {         
      }            
    }
    
    componentWillMount() {
      const {fetchProviders} = this.props;
      fetchProviders();
    }
    render() {
      const { classes } = this.props;
      let {providers,searchText} = this.props;
      if(searchText && searchText.length>0){
        providers = providers.filter((item) => item.attributes.subspecialties.indexOf(searchText)>-1)
      }
      console.log(this.props);
      return (
        <List className={classes.root}>
        {/* {console.log("providers",providers)} */}
         {providers && providers.map((provider,index) => (
          <span  key={index}>
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt={provider.attributes.name} src={provider.attributes["profile-image"]} />
            </ListItemAvatar>
            <ListItemText
              primary={provider.attributes.name}
              secondary={
                <React.Fragment>                 
                  {provider.attributes.subspecialties.join(', ')}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          </span>
        ))}
        </List>
      )
    }
  }
  

  
const mapStateToProps = state => ({
  perror: getProvidersError(state),
  providers: getProviders(state),
  searchText: getSearchText(state),
  ppending: getProvidersPending(state)  
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProviders: fetchProvidersAction
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ProvidersView));

