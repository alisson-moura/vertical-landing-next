import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Vertical Tecnologia",
        short_name: "Vertical",
        description: "Soluções Tecnológicas para seu Negócio",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#2f80c3",
        icons: [
            {
                src: "/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
