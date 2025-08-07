/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type FacebookSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function FacebookSvgrepoComSvgIcon(
  props: FacebookSvgrepoComSvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        fillRule={"evenodd"}
        d={
          "M20 1a3 3 0 0 1 3 3v16a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3zm0 2a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-5v-7h2.076a1 1 0 0 0 .949-.684l.443-1.329a.75.75 0 0 0-.712-.987H15V9c0-.5.5-1 1-1h2a1 1 0 0 0 1-1v-.686a.71.71 0 0 0-.519-.695C17.171 5.273 16 5.273 16 5.273c-2.5 0-4 1.727-4 3.227V11h-2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h2v7H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z"
        }
        clipRule={"evenodd"}
      ></path>
    </svg>
  );
}

export default FacebookSvgrepoComSvgIcon;
/* prettier-ignore-end */
