import React from "react";
import Button from "../elements/Button";
import Grid from "../elements/Grid";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();

  return (
    <>
      <Grid is_flex width="880px" margin="50px auto">
        <div>🌍</div>
        <Grid is_flex>
          <Button width="100px" margin="0 0 0 10px">
            SignUp
          </Button>
          <Button
            width="100px"
            margin="0 0 0 10px"
            onClick={() => {
              history.push("/login");
            }}
          >
            Login
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
