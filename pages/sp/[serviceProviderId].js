import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Copyright from '../../src/Copyright';
import { useRouter } from 'next/router';
import CalendarList from '../../components/CalendarsList';
import { Card, CardContent, Fade, Typography } from '@mui/material';

export default function ServiceProviderCalendars() {
  const router = useRouter();
  const { serviceProviderId } = router.query;

  const [serviceProvider, setServiceProvider] = React.useState({
    id: null,
    name: 'Nombre del proveedor',
    alias: 'alias-del-proveedor',
    description: 'Descripción del proveedor, la cual puede ser muy larga y ocupar varias líneas.',
    calendars: [
      {
        id: 1,
        name: 'Calendario 1',
        description: 'Calendario de prueba',
        price: 100,
        interval: 30,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Domingo', times: [{ openHour: '08:00', closeHour: '18:00' }] },
        ],
        style: { primaryColor: '#FC5600', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: true,
        alias: 'alias-del-calendario-1',
      },
      {
        id: 2,
        name: 'Calendario 2',
        description: 'Calendario de prueba',
        price: 200,
        interval: 15,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '12:00' }, { openHour: '08:00', closeHour: '20:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [] },
          { weekDay: 'Domingo', times: [] },
        ],
        style: { primaryColor: '#6A006A', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: false,
        alias: 'alias-del-calendario-2',
      },
      {
        id: 2,
        name: 'Calendario 2',
        description: 'Calendario de prueba',
        price: 200,
        interval: 15,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '12:00' }, { openHour: '08:00', closeHour: '20:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [] },
          { weekDay: 'Domingo', times: [] },
        ],
        style: { primaryColor: '#6A006A', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: false,
        alias: 'alias-del-calendario-2',
      },
      {
        id: 2,
        name: 'Calendario 2',
        description: 'Calendario de prueba',
        price: 200,
        interval: 15,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '12:00' }, { openHour: '08:00', closeHour: '20:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [] },
          { weekDay: 'Domingo', times: [] },
        ],
        style: { primaryColor: '#6A006A', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: false,
        alias: 'alias-del-calendario-2',
      },
      {
        id: 2,
        name: 'Calendario 2',
        description: 'Calendario de prueba para connsultas de todo tipo yt motidopasda sdkljajnsdashd dasdi aois',
        price: 200,
        interval: 15,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '12:00' }, { openHour: '08:00', closeHour: '20:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [] },
          { weekDay: 'Domingo', times: [] },
        ],
        style: { primaryColor: '#6A006A', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: false,
        alias: 'alias-del-calendario-2',
      },
      {
        id: 2,
        name: 'Calendario 2',
        description: 'Calendario de prueba',
        price: 200,
        interval: 15,
        availability: [
          { weekDay: 'Lunes', times: [{ openHour: '08:00', closeHour: '12:00' }, { openHour: '08:00', closeHour: '20:00' }] },
          { weekDay: 'Martes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Miércoles', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Jueves', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Viernes', times: [{ openHour: '08:00', closeHour: '18:00' }] },
          { weekDay: 'Sábado', times: [] },
          { weekDay: 'Domingo', times: [] },
        ],
        style: { primaryColor: '#6A006A', backgroundColor1: '#ffffff', backgroundColor2: '#ffffff' },
        isActive: false,
        alias: 'alias-del-calendario-2',
      },
    ],
    primaryColor: '#7b85af',
    secondaryColor: '#faecb0',
  });

  const fetchServiceProvider = async () => {
    const response = await fetch(`/api/service-providers/${serviceProviderId}`);
    const data = await response.json();
    setServiceProvider(data);
  };

  // React.useEffect(() => {
  //   fetchServiceProvider();
  // }, [serviceProviderId]);

  return (
    <Box sx={{
      height: {
        xs: "100%",
        sm: "100vh",
      },
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
                      {serviceProvider.name}
                    </Typography>
                    <Typography variant="body2" sx={{ ml: 1, color: 'text.secondary', textAlign: 'center' }}>
                      {serviceProvider.description.length > 0 && serviceProvider.description}
                    </Typography>
                  </Box>
                </Box>

                <Box mb={2}>
                  <CalendarList calendars={serviceProvider.calendars} serviceProviderAlias={serviceProvider.alias} />
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
