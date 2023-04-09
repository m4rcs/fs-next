import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Directions() {
  return (
    <div className="flex h-full flex-col">
      <Header name="Anfahrt" />
      <main className="grow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <p className="h-full px-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.900191123065!2d9.018519316062092!3d50.144298979434396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd3d41b2bce007%3A0x330a077ad3727603!2sFahrrad+Strutt!5e0!3m2!1sde!2sde!4v1541624468838"
              allowFullScreen
              className="w-full"
            />
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
