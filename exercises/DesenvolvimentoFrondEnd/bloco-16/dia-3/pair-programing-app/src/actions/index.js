const sendAllForm = (item) => ({
  type: 'SEND_ALL_FORM',
  payload: {
    item,
  }
});

export default sendAllForm;