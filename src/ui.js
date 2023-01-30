"use strict";

const React = require("react");
const { Box, Text } = require("ink");
const SelectInput = require("ink-select-input").default;
const opn = require("open");

const open = (url) => opn(url, { wait: false });

const handleSelect = (item) => {
  if (item.url) {
    open(item.url);
  }

  if (item.action) {
    item.action();
  }
};

const createItems = (items) => {
  for (const item of items) {
    item.key = item.url || item.label;
  }

  return items;
};

const items = createItems([
  {
    label: "Website",
    url: "https://three-homepage.vercel.app/",
  },
  {
    label: "Twitter",
    url: "https://twitter.com/pandashark6",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/pandashark_",
  },
  {
    label: "GitHub",
    url: "https://github.com/x7ddf74479jn5",
  },
  {
    label: "Portfolio",
    url: "https://pandashark-portfolio.netlify.app",
  },
  {
    label: "---------",
  },
  {
    label: "Quit",
    action() {
      process.exit();
    },
  },
]);

module.exports = () => {
  return (
    <Box flexDirection="column">
      <Box marginBottom={1}>
        <Text>I’m a Web FrontEnd developer.</Text>
      </Box>
      <SelectInput items={items} onSelect={handleSelect} />
    </Box>
  );
};
