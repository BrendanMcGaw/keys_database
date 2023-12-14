import { Grid } from '@mui/material'
import Dropdown from '@mui/joy/Dropdown'
import MenuButton from '@mui/joy/MenuButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from '@emotion/styled'

// TODO: Should my styled components be in their own component?
// installed vscode styled components extension for css syntax and suggestions.
const StyledMenuButton = styled(MenuButton)`
    border-radius: 0;
    color: white;
    :hover {
        background-color: orange;
    }
`

export const TopMenu = () => {
    return (
        <Grid
            MenuItem
            className="headerMenu"
            md={12}
            textAlign={'center'}
            backgroundColor={'#131417'}
            display={'flex'}
            justifyContent={'space-around'}
            gap={2}
        >
            <Grid item>
                <Dropdown>
                    <StyledMenuButton variant="plain" size="lg" color="primary">
                        Keys
                    </StyledMenuButton>
                    <Menu>
                        <MenuItem>Programmable</MenuItem>
                        <MenuItem>Shaped</MenuItem>
                    </Menu>
                </Dropdown>
            </Grid>
            <Grid item>
                <Dropdown>
                    <StyledMenuButton
                        variant="plain"
                        size="lg"
                        color="primary"
                        Format
                    >
                        Hardware
                    </StyledMenuButton>
                    <Menu>
                        <MenuItem>Keys</MenuItem>
                        <MenuItem>Other Things</MenuItem>
                    </Menu>
                </Dropdown>
            </Grid>
            <Grid item>
                <Dropdown>
                    <StyledMenuButton
                        variant="plain"
                        size="lg"
                        color="primary"
                        Format
                    >
                        Devices
                    </StyledMenuButton>
                    <Menu>
                        <MenuItem>Cars</MenuItem>
                        <MenuItem>Machinary</MenuItem>
                    </Menu>
                </Dropdown>
            </Grid>
            <Grid item>
                <Dropdown>
                    <StyledMenuButton
                        variant="plain"
                        size="lg"
                        color="primary"
                        Format
                    >
                        My Account
                    </StyledMenuButton>
                    <Menu>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Logout</MenuItem>
                    </Menu>
                </Dropdown>
            </Grid>
        </Grid>
    )
}
