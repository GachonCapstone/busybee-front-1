// alert/NotificationComponent.jsx
import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NotificationContext } from './NotificationContext';

export default function NotificationComponent() {
  const { notifications, setNotifications } = useContext(NotificationContext);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        zIndex: 1300,       // 로그인 폼 위에 뜨도록 충분히 높게
      }}
    >
      {notifications.map((notif, idx) => (
        <Paper
          key={idx}
          elevation={4}
          sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="body2">
            말벌이 감지되었습니다!
          </Typography>
          <Button size="small" onClick={() => {
            setNotifications(prev => prev.filter((_, i) => i !== idx));
          }}>
            Dismiss
          </Button>
        </Paper>
      ))}
    </Box>
  );
}