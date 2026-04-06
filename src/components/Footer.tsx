export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="container-wide flex h-16 items-center justify-between text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} 안효준. All rights reserved.</p>
      </div>
    </footer>
  );
}
