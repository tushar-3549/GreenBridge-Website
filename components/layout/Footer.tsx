import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container-custom">
        <div className="flex items-center gap-3">
          <div className="bg-white p-1 rounded-lg inline-flex items-center justify-center">
            <Image
              src="/green-bridge.jpg"
              alt="GreenBridge Logo"
              width={42}
              height={24}
              className="h-6 w-auto object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold">GreenBridge</h3>
        </div>

        <p className="mt-4 text-slate-300 max-w-xl">
          Building sustainable infrastructure, renewable energy solutions and
          strategic partnerships for Bangladesh.
        </p>
      </div>
    </footer>
  );
}
