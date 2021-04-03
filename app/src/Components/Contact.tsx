import React, {useState, useCallback, useEffect} from "react";
import {Card, makeStyles, Typography, Divider, TextField, Button, Snackbar} from '@material-ui/core';
import MuiAlert from "@material-ui/lab/Alert";
import useLocalization from "../Hooks/UseLocalization";
import useAxios from "axios-hooks";

const useStyles = makeStyles(theme => {
  return {
    card: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
      backgroundColor: theme.palette.background.default,
      [theme.breakpoints.up('md')]: {
        margin: theme.spacing(4),
        padding: theme.spacing(4),
      }
    },
    title: {
      fontSize: 24,
      padding: 16
    },
    captionContainer: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    content: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    formContainer: {
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(2),
      width: '100%',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      flexDirection: 'column',
      justifyItems: 'center',
      [theme.breakpoints.up('sm')]: {
        width: '75%',
      }
    },
    formField: {
      marginTop: theme.spacing(2)
    },
    submitButton: {
      marginTop: theme.spacing(2),
      height: '3rem',
      fontWeight: 600
    }
  };
});

const Contact: React.FC = () => {
  const classes = useStyles();
  const [localize] = useLocalization('contact');
  const [{loading, data, error}, sendContactForm] = useAxios({
    url: '/api/contact',
    method: 'POST'
  }, {
    manual: true
  });

  const [successSnackbarOpen, setSuccessSnackbarOpen] = useState(false);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    setSuccessSnackbarOpen(data !== undefined && !error);
  }, [data, error, successSnackbarOpen]);

  const submitContactForm = useCallback(() => sendContactForm({
    data: { name, email, message }
  }), [name, email, message]);

  const closeSuccessSnackbar = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccessSnackbarOpen(false);
  };

  return <Card variant="outlined" className={classes.card}>
    <Snackbar open={successSnackbarOpen} autoHideDuration={6000} onClose={closeSuccessSnackbar}>
      <MuiAlert onClose={closeSuccessSnackbar} severity="success">
        {localize`submitSuccessText`}
      </MuiAlert>
    </Snackbar>
    <Typography variant="subtitle2" className={classes.title}>
      {localize`title`}
    </Typography>
    <Divider />
    <div className={classes.captionContainer}>
      <pre>
        <Typography variant="subtitle2" className={classes.content}>
          {localize`caption`}
        </Typography>
      </pre>
    </div>
    <div className={classes.formContainer}>
      <TextField
        fullWidth
        className={classes.formField}
        label={localize`nameFieldLabel`}
        variant="filled"
        helperText={localize`nameFieldHelper`}
        onChange={e => setName(e.target.value)}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={localize`emailFieldLabel`}
        variant="filled"
        helperText={localize`emailFieldHelper`}
        onChange={e => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        className={classes.formField}
        label={localize`contentFieldLabel`}
        multiline
        variant="filled"
        onChange={e => setMessage(e.target.value)}
      />
      <Button
        disabled={loading}
        className={classes.submitButton}
        color="primary"
        size="large"
        variant="text"
        onClick={submitContactForm}>
        {localize`submitButtonTitle`}
      </Button>
    </div>
  </Card>;
}


export default Contact;
