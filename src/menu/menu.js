export default function loadMenu() {
    const container = document.querySelector('#content');
    const popup = document.createElement("div");
    container.appendChild(popup);
    const img1 = document.createElement('img');
    img1.src = "https://product.hstatic.net/200000420363/product/geforce_rtx__5070_gaming_oc_12g-01_bd706c3f81c745ca8f630ae7f36b0cee.png";
    img1.alt = "RTX 5070";
    popup.appendChild(img1);

    const img2 = document.createElement('img');
    img2.src = "https://hanoicomputercdn.com/media/product/91282_vga_gigabyte_rtx_5060_windforce_8gd_gddr7__1_.png";
    img2.alt = "RTX 5060";
    popup.appendChild(img2);

    const img3 = document.createElement('img');
    img3.src = "https://product.hstatic.net/1000233206/product/1024_4dcfd38f96624982a14d80070f230a2b.png";
    img3.alt = "RTX 5060ti";
    popup.appendChild(img3);

}

