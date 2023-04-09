import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Offers() {
  return (
    <div className="flex h-full flex-col">
      <Header name="Angebote" />
      <main className="grow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{/* Your content */}</div>
      </main>
      <Footer />
    </div>
  );
}
