import styles from "./menu.module.css" ;
console.log('test:',styles);

export default function loadMenu() {
  
  const container = document.querySelector('#content');
  const menu_button = document.querySelector("#menu-tab");
  const popup = document.createElement("div");

  const wrapper = document.createElement("div");
  wrapper.appendChild(menu_button);
  wrapper.appendChild(popup);

  const createImage = (src, alt) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    console.log('styles:', styles);

    img.className = styles.menuImage; // ← Apply CSS Module class here
    return img;
  };

  popup.appendChild(createImage("https://product.hstatic.net/200000420363/product/geforce_rtx__5070_gaming_oc_12g-01_bd706c3f81c745ca8f630ae7f36b0cee.png", "RTX 5070"));
  popup.appendChild(createImage("https://hanoicomputercdn.com/media/product/91282_vga_gigabyte_rtx_5060_windforce_8gd_gddr7__1_.png", "RTX 5060"));
  popup.appendChild(createImage("https://product.hstatic.net/1000233206/product/1024_4dcfd38f96624982a14d80070f230a2b.png", "RTX 5060ti"));

  container.appendChild(wrapper);

  // styling container
  popup.style.position = 'absolute';
  wrapper.style.position = 'relative';
  popup.style.top = "100%";
  wrapper.style.height = "50vw";
  wrapper.style.width = "clamp(100px, 50vw, 1000px)";
  container.className = "";


}
