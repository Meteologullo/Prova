export default {
  async fetch(request) {
    /* === parametri Ecowitt (inseriti) === */
    const authorize = "XWQV1Q";
    const device_id = "RGYzUmVEdXVsWlJBcmJoY2Vrdz09";
    /* ==================================== */

    const ym = new Date().toISOString().slice(0,7).replace("-",""); // es. 202506
    const body = new URLSearchParams({
      authorize, device_id, date: ym, page: 1, limit: 31
    });

    const api = "https://www.ecowitt.net/index/get_image_list_new0312";

    const r = await fetch(api, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "Origin": "https://www.ecowitt.net",
        "Referer": "https://www.ecowitt.net/"
      },
      body
    });

    let img = "";
    try {
      const j = await r.json();
      if (j.errcode === "0") {
        const days = Object.keys(j.data).sort().reverse();
        for (const d of days) {
          if (j.data[d].picture_url) { img = j.data[d].picture_url; break; }
        }
      }
    } catch (_) {}

    if (!img) return new Response("Nessuna foto disponibile", { status: 404 });
    return Response.redirect(img + "?ts=" + Date.now(), 302);
  }
}
