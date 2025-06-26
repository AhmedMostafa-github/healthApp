module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@hooks": "./src/hooks",
            "@animations": "./src/animations",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
