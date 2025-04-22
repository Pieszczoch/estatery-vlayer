import Button from "@/components/ui/Button";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center p-8 space-y-8">
      <h1 className="text-4xl font-bold text-secondary-300">
        404 - Is nothing here
      </h1>
      <Button asChild>
        <Link href="/">Back to home page</Link>
      </Button>
    </div>
  );
}
