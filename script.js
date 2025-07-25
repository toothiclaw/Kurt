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
  personality: [],
  cigarettes: [
    {
      src: "",
      title: "some cigarettes",
      description: "Various cigarette packs Kurt was seen with."
    }
  ],
  journals: [
    {
      src: "images/last-journal.jpg",
      title: "his last journal",
      description: "Kurt's final personal journal, containing his private thoughts."
    },
    {
      src: "images/suicidal-note.jpg",
      title: "the suicidal note",
      description: "The note Kurt wrote before his tragic passing."
    }
  ]
};

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
    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.title;
    img.style.width = "150px";
    img.style.cursor = "pointer";

    const caption = document.createElement("p");
    caption.innerText = item.title;
    caption.style.color = "white";
    caption.style.textAlign = "center";
    caption.style.cursor = "pointer";

    function showDetail() {
      detail.innerHTML = `
        <h3 style="color:white;">${item.title}</h3>
        <p style="color:white;">${item.description}</p>
      `;

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
