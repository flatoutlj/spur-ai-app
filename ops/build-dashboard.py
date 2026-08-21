#!/usr/bin/env python3
"""
Renders ops-status.json into a self-contained ops-dashboard.html the owner can
open directly (data is embedded, so no server / CORS needed).

Run:  python3 ops/build-dashboard.py
Or refresh everything: bash ops/refresh.sh
"""
import json, os
from datetime import datetime, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
STATUS = os.path.join(ROOT, "ops-status.json")
OUT = os.path.join(ROOT, "ops-dashboard.html")

d = json.load(open(STATUS))
data_json = json.dumps(d)
built = datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC")

HTML = """<!doctype html>
<html lang="en"><head>
<meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Spur AI — Ops Dashboard</title>
<style>
  :root{--bg:#0b0f17;--card:#131a26;--line:#243044;--txt:#e6edf6;--mut:#8aa0bd;--acc:#5b8cff;--good:#37d399;--warn:#ffb020;--bad:#ff5d5d}
  *{box-sizing:border-box}body{margin:0;font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;background:var(--bg);color:var(--txt)}
  .wrap{max-width:1040px;margin:0 auto;padding:28px 20px 80px}
  header{display:flex;justify-content:space-between;align-items:flex-start;gap:16px;flex-wrap:wrap;margin-bottom:8px}
  h1{font-size:22px;margin:0}h1 .dot{color:var(--good)}
  .sub{color:var(--mut);font-size:13px;margin-top:4px;max-width:640px}
  .built{color:var(--mut);font-size:12px;text-align:right}
  .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:12px;margin:22px 0}
  .kpi{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:16px}
  .kpi .n{font-size:30px;font-weight:700}.kpi .l{color:var(--mut);font-size:12px;text-transform:uppercase;letter-spacing:.04em;margin-top:2px}
  section{background:var(--card);border:1px solid var(--line);border-radius:14px;padding:18px 20px;margin:14px 0}
  h2{font-size:14px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut);margin:0 0 12px}
  ul{margin:0;padding:0;list-style:none}li{padding:8px 0;border-bottom:1px solid var(--line);display:flex;gap:10px;align-items:flex-start}
  li:last-child{border-bottom:0}
  .tick{color:var(--good)}.spin{color:var(--warn)}.dotm{color:var(--mut)}
  .owner li{flex-direction:column;border:1px solid var(--line);border-radius:10px;padding:12px;margin-bottom:10px;background:#0f1622}
  .owner .row{display:flex;gap:8px;align-items:center;width:100%}
  .pill{font-size:11px;font-weight:700;padding:2px 8px;border-radius:999px}
  .p0{background:rgba(255,93,93,.15);color:var(--bad)}.p1{background:rgba(255,176,32,.15);color:var(--warn)}.p2{background:rgba(91,140,255,.15);color:var(--acc)}
  .owner .t{font-weight:600}.owner .why{color:var(--mut);font-size:13px;margin-top:2px}
  .owner code{display:inline-block;background:#0a0e15;border:1px solid var(--line);border-radius:6px;padding:3px 8px;font-size:12px;color:#cfe0ff;margin-top:6px;word-break:break-all}
  .owner .where{color:var(--mut);font-size:12px;margin-top:6px}
  .empty{color:var(--mut);font-size:13px}
  .banner{background:linear-gradient(90deg,rgba(91,140,255,.14),rgba(55,211,153,.10));border:1px solid var(--line);border-radius:14px;padding:14px 18px;margin-bottom:6px}
  .ns{color:var(--acc);font-weight:600}
  footer{color:var(--mut);font-size:12px;margin-top:24px;text-align:center}
  a{color:var(--acc)}
</style></head><body><div class="wrap">
  <header>
    <div>
      <h1><span class="dot">●</span> Spur AI — Ops Dashboard</h1>
      <div class="sub" id="headline"></div>
    </div>
    <div class="built">built __BUILT__<br><span id="mupd"></span></div>
  </header>

  <div class="banner">🎯 <span class="ns">North Star:</span> <span id="northstar"></span></div>

  <div class="grid" id="kpis"></div>

  <section><h2>🔴 Needs you (money / accounts only)</h2><ul class="owner" id="needs"></ul></section>
  <section><h2>💸 Spend requests</h2><ul class="owner" id="spend"></ul></section>

  <section><h2>⏳ In progress</h2><ul id="inprog"></ul></section>
  <section><h2>✅ Done this session</h2><ul id="done"></ul></section>
  <section><h2>➡️ Next up</h2><ul id="next"></ul></section>

  <footer id="notes"></footer>
  <footer>Refresh with <code>bash ops/refresh.sh</code> from the app folder.</footer>
</div>
<script>
const D = __DATA__;
const $ = id => document.getElementById(id);
$("headline").textContent = D.headline || "";
$("northstar").textContent = D.north_star || "";
$("mupd").textContent = D.metrics_updated_at ? ("metrics: " + new Date(D.metrics_updated_at).toLocaleString()) : "";
const M = D.metrics || {};
const kpiDefs = [["email_captures","Emails captured"],["signups","Signups"],["posts_generated","Posts generated"]];
$("kpis").innerHTML = kpiDefs.map(([k,l]) => `<div class="kpi"><div class="n">${M[k]??"—"}</div><div class="l">${l}</div></div>`).join("");
const li = (cls,txt) => `<li><span class="${cls}">${cls==='tick'?'✓':cls==='spin'?'◐':'•'}</span><span>${txt}</span></li>`;
$("inprog").innerHTML = (D.in_progress||[]).map(t=>li('spin',t)).join("") || '<li class="empty">—</li>';
$("done").innerHTML = (D.done||[]).map(t=>li('tick',t)).join("") || '<li class="empty">—</li>';
$("next").innerHTML = (D.next_up||[]).map(t=>li('dotm',t)).join("") || '<li class="empty">—</li>';
function ownerItem(o){
  const p = (o.priority||"").toLowerCase();
  const cls = p==='p0'?'p0':p==='p1'?'p1':'p2';
  return `<li><div class="row"><span class="pill ${cls}">${o.priority||o.kind||'TODO'}</span><span class="t">${o.title}</span></div>`+
    (o.why?`<div class="why">${o.why}</div>`:"")+
    (o.value?`<code>${o.value}</code>`:"")+
    (o.where?`<div class="where">↳ ${o.where}${o.eta?` · ~${o.eta}`:""}</div>`:"")+`</li>`;
}
$("needs").innerHTML = (D.needs_owner||[]).map(ownerItem).join("") || '<li class="empty">Nothing needs you right now. 🎉</li>';
$("spend").innerHTML = (D.spend_requests||[]).map(ownerItem).join("") || '<li class="empty">No spending requests pending.</li>';
$("notes").textContent = D.notes || "";
</script></body></html>"""

html = HTML.replace("__DATA__", data_json).replace("__BUILT__", built)
open(OUT, "w").write(html)
print("wrote", OUT)
