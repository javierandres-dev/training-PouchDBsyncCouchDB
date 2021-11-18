export function serviceWorker() {
  const SW_URL = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(SW_URL).then((response) => {
    //console.info('From "serviceWorker" file: ', response);
  });
}
