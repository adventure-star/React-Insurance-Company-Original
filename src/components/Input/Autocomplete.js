import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  option: {
    padding: "3px 5px 3px 5px"
  }
}));

const Input = Styled.input`
width: 100%;
font-size: 13px;
padding: 9px 0px 9px 3px;
border: 0px;
border-bottom: 1px solid rgba(0, 0, 0, 0.16);
background: transparent;
`

export default function CustomInputAutocomplete(props) {
  const classes = useStyles();
  return (
    <Autocomplete
      id="custom-input-demo"
      noOptionsText="Sin opciones"
      style={{width:"100%"}}
      options={props.options}
      classes={classes}
      getOptionLabel={(option) => option.toString()}
      onChange={(e, newValue) => { props.onChange(newValue)}}
      value={ props.default }
      renderInput={(params) => (
        <div style={{width:"100%"}}>
          <label className="form-label">
            {props.label}
          </label>
          <div ref={params.InputProps.ref}>
            {!props.defaultValue && (!!props.loading || props.options.length==0) ? (<Input disabled {...params.inputProps} placeholder="Cargando..."/>)
            : (<Input {...params.inputProps} placeholder="Elegí una opción" />)}
        
          </div>
        </div>
      )}
    />
  );
}