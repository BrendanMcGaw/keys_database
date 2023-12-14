import { Grid } from '@mui/material'
import Dropdown from '@mui/joy/Dropdown'
import MenuButton from '@mui/joy/MenuButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import styled from '@emotion/styled'

const StyledMenuButton = styled(MenuButton)`
    border-radius: 0;
`

export const TopMenu = () => {
    return (
        <Grid
            MenuItem
            className="headerMenu"
            xl={12}
            textAlign={'center'}
            backgroundColor={'#131417'}
            direction={'row'}
        >
            <Dropdown>
                <StyledMenuButton variant="outlined" size="lg" color="primary">
                    Keys
                </StyledMenuButton>
                <Menu>
                    <MenuItem>Programmable</MenuItem>
                    <MenuItem>Shaped</MenuItem>
                </Menu>
            </Dropdown>
            <Dropdown>
                <StyledMenuButton
                    variant="outlined"
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
            <Dropdown>
                <StyledMenuButton
                    variant="outlined"
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
            <Dropdown>
                <StyledMenuButton
                    variant="outlined"
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
    )
}
