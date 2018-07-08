export default ({ markup, helmet, state, stylesheets }) => {
  let html = `<!DOCTYPE html>
  <!-- VERSION NUMBER: ${process.env.VERSION_NUMBER} -->
  <html ${helmet.htmlAttributes.toString()}>
    <head>
      <meta charset="utf-8">
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat:500" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Permanent+Marker:400" />
      ${helmet.link.toString()}
      <script>window.__INITIAL_STATE__ = ${JSON.stringify(state || {})};</script>
      <!-- Global site tag (gtag.js) - Google Analytics -->
      <script async src="https://www.googletagmanager.com/gtag/js?id=UA-109997675-1"></script>
      <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'UA-109997675-1');
      </script>
      ${stylesheets}
    </head>
    <body ${helmet.bodyAttributes.toString()}>
      <div id="gallery">${markup}</div>
      <script src="./js/bundle.js"></script>
    </body>
  </html>`;
  return html.replace(/\s{2,}/g,'');
}
