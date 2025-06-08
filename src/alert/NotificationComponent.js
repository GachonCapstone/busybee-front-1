import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { NotificationContext } from './NotificationContext';
import { useNavigate } from 'react-router-dom';

export default function NotificationComponent() {
  const { notifications, setNotifications } = useContext(NotificationContext);
  const navigate = useNavigate();
  const loginId = localStorage.getItem("loginId");

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 16,
        right: 16,
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
        zIndex: 1300,
      }}
    >
      {notifications.map((notif, idx) => (
        <Paper
          key={idx}
          elevation={4}
          sx={{ p: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}
        >
          <Typography variant="body2">
            벌통 {notif}에서 알림 발생
          </Typography>
          <Button size="small" onClick={() => {
            setNotifications(prev => prev.filter((_, i) => i !== idx));
          }}>
            무시
          </Button>
        </Paper>
      ))}
      {notifications.length > 0 && (  // 알림이 있을 때만 표시
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate(`/users/${loginId}/notifications`)}
        >
          알림으로 이동
        </Button>
      )}
    </Box>
  );
}