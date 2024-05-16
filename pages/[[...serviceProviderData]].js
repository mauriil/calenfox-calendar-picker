import * as React from 'react';
import { useRouter } from 'next/router';
import CalendarAvailability from '../components/CalendarAvailability';
import ServiceProviderCalendarsView from '../components/ServiceProviderCalendarView';

export default function ServiceProviderCalendars() {
  const router = useRouter();
  const { serviceProviderData } = router.query;
  const [serviceProviderId, setServiceProviderId] = React.useState(null);
  const [calendarAlias, setCalendarAlias] = React.useState(null);

  React.useEffect(() => {
    if (serviceProviderData === undefined) {
      return;
    }
    const [serviceProviderId, calendarAlias] = serviceProviderData;
    setServiceProviderId(serviceProviderId);
    setCalendarAlias(calendarAlias);

  }, [serviceProviderData]);

  return (
    calendarAlias === undefined ? (
      <ServiceProviderCalendarsView serviceProviderId={serviceProviderId} />
    ) : (
      <CalendarAvailability serviceProviderId={serviceProviderId} calendarAlias={calendarAlias} />
    )
  );
}
