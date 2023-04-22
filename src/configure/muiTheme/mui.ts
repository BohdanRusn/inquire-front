declare module "@mui/styles" {
  interface DefaultTheme {
    breakpoints: {
      down: (n: number | string) => any;
      up: (n: number | string) => any;
    };
  }
}

export {};
