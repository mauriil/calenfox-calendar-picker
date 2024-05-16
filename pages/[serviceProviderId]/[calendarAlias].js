import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../../src/Copyright';
import { useRouter } from 'next/router';
import { Button, Card, CardContent, Fade, Typography } from '@mui/material';
import DateTimePicker from '../../components/common/DateTimePicker/DateTimePicker';

export default function CalendarAvailability() {
  const router = useRouter();
  const { serviceProviderId, calendarAlias } = router.query;
  const [dateTime, setDateTime] = React.useState('');

  const [serviceProvider, setServiceProvider] = React.useState({
    id: null,
    name: '',
    description: '',
    calendars: [
      {
          id: 1,
          name: 'Calendario 1',
          alias: 'alias-del-calendario-1',
          description: 'Calendario de prueba',
          price: 100,
          interval: 30,
          availability: [
            "2024-05-13 08:00",
            "2024-05-13 10:30",
            "2024-05-14 09:15",
            "2024-05-14 13:45",
            "2024-05-17 10:00",
            "2024-05-17 14:45"
          ],
          style: { primaryColor: '#FC5600', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
          isActive: true,
      }],
    primaryColor: '#7b85af',
    secondaryColor: '#faecb0',
  });

  const fetchServiceProvider = async () => {
    // get calendar availability filtering also by calendar alias
    const response = await fetch(`/api/service-providers/${serviceProviderId}`);
    const data = await response.json();
    setServiceProvider(data);
  };

  // React.useEffect(() => {
  //   fetchServiceProvider();
  // }, [serviceProviderId]);

  return (
    <Box sx={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

      <Container sx={{
        width: '100%',
        height: '100%',
        mt: 5,
      }}>

      <Fade in={true} timeout={800}>
        <div>
          <Card variant="outlined" sx={{
            borderRadius: 4,
            boxShadow: '15px 25px 15px rgba(0, 0, 0, 0.1)',
            mb: 5,
          }}>
            <CardContent>
              <Box display="flex" flexDirection="column" alignItems="center">
                <Box position="relative" mb={2}>
                  <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center" mb={3}>
                    <Typography variant="h5">
                      {serviceProvider.calendars[0].name}
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary', textAlign: 'center' }}>
                      {serviceProvider.calendars[0].description.length > 0 && serviceProvider.calendars[0].description}
                    </Typography>
                  </Box>
                </Box>

                <Box mb={2}>
                  <DateTimePicker calendarAvailability={serviceProvider.calendars[0].availability} onChange={setDateTime} />
                </Box>

                <Box mb={2} sx={{
                  width: '350px'
                }}>
                  <Button variant="contained" color="primary" onClick={() => console.log(dateTime)} fullWidth>
                    Continuar
                  </Button>
                </Box>

              </Box>
            </CardContent>
          </Card>
        </div>
      </Fade>

      </Container>

      <Copyright />

    </Box>
  );
}
