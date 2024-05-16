import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import GoogleIcon from '@mui/icons-material/Google';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #3F2559',
    borderRadius: 4,
    boxShadow: 24,
    p: 4,
};

export default function ConfirmationModal({ open, onClose, bookingData }) {
    const formatDate = (date) => {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        return date.toLocaleDateString('es-ES', options);
    }
    const formatTime = (date) => {
        const options = { hour: '2-digit', minute: '2-digit' };
        return date.toLocaleTimeString('es-ES', options);
    }
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={onClose}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Confirmar turno
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {
                            bookingData &&
                            <>
                                <Typography variant="body1">
                                    <strong>Esás apunto de reservar un turno con {bookingData.serviceProviderData.name} el día {formatDate(new Date(bookingData.dateTime))} a las {formatTime(new Date(bookingData.dateTime))}. ¿Deseas continuar?</strong>
                                </Typography>
                                <Button variant="contained" color="primary" sx={{ mt: 3 }} onClick={onClose} fullWidth>
                                    <GoogleIcon sx={{ mr: 1 }} />
                                    Confirmar con Google
                                </Button>
                                <Button variant="outlined" color="primary" sx={{ mt: 3 }} onClick={onClose} fullWidth>
                                    Confirmar manualmente
                                </Button>
                                <Button variant="outlined" color="secondary" sx={{ mt: 3 }} onClick={onClose} fullWidth>
                                    Cancelar
                                </Button>
                            </>
                        }
                    </Typography>
                </Box>
            </Fade>
        </Modal>
    );
}
