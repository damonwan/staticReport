const parts = [
  "./index-C_T4KZqx.js.part00",
  "./index-C_T4KZqx.js.part01",
  "./index-C_T4KZqx.js.part02",
  "./index-C_T4KZqx.js.part03",
  "./index-C_T4KZqx.js.part04",
];

const source = await Promise.all(parts.map(async (part) => {
  const response = await fetch(new URL(part, import.meta.url));
  if (!response.ok) throw new Error(`报告资源加载失败：${part}（HTTP ${response.status}）`);
  return response.text();
}));

const moduleUrl = URL.createObjectURL(new Blob(source, { type: "text/javascript" }));
try {
  await import(moduleUrl);
} finally {
  URL.revokeObjectURL(moduleUrl);
}
