// 카테고리별 데이터 (이미지, 제목, 설명 포함)
const data = {
  outfits: [
    {
      src: "images/red-sweater.jpg",
      title: "a striped red sweater",
      description: "Kurt's iconic red-and-black striped sweater from MTV Unplugged."
    },
    {
      src: "images/green-cardigan.jpg",
      title: "a green cardigan",
      description: "Famous green cardigan worn by Kurt during his MTV Unplugged performance."
    }
  ],
  toys: [
    {
      src: "images/monkeys.jpg",
      title: "his monkeys",
      description: "Kurt kept small monkey plushies that symbolized his childhood comfort."
    }
  ],
  instruments: [
    {
      src: "images/epiphone-texan.jpg",
      title: "epiphone texan",
      description: "A classic acoustic guitar that Kurt favored for intimate performances."
    }
  ],
  personality: []
};

// 버튼 클릭 → 해당 카테고리 이미지+제목 보여주기
function showCategory(category) {
  const gallery = document.getElementById("galleryArea");
  const detail = document.getElementById("detailArea");
  gallery.innerHTML = "";
  detail.innerHTML = "";

  const items = data[category];

  if (!items || items.length === 0) {
    gallery.innerHTML = "<p style='color:white;'>아직 준비된 항목이 없어요.</p>";
    return;
  }

  items.forEach(item => {
    // 이미지 요소
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.style.width = "150px";
    img.style.cursor = "pointer";

    // 제목 요소
    const caption = document.createElement("p");
    caption.innerText = item.title;
    caption.style.color = "white";
    caption.style.textAlign = "center";
    caption.style.cursor = "pointer";

    // 설명 보여주는 함수
    function showDetail() {
      detail.innerHTML = `
        <h3 style="color:white;">${item.title}</h3>
        <p style="color:white;">${item.description}</p>
      `;

      // 상단 이미지도 바꿔줌
      const mainImage = document.getElementById("mainImage");
      mainImage.src = item.src;
      mainImage.alt = item.title;
    }

    img.onclick = showDetail;
    caption.onclick = showDetail;

    const wrapper = document.createElement("div");
    wrapper.style.display = "inline-block";
    wrapper.style.margin = "10px";
    wrapper.appendChild(img);
    wrapper.appendChild(caption);

    gallery.appendChild(wrapper);
  });
}
