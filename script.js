let tl = gsap.timeline();

tl.from(".main .nav img,.nav h3,.main .nav .nav-part3 button", {
  y: -100,
  duration: 0.2,
  stagger: 0.5,
  opacity: 0,
});

tl.from("h1", {
  y: 400,
  duration: 0.5,
  delay: 0.2,
  opacity: 0,
  stagger: 0.5,
});

tl.from("h5", {
  opacity: 0,
  delay: 0.5,
});

tl.from(".firstimg,.secondimg,.thirdimg,.fourthimg", {
  scale: 0,
  opacity: 0,
  delay: 0.5,
  stagger: 0.7,
});

tl.to("h5", {
  y: 30,
  duration: 0.5,
  repeat: -1,
  yoyo: true,
});
