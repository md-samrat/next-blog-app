import { connectDB } from "@/lib/mongodb";

export default async function Home() {
  await connectDB();
  return (
    <div>

    </div>
  );
}
