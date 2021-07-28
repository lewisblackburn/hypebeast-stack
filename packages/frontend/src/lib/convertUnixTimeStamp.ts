export const convertUnixTimestamp = (timestamp?: string) => {
  if (!timestamp) {
    return {
      minutes: null,
      hours: null,
      created: null,
    };
  }
  const now = new Date().valueOf(); // this now
  const created = parseInt(timestamp); // then
  const diff = now - created;
  const minutes: any = Math.ceil(diff / 1000 / 60);
  const hours = Math.floor(minutes / 60);
  const date = new Date(created).toDateString();

  return {
    minutes,
    hours,
    date,
  };
};
