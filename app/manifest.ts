import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Ritesh Kushwaha - Software Engineer",
    short_name: "Ritesh Kushwaha",
    description: "Full-stack and machine-learning developer portfolio.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b1120",
    theme_color: "#0b1120",
    icons: [{ src: "/assets/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
