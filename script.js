const works = [
  ["UFO", "assets/work-000.jpg"], ["あれれ？", "assets/work-001.jpg"],
  ["おとぼけ1号", "assets/work-002.jpg"], ["キング", "assets/work-003.jpg"],
  ["サングラス", "assets/work-004.jpg"], ["ひょうきんもの人気者", "assets/work-005.jpg"],
  ["メアリー", "assets/work-006.jpg"], ["メイン", "assets/work-007.jpg"],
  ["夏祭り金魚", "assets/work-008.jpg"], ["幸せの方程式", "assets/work-009.jpg"],
  ["草原の中で", "assets/work-010.jpg"], ["読書 LOVE", "assets/work-011.jpg"]
];

const lightbox = document.querySelector(".lightbox");
const lightboxImage = lightbox.querySelector("figure img");
const lightboxCaption = lightbox.querySelector("figcaption");
let selected = 0;
let opener = null;

function show(index) {
  selected = (index + works.length) % works.length;
  const [title, image] = works[selected];
  lightboxImage.src = image;
  lightboxImage.alt = `〈猫のような猫〉${title}`;
  lightboxCaption.textContent = title;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
  lightbox.querySelector(".lightbox-close").focus();
}

function close() {
  lightbox.hidden = true;
  document.body.style.overflow = "";
  if (opener) opener.focus();
}

document.querySelectorAll(".work-image-button").forEach((button) => {
  button.addEventListener("click", () => {
    opener = button;
    show(Number(button.dataset.index));
  });
});

lightbox.querySelector(".lightbox-close").addEventListener("click", close);
lightbox.querySelector(".lightbox-prev").addEventListener("click", (event) => { event.stopPropagation(); show(selected - 1); });
lightbox.querySelector(".lightbox-next").addEventListener("click", (event) => { event.stopPropagation(); show(selected + 1); });
lightbox.addEventListener("click", (event) => { if (event.target === lightbox) close(); });

document.addEventListener("keydown", (event) => {
  if (lightbox.hidden) return;
  if (event.key === "Escape") close();
  if (event.key === "ArrowLeft") show(selected - 1);
  if (event.key === "ArrowRight") show(selected + 1);
});
