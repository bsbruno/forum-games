import React from "react";

import { Meta } from "@storybook/react";

import CardShowContainer, { CardProps } from "./index";

export default {
  title: "CardShowContainer",
  component: CardShowContainer,
} as Meta;

export const Default: React.VFC<CardProps> = (args) => (
  <div style={{ maxWidth: 650, margin: "0 auto" }}>
    <CardShowContainer {...args} />
  </div>
);
