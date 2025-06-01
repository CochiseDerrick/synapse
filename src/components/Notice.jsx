
import { Grid, Card, CardActions, CardContent, CardMedia, Link, Typography } from "@mui/material"
import imgDefault from '../assets/bitcoin.avif'

const Notice = ({ notice }) => {

    const { urlToImage, url, title, description, source } = notice

    return (
        <Grid item sm={6} md={4} lg={3}>
            <Card sx={{ display: 'flex', height: '100%', flexDirection: 'column' }}>
                <CardContent >
                    <Typography variant="body1" color={'error'}>
                        {source.name}
                    </Typography>
                    <Typography variant="h5" component='div'>
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                </CardContent>
                <CardActions sx={{ marginTop: 'auto' }}>
                    <Link
                        href={url}
                        target="_blank"
                        variant="button"
                        width='100%'
                        underline="hover"
                        sx={{ margin: '0 12px' }}
                    >Read Notice</Link>
                </CardActions>
            </Card>
        </Grid>
    )
}

export default Notice