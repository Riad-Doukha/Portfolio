import { ReactElement } from "react";

export type Assets = {
  image: string;
  black: string;
  url: string;
};
export type Details = {
  id: string;
  title: string;
  image: string;
  black: string;
  description: string;
  task: string;
  url: string;
  ready?: boolean;
};

export type Items = {
  icon: ReactElement;
  name: string;
};

export type Layer = {
  icon: ReactElement;
  title: string;
  description: string;
  image: string;
  black: string;
};
