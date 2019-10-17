const CHANNEL_ID = 'fmdU6Sbit5NwRD6Z';
const drone = new ScaleDrone(CHANNEL_ID, {
 data: { // Will be sent out as clientData via events
   name: getRandomName(),
   color: getRandomColor(),
 },
});
