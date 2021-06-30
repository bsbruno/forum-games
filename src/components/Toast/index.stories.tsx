import React from "react";

import { Meta } from "@storybook/react";

import Toast, { ToastProps } from "./index";

export default {
  title: "Toast",
  component: Toast,
} as Meta;

export const Default: React.VFC<ToastProps> = (args) => <Toast {...args} />;
