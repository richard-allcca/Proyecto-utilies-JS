const d = document,
  w = window;

export default function responsiveMedia(id, mq, mobileContent, desktopContent) {
  let breakpoint = w.matchMedia(mq);

  const responsive = (e) => {
    if (e.matches) {
      d.getElementById(id).innerHTML = desktopContent;
    } else {
      d.getElementById(id).innerHTML = mobileContent;
    }
  };
  breakpoint.addEventListener("change", responsive);
  responsive(breakpoint);

  //?  para la nueva forma de hacer esto https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryListEvent

  // breakpoint.addEventListener("change", (e) => {
  //   if (e.matches) {
  //     d.getElementById(id).innerHTML = desktopContent;
  //   } else {
  //     d.getElementById(id).innerHTML = mobileContent;
  //   }
  // });
}
