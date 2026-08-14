const parts = [
  "index-DU5-dvDU.js.part00",
  "index-DU5-dvDU.js.part01",
  "index-DU5-dvDU.js.part02",
  "index-DU5-dvDU.js.part03",
];

const sources = await Promise.all(parts.map(async (part) => {
  const response = await fetch(new URL(part, import.meta.url));
  if (!response.ok) throw new Error(`静态报告脚本加载失败：${part}（HTTP ${response.status}）`);
  return response.text();
}));

const moduleUrl = URL.createObjectURL(new Blob(sources, { type: "text/javascript" }));
try {
  await import(moduleUrl);
} finally {
  URL.revokeObjectURL(moduleUrl);
}
