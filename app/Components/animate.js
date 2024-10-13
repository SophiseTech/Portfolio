import gsap from "gsap";

export function animateOut(path, router) {
  gsap.timeline()
    .set(".anim-container", { display: "flex" })
    .to(".anim1", { translateY: "0%" }, 0)
    .to(".anim2", { translateY: "100%" }, 0)
    .set(".progress-container", { opacity: 1, zIndex: 101, width: "100%", duration: 1 })
    .to(".progress-container", { width: "50%", duration: 0.5 })
    .to(".progress-bar", { width: "100%", duration: 1, ease: "power1.out" })
    .to(".progress-container", { width: "100%", duration: 0.5 })
    .set(".progress-bar", { width: "0%", onComplete: () => { router.push(path) } })
    .set(".progress-container", { opacity: 0 })
    .to({}, { duration: 0.5 })
    .play();

}
export function animateIn() {
  const anim1 = document.getElementById("anim1")
  const anim2 = document.getElementById("anim2")
  if (anim1 && anim2) {
    gsap.timeline()
      .set(anim1, { translateY: "0%" })
      .set(anim2, { translateY: "100%" })
      .to(anim1, { translateY: "-100%" }, 0)
      .to(anim2, { translateY: "200%" }, 0)
      .set(".anim-container", { display: "none" })
      .play();
  }

}