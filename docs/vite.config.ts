import type { Plugin } from "vite";
import { defineConfig } from "vite";

const NavLinkPatch = (): Plugin => ({
  name: "override-target-blank",
  enforce: "pre",
  transform: (code, id) => {
    if (id.endsWith("VPLink.vue")) {
      return code.replace(/^const isExternal.*$/m, "const isExternal = false");
    }
  },
});

const NavLinkTitle = (): Plugin => ({
  name: "force-default-url",
  enforce: "pre",
  transform: (code, id) => {
    if (id.endsWith("VPNavBarTitle.vue")) {
      return code.replace(':href="normalizeLink(currentLang.link)"', "href='https://www.wipodev.com'");
    }
  },
});

export default defineConfig({
  plugins: [NavLinkPatch(), NavLinkTitle()],
});
