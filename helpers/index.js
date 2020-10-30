export function scrollTo(ref, offset = 0) {
  ref = ref.current ? ref.current : ref;
  console.log(ref);
  window.scroll({
    top: ref.offsetTop - offset,
    left: 0,
    behavior: "smooth",
  });
}
