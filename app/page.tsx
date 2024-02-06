import FormBlog from "@/components/FormBlog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <div className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
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
  );
}
