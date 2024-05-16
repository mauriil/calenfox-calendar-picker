import React from 'react';
import { Card, CardContent, Typography, Box, CardHeader, Grid } from '@mui/material';

import { useRouter } from 'next/router';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const CalendarList = ({ calendars, serviceProviderAlias }) => {
    const router = useRouter();
    return (
            <Grid container spacing={2} sx={{ display: 'flex', justifyContent: 'center' }}>
            {calendars.map((calendar, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3} >
                    <Card
                        key={index}
                        variant="outlined"
                        sx={{
                            margin: 'auto',
                            width: '220px',
                            height: '100%',
                            borderRadius: 8,
                            cursor: 'pointer',
                        }}>
                        <CardHeader
                            title={calendar.name}
                            sx={{
                                textAlign: 'center',
                                backgroundColor: calendar.style.primaryColor,
                                color: 'primary.contrastText',
                                borderRadius: '8px 8px 0 0',
                                maxHeight: 40,
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }} />
                        <div onClick={() => router.push(`/${serviceProviderAlias}/${calendar.alias}`)} key={index}>
                            <CardContent>
                                <Typography variant="body2" sx={{ textAlign: 'center', mb: 1 }}>
                                    {calendar.description.length > 0 &&
                                        calendar.description.length > 50 ? calendar.description.substring(0, 50) + '...' : calendar.description
                                    }
                                </Typography>
                                <Box display="flex" alignItems="center" justifyContent="space-between" mb={1}>
                                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AttachMoneyIcon sx={{ mr: 1 }} /> {calendar.price}
                                    </Typography>
                                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                                        <AccessTimeIcon sx={{ mr: 1 }} /> {calendar.interval}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{ textAlign: 'center' }}>
                                    {calendar.availability.map((availabilityObj, index) => (
                                        availabilityObj.times.length > 0 &&
                                        <span key={index} style={{ color: calendar.style.primaryColor, marginRight: 5 }}>
                                            {availabilityObj.weekDay[0]}{availabilityObj.weekDay[1]}{' '}
                                        </span>
                                    ))}
                                </Typography>
                            </CardContent>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>

    );
};

export default CalendarList;
