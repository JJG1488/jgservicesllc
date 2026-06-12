/* JG Services LLC — admin dashboard logic */
(function () {
  function svg(p, s) { return '<svg width="' + (s || 18) + '" height="' + (s || 18) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' + p + "</svg>"; }
  var I = {
    dash: '<rect x="3" y="3" width="7" height="9" rx="1.5"/><rect x="14" y="3" width="7" height="5" rx="1.5"/><rect x="14" y="12" width="7" height="9" rx="1.5"/><rect x="3" y="16" width="7" height="5" rx="1.5"/>',
    inq: '<path d="M4 4h16v12H8l-4 4z"/>',
    proj: '<path d="M3 7h6l2 2h10v9a2 2 0 0 1-2 2H3z"/>',
    set: '<circle cx="12" cy="12" r="3.2"/><path d="M19.4 13a7.6 7.6 0 0 0 0-2l2-1.5-2-3.4-2.3 1a7 7 0 0 0-1.7-1l-.3-2.6h-4l-.3 2.6a7 7 0 0 0-1.7 1l-2.3-1-2 3.4 2 1.5a7.6 7.6 0 0 0 0 2l-2 1.5 2 3.4 2.3-1a7 7 0 0 0 1.7 1l.3 2.6h4l.3-2.6a7 7 0 0 0 1.7-1l2.3 1 2-3.4z"/>',
    back: '<path d="M15 6l-6 6 6 6"/>',
    dollar: '<path d="M12 2v20"/><path d="M17 6.5C17 4.6 14.8 3.5 12 3.5S7 4.8 7 6.8 9 9.8 12 10.3s5 1.4 5 3.4-2.2 3.3-5 3.3-5-1.1-5-3"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7z"/>',
    check: '<path d="m4 12 5 5L20 6"/>',
    arrow: '<path d="M5 12h14"/><path d="m13 6 6 6-6 6"/>'
  };

  document.getElementById("admin-brand").innerHTML = window.JGSite.brandSvg + '<span class="brand-word grad-text">JG Admin</span>';
  var navLabels = { dash: "Dashboard", inq: "Inquiries", proj: "Projects", set: "Settings" };
  [].forEach.call(document.querySelectorAll(".admin-nav[data-v]"), function (n) {
    var v = n.getAttribute("data-v");
    n.innerHTML = svg(I[v], 18) + "<span>" + navLabels[v] + "</span>";
  });
  document.getElementById("back-link").innerHTML = svg(I.back, 18) + "<span>Back to site</span>";

  var inquiries = [
    { name: "Maria Chen", type: "Web app", budget: "$15k-25k", date: "Jun 2", status: "new" },
    { name: "Devon Ruiz", type: "E-commerce", budget: "$8k-15k", date: "Jun 1", status: "new" },
    { name: "A&M Construction", type: "Website", budget: "$3k-8k", date: "May 29", status: "won" },
    { name: "Priya Nair", type: "SEO", budget: "$1.5k+", date: "May 27", status: "warn" },
    { name: "Greencare Pros", type: "Web app", budget: "$15k+", date: "May 24", status: "won" },
    { name: "Tom Becker", type: "Maintenance", budget: "$300/mo", date: "May 22", status: "muted" }
  ];
  var statusLabel = { new: "New", won: "Won", warn: "Following up", muted: "Archived" };
  var projects = window.SITE.projects;
  var projStatus = ["Live", "Live", "Live", "Live", "In progress", "Live"];

  function kpi(ic, num, lbl, delta, dec, suf, pre) {
    return '<div class="surface kpi reveal"><div class="kpi-top"><div class="kpi-ic">' + svg(ic, 20) + "</div>" + (delta ? '<span class="delta up">' + delta + "</span>" : "") + "</div>" +
      '<div class="num" data-count="' + num + '"' + (dec ? ' data-decimals="' + dec + '"' : "") + (suf ? ' data-suffix="' + suf + '"' : "") + (pre ? ' data-prefix="' + pre + '"' : "") + ">0</div>" +
      '<div class="lbl">' + lbl + "</div></div>";
  }
  function inqRows(list) {
    return list.map(function (q) {
      return "<tr><td style='color:var(--ink-100);font-weight:600'>" + q.name + "</td><td>" + q.type + "</td><td class='mono'>" + q.budget + "</td><td class='mono' style='color:var(--ink-400)'>" + q.date + "</td><td><span class='badge " + q.status + "'>" + statusLabel[q.status] + "</span></td></tr>";
    }).join("");
  }
  function pipe(label, val, max) {
    return '<div style="margin-bottom:1rem"><div style="display:flex;justify-content:space-between;font-size:.84rem;margin-bottom:.4rem"><span style="color:var(--ink-300)">' + label + '</span><span class="mono" style="color:var(--ink-100)">' + val + "</span></div>" +
      '<div class="wiz-prog"><div class="bar" style="width:' + (val / max * 100) + '%"></div></div></div>';
  }

  var bars = [12, 9, 15, 11, 18, 14];
  var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

  var views = {
    dash: function () {
      return '<div class="kpi-grid">' +
        kpi(I.inq, 14, "Inquiries this month", "+22%") +
        kpi(I.proj, 5, "Active projects", "+1") +
        kpi(I.dollar, 23.8, "Revenue MTD (k)", "+18%", 1, "k", "$") +
        kpi(I.bolt, 8, "Avg response (hrs)", "") +
        "</div>" +
        '<div style="display:grid;grid-template-columns:1.4fr 1fr;gap:1.2rem;align-items:start" class="dash-cols">' +
        '<div class="surface reveal" style="padding:1.6rem"><h3 style="margin:0 0 .2rem;color:var(--ink-100);font-size:1.05rem;font-weight:600">Inquiries by month</h3><div class="chart">' +
        bars.map(function (b, i) { return '<div class="col"><div class="bar" style="height:' + (b / 18 * 100) + '%"></div><div class="cl">' + months[i] + "</div></div>"; }).join("") +
        "</div></div>" +
        '<div class="surface reveal" style="padding:1.6rem"><h3 style="margin:0 0 1rem;color:var(--ink-100);font-size:1.05rem;font-weight:600">Pipeline</h3>' +
        pipe("Qualified leads", 9, 12) + pipe("Proposals out", 4, 12) + pipe("Won this quarter", 6, 12) +
        "</div></div>" +
        '<div class="surface reveal" style="padding:1.6rem;margin-top:1.2rem"><div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:.6rem"><h3 style="margin:0;color:var(--ink-100);font-size:1.05rem;font-weight:600">Recent inquiries</h3><span class="pill" data-jump="inq">View all</span></div>' +
        '<table class="table"><thead><tr><th>Name</th><th>Type</th><th>Budget</th><th>Date</th><th>Status</th></tr></thead><tbody>' + inqRows(inquiries.slice(0, 5)) + "</tbody></table></div>";
    },
    inq: function () {
      return '<div class="pills reveal" id="inq-filter" style="margin-bottom:1.4rem"><button class="pill active" data-s="all">All</button><button class="pill" data-s="new">New</button><button class="pill" data-s="won">Won</button><button class="pill" data-s="warn">Following up</button></div>' +
        '<div class="surface reveal" style="padding:1.2rem 1.4rem"><table class="table" id="inq-table"><thead><tr><th>Name</th><th>Type</th><th>Budget</th><th>Date</th><th>Status</th></tr></thead><tbody>' + inqRows(inquiries) + "</tbody></table></div>";
    },
    proj: function () {
      return '<div class="proj-grid reveal">' + projects.map(function (p, i) {
        var shot = p.image ? '<div class="proj-shot"><img src="' + p.image + '" alt="' + p.title + '"/></div>' : '<div class="proj-shot ph"><span class="mono">' + p.title + "</span></div>";
        var live = projStatus[i] === "Live";
        return '<article class="surface proj-card">' + shot +
          '<span class="badge ' + (live ? "won" : "warn") + ' proj-cat">' + projStatus[i] + "</span>" +
          '<div class="proj-body"><h3>' + p.title + "</h3><p>" + p.category + "</p>" +
          '<div class="proj-tags">' + p.tags.map(function (t) { return '<span class="chip">' + t + "</span>"; }).join("") + "</div>" +
          '<div class="proj-actions"><a class="btn btn-ghost" href="' + p.liveUrl + '" target="_blank" rel="noopener noreferrer">Visit</a><button class="btn btn-ghost">Edit</button></div></div></article>';
      }).join("") + "</div>";
    },
    set: function () {
      var names = ["Sapphire / Amethyst", "Indigo / Cyan", "Violet / Magenta", "Emerald / Sapphire"];
      var accentA = ["#2563eb", "#4f46e5", "#7c3aed", "#059669"];
      var accentB = ["#9333ea", "#06b6d4", "#db2777", "#2563eb"];
      return '<div class="surface reveal" style="padding:2rem;max-width:680px">' +
        '<div class="tabs"><div class="tab active">Profile</div><div class="tab">Appearance</div></div>' +
        '<div class="form-grid"><div class="field"><label>Business name</label><input class="input" value="JG Services LLC"/></div><div class="field"><label>Owner</label><input class="input" value="James Gault"/></div></div>' +
        '<div class="form-grid"><div class="field"><label>Email</label><input class="input" value="info@jgservicesllc.com"/></div><div class="field"><label>Phone</label><input class="input" value="(586) 276-5646"/></div></div>' +
        '<div class="field"><label>Theme</label><div class="pills" id="theme-pick">' +
        names.map(function (t, i) { return '<button class="pill' + (i === 0 ? " active" : "") + '" data-a="' + accentA[i] + '" data-b="' + accentB[i] + '">' + t + "</button>"; }).join("") + "</div></div>" +
        '<div class="field"><label>Display font</label><div class="pills" id="font-pick"><button class="pill active" data-f="Playfair Display">Playfair</button><button class="pill" data-f="Sora">Sora</button></div></div>' +
        '<button class="btn btn-primary" id="save" style="margin-top:.6rem">Save changes</button></div>';
    }
  };

  var titles = { dash: ["Dashboard", "Welcome back, James"], inq: ["Inquiries", "Project inquiries"], proj: ["Projects", "Your portfolio"], set: ["Settings", "Account & appearance"] };

  function toast(msg) {
    var t = document.getElementById("toast");
    document.getElementById("toast-inner").innerHTML = '<span style="color:var(--emerald-400)">' + svg(I.check, 16) + "</span><span>" + msg + "</span>";
    t.style.transform = "translateX(-50%) translateY(0)"; t.style.opacity = "1";
    setTimeout(function () { t.style.transform = "translateX(-50%) translateY(40px)"; t.style.opacity = "0"; }, 2200);
  }

  function show(v) {
    document.getElementById("crumb").textContent = titles[v][0];
    document.getElementById("view-title").textContent = titles[v][1];
    document.getElementById("view").innerHTML = views[v]();
    [].forEach.call(document.querySelectorAll(".admin-nav[data-v]"), function (n) { n.classList.toggle("active", n.getAttribute("data-v") === v); });
    window.JGSite.reveals();
    window.JGSite.countUps();
    bindView(v);
  }

  function bindView(v) {
    if (v === "dash") {
      var jump = document.querySelector("[data-jump]");
      if (jump) jump.onclick = function () { show("inq"); };
    }
    if (v === "inq") {
      var f = document.getElementById("inq-filter");
      f.addEventListener("click", function (e) {
        var b = e.target.closest(".pill"); if (!b) return;
        [].forEach.call(f.children, function (c) { c.classList.remove("active"); }); b.classList.add("active");
        var s = b.getAttribute("data-s");
        var list = s === "all" ? inquiries : inquiries.filter(function (q) { return q.status === s; });
        document.querySelector("#inq-table tbody").innerHTML = inqRows(list);
      });
    }
    if (v === "set") {
      var tp = document.getElementById("theme-pick");
      tp.addEventListener("click", function (e) { var b = e.target.closest(".pill"); if (!b) return; [].forEach.call(tp.children, function (c) { c.classList.remove("active"); }); b.classList.add("active"); document.documentElement.style.setProperty("--accent-a", b.getAttribute("data-a")); document.documentElement.style.setProperty("--accent-b", b.getAttribute("data-b")); });
      var fp = document.getElementById("font-pick");
      fp.addEventListener("click", function (e) { var b = e.target.closest(".pill"); if (!b) return; [].forEach.call(fp.children, function (c) { c.classList.remove("active"); }); b.classList.add("active"); document.documentElement.style.setProperty("--font-display", '"' + b.getAttribute("data-f") + '", Georgia, serif'); });
      document.getElementById("save").onclick = function () { toast("Settings saved"); };
    }
  }

  document.querySelector(".admin-side").addEventListener("click", function (e) {
    var n = e.target.closest(".admin-nav[data-v]"); if (!n) return;
    show(n.getAttribute("data-v"));
  });

  show("dash");
})();
