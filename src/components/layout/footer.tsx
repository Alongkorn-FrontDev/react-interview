import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function NestedGrid() {
  return (
    <Box sx={{ flexGrow: 1, backgroundColor: '#111827', color: '#fff', py: 5 }} >
        <Container maxWidth="xl">
        <Grid container spacing={2}>
            <Grid
            xs={12}
            container
            justifyContent="space-between"
            alignItems="end"
            flexDirection={{ xs: 'row', sm: 'row' }}
            sx={{ fontSize: '12px' }}
            >
                <Grid container columnSpacing={1} sx={{ order: { xs: 1, sm: 1 } }}>
                    <Box>
                    <Typography variant="h5">Drivehub Co.,Ltd</Typography>
                    <Typography variant="body2">193-195 Lake Rajada Office Complex,<br/> Ratchadapisek road, Khlong Toei, Bangkok</Typography>
                    </Box>
                </Grid>

                <Grid sx={{ order: { xs: 2, sm: 2 } }}>
                    <Typography variant="body2">© Drivehub 2023</Typography>

                </Grid>
            </Grid>
        </Grid>
        </Container>
    </Box>
  );
}