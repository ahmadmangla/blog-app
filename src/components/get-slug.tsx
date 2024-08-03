"use client";
import { useParams } from "next/navigation";
import React from "react";

const GetSlug = () => {
  const { slug } = useParams();
  return slug;
};

export default GetSlug;
