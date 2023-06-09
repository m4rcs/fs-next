import { faCopyright } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <footer className="bg-gray-50 shadow">
      <div className="mx-auto max-w-7xl px-4 py-6 text-right text-sm text-lime-900 sm:px-6 lg:px-8">
        <FontAwesomeIcon icon={faCopyright} /> {new Date().getFullYear()} Fahrrad-Strutt GbR
      </div>
    </footer>
  );
}
