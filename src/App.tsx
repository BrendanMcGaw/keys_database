import React from 'react'
import { Container } from '@mui/material'
import './App.css'
import Grid from '@mui/material/Grid' // Grid version 1
import HeaderImage from './Assets/placeholder-banner.jpg'
import { TopMenu } from './Components/TopMenu'

// Start seperating components once they're working.
// Start getting into the habit of creating style components for the css.
function App() {
    return (
        <Container className="homeContainer" maxWidth={false} disableGutters>
            <TopMenu />
            <Grid
                xl={12}
                style={{
                    // Make the background black to cover the edges, image too small.
                    backgroundColor: 'black',
                    textAlign: 'center',
                }}
            >
                <img
                    src={HeaderImage}
                    alt={'Heading slider filled with keys and programming'}
                />
            </Grid>
        </Container>
    )
}

export default App
