import React, { useState } from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

function Signup() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [slotTime, setSlotTime] = useState('');
  const [slots, setSlots] = useState([]);

  const handleAddSlot = () => {
    if (!slotTime) return;

    const newSlot = {
      date: selectedDate.toDateString(),
      time: slotTime,
    };

    setSlots((prev) => [...prev, newSlot]);
    setSlotTime('');
  };

  const isDateInPast = (date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom sx={{ mt: 4 }}>
        Create a Slot
      </Typography>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Select a Date"
          value={selectedDate}
          onChange={(newDate) => setSelectedDate(newDate)}
          disablePast
          renderInput={(params) => <TextField {...params} fullWidth sx={{ mb: 2 }} />}
        />
      </LocalizationProvider>

      <TextField
        label="Enter a Time (e.g. 2:00 PM)"
        value={slotTime}
        onChange={(e) => setSlotTime(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />

      <Button
        variant="contained"
        onClick={handleAddSlot}
        fullWidth
        disabled={!slotTime || isDateInPast(selectedDate)}
      >
        Add Slot
      </Button>

      {slots.length > 0 && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6" gutterBottom>
            All Slots
          </Typography>
          <List>
            {slots.map((slot, index) => (
              <ListItem key={index} divider>
                <ListItemText primary={`${slot.date} — ${slot.time}`} />
              </ListItem>
            ))}
          </List>
        </Box>
      )}
    </Container>
  );
}

export default Signup;