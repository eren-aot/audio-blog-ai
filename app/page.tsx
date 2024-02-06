"use client"
import React,{useEffect} from "react";
import DialogBlog from "@/components/DialogBlog";
import FormBlog from "@/components/FormBlog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {

  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
      <div className="relative pt-80 sm:pt-24 ml-auto flex justify-center items-center h-screen">
          <Card>
            <CardHeader>
              <CardTitle>
                Listen to any Website
              </CardTitle>
              <CardDescription>
                Set your OpenAI key then enter a URL or select one of the examples below to get started.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FormBlog />
            </CardContent>
          </Card>
      </div>
    </div>
  );
}
