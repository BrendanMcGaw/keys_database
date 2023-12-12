import { Container } from "@mui/material";
import "./App.css";
// import Grid from "@mui/material/Grid"; // Grid version 1
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import HeaderImage from "./Assets/placeholder-banner.jpg";
import Menu from "@mui/joy/Menu";
import MenuButton from "@mui/joy/MenuButton";
import MenuItem from "@mui/joy/MenuItem";
import Dropdown from "@mui/joy/Dropdown";

// Start seperating components once they're working.
// Start getting into the habit of creating style components for the css.
function App() {
  return (
    <Container maxWidth="false" disableGutters>
      <Grid container rowSpacing={0} backgroundColor="#131417">
        <Grid
          xl={1}
          textAlign={"center"}
          backgroundColor={"#131417"}
          direction={"row"}
        >
          <Dropdown>
            <MenuButton variant="soft" size="lg" color="primary">
              My Account
            </MenuButton>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton variant="soft" size="lg" color="primary" Format>
              My Account
            </MenuButton>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton variant="soft" size="lg" color="primary" Format>
              My Account
            </MenuButton>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Dropdown>
          <Dropdown>
            <MenuButton variant="soft" size="lg" color="primary" Format>
              My Account
            </MenuButton>
            <Menu>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Logout</MenuItem>
            </Menu>
          </Dropdown>
        </Grid>
        <Grid
          xl={12}
          style={{
            // Make the background black to cover the edges, image too small.
            backgroundColor: "black",
            textAlign: "center",
          }}
        >
          <img src={HeaderImage} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
