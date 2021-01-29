import React from "react";
import { Typography, Link, withStyles, Theme } from "@material-ui/core";

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
      Hi, I am Nidhal. I love building all kinds of software, from simple
      mobile applications, to the most complex backends.
      I am currently an apprentice at&nbsp;
              <Link className={classes.linkSpan} href="https://bnpparibas.com">BNP Paribas</Link>.
            </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      Please feel free to read more <Link className={classes.linkSpan} href="/about">about me</Link>, or you can check out <Link className={classes.linkSpan} href="/resume">my resume</Link>, <Link className={classes.linkSpan} href="https://gitlab.ndogga.com/me">projects</Link>, my <Link className={classes.linkSpan} href="https://blog.ndogga.com">personal blog</Link>, or <Link className={classes.linkSpan} href="/contact">contact me</Link>.
            </Typography>
    <br />
    <Typography variant="subtitle2" className={classes.content}>
      You can also find the&nbsp;
      <Link target="_blank" rel="noopener" className={classes.linkSpan} href="https://gitlab.ndogga.com/me/personal-website">source code</Link> for this website, written in React and Typescript ❤️
    </Typography>
  </div>
};


export default withStyles(styles)(Paragraph);