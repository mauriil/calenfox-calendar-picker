import * as React from 'react';
import { useRouter } from 'next/router';
import CalendarAvailability from '../components/CalendarAvailability';
import ServiceProviderCalendarsView from '../components/ServiceProviderCalendarView';

export default function ServiceProviderCalendars() {
  const router = useRouter();
  const { serviceProviderData } = router.query;
  const [serviceProviderId, setServiceProviderId] = React.useState(null);
  const [calendarAlias, setCalendarAlias] = React.useState(null);

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
    // TODO: if no serviceProviderId, then return 404
    const data = await response.json();
    setServiceProvider(data);
  };

  React.useEffect(() => {
    if (serviceProviderData === undefined) {
      return;
    }
    const [serviceProviderId, calendarAlias] = serviceProviderData;
    setServiceProviderId(serviceProviderId);
    setCalendarAlias(calendarAlias);

    // fetchServiceProvider();
  }, [serviceProviderData]);

  return (
    calendarAlias === undefined ? (
      <ServiceProviderCalendarsView serviceProviderId={serviceProviderId} />
    ) : (
      <CalendarAvailability serviceProviderId={serviceProviderId} calendarAlias={calendarAlias} />
    )
  );
}
