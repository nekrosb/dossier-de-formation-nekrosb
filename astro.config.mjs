// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://nekrosb.github.io/", // TODO: Change to your github url
  base: "dossier-de-formation-nekrosb", // TODO: Change to your repo name
  integrations: [
    starlight({
      title: "Progress  report",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/nekrosb/dossier-de-formation-nekrosb", // TODO: Change to your repo url
        }, // TODO: Change to your repo url
      ],
      editLink: {
        baseUrl:
          "https://github.com/nekrosb/dossier-de-formation-nekrosb/edit/main/docs/", // TODO: before /edit, change to your repo url
      },
      customCss: [
        // Relative path to your custom CSS file
        "./src/styles/theme.css",
      ],
      sidebar: [
        {
          label: "Introduction",
          link: "/introduction",
        },
        {
          label: "Projects",
          autogenerate: { directory: "projects" },
        },
        {
          label: "Technologies",
          autogenerate: { directory: "technologies" },
        },
        {
          label: "Tools",
          autogenerate: { directory: "tools" },
        },
      ],
    }),
  ],
});
