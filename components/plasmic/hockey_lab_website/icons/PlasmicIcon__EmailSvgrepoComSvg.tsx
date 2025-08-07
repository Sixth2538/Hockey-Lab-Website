/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type EmailSvgrepoComSvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function EmailSvgrepoComSvgIcon(props: EmailSvgrepoComSvgIconProps) {
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
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeLinejoin={"round"}
        strokeWidth={"2"}
        d={"m4 7 6.2 4.65a3 3 0 0 0 3.6 0L20 7"}
      ></path>

      <rect
        width={"18"}
        height={"14"}
        x={"3"}
        y={"5"}
        stroke={"currentColor"}
        strokeLinecap={"round"}
        strokeWidth={"2"}
        rx={"2"}
      ></rect>
    </svg>
  );
}

export default EmailSvgrepoComSvgIcon;
/* prettier-ignore-end */
