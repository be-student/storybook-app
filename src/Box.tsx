import styled from "@emotion/styled";
import React, { CSSProperties } from "react";
import {
  background,
  backgroundImage,
  BackgroundImageProps,
  BackgroundProps,
  border,
  BorderProps,
  boxShadow,
  BoxShadowProps,
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
  system,
  typography,
  TypographyProps,
  ShadowProps,
} from "styled-system";
import shouldForwardProp from "@styled-system/should-forward-prop";
import { SerializedStyles, Theme } from "@emotion/react";

type Props = LayoutProps &
  SpaceProps &
  ShadowProps &
  FlexboxProps &
  ColorProps &
  TypographyProps &
  BorderProps &
  BackgroundProps &
  GridProps &
  BoxShadowProps &
  PositionProps &
  BackgroundImageProps & {
    theme?: Theme;
    as?: React.ElementType;
    css?: SerializedStyles;
    children?: React.ReactNode;
    w?: LayoutProps["width"];
    h?: LayoutProps["height"];
    bg?: ColorProps["backgroundColor"];
    bgColor?: ColorProps["backgroundColor"];
    textColor?: ColorProps["color"];
    radius?: CSSProperties["borderRadius"];
    color?: CSSProperties["color"];
    id?: string;
    gap?: GridProps["gridGap"];
    cursor?: React.CSSProperties["cursor"] | string;
    wordBreak?: React.CSSProperties["wordBreak"];
    transform?: React.CSSProperties["transform"];
    filter?: React.CSSProperties["filter"];
    backgroundClip?: React.CSSProperties["backgroundClip"];
    textFillColor?: React.CSSProperties["color"];
    objectFit?: React.CSSProperties["objectFit"];
    boxSizing?: React.CSSProperties["boxSizing"];
    whiteSpace?: React.CSSProperties["whiteSpace"];
    textStroke?: React.CSSProperties["WebkitTextStroke"];
  };

type AnalyticProps = {
  "x-ptm-en"?: string;
  "x-ptm-as"?: string;
  "x-ptm-pos"?: string;
  "x-ptm-cont"?: string;
  "x-ptm-aid"?: string | number;
  "x-ptm-aas"?: string;
  "x-ptm-qid"?: string | number;
  "x-ptm-qas"?: string;
  "x-ptm-st"?: string;
};

export type BoxProps = React.ComponentPropsWithRef<"div"> &
  Props &
  AnalyticProps;

export type TBoxProps = BoxProps;

const Box = styled("div", { shouldForwardProp })<BoxProps>(
  layout,
  space,
  typography,
  color,
  border,
  flexbox,
  position,
  background,
  boxShadow,
  backgroundImage,
  grid,
  system({
    bg: { property: "backgroundColor", scale: "colors" },
    bgColor: { property: "backgroundColor", scale: "colors" },
    w: { property: "width", scale: "space" },
    h: { property: "height", scale: "space" },
    radius: { property: "borderRadius" },
    textDecoration: true,
    boxSizing: true,
    gap: { property: "gap", scale: "space" },
    textColor: { property: "color", scale: "colors" },
    wordBreak: true,
    transform: true,
    filter: { properties: ["filter", "WebkitFilter"] },
    backgroundClip: true,
    textFillColor: true,
    cursor: true,
    objectFit: true,
    backgroundAttachment: true,
    whiteSpace: true,
    textStroke: { properties: ["WebkitTextStroke"] },
  })
);

export default Box;
