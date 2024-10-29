"use client";
import "@code-hike/mdx/dist/index.css";
import { LayoutDocs } from "@/packages/apps/docs/layouts/LayoutDocs";
import React from "react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <LayoutDocs>{children}</LayoutDocs>;
}
