import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          "50": { value: "#f5f5f5" },
          "100": { value: "#eeeeee" },
          "200": { value: "#e0e0e0" },
          "300": { value: "#bdbdbd" },
          "400": { value: "#9e9e9e" },
          "500": { value: "#757575" },
          "600": { value: "#616161" },
          "700": { value: "#424242" },
          "800": { value: "#212121" },
          "900": { value: "#111111" },
        },
      },
    },
  },
});
export const system = createSystem(defaultConfig, config);
