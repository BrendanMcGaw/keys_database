import { Grid } from '@mui/material'
import Dropdown from '@mui/joy/Dropdown'
import MenuButton from '@mui/joy/MenuButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'

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
                <MenuButton variant="soft" size="lg" color="primary">
                    Keys
                </MenuButton>
                <Menu>
                    <MenuItem>Programmable</MenuItem>
                    <MenuItem>Shaped</MenuItem>
                </Menu>
            </Dropdown>
            <Dropdown>
                <MenuButton variant="soft" size="lg" color="primary" Format>
                    Hardware
                </MenuButton>
                <Menu>
                    <MenuItem>Keys</MenuItem>
                    <MenuItem>Other Things</MenuItem>
                </Menu>
            </Dropdown>
            <Dropdown>
                <MenuButton variant="soft" size="lg" color="primary" Format>
                    Devices
                </MenuButton>
                <Menu>
                    <MenuItem>Cars</MenuItem>
                    <MenuItem>Machinary</MenuItem>
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
    )
}
