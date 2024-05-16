// pages/[id]/[calendarAlias].js

import * as React from 'react';
import CalendarAvailability from '../components/CalendarAvailability';
import ServiceProviderCalendarsView from '../components/ServiceProviderCalendarView';

export default function ServiceProviderCalendars({ serviceProviderId, calendarAlias }) {
  return (
    calendarAlias === undefined ? (
      <ServiceProviderCalendarsView serviceProviderId={serviceProviderId} />
    ) : (
      <CalendarAvailability serviceProviderId={serviceProviderId} calendarAlias={calendarAlias} />
    )
  );
}

export async function getStaticPaths() {
  const paths = await generateStaticPaths();
  return {
    paths,
    fallback: false
  };
}

export async function generateStaticPaths() {
  return [
    {
      params: {
        id: '1'
      }
    },
    {
      params: {
        id: '2',
        calendarAlias: 'alias-del-calendario-1'
      }
    }
  ];
}
