import '../globals.css';
import Navbar from '../components/Navbar';

export default function WebsiteLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col bg-gray-50">
          <Navbar />
          <main className="flex-1 flex flex-col items-center justify-center p-8">
            {children}
          </main>
          <footer className="w-full py-4 text-center text-gray-500 text-sm border-t mt-8">
            &copy; {new Date().getFullYear()} RandoStore. All rights reserved.
          </footer>
        </div>
      </body>
    </html>
  );
}
