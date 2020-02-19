import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import CapstoneInfo from "../components/CapstoneInfo";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  ex: {
    height: "850px",
    width: "400px",
    border: "3px solid ##333",
    backgroundColor: "#eee",
    margin: "20px"
  },
  hero: {
    height: "80vh",
    backgroundImage: `url(
      "https://i.imgur.com/lrCyV4b.jpg"
    )`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "white"
  },
  heroTitle: {
    textTransform: "uppercase",
    fontSize: "72px",
    margin: "0px"
  },
  heroText: {
    fontSize: "32px",
    margin: "0px",
    marginBottom: "16px"
  },
  signUpButton: {
    height: "64px",
    width: "160px",
    fontSize: "24px",
    marginTop: "32px"
  },
  row: {
    marginBottom: "40px"
  },
  textBox: {
    width: "400px",
    marginRight: "20px",
    marginLeft: "20px"
  },
  demImg: {
    height: "300px",
    width: "300px",
    marginRight: "20px",
    marginLeft: "20px"
  },
  heading: {
    margin: "0px",
    marginTop: "20px"
  }
}));

export default function Landing() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        className={classes.hero}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <h1 className={classes.heroTitle}>Vacay for Democracy</h1>
        <p className={classes.heroText}>
          Work hard, play hard for the future of our country
        </p>
        <Button
          variant="contained"
          color="primary"
          className={classes.signUpButton}
        >
          Sign Up
        </Button>
      </Box>
      <Box
        className={classes.root}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <Box
          className={classes.heading}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>What do we do?</h1>
        </Box>
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div className={classes.textBox}>
            <p>
              In 2016, 131.7 million out of 213 million eligible voters in the
              United States cast a ballot in the presidential election; a
              turnout rate of 57%, with even lower rates in swing states.
              Studies show disinterest and apathy played a large role in why
              eligible Americans chose to forfeit their vote. Experts believe
              that some Americans are politically disengaged due to lack of
              education about the importance of democracy and candidates running
              for election.
            </p>
          </div>
          <img
            className={classes.demImg}
            src="https://sloanreview.mit.edu/wp-content/uploads/2019/08/GEN-Freeman-Aug-2400.jpg"
            alt="democracy"
          />
        </Box>
        <Box
          className={classes.row}
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap-reverse",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <img
            className={classes.demImg}
            src="https://sloanreview.mit.edu/wp-content/uploads/2019/08/GEN-Freeman-Aug-2400.jpg"
            alt="democracy"
          />
          <div className={classes.textBox}>
            <p>
              Democracy is based on the principle of “people’s sovereignty”, in
              other words, citizens in America can form and diffuse authority of
              their government through their elected representatives. Democracy
              allows citizens to have a voice in decision-making and guarantees
              enhanced livelihoods for it’s people. The only way to achieve
              democracy is for all citizens to participate in their elections
              and make informed decisions that impact their lives and our
              communities.
            </p>
            <p>
              Vacay for Democracy sends canvassers to swing states, working to
              equip voters with the tools and information they need to vote with
              confidence in the 2020 election.
            </p>
          </div>
        </Box>
        <Box className={classes.row}>
          <Button variant="contained" color="primary" size="large">
            Sign Up
          </Button>
        </Box>
        <Box className={classes.row}>
          <CapstoneInfo />
        </Box>
      </Box>
    </div>
  );
}