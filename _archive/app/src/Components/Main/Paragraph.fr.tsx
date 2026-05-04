import React from "react";
import { Typography, Link, Theme, withStyles } from "@material-ui/core";

const styles = (theme: Theme) => {
  return {
    content: {
      fontSize: 16,
      color: theme.palette.grey[600]
    },
    linkSpan: {
      fontWeight: 500,
      textDecoration: 'none',
      '&:focus, &:hover, &:visited, &:link, &:active': {
        textDecoration: 'none'
      }
    }
  }
};


const Paragraph: React.SFC<any> = ({ classes }) => {
  return <div>
    <Typography variant="subtitle2" className={classes.content}>
      Bonjour, je m'appelle Nidhal. j'adore créer tout types de logiciel, de la plus simple des applications mobiles, jusqu'au plus complexe des backends. Je suis actuellement apprentis chez&nbsp;
              <Link className={classes.linkSpan} href="https://bnpparibas.com">BNP Paribas</Link>.
            </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      N'hésitez pas jeter un coup d'œuil sur <Link className={classes.linkSpan} href="/resume">mon CV</Link>, <Link className={classes.linkSpan} href="/about">à propos de moi</Link>, vous pouvez aussi voir <Link className={classes.linkSpan} href="https://gitlab.ndogga.com/me">mes projets</Link>, mon <Link className={classes.linkSpan} href="https://blog.ndogga.com">blog personnel</Link>,ou <Link className={classes.linkSpan} href="/contact">contactez moi</Link>.
    </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      Vous pouvez aussi trouver&nbsp;
      <Link target="_blank" rel="noopener" className={classes.linkSpan} href="https://gitlab.ndogga.com/me/personal-website">le code source</Link> de ce site, écrit en React et Typescript ❤️
    </Typography>
  </div>
};


export default withStyles(styles)(Paragraph);