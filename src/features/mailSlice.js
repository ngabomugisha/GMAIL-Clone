import { createSlice } from '@reduxjs/toolkit';

export const mailSlice = createSlice({
  name: 'mail',
  initialState: {
    sendMessageIsOpen: false,
  },
  reducers: {
    openSendMessage: state => {
      state.sendMessageIsOpen = true;
    },
    closeSendmessage: state => {
      state.sendMessageIsOpen = false;
    },
  },
});

export const { openSendMessage, closeSendmessage } = mailSlice.actions;

export const selectSendMessageIsOpen = (state) => state.mail.sendMessageIsOpen;

export default mailSlice.reducer;
