import React from "react";

import { Meta } from "@storybook/react";

import CardComments, { CardProps } from "./index";

export default {
  title: "CardComments",
  component: CardComments,
} as Meta;

export const Default: React.VFC<CardProps> = (args) => (
  <div style={{ maxWidth: 650, margin: "0 auto" }}>
    <CardComments {...args} />
  </div>
);
