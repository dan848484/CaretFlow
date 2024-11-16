import { defineManifest } from "@crxjs/vite-plugin";
import { version } from "./package.json";

export const manifest = defineManifest({
  manifest_version: 3,
  name: "CaretFlow Extension",
  description: "CaretFlow Extension.",
  version,
  action: { default_popup: "index.html" },
});
