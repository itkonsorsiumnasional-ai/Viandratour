const SITE = {
  name: "Viandra Tour",
  waNumber: "62885846329800",
  waDisplay: "0858-4632-9800",
  email: "viandratourofficiall@gmail.com",
  instagram: "viandratour",           // GANTI, kosongkan jika belum ada
  threads: "", facebook: "viandratour", tiktok: "viandratour",
  address: "",
  offices: [
    { name: "Head Office Jakarta Barat", address: "Jalan Delima IV No. 35A RT 06 RW 03, Kembangan Utara, Jakarta Barat 11610" },
    { name: "Branch Office Graha Raya Bintaro", address: "Ruko Venice Blok JE No. 8, Jl. Boulevard Graha Raya Bintaro, Tangerang Selatan" },
    { name: "Branch Office Bekasi", address: "Ruko Kalimas Blok A 12, Jl. Chairil Anwar, Bekasi Timur" }
  ],
  hours: "Senin sampai Sabtu, 09.00 sampai 17.00"
};

/* ===== ITINERARY (contoh singkat; ganti dengan itinerary asli). Format: [judul hari, isi, hotel] ===== */
const IT_7D6N = [
  ["DAY 1 : KUALA LUMPUR (No Meal)", "Meeting point bandara KLIA, dijemput local guide dan diantar ke hotel. Acara bebas.", "Hotel setaraf *3 Kuala Lumpur"],
  ["DAY 2 : KUALA LUMPUR - GENTING - PUTRAJAYA - JOHOR BAHRU (B,L,D)", "Genting Highland (cable car gratis), Batu Caves, Istana Negara, KLCC Petronas Twin Tower, Chocolate Factory, Putrajaya, lanjut Johor Bahru.", "Hotel setaraf *3 Johor Bahru"],
  ["DAY 3 : JOHOR BAHRU - SINGAPORE CITY TOUR - MELAKA (B,L,D)", "Jewel Changi Airport, Merlion Park, Sentosa Island, Universal Studios, Gardens By The Bay, Orchard Road, lanjut Melaka.", "Hotel setaraf *3 Melaka"],
  ["DAY 4 : MELAKA - DANNOK (THAILAND) (B,L,D)", "Tour Melaka (Gedung Merah, Benteng Portugis, Jonker Street), lanjut menuju Dannok, Thailand.", "Hotel setaraf *3 Dannok"],
  ["DAY 5 : HATYAI CITY TOUR (B,L)", "Erawadee Thai Herbal Shop, Sleeping Buddha, Samila Beach, Mermaid Statue, Hatyai Floating Market (weekend).", "Hotel setaraf *3 Hatyai"],
  ["DAY 6 : HATYAI - KUALA LUMPUR (B,L,D)", "Perjalanan menuju Kuala Lumpur, check in hotel, acara bebas.", "Hotel setaraf *3 Kuala Lumpur"],
  ["DAY 7 : TRANSFER OUT (B)", "Free time, diantar menuju KLIA. Acara tour selesai.", ""]
];
const IT_4D3N = IT_7D6N.slice(0,3).concat([["DAY 4 : MELAKA - TRANSFER OUT (B,L)", "Tour Melaka, lanjut Kuala Lumpur dan diantar menuju KLIA. Acara tour selesai.", ""]]);
const IT_5D4N = IT_7D6N.slice(0,3).concat([["DAY 4 : MELAKA - KUALA LUMPUR (B,L)", "Tour Melaka, lanjut Kuala Lumpur, check in hotel.", "Hotel setaraf *3 Kuala Lumpur"],["DAY 5 : TRANSFER OUT (B)", "Free time menunggu jadwal penerbangan. Acara tour selesai.", ""]]);
const IT_8D7N = IT_5D4N.slice(0,4).concat([
  ["DAY 5 : KUALA LUMPUR - BANGKOK (B)", "Diantar ke bandara menuju Bangkok, dijemput guide, check in hotel.", "Hotel setaraf *3 Bangkok"],
  ["DAY 6 : BANGKOK - PATTAYA (B,L,D)", "Honey Bee Farm, Valley of Dinosaurs, Nongnooch Village, Laser Buddha Hill, Pattaya Beach.", "Hotel setaraf *3 Pattaya"],
  ["DAY 7 : PATTAYA - BANGKOK (B/LUNCH COUPON)", "Gems Gallery, Platinum Fashion Mall, Wat Arun, Chaophraya River ke Icon Siam & Sook Siam Floating Market.", "Hotel setaraf *3 Bangkok"],
  ["DAY 8 : DEPARTURES (BREAKFAST)", "Sarapan di hotel, menunggu penjemputan ke bandara.", ""]
]);
const IT_BP = [
  ["DAY 1 : ARR - BANGKOK (NO MEALS)", "Penjemputan di bandara, check in hotel.", ""],
  ["DAY 2 : BANGKOK - PATTAYA (B,L,D)", "Honey Bee Farm, Valley of Dinosaurs, Nongnooch Village, Laser Buddha Hill, Pattaya Beach.", ""],
  ["DAY 3 : PATTAYA - BANGKOK (B/LUNCH COUPON)", "Gems Gallery, Platinum Fashion Mall, Wat Arun, Chaophraya River, Icon Siam.", ""],
  ["DAY 4 : DEPARTURES (BREAKFAST)", "Sarapan di hotel, menunggu penjemputan ke bandara.", ""]
];
const IT_DAMNOEN = [
  ["DAY 1 : ARR - BANGKOK (NO MEALS)", "Penjemputan dari airport, check in hotel.", ""],
  ["DAY 2 : BANGKOK - DAMNOEN (B,L,DINNER CRUISE)", "Damnoen Saduak Floating Market, Meaklong Railway Market, Icon Siam, Chaophraya Dinner Cruise.", ""],
  ["DAY 3 : BANGKOK CITY TOUR (B,L,D)", "Gems Gallery, Wat Arun, Wat Pak Nam, Khlong Bang Luang, Platinum Fashion Mall, Calypso Cabaret Show di Asiatique.", ""],
  ["DAY 4 : DEPARTURES (BREAKFAST)", "Acara bebas sampai pengantaran ke airport.", ""]
];

/* ===== FASILITAS, BIAYA, SYARAT (contoh; sesuaikan) ===== */
const INC_MY = n => ["Tiket pesawat pulang pergi", "Bus pariwisata AC", n + " hotel bintang 3 setaraf, sekamar berdua/bertiga (twin/triple)", "Makan pagi, siang, dan malam sesuai jadwal", "Tiket masuk wisata yang tercantum", "Pemandu wisata yang ramah dan berpengalaman"];
const EXC_MY = tip => ["Bagasi pesawat pulang pergi", "Optional tour", "Single supplement (jika ingin 1 kamar sendiri)", "Tipping pemandu wisata dan driver Rp " + tip + "/orang", "Asuransi perjalanan (opsional)", "Makan dan minum di luar program", "Biaya pengeluaran pribadi selama tour"];
const DP_MY = ["DP per orang (low season / peak season) sesuai kota berangkat: hubungi kami", "Pelunasan 20 hari (low season) atau 25 hari (peak season) sebelum keberangkatan"];
const TERMS = [
  "Nama yang didaftarkan harus sesuai paspor. Paspor wajib berlaku minimal 7 bulan saat berangkat.",
  "Peserta harus sehat jasmani dan rohani.",
  "Petugas imigrasi berhak menolak peserta. Seluruh biaya akibat penolakan menjadi tanggung jawab peserta.",
  "Jika peserta batal sebelum 30 hari keberangkatan, DP hangus. Setelah itu wajib pelunasan.",
  "Pembayaran tidak dapat dikembalikan, dipindahtangankan, atau dipindah jadwal.",
  "Itinerary dapat berubah tanpa pemberitahuan mengikuti kondisi lapangan, cuaca, atau force majeure. Harga dapat berubah sebelum ada transaksi.",
  "Dengan membayar DP atau pelunasan, peserta dianggap sudah membaca dan menyetujui seluruh syarat dan ketentuan."
];
const EXC_TH = ["Bagasi pesawat pulang pergi", "Tips driver dan guide", "Asuransi perjalanan", "Biaya pribadi", "Optional tour"];
const COSTS_TH = ["DP paket tour: hubungi kami. Pelunasan 20 hari sebelum keberangkatan.", "Pembelian Land Tour Only langsung pelunasan."];

/* ===== JADWAL KEBERANGKATAN ===== */
const isoOf = d => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
const parseISO = s => { const [y, m, d] = s.split("-").map(Number); return new Date(y, m - 1, d); };
const departureDates = p => {
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return (p.departures || []).map(s => ({ date: parseISO(s.replace("*", "")), peak: s.endsWith("*") })).filter(x => x.date >= today).sort((a, b) => a.date - b.date);
};
// Tanda * = high season
const sched = obj => Object.entries(obj).flatMap(([ym, list]) =>
  list.trim().split(/\s+/).map(t => `${ym}-${t.replace("*", "").padStart(2, "0")}${t.endsWith("*") ? "*" : ""}`));
const SCH = {
  "2026-12":"2 9 16* 23* 24* 27*", "2027-01":"6 13 20 27", "2027-03":"6* 7* 8* 9* 10* 11* 12* 17 24 31",
  "2027-04":"7 14 21 28", "2027-05":"5 19 26", "2027-06":"9 16 23* 24* 25* 30*", "2027-07":"1* 2* 3* 7 14 21 28",
  "2027-08":"4 11 18 25", "2027-09":"1 8 15 22 29", "2027-10":"6 13 20 27", "2027-11":"3 10 17 24"
};

/* ===== DATA PAKET (contoh; ganti dengan paket Viandra Tour) ===== */
const PACKAGES = [
  { slug:"3-negara-7d6n", name:"Tour 3 Negara Asia 7D6N", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:7, nights:6, color:"#0a2f9e,#1a8cff", price:6990000, tag:"", image:"tour-3-negara-7d6n.png",
    items:["Malaysia, Singapore, Thailand (Hatyai)","Jadwal Des 2026 sampai Nov 2027","Bisa berangkat dari kota lain"],
    schedule:["Keberangkatan mingguan, umumnya setiap Rabu. Di periode high season ada tambahan tanggal","Bisa berangkat dari seluruh kota/airport di Indonesia","Meeting point: Bandara KLIA, Kuala Lumpur"],
    departures: sched(SCH), bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary: IT_7D6N, included: INC_MY("6 malam"), excluded: EXC_MY("650.000"),
    costs: ["Single supplement: hubungi kami"].concat(DP_MY), terms: TERMS },
  { slug:"3-negara-bangkok-pattaya-8d7n", name:"Tour 3 Negara Asia 8D7N Bangkok Pattaya", dest:"Malaysia Singapore Thailand", type:"3 Negara", days:8, nights:7, color:"#0b4fd6,#22d3ee", price:13200000, tag:"", image:"tour-3-negara-bangkok-pattaya-8d7n.png",
    items:["Malaysia, Singapore, Bangkok, Pattaya","Jadwal Des 2026 sampai Nov 2027","Itinerary 8 hari lengkap"],
    schedule:["Keberangkatan mingguan, umumnya setiap Rabu","Meeting point: Bandara KLIA dan Bandara BKK (Bangkok)"],
    departures: sched(SCH), bonus:["Free cable car Genting Highland"],
    itinerary: IT_8D7N, included: INC_MY("7 malam"), excluded: EXC_MY("700.000"),
    costs: ["Single supplement: hubungi kami"].concat(DP_MY), terms: TERMS },
  { slug:"2-negara-4d3n", name:"Tour 2 Negara Malaysia Singapore 4D3N", dest:"Malaysia Singapore", type:"2 Negara", days:4, nights:3, color:"#0a2f9e,#0b4fd6", price:6390000, tag:"", image:"tour-2-negara-4d3n.png",
    items:["Malaysia dan Singapore","Jadwal Des 2026 sampai Nov 2027","Cocok untuk liburan singkat"],
    schedule:["Keberangkatan mingguan, umumnya setiap Rabu","Meeting point: Bandara KLIA, Kuala Lumpur"],
    departures: sched(SCH), bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary: IT_4D3N, included: INC_MY("3 malam"), excluded: EXC_MY("550.000"),
    costs: ["Single supplement: hubungi kami"].concat(DP_MY), terms: TERMS },
  { slug:"2-negara-5d4n", name:"Tour 2 Negara Malaysia Singapore 5D4N", dest:"Malaysia Singapore", type:"2 Negara", days:5, nights:4, color:"#1a8cff,#22d3ee", price:6590000, tag:"", image:"tour-2-negara-5d4n.png",
    items:["Malaysia dan Singapore","Waktu lebih longgar di tiap kota","Jadwal Des 2026 sampai Nov 2027"],
    schedule:["Keberangkatan mingguan, umumnya setiap Rabu","Meeting point: Bandara KLIA, Kuala Lumpur"],
    departures: sched(SCH), bonus:["Free cable car Genting Highland","Bisa daftar 1 orang tanpa biaya tambahan"],
    itinerary: IT_5D4N, included: INC_MY("4 malam"), excluded: EXC_MY("550.000"),
    costs: ["Single supplement: hubungi kami"].concat(DP_MY), terms: TERMS },
  { slug:"bangkok-pattaya-4d3n", name:"Tour Bangkok Pattaya 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, color:"#0b4fd6,#f5b400", price:6450000, tag:"", image:"tour-bangkok-pattaya-4d3n.png",
    items:["Bangkok dan Pattaya","Berangkat setiap hari, minimal 2 orang (SIC)","Periode Nov 2026 sampai Mar 2027"],
    schedule:["Berangkat setiap hari, bebas pilih tanggal","Keberangkatan SIC (tour gabungan), minimal 2 orang","Meeting point: Bandara Don Mueang atau Suvarnabhumi, Bangkok"],
    daily:["2026-11-01","2027-03-31"], itinerary: IT_BP,
    included: ["Tiket pesawat pulang pergi","Akomodasi hotel sesuai pilihan","Transportasi","Driver/guide berbahasa Indonesia","Makan dan tour sesuai program","Air mineral 1 botol per hari","Tiket masuk objek wisata"],
    excluded: EXC_TH, costs: COSTS_TH, terms: TERMS },
  { slug:"bangkok-damnoen-dinner-cruise-4d3n", name:"Bangkok Damnoen Dinner Cruise 4D3N", dest:"Thailand", type:"Thailand", days:4, nights:3, color:"#0a2f9e,#f5b400", price:6850000, tag:"", image:"tour-bangkok-damnoen-dinner-cruise-4d3n.png",
    items:["Bangkok dan Damnoen Saduak","Makan malam di kapal pesiar","Berangkat setiap hari, bebas pilih tanggal"],
    schedule:["Berangkat setiap hari, bebas pilih tanggal","Keberangkatan SIC, minimal 2 orang","Meeting point: Bandara Don Mueang atau Suvarnabhumi, Bangkok"],
    bonus:["Free Calypso Cabaret Show di Asiatique the Riverfront Night Market"],
    daily:["2026-11-01","2027-03-31"], itinerary: IT_DAMNOEN,
    included: ["Tiket pesawat pulang pergi","Akomodasi hotel bintang 3 / setaraf","Transportasi","Driver/guide berbahasa Indonesia","Makan dan tour sesuai program","Makan malam di cruise (hari ke-2)","Tiket masuk objek wisata"],
    excluded: EXC_TH, costs: COSTS_TH, terms: TERMS }
];

/* ===== Gabungkan paket bawaan dengan data dari Panel Admin (admin-data.js) =====
   BUILTIN_PACKAGES = paket bawaan di atas. Panel admin bisa mengubah, menyembunyikan, atau menambah paket. */
const BUILTIN_PACKAGES = JSON.parse(JSON.stringify(PACKAGES));
let ADMIN = { packages: [], hidden: [], docs: [] };
(function(){ try {
  const x = new XMLHttpRequest(); x.open("GET", "admin-data.js?v=" + Date.now(), false); x.send();
  if (x.status === 200) { const m = x.responseText.match(/^\s*window\.ADMIN_DATA\s*=\s*([\s\S]*?);\s*$/); if (m) ADMIN = Object.assign(ADMIN, JSON.parse(m[1])); }
} catch (e) {} })();
const relPath = s => /^(data:|https?:)/i.test(s || "") ? s : String(s || "").replace(/^\//, "");
(function(){
  const hidden = new Set(ADMIN.hidden || []), out = [];
  BUILTIN_PACKAGES.forEach(b => { if (!hidden.has(b.slug)) out.push(ADMIN.packages.find(p => p.slug === b.slug) || b); });
  ADMIN.packages.forEach(p => { if (!BUILTIN_PACKAGES.some(b => b.slug === p.slug) && !hidden.has(p.slug)) out.push(p); });
  out.forEach(p => { p.image = relPath(p.image); });
  out.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
  PACKAGES.length = 0; out.forEach(p => PACKAGES.push(p));
})();
const ADMIN_DOCS = (ADMIN.docs || []).map(d => Object.assign({}, d, { src: relPath(d.src) }));

/* ===== Bagian di bawah ini tidak perlu diubah ===== */
const wa = msg => `https://wa.me/${SITE.waNumber}?text=${encodeURIComponent(msg)}`;
const rupiah = n => "Rp " + n.toLocaleString("id-ID");
const findPackage = slug => PACKAGES.find(p => p.slug === slug);
const NAV = [["home","./","Beranda"],["paket","paket","Paket Wisata"],["layanan","layanan","Layanan"],["dokumentasi","dokumentasi","Dokumentasi"],["kontak","kontak","Kontak"]];

function packageCard(p){
  const msg = `Halo Viandra Tour, saya tertarik paket ${p.name} (${p.days} hari ${p.nights} malam). Boleh minta jadwal dan harga terbaru?`;
  const detail = `detail?p=${p.slug}`;
  const price = p.price ? `<small>Mulai dari</small><strong>${rupiah(p.price)}</strong>/orang` : `<small>Harga</small><strong>Hubungi kami</strong>`;
  const bg = p.image ? `linear-gradient(180deg,rgba(0,0,0,0) 45%,rgba(0,0,0,.45)),url('${p.image}') center/cover no-repeat` : `linear-gradient(135deg,${p.color})`;
  const flags = (p.flags || []).map(c => `<img src="https://flagcdn.com/w80/${c}.png" alt="" width="44" height="30" loading="lazy">`).join("");
  return `
    <article class="card">
      <a href="${detail}" aria-label="Lihat detail ${p.name}" style="display:block;text-decoration:none">
        <div class="card-top${p.image ? " has-img" : ""}" style="background:${bg}"><span class="flag" aria-hidden="true">${flags}</span>${p.tag ? `<span class="tag">${p.tag}</span>` : ""}</div>
      </a>
      <div class="card-body">
        <h3><a href="${detail}" style="color:inherit;text-decoration:none">${p.name}</a></h3>
        <div class="meta"><span>${p.days} hari ${p.nights} malam</span><span>${p.type === "Thailand" ? "1 Negara" : p.type}</span></div>
        <ul>${p.items.map(i => `<li>${i}</li>`).join("")}</ul>
        <div class="price">${price}</div>
        <a class="btn btn-outline" href="${detail}" style="margin-bottom:10px">Lihat detail paket</a>
        <a class="btn btn-wa" href="${wa(msg)}" target="_blank" rel="noopener">Pesan lewat WhatsApp</a>
      </div>
    </article>`;
}

function renderHeader(active){
  const links = NAV.map(([k,href,label]) => `<li><a href="${href}"${k===active ? ' class="active" aria-current="page"' : ""}>${label}</a></li>`).join("");
  return `
  <header>
    <div class="wrap nav">
      <a href="./" class="brand" aria-label="${SITE.name}"><img src="logo.png" alt="Logo Viandra Tour" height="46"><div>Viandra Tour<small>TRAVEL · EXPLORE</small></div></a>
      <nav id="menu" aria-label="Menu utama"><ul>${links}</ul></nav>
      <a class="btn btn-wa nav-cta" data-wa="Halo Viandra Tour, saya ingin konsultasi paket wisata." href="#">Chat WhatsApp</a>
      <button class="menu-toggle" id="menuToggle" aria-label="Buka menu" aria-expanded="false" aria-controls="menu">☰</button>
    </div>
  </header>`;
}

function renderFooter(){
  return `
  <style>
    .foot-offices{margin-top:32px;padding-top:24px;border-top:1px solid rgba(255,255,255,.15)}
    .office-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    .office{display:grid;gap:4px;align-content:start;line-height:1.5}
    .office strong{color:#fff}
    @media (max-width:960px){.office-grid{grid-template-columns:1fr}}
  </style>
  <footer>
    <div class="wrap">
      <div class="foot-grid">
        <div>
          <div class="foot-brand"><img src="logo.png" alt="" height="52">${SITE.name}</div>
          <p>Paket wisata, tiket pesawat, dan land arrangement untuk perjalanan yang nyaman. Travel · Explore · Experience.</p>
        </div>
        <div><h3>Menu</h3><ul>${NAV.slice(1).map(([k,href,label]) => `<li><a href="${href}">${label}</a></li>`).join("")}</ul></div>
        <div>
          <h3>Kontak</h3>
          <ul>
            <li>WhatsApp: <a data-wa="Halo Viandra Tour" href="#">${SITE.waDisplay}</a></li>
            <li>Email: <a href="mailto:${SITE.email}">${SITE.email}</a></li>
            ${SITE.instagram ? `<li>Instagram: <a href="https://instagram.com/${SITE.instagram}" target="_blank" rel="noopener">@${SITE.instagram}</a></li>` : ""}
            <li>Jam layanan: ${SITE.hours}</li>
          </ul>
        </div>
      </div>
      ${SITE.offices.length ? `<div class="foot-offices"><h3>Kantor Kami</h3><div class="office-grid">${SITE.offices.map(o => `<div class="office"><strong>${o.name}</strong><span>${o.address}</span></div>`).join("")}</div></div>` : ""}
      <p class="copy">© ${new Date().getFullYear()} ${SITE.name}. Semua hak dilindungi.</p>
    </div>
  </footer>
  <a class="wa-float" data-wa="Halo Viandra Tour, saya ingin bertanya tentang paket wisata." href="#" aria-label="Chat WhatsApp">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6A12 12 0 0 0 12 24c6.6 0 12-5.4 12-12 0-3.2-1.2-6.2-3.5-8.5zM12 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.9 9.9 0 0 1 2.1 12C2.1 6.5 6.5 2.1 12 2.1S21.9 6.5 21.9 12 17.5 21.9 12 21.9zm5.4-7.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.8-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.3 5.2 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/></svg>
    <span>Chat WhatsApp</span>
  </a>`;
}

/* Link tanpa ".html" (butuh hosting yang mendukung, mis. Netlify/Vercel/GitHub Pages) */
const cleanHref = h => {
  const m = (h || "").match(/^(?:\.\/)?([\w-]+)\.html(\?[^#]*)?(#.*)?$/);
  if (!m) return h;
  return (m[1] === "index" ? "./" : m[1]) + (m[2] || "") + (m[3] || "");
};
window.addEventListener("load", () => {
  document.querySelectorAll("a[href]").forEach(a => { const h = a.getAttribute("href"), c = cleanHref(h); if (c !== h) a.setAttribute("href", c); });
  document.querySelectorAll("form[action]").forEach(f => { const h = f.getAttribute("action"), c = cleanHref(h); if (c !== h) f.setAttribute("action", c); });
  if (/^https?:/.test(location.protocol) && /\.html$/.test(location.pathname)) {
    history.replaceState(null, "", location.pathname.replace(/index\.html$/, "").replace(/\.html$/, "") + location.search + location.hash);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const active = document.body.dataset.page;
  const h = document.getElementById("site-header"), f = document.getElementById("site-footer");
  if (h) h.outerHTML = renderHeader(active);
  if (f) f.outerHTML = renderFooter();
  document.querySelectorAll("[data-wa]").forEach(a => { a.href = wa(a.dataset.wa); a.target = "_blank"; a.rel = "noopener"; });
  document.querySelectorAll('a[href="kenapa-kami.html"], a[href="cara-pesan.html"]').forEach(a => { a.href = "dokumentasi"; a.textContent = "Lihat dokumentasi perjalanan"; });
  const toggle = document.getElementById("menuToggle"), menu = document.getElementById("menu");
  if (toggle && menu) toggle.addEventListener("click", () => { const o = menu.classList.toggle("open"); toggle.setAttribute("aria-expanded", o); });
});
